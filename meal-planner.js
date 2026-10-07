const plannerDays=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
const plannerMeals=["Breakfast","Lunch","Dinner"];
function escPlanner(v){return String(v??"").replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]))}
function selectedPreferences(){return [...document.querySelectorAll("[data-pref]:checked")].map(x=>x.value)}
function scoreRecipe(r,prefs,meal){
 const tags=new Set(r.tags||[]); let score=0;
 prefs.forEach(p=>{if(tags.has(p))score+=5;});
 if(meal==="Breakfast"&&r.type==="Breakfast")score+=20;
 if(meal==="Lunch"&&r.type==="Lunch")score+=20;
 if(meal==="Dinner"&&r.type==="Dinner")score+=20;
 if(meal==="Snack"&&r.type==="Snack")score+=20;
 if(prefs.includes("quick")&&r.time<30)score+=4;
 if(prefs.includes("meal-prep")&&r.tags?.includes("meal-prep"))score+=6;
 return score;
}
function pickRecipe(pool,prefs,meal,used){
 const candidates=pool.filter(r=>!used.has(String(r.id))&&scoreRecipe(r,prefs,meal)>0);
 const source=candidates.length?candidates:pool.filter(r=>!used.has(String(r.id)));
 source.sort((a,b)=>scoreRecipe(b,prefs,meal)-scoreRecipe(a,prefs,meal));
 return source[Math.floor(Math.random()*Math.min(source.length,8))]||pool[0];
}
function buildPlan(){
 const prefs=selectedPreferences(), used=new Set(), plan={};
 for(const day of plannerDays){
  for(const meal of plannerMeals){
   const desired=meal;
   const pool=allRecipes().filter(r=>r.type===desired);
   const fallback=pool.length?pool:allRecipes();
   const r=pickRecipe(fallback,prefs,meal,used);
   if(r){plan[day+"-"+meal]=String(r.id);used.add(String(r.id));}
  }
 }
 localStorage.setItem("ccMealPlan",JSON.stringify(plan));
 localStorage.setItem("ccMealPlanPrefs",JSON.stringify(prefs));
 renderPlanner();
 const message=document.getElementById("plannerMessage"); if(message)message.textContent="Your seven-day plan is ready.";
}
function plannerOptions(){return allRecipes().map(r=>'<option value="'+escPlanner(r.id)+'">'+escPlanner(r.name)+"</option>").join("")}
function renderPlanner(){
 const root=document.getElementById("plannerGrid");if(!root)return;
 let saved={};try{saved=JSON.parse(localStorage.getItem("ccMealPlan")||"{}")}catch{}
 root.innerHTML=plannerDays.map(day=>'<article class="day-card"><h2>'+day+"</h2>"+plannerMeals.map(meal=>{const key=day+"-"+meal;return '<label><span>'+meal+'</span><select data-plan-key="'+key+'"><option value="">Choose a recipe</option>'+plannerOptions()+"</select></label>"}).join("")+"</article>").join("");
 root.querySelectorAll("select").forEach(s=>s.value=saved[s.dataset.planKey]||"");
}
document.getElementById("generatePlan")?.addEventListener("click",buildPlan);
document.getElementById("savePlan")?.addEventListener("click",()=>{
 const plan={};document.querySelectorAll("[data-plan-key]").forEach(s=>plan[s.dataset.planKey]=s.value);
 localStorage.setItem("ccMealPlan",JSON.stringify(plan));
 const message=document.getElementById("plannerMessage");if(message)message.textContent="Meal plan saved. +20 points.";
 const signature=JSON.stringify(plan);const previous=localStorage.getItem("ccLastSavedPlan");
 if(signature!==previous){if(window.awardPoints?.(20,"meal-plan-"+signature)){localStorage.setItem("ccLastSavedPlan",signature);}}
});
document.getElementById("clearPlan")?.addEventListener("click",()=>{localStorage.removeItem("ccMealPlan");renderPlanner();const message=document.getElementById("plannerMessage");if(message)message.textContent="Meal plan cleared."});
document.querySelectorAll("[data-pref]").forEach(c=>c.addEventListener("change",()=>{localStorage.setItem("ccMealPlanPrefs",JSON.stringify(selectedPreferences()))}));
try{const savedPrefs=JSON.parse(localStorage.getItem("ccMealPlanPrefs")||"[]");document.querySelectorAll("[data-pref]").forEach(c=>c.checked=savedPrefs.includes(c.value))}catch{}
renderPlanner();
