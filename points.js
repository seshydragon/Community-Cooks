function getPoints(){try{const value=Number(localStorage.getItem("ccPoints")||0); if(value>10000){localStorage.setItem("ccPoints","0");localStorage.removeItem("ccPointRewards"); return 0} return value}catch{return 0}}
function setPoints(value){localStorage.setItem("ccPoints",String(Math.max(0,value)))}
function updatePointsUI(){
  const points=getPoints();
  const userPoints=document.getElementById("userPoints");
  const bar=document.getElementById("progressBar");
  const text=document.getElementById("progressText");
  if(userPoints)userPoints.textContent=points+" pts";
  if(bar)bar.style.width=Math.min(100,(points%250)/250*100)+"%";
  if(text)text.textContent=points===0?"Start cooking to earn your first points.":(250-(points%250))+" points to the next milestone.";
}
updatePointsUI();
