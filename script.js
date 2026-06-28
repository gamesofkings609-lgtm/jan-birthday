
btn.onclick=()=>msg.style.display='block';
const fx=document.getElementById('fx');
function spawn(c,cls,d){let e=document.createElement('div');e.className=cls;e.textContent=c;e.style.left=Math.random()*100+'vw';e.style.animationDuration=(6+Math.random()*5)+'s';document.body.appendChild(e);setTimeout(()=>e.remove(),12000);}
setInterval(()=>spawn('💖','heart'),300);
setInterval(()=>spawn('🌹','rose'),1800);
setInterval(()=>spawn('🎈','balloon'),2200);
