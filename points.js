function getPoints(){try{return Number(localStorage.getItem("ccPoints")||0)}catch{return 0}}
function setPoints(value){localStorage.setItem("ccPoints",String(Math.max(0,value)))}
function updatePointsUI(){
  const points=getPoints();
  const userPoints=document.getElementById("userPoints");
  const bar=document.getElementById("progressBar");
  const text=document.getElementById("progressText");
  if(userPoints)userPoints.textContent=points+" pts";
  if(bar)bar.style.width=Math.min(100,(points%250)/250*100)+"%";
  if(text)text.textContent=points===0?"Start cooking to earn your first points.":(points%250===0?"Next level unlocked. Keep going.":(250-(points%250))+" pts until your next 250-point level.");
}
document.getElementById("logCook")?.addEventListener("click",()=>{
  const next=getPoints()+30; setPoints(next); updatePointsUI();
  const message=document.getElementById("progressMessage"); if(message)message.textContent="+30 points. Cook logged.";
});
updatePointsUI();
