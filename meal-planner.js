const plannerDays=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
const plannerMeals=["Breakfast","Lunch","Dinner"];
function plannerOptions(){
  return allRecipes().map(r=>'<option value="'+String(r.id).replace(/"/g,"&quot;")+'">'+String(r.name).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]))+"</option>").join("");
}
function renderPlanner(){
  const root=document.getElementById("plannerGrid"); if(!root)return;
  let saved={}; try{saved=JSON.parse(localStorage.getItem("ccMealPlan")||"{}")}catch{}
  root.innerHTML=plannerDays.map(day=>'<article class="day-card"><h2>'+day+'</h2>'+plannerMeals.map(meal=>{
    const key=day+"-"+meal;
    return '<label><span>'+meal+'</span><select data-plan-key="'+key+'"><option value="">Choose a recipe</option>'+plannerOptions()+'</select></label>';
  }).join("")+"</article>").join("");
  root.querySelectorAll("select").forEach(select=>{select.value=saved[select.dataset.planKey]||""});
}
document.getElementById("savePlan")?.addEventListener("click",()=>{
  const plan={}; document.querySelectorAll("[data-plan-key]").forEach(s=>plan[s.dataset.planKey]=s.value);
  localStorage.setItem("ccMealPlan",JSON.stringify(plan));
  const message=document.getElementById("plannerMessage"); if(message)message.textContent="Meal plan saved. +20 points.";
  const current=Number(localStorage.getItem("ccPoints")||0); localStorage.setItem("ccPoints",String(current+20));
});
document.getElementById("clearPlan")?.addEventListener("click",()=>{
  localStorage.removeItem("ccMealPlan"); renderPlanner();
  const message=document.getElementById("plannerMessage"); if(message)message.textContent="Meal plan cleared.";
});
renderPlanner();
