const plannerDays=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
const baseMeals=["Breakfast","Lunch","Dinner"];
const avoidWords={"no-peanuts":["peanut"],"no-tree-nuts":["almond","cashew","walnut","pecan","pistachio","hazelnut"],"no-eggs":["egg"],"no-soy":["soy","tofu","edamame","miso"],"no-shellfish":["shrimp","prawn","crab","lobster","shellfish"],"no-sesame":["sesame","tahini"]};
function escPlanner(v){return String(v??"").replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]))}

function initFilterDropdowns(){
  const filters=[...document.querySelectorAll(".multi-filter")];
  filters.forEach(filter=>{
    filter.addEventListener("toggle",()=>{
      if(!filter.open)return;
      filters.forEach(other=>{
        if(other!==filter)other.removeAttribute("open");
      });
    });
  });
  document.addEventListener("click",event=>{
    if(!event.target.closest(".multi-filter")){
      filters.forEach(filter=>filter.removeAttribute("open"));
    }
  });
}

function selectedPreferences(){return [...document.querySelectorAll("[data-pref]:checked")].map(x=>x.value)}
function selectedMeals(){const m=[...document.querySelectorAll("[data-meal]:checked")].map(x=>x.value);return m.length?m:baseMeals.map(x=>x.toLowerCase())}
function recipeText(r){return ((r.name||"")+" "+(r.description||"")+" "+(r.ingredients||[]).join(" ")+" "+(r.tags||[]).join(" ")).toLowerCase()}
function violates(r,prefs){const text=recipeText(r),tags=new Set(r.tags||[]);for(const p of prefs){if(p.startsWith("no-")&&avoidWords[p]?.some(w=>text.includes(w)))return true}if(prefs.includes("vegan")&&!tags.has("vegan"))return true;if(prefs.includes("vegetarian")&&!tags.has("vegetarian")&&!tags.has("vegan"))return true;if(prefs.includes("gluten-free")&&!tags.has("gluten-free"))return true;if(prefs.includes("dairy-free")&&!tags.has("dairy-free")&&!tags.has("vegan"))return true;if(prefs.includes("budget")&&!tags.has("budget"))return true;if(prefs.includes("quick")&&Number(r.time)>30)return true;if(prefs.includes("ultra-quick")&&Number(r.time)>15)return true;if(prefs.includes("meal-prep")&&!tags.has("meal-prep"))return true;if(prefs.includes("one-pan")&&!tags.has("one-pan"))return true;const cuisines=["American","Italian","Mexican","Indian","Thai","Japanese","Korean","Mediterranean"];const wanted=prefs.filter(p=>cuisines.includes(p));if(wanted.length&&!wanted.includes(r.cuisine))return true;if(prefs.includes("high-protein")&&!tags.has("high-protein"))return true;if(prefs.includes("high-fiber")&&!tags.has("high-fiber"))return true;if(prefs.includes("protein-fiber")&&(!tags.has("high-protein")||!tags.has("high-fiber")))return true;return false}
function scoreRecipe(r,prefs,meal,used){if(violates(r,prefs))return -1e6;const tags=new Set(r.tags||[]);let score=r.type===meal?40:0;prefs.forEach(p=>{if(tags.has(p))score+=12;if(p===r.cuisine)score+=18});if(prefs.includes("quick")&&Number(r.time)<=30)score+=8;if(prefs.includes("ultra-quick")&&Number(r.time)<=15)score+=10;if(prefs.includes("high-protein")&&tags.has("high-protein"))score+=20;if(prefs.includes("high-fiber")&&tags.has("high-fiber"))score+=20;if(prefs.includes("protein-fiber")&&tags.has("high-protein")&&tags.has("high-fiber"))score+=25;if(prefs.includes("meal-prep")&&tags.has("meal-prep"))score+=10;if(prefs.includes("one-pan")&&tags.has("one-pan"))score+=10;if(used.has(String(r.id)))score-=100;return score}
function pickRecipe(pool,prefs,meal,used){
  const cuisines=["American","Italian","Mexican","Indian","Thai","Japanese","Korean","Mediterranean"];
  const wantedCuisines=prefs.filter(p=>cuisines.includes(p));
  const strictNutrition=["high-protein","high-fiber","protein-fiber"];
  const strictCandidates=(source,relaxNutrition=false)=>{
    return source.filter(r=>{
      const reduced=relaxNutrition?prefs.filter(p=>!strictNutrition.includes(p)):prefs;
      return !violates(r,reduced) && (!wantedCuisines.length || wantedCuisines.includes(r.cuisine));
    });
  };

  // Cuisine, diet, and allergy choices are NEVER relaxed.
  let candidates=strictCandidates(pool);
  if(!candidates.length) candidates=strictCandidates(pool,true);

  // If the meal-type pool does not have a match, search the whole library,
  // but still keep the selected cuisine/diet/allergy constraints.
  if(!candidates.length){
    const library=allRecipes();
    candidates=strictCandidates(library);
    if(!candidates.length) candidates=strictCandidates(library,true);
  }

  if(!candidates.length)return null;

  // Prefer unused recipes, but if a cuisine has too few recipes for a full
  // week, repeat a valid recipe rather than breaking the cuisine filter.
  const unused=candidates.filter(r=>!used.has(String(r.id)));
  const ranked=(unused.length?unused:candidates)
    .map(r=>({r,s:scoreRecipe(r,prefs,meal,used)}))
    .sort((a,b)=>b.s-a.s);

  const top=ranked.slice(0,Math.min(6,ranked.length));
  return top[Math.floor(Math.random()*top.length)].r;
};
function buildPlan(){
  const prefs=selectedPreferences();
  const mealTypes=selectedMeals();
  const used=new Set();
  const plan={};
  const library=allRecipes();

  for(const day of plannerDays){
    for(const mk of mealTypes){
      const meal=mk.charAt(0).toUpperCase()+mk.slice(1);
      const pool=library.filter(r=>r.type===meal);
      let recipe=pickRecipe(pool.length?pool:library,prefs,meal,used);
      if(recipe){
        plan[day+"-"+meal]=String(recipe.id);
        used.add(String(recipe.id));
      }
    }
  }

  localStorage.setItem("ccMealPlan",JSON.stringify(plan));
  localStorage.setItem("ccMealPlanPrefs",JSON.stringify(prefs));
  localStorage.setItem("ccMealPlanMeals",JSON.stringify(mealTypes));
  renderPlanner();

  const message=document.getElementById("plannerMessage");
  if(message){
    message.textContent=Object.keys(plan).length
      ?"Your plan is ready."
      :"No recipes match those preferences yet.";
  }
}

function plannerOptions(){
  return allRecipes().map(r=>
    '<option value="'+escPlanner(r.id)+'">'+escPlanner(r.name)+'</option>'
  ).join("");
}

function renderPlanner(){
  const root=document.getElementById("plannerGrid");
  if(!root)return;

  let saved={};
  try{
    saved=JSON.parse(localStorage.getItem("ccMealPlan")||"{}");
  }catch{}

  let savedMeals=[];
  try{
    savedMeals=JSON.parse(localStorage.getItem("ccMealPlanMeals")||"[]");
  }catch{}

  const keys=Object.keys(saved);
  const meals=[...new Set(
    keys.map(k=>k.slice(k.indexOf("-")+1)).filter(Boolean)
  )];

  const showMeals=meals.length
    ?meals
    :savedMeals.length
      ?savedMeals.map(x=>x.charAt(0).toUpperCase()+x.slice(1))
      :baseMeals;

  root.innerHTML=plannerDays.map(day=>
    '<article class="day-card"><h2>'+day+"</h2>"+
    showMeals.map(meal=>
      '<label><span>'+meal+'</span><select data-plan-key="'+day+"-"+meal+
      '"><option value="">Choose a recipe</option>'+plannerOptions()+
      "</select></label>"
    ).join("")+
    "</article>"
  ).join("");

  root.querySelectorAll("select").forEach(select=>{
    select.value=saved[select.dataset.planKey]||"";
  });
}

document.getElementById("generatePlan")?.addEventListener("click",buildPlan);

document.getElementById("savePlan")?.addEventListener("click",()=>{
  const plan={};
  document.querySelectorAll("[data-plan-key]").forEach(select=>{
    if(select.value)plan[select.dataset.planKey]=select.value;
  });

  localStorage.setItem("ccMealPlan",JSON.stringify(plan));

  const signature=JSON.stringify(plan);
  const previous=localStorage.getItem("ccLastSavedPlan");
  const message=document.getElementById("plannerMessage");

  if(message)message.textContent="Meal plan saved.";

  if(signature!==previous && window.awardPoints?.(20,"meal-plan-saved")){
    localStorage.setItem("ccLastSavedPlan",signature);
  }
});

document.getElementById("clearPlan")?.addEventListener("click",()=>{
  localStorage.removeItem("ccMealPlan");
  renderPlanner();
  const message=document.getElementById("plannerMessage");
  if(message)message.textContent="Meal plan cleared.";
});

document.querySelectorAll("[data-pref],[data-meal]").forEach(control=>{
  control.addEventListener("change",()=>{
    localStorage.setItem(
      "ccMealPlanPrefs",
      JSON.stringify(selectedPreferences())
    );
    localStorage.setItem(
      "ccMealPlanMeals",
      JSON.stringify(selectedMeals())
    );
  });
});

try{
  const prefs=JSON.parse(localStorage.getItem("ccMealPlanPrefs")||"[]");
  const meals=JSON.parse(localStorage.getItem("ccMealPlanMeals")||"[]");

  document.querySelectorAll("[data-pref]").forEach(control=>{
    control.checked=prefs.includes(control.value);
  });

  document.querySelectorAll("[data-meal]").forEach(control=>{
    control.checked=meals.includes(control.value);
  });
}catch{}

renderPlanner();

initFilterDropdowns();
