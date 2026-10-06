const recipes=[
{id:1,name:"Weeknight Grain Bowl",time:25,rating:"4.9",cooks:28,category:["quick","vegetarian","budget"],tag:"Community pick",description:"Roasted vegetables, warm grains, lemon dressing, and a handful of herbs.",cook:"Maya Chen",initials:"MC",image:"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=82"},
{id:2,name:"Tomato Butter Pasta",time:22,rating:"4.8",cooks:41,category:["quick","budget"],tag:"Most cooked",description:"Silky tomato sauce with browned butter, parmesan, and cracked pepper.",cook:"Jon Bell",initials:"JB",image:"https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=82"},
{id:3,name:"Crisp Chickpea Salad",time:15,rating:"4.7",cooks:19,category:["quick","vegetarian","budget"],tag:"15 minute",description:"Crunchy chickpeas, cucumber, herbs, and a bright tahini dressing.",cook:"Priya Shah",initials:"PS",image:"https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=900&q=82"},
{id:4,name:"Skillet Chicken & Rice",time:38,rating:"4.9",cooks:35,category:["budget"],tag:"Dinner",description:"Golden chicken, toasted rice, garlic, and greens in one deep skillet.",cook:"Andre Lewis",initials:"AL",image:"https://images.unsplash.com/photo-1516684669134-de6f7c473a2a?auto=format&fit=crop&w=900&q=82"},
{id:5,name:"Charred Corn Tacos",time:27,rating:"4.8",cooks:24,category:["quick","vegetarian"],tag:"Trending",description:"Charred corn, black beans, lime crema, and crunchy cabbage.",cook:"Nora Ellis",initials:"NE",image:"https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?auto=format&fit=crop&w=900&q=82"},
{id:6,name:"Lemon Herb Roast",time:52,rating:"4.9",cooks:17,category:["budget"],tag:"Sunday",description:"A simple roast with lemon, rosemary, crisp potatoes, and pan juices.",cook:"Sam Rivera",initials:"SR",image:"https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=82"}
];
const leaderboard=[["01","Maya Chen","18 cooks","640 pts","MC"],["02","Jon Bell","16 cooks","590 pts","JB"],["03","Priya Shah","14 cooks","520 pts","PS"],["04","Andre Lewis","12 cooks","480 pts","AL"],["05","Nora Ellis","10 cooks","430 pts","NE"]];

const recipeGrid=document.getElementById("recipeGrid");
const emptyState=document.getElementById("emptyState");
const searchInput=document.getElementById("searchInput");
const filterRow=document.getElementById("filterRow");
const filterToggle=document.getElementById("filterToggle");
const recipeModal=document.getElementById("recipeModal");
const recipeForm=document.getElementById("recipeForm");
const cookModal=document.getElementById("cookModal");
const challengeStatus=document.getElementById("challengeStatus");
let currentFilter="all";

function safeStorage(key,fallback){
  try{
    const value=localStorage.getItem(key);
    return value===null?fallback:JSON.parse(value);
  }catch{return fallback}
}
function getSaved(){
  const saved=safeStorage("communityCooksSaved",[]);
  return Array.isArray(saved)?saved:[];
}
function escapeHTML(value){
  return String(value??"").replace(/[&<>"']/g,char=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[char]));
}
function scrollToSection(id){
  const section=document.getElementById(id);
  if(section) section.scrollIntoView({behavior:"smooth",block:"start"});
}

function renderRecipes(){
  const query=searchInput.value.trim().toLowerCase();
  const saved=getSaved();
  const visible=recipes.filter(recipe=>{
    const matchesFilter=currentFilter==="all"||recipe.category.includes(currentFilter)||(currentFilter==="quick"&&recipe.time<30);
    const text=[recipe.name,recipe.description,recipe.cook,recipe.tag].join(" ").toLowerCase();
    return matchesFilter&&text.includes(query);
  });
  recipeGrid.innerHTML=visible.map(recipe=>{
    const id=escapeHTML(recipe.id);
    const savedState=saved.includes(recipe.id);
    return "<article class='recipe-card' tabindex='0' data-recipe='"+id+"'>"+
      "<div class='recipe-image'><img loading='lazy' src='"+escapeHTML(recipe.image)+"' alt='"+escapeHTML(recipe.name)+"'>"+
      "<span class='recipe-tag'>"+escapeHTML(recipe.tag)+"</span>"+
      "<button class='save-button "+(savedState?"saved":"")+"' data-save='"+id+"' aria-label='"+(savedState?"Remove from saved":"Save")+" "+escapeHTML(recipe.name)+"'>"+(savedState?"✓":"+")+"</button></div>"+
      "<div class='recipe-info'><div class='recipe-topline'><span>"+escapeHTML(recipe.time)+" min</span><span>"+escapeHTML(recipe.rating)+" rating · "+escapeHTML(recipe.cooks)+" cooks</span></div>"+
      "<h3>"+escapeHTML(recipe.name)+"</h3><p>"+escapeHTML(recipe.description)+"</p><div class='recipe-byline'><span class='avatar'>"+escapeHTML(recipe.initials)+"</span><span>by "+escapeHTML(recipe.cook)+"</span></div>"+
      "<button class='recipe-cook-button' type='button' data-cook='"+id+"'>Cook this recipe</button></div></article>";
  }).join("");
  emptyState.hidden=visible.length!==0;
}

function renderLeaderboard(){
  document.getElementById("rankList").innerHTML=leaderboard.map(row=>
    "<div class='rank-row'><span class='rank-number'>"+row[0]+"</span><div class='rank-person'><span class='avatar'>"+row[4]+"</span><div><strong>"+row[1]+"</strong><span>Community cook</span></div></div><span class='rank-cooks'>"+row[2]+"</span><span class='rank-points'>"+row[3]+"</span></div>"
  ).join("");
}

function openModal(){
  recipeModal.hidden=false;
  document.body.classList.add("modal-open");
  const firstInput=recipeModal.querySelector("input");
  if(firstInput) firstInput.focus();
}
function closeModal(){
  recipeModal.hidden=true;
  document.body.classList.remove("modal-open");
}
function openCookModal(){
  cookModal.hidden=false;
  document.body.classList.add("modal-open");
}
function closeCookModal(){
  cookModal.hidden=true;
  document.body.classList.remove("modal-open");
}

document.querySelectorAll("a[href^='#']").forEach(link=>{
  link.addEventListener("click",event=>{
    const target=link.getAttribute("href");
    if(target&&target!=="#"){
      const section=document.querySelector(target);
      if(section){
        event.preventDefault();
        history.replaceState(null,"",target);
        scrollToSection(target.slice(1));
      }
    }
  });
});

document.querySelectorAll("[data-open-recipe]").forEach(button=>button.addEventListener("click",openModal));
document.querySelectorAll("[data-close-modal]").forEach(button=>button.addEventListener("click",closeModal));
recipeModal.addEventListener("click",event=>{if(event.target===recipeModal) closeModal();});

recipeForm.addEventListener("submit",event=>{
  event.preventDefault();
  const data=new FormData(recipeForm);
  const name=String(data.get("name")||"").trim();
  const time=Number(data.get("time"));
  const description=String(data.get("description")||"").trim();
  const category=String(data.get("category")||"quick");
  if(!name||!description||!Number.isFinite(time)||time<1) return;

  recipes.unshift({
    id:Date.now(),name,time,rating:"New",cooks:0,category:[category],tag:"New recipe",
    description,cook:"You",initials:"YC",
    image:"https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=900&q=82"
  });
  closeModal();
  recipeForm.reset();
  currentFilter="all";
  document.querySelectorAll(".chip").forEach(item=>item.classList.toggle("active",item.dataset.filter==="all"));
  searchInput.value="";
  renderRecipes();
  scrollToSection("discover");
});

document.addEventListener("click",event=>{
  const saveButton=event.target.closest("[data-save]");
  if(saveButton){
    event.stopPropagation();
    const id=Number(saveButton.dataset.save);
    let saved=getSaved();
    saved=saved.includes(id)?saved.filter(item=>item!==id):saved.concat(id);
    localStorage.setItem("communityCooksSaved",JSON.stringify(saved));
    renderRecipes();
    return;
  }

  const cookButton=event.target.closest("[data-cook]");
  if(cookButton){
    event.stopPropagation();
    const recipe=recipes.find(item=>item.id===Number(cookButton.dataset.cook));
    if(recipe) document.getElementById("cookTitle").textContent=recipe.name;
    openCookModal();
    return;
  }

  const chip=event.target.closest(".chip");
  if(chip){
    document.querySelectorAll(".chip").forEach(item=>item.classList.remove("active"));
    chip.classList.add("active");
    currentFilter=chip.dataset.filter||"all";
    renderRecipes();
  }
});

recipeGrid.addEventListener("keydown",event=>{
  if((event.key==="Enter"||event.key===" ")&&event.target.closest(".recipe-card")&&!event.target.closest("button")){
    event.preventDefault();
    const card=event.target.closest(".recipe-card");
    const recipe=recipes.find(item=>item.id===Number(card.dataset.recipe));
    if(recipe) document.getElementById("cookTitle").textContent=recipe.name;
    openCookModal();
  }
});

searchInput.addEventListener("input",renderRecipes);
filterToggle.addEventListener("click",()=>{
  const open=filterRow.classList.toggle("open");
  filterToggle.querySelector("span").textContent=open?"−":"+";
});

document.getElementById("joinChallenge").addEventListener("click",event=>{
  const joined=localStorage.getItem("challengeJoined")==="true";
  if(joined){
    challengeStatus.textContent="You're already in. Your entry is waiting for you.";
    event.target.textContent="You're in";
    return;
  }
  localStorage.setItem("challengeJoined","true");
  event.target.textContent="You're in";
  challengeStatus.textContent="Challenge joined. Your first entry can be anything built around one familiar ingredient.";
});

let userPoints=Math.max(0,Number(safeStorage("communityCooksPoints",180))||180);
function updateProgress(){
  document.getElementById("userPoints").textContent=userPoints+" pts";
  document.getElementById("progressBar").style.width=Math.min(100,Math.round(userPoints/250*100))+"%";
  const remaining=Math.max(0,250-userPoints);
  const progressText=document.querySelector(".your-progress>p:not(.eyebrow):not(.progress-message)");
  if(progressText) progressText.innerHTML=remaining?("<strong>"+remaining+" pts</strong> until you reach Home Cook."):"Home Cook reached.";
}
document.getElementById("cookNow").addEventListener("click",()=>{
  userPoints+=20;
  localStorage.setItem("communityCooksPoints",String(userPoints));
  updateProgress();
  document.getElementById("progressMessage").textContent="+20 points. Cook logged.";
  openCookModal();
});
document.getElementById("closeCook").addEventListener("click",closeCookModal);
document.getElementById("finishCook").addEventListener("click",()=>{
  userPoints+=30;
  localStorage.setItem("communityCooksPoints",String(userPoints));
  updateProgress();
  closeCookModal();
  document.getElementById("progressMessage").textContent="+30 points. Cook logged.";
});

document.addEventListener("keydown",event=>{
  if(event.key==="Escape"){
    if(!recipeModal.hidden) closeModal();
    if(!cookModal.hidden) closeCookModal();
  }
});

const savedChallenge=localStorage.getItem("challengeJoined")==="true";
if(savedChallenge){
  document.getElementById("joinChallenge").textContent="You're in";
}
renderRecipes();
renderLeaderboard();
updateProgress();
