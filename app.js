const recipes=[
{id:1,name:"Weeknight Grain Bowl",time:25,category:["quick","vegetarian","budget"],tag:"Weeknight",description:"Roasted vegetables, warm grains, lemon dressing, and herbs.",creator:"Community Cooks",image:"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1000&q=84",ingredients:["2 cups cooked grains","1 cup roasted vegetables","2 cups greens","2 tbsp lemon dressing","Fresh herbs"],steps:["Roast the vegetables until browned and tender.","Warm the grains and prepare the greens.","Build the bowl and add the dressing.","Finish with herbs and lemon."]},
{id:2,name:"Tomato Butter Pasta",time:22,category:["quick","budget"],tag:"Weeknight",description:"Silky tomato sauce with browned butter, parmesan, and cracked pepper.",creator:"Community Cooks",image:"https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=1000&q=84",ingredients:["8 oz pasta","1 cup tomato sauce","2 tbsp butter","Parmesan","Black pepper"],steps:["Cook the pasta until just tender.","Brown the butter in a pan.","Add tomato sauce and simmer.","Toss with pasta and finish with parmesan."]},
{id:3,name:"Crisp Chickpea Salad",time:15,category:["quick","vegetarian","budget"],tag:"15 minutes",description:"Crunchy chickpeas, cucumber, herbs, and a bright tahini dressing.",creator:"Community Cooks",image:"https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1000&q=84",ingredients:["1 can chickpeas","1 cucumber","Fresh herbs","2 tbsp tahini","Lemon juice"],steps:["Drain and rinse the chickpeas.","Chop cucumber and herbs.","Whisk tahini with lemon juice.","Toss everything together and serve."]},
{id:4,name:"Skillet Chicken & Rice",time:38,category:["budget"],tag:"Dinner",description:"Golden chicken, toasted rice, garlic, and greens in one skillet.",creator:"Community Cooks",image:"https://images.unsplash.com/photo-1516684669134-de6f7c473a2a?auto=format&fit=crop&w=1000&q=84",ingredients:["Chicken thighs","1 cup rice","Garlic","2 cups broth","Greens"],steps:["Brown the chicken in a skillet.","Toast the rice with garlic.","Add broth and return the chicken.","Cover until the rice is tender and finish with greens."]},
{id:5,name:"Charred Corn Tacos",time:27,category:["quick","vegetarian"],tag:"Quick",description:"Charred corn, black beans, lime crema, and crunchy cabbage.",creator:"Community Cooks",image:"https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?auto=format&fit=crop&w=1000&q=84",ingredients:["Corn tortillas","1 cup corn","1 cup black beans","Cabbage","Lime"],steps:["Char the corn in a hot pan.","Warm the tortillas.","Layer beans, corn, and cabbage.","Finish with lime."]},
{id:6,name:"Lemon Herb Roast",time:52,category:["budget"],tag:"Weekend",description:"A simple roast with lemon, rosemary, crisp potatoes, and pan juices.",creator:"Community Cooks",image:"https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=84",ingredients:["Chicken or vegetables","Potatoes","Lemon","Rosemary","Olive oil"],steps:["Heat the oven and prepare the tray.","Season everything with lemon, rosemary, and oil.","Roast until browned and tender.","Rest briefly before serving."]}
];
const leaderboard=[["01","Community Cook","18","640"],["02","Community Cook","16","590"],["03","Community Cook","14","520"],["04","Community Cook","12","480"],["05","Community Cook","10","430"]];
const $=id=>document.getElementById(id);
const esc=v=>String(v??"").replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
function storage(key,fallback){try{const x=localStorage.getItem(key);return x===null?fallback:JSON.parse(x)}catch{return fallback}}
function renderRecipes(){
 const grid=$("recipeGrid"), empty=$("emptyState"); if(!grid)return;
 const q=($("searchInput")?.value||"").trim().toLowerCase(), filter=document.querySelector(".chip.active")?.dataset.filter||"all";
 const visible=recipes.filter(r=>(filter==="all"||r.category.includes(filter)||(filter==="quick"&&r.time<30))&&[r.name,r.description,r.creator,r.tag].join(" ").toLowerCase().includes(q));
 grid.innerHTML=visible.map(r=>`<article class="recipe-card"><div class="recipe-image"><img loading="lazy" src="${esc(r.image)}" alt="${esc(r.name)}"><span class="recipe-tag">${esc(r.tag)}</span></div><div class="recipe-info"><div class="recipe-topline">${r.time} min</div><h2>${esc(r.name)}</h2><p>${esc(r.description)}</p><div class="creator">Created by ${esc(r.creator)}</div><a class="recipe-open" href="recipe.html?id=${r.id}">Open recipe →</a></div></article>`).join("");
 if(empty)empty.hidden=visible.length>0;
}
function renderRecipe(){
 const root=$("recipePage"); if(!root)return;
 const id=Number(new URLSearchParams(location.search).get("id"))||1, r=recipes.find(x=>x.id===id)||recipes[0];
 root.innerHTML=`<a class="back-link" href="discover.html">← All recipes</a><section class="recipe-hero"><img src="${esc(r.image)}" alt="${esc(r.name)}"><div class="recipe-details"><p class="eyebrow">Recipe</p><h1>${esc(r.name)}</h1><p class="description">${esc(r.description)}</p><p class="creator-line">Created by <strong>${esc(r.creator)}</strong> · ${r.time} minutes</p></div></section><section class="recipe-body"><div><p class="eyebrow">Ingredients</p><h2>What you need.</h2><ul>${r.ingredients.map(x=>`<li>${esc(x)}</li>`).join("")}</ul></div><div><p class="eyebrow">Method</p><h2>How to make it.</h2><ol>${r.steps.map(x=>`<li>${esc(x)}</li>`).join("")}</ol></div></section>`;
}
function renderLeaderboard(){
 const root=$("rankList"); if(!root)return;
 root.innerHTML=leaderboard.map(r=>`<div class="rank-row"><span>${r[0]}</span><strong>${r[1]}</strong><span>${r[2]} cooks</span><span>${r[3]} pts</span></div>`).join("");
 const points=Math.max(0,Number(storage("ccPoints",0))||0); updateProgress(points);
}
function updateProgress(points){
 if(!$("userPoints"))return;
 $("userPoints").textContent=points+" pts"; $("progressBar").style.width=Math.min(100,points/250*100)+"%"; $("progressText").textContent=points<250?(250-points)+" pts until 250.":"250 pts reached.";
}
document.addEventListener("click",e=>{
 const chip=e.target.closest(".chip"); if(chip){document.querySelectorAll(".chip").forEach(x=>x.classList.remove("active"));chip.classList.add("active");renderRecipes()}
});
$("searchInput")?.addEventListener("input",renderRecipes);
$("joinChallenge")?.addEventListener("click",e=>{localStorage.setItem("ccChallenge","true");e.currentTarget.textContent="Joined";$("challengeStatus").textContent="Challenge joined. Now cook your version."});
if($("joinChallenge")&&localStorage.getItem("ccChallenge")==="true")$("joinChallenge").textContent="Joined";
$("logCook")?.addEventListener("click",()=>{const p=(Number(storage("ccPoints",0))||0)+30;localStorage.setItem("ccPoints",String(p));updateProgress(p);$("progressMessage").textContent="+30 points. Cook logged."});
renderRecipes();renderRecipe();renderLeaderboard();