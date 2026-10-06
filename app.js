const recipes=[
{id:1,name:"Weeknight Grain Bowl",time:25,rating:"4.9",cooks:28,category:["quick","vegetarian","budget"],tag:"Community pick",description:"Roasted vegetables, warm grains, lemon dressing, and a handful of herbs.",cook:"Maya Chen",initials:"MC",image:"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=82"},
{id:2,name:"Tomato Butter Pasta",time:22,rating:"4.8",cooks:41,category:["quick","budget"],tag:"Most cooked",description:"Silky tomato sauce with browned butter, parmesan, and cracked pepper.",cook:"Jon Bell",initials:"JB",image:"https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=82"},
{id:3,name:"Crisp Chickpea Salad",time:15,rating:"4.7",cooks:19,category:["quick","vegetarian","budget"],tag:"15 minute",description:"Crunchy chickpeas, cucumber, herbs, and a bright tahini dressing.",cook:"Priya Shah",initials:"PS",image:"https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=900&q=82"},
{id:4,name:"Skillet Chicken & Rice",time:38,rating:"4.9",cooks:35,category:["budget"],tag:"Dinner",description:"Golden chicken, toasted rice, garlic, and greens in one deep skillet.",cook:"Andre Lewis",initials:"AL",image:"https://images.unsplash.com/photo-1516684669134-de6f7c473a2a?auto=format&fit=crop&w=900&q=82"},
{id:5,name:"Charred Corn Tacos",time:27,rating:"4.8",cooks:24,category:["quick","vegetarian"],tag:"Trending",description:"Charred corn, black beans, lime crema, and crunchy cabbage.",cook:"Nora Ellis",initials:"NE",image:"https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?auto=format&fit=crop&w=900&q=82"},
{id:6,name:"Lemon Herb Roast",time:52,rating:"4.9",cooks:17,category:["budget"],tag:"Sunday",description:"A simple roast with lemon, rosemary, crisp potatoes, and pan juices.",cook:"Sam Rivera",initials:"SR",image:"https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=82"}
];
const leaderboard=[["01","Maya Chen","18 cooks","640 pts","MC"],["02","Jon Bell","16 cooks","590 pts","JB"],["03","Priya Shah","14 cooks","520 pts","PS"],["04","Andre Lewis","12 cooks","480 pts","AL"],["05","Nora Ellis","10 cooks","430 pts","NE"]];
const recipeGrid=document.getElementById("recipeGrid"),emptyState=document.getElementById("emptyState"),searchInput=document.getElementById("searchInput"),filterRow=document.getElementById("filterRow"),filterToggle=document.getElementById("filterToggle");
let currentFilter="all";
function getSaved(){return JSON.parse(localStorage.getItem("communityCooksSaved")||"[]")}
function renderRecipes(){
 const query=searchInput.value.trim().toLowerCase(),saved=getSaved();
 const visible=recipes.filter(recipe=>{
  const matchesFilter=currentFilter==="all"||recipe.category.includes(currentFilter)||(currentFilter==="quick"&&recipe.time<30);
  const text=[recipe.name,recipe.description,recipe.cook,recipe.tag].join(" ").toLowerCase();
  return matchesFilter&&text.includes(query);
 });
 recipeGrid.innerHTML=visible.map(recipe=>"<article class='recipe-card'><div class='recipe-image'><img src='"+recipe.image+"' alt='"+recipe.name+"'><span class='recipe-tag'>"+recipe.tag+"</span><button class='save-button "+(saved.includes(recipe.id)?"saved":"")+"' data-save='"+recipe.id+"' aria-label='"+(saved.includes(recipe.id)?"Remove from saved":"Save")+" "+recipe.name+"'>"+(saved.includes(recipe.id)?"✓":"+")+"</button></div><div class='recipe-info'><div class='recipe-topline'><span>"+recipe.time+" min</span><span>"+recipe.rating+" rating · "+recipe.cooks+" cooks</span></div><h3>"+recipe.name+"</h3><p>"+recipe.description+"</p><div class='recipe-byline'><span class='avatar'>"+recipe.initials+"</span><span>by "+recipe.cook+"</span></div></div></article>").join("");
 emptyState.hidden=visible.length!==0;
}
function renderLeaderboard(){document.getElementById("rankList").innerHTML=leaderboard.map(row=>"<div class='rank-row'><span class='rank-number'>"+row[0]+"</span><div class='rank-person'><span class='avatar'>"+row[4]+"</span><div><strong>"+row[1]+"</strong><span>Community cook</span></div></div><span class='rank-cooks'>"+row[2]+"</span><span class='rank-points'>"+row[3]+"</span></div>").join("")}
document.addEventListener("click",event=>{
 const saveButton=event.target.closest("[data-save]");
 if(saveButton){const id=Number(saveButton.dataset.save);let saved=getSaved();saved=saved.includes(id)?saved.filter(item=>item!==id):saved.concat(id);localStorage.setItem("communityCooksSaved",JSON.stringify(saved));renderRecipes()}
 const chip=event.target.closest(".chip");
 if(chip){document.querySelectorAll(".chip").forEach(item=>item.classList.remove("active"));chip.classList.add("active");currentFilter=chip.dataset.filter;renderRecipes()}
});
searchInput.addEventListener("input",renderRecipes);
filterToggle.addEventListener("click",()=>{filterRow.classList.toggle("open");filterToggle.querySelector("span").textContent=filterRow.classList.contains("open")?"−":"+"});
const recipeModal=document.getElementById("recipeModal"),recipeForm=document.getElementById("recipeForm");
function openModal(){recipeModal.hidden=false;document.body.classList.add("modal-open");recipeModal.querySelector("input").focus()}
function closeModal(){recipeModal.hidden=true;document.body.classList.remove("modal-open")}
document.querySelectorAll("[data-open-recipe]").forEach(button=>button.addEventListener("click",openModal));
document.querySelectorAll("[data-close-modal]").forEach(button=>button.addEventListener("click",closeModal));
recipeModal.addEventListener("click",event=>{if(event.target===recipeModal)closeModal()});
recipeForm.addEventListener("submit",event=>{
 event.preventDefault();const data=new FormData(recipeForm);
 recipes.unshift({id:Date.now(),name:data.get("name"),time:Number(data.get("time")),rating:"New",cooks:0,category:[data.get("category")],tag:"New recipe",description:data.get("description"),cook:"You",initials:"YC",image:"https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=900&q=82"});
 closeModal();recipeForm.reset();currentFilter="all";document.querySelectorAll(".chip").forEach(item=>item.classList.toggle("active",item.dataset.filter==="all"));searchInput.value="";renderRecipes();document.getElementById("discover").scrollIntoView({behavior:"smooth"});
});
const challengeStatus=document.getElementById("challengeStatus");
document.getElementById("joinChallenge").addEventListener("click",event=>{if(localStorage.getItem("challengeJoined")==="true"){challengeStatus.textContent="You're already in. Your entry is waiting for you.";return}localStorage.setItem("challengeJoined","true");event.target.textContent="You're in";challengeStatus.textContent="Challenge joined. Your first entry can be anything built around one familiar ingredient."});
let userPoints=Number(localStorage.getItem("communityCooksPoints")||180);
function updateProgress(){document.getElementById("userPoints").textContent=userPoints+" pts";document.getElementById("progressBar").style.width=Math.min(100,Math.round(userPoints/250*100))+"%"}
const cookModal=document.getElementById("cookModal");
document.getElementById("cookNow").addEventListener("click",()=>{userPoints+=20;localStorage.setItem("communityCooksPoints",userPoints);updateProgress();document.getElementById("progressMessage").textContent="+20 points. Cook logged."});
document.querySelectorAll(".recipe-card");
document.getElementById("closeCook").addEventListener("click",()=>cookModal.hidden=true);
document.getElementById("finishCook").addEventListener("click",()=>{userPoints+=30;localStorage.setItem("communityCooksPoints",userPoints);updateProgress();cookModal.hidden=true;document.getElementById("progressMessage").textContent="+30 points. Cook logged."});
recipeGrid.addEventListener("dblclick",event=>{if(event.target.closest(".recipe-card"))cookModal.hidden=false});
renderRecipes();renderLeaderboard();updateProgress();
