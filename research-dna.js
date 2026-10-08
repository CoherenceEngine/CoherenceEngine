/* Authored research identity rendered as a time-evolving helix. */
(()=>{
 const svg=document.getElementById('research-dna');if(!svg)return;
 const ns='http://www.w3.org/2000/svg',reduce=matchMedia('(prefers-reduced-motion: reduce)'),pause=document.getElementById('dna-pause'),time=document.getElementById('dna-time'),depth=document.getElementById('dna-depth');
 const names=[['ai','AI & computation'],['mechanical','Mechanical systems'],['energy','Energy & control'],['health','Human physiology'],['food','Food systems'],['materials','Regenerative materials'],['bio','Biological computing'],['space','Space & habitats'],['identity','Identity & learning'],['physics','Physics & quantum']];
 const palette=['#90eee0','#9fb9ff','#dac49f','#b4e48c','#efaacb'];let phase=.5,running=!reduce.matches,last=0,frame=0,visible=true;
 function el(tag,a={},txt=''){const e=document.createElementNS(ns,tag);Object.entries(a).forEach(([k,v])=>e.setAttribute(k,v));e.textContent=txt;return e;}
 const art=el('g',{'aria-hidden':'true'}),connections=el('g',{'aria-hidden':'true'}),labels=el('g');svg.append(art,connections,labels);
 const links=names.map(([id,label],i)=>{
  const left=i%2===0,x=left?35:705,y=72+i*45,g=el('g',{role:'button',tabindex:0,'aria-label':'Explore '+label,class:'dna-domain'});
  g.append(el('rect',{x,y:y-18,width:260,height:36,rx:18,fill:'#102638',stroke:palette[i%5],'stroke-opacity':.55}));
  g.append(el('text',{x:x+18,y:y+5,fill:palette[i%5],'font-size':15},label));
  const choose=()=>{if(typeof bubbleSelect==='function')bubbleSelect('d_'+id);document.getElementById('bubble-inspector').scrollIntoView({behavior:reduce.matches?'auto':'smooth',block:'center'});};
  g.onclick=choose;g.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();choose();}};labels.append(g);return {left,x,y};
 });
 function point(u,side=0){const a=u*Math.PI*5+phase+side*Math.PI,z=Math.cos(a),scale=1+z*Number(depth.value)*.18;return {x:500+Math.sin(a)*100*scale,y:45+u*460,z,scale};}
 function draw(){art.replaceChildren();connections.replaceChildren();const segments=[];
  for(let i=0;i<70;i++){const u=i/69,a=point(u),b=point(u,1);segments.push({z:(a.z+b.z)/2,line:true,a,b,i});for(let side=0;side<2;side++){const p=point(u,side),q=point(Math.min(1,u+1/69),side);segments.push({z:p.z,line:false,a:p,b:q,side,i});}}
  segments.sort((a,b)=>a.z-b.z).forEach(s=>{const color=s.line?palette[s.i%5]:s.side?'#bba0ff':'#7cf1dd';art.append(el('line',{x1:s.a.x,y1:s.a.y,x2:s.b.x,y2:s.b.y,stroke:color,'stroke-width':s.line?1.4:4,'stroke-opacity':s.line?.24:.38+(s.z+1)*.25}));if(!s.line&&s.i%3===0)art.append(el('circle',{cx:s.a.x,cy:s.a.y,r:3*s.a.scale,fill:color}));if(s.line&&s.i%7===0){const t=el('text',{x:(s.a.x+s.b.x)/2,y:s.a.y-4,fill:color,'font-size':10,'text-anchor':'middle',opacity:.6},['Δ','R','Ω','T','P'][Math.floor(s.i/7)%5]);art.append(t);}});
  links.forEach((l,i)=>{const p=point((l.y-45)/460,i%2);connections.append(el('path',{d:`M ${l.left?l.x+260:l.x} ${l.y} Q ${l.left?350:650} ${l.y} ${p.x} ${p.y}`,stroke:palette[i%5],'stroke-width':1.3,'stroke-opacity':.5,fill:'none'}));connections.append(el('circle',{cx:p.x,cy:p.y,r:5,fill:palette[i%5]}));});
  art.append(el('text',{x:500,y:540,fill:'#b7cada','font-size':13,'text-anchor':'middle','letter-spacing':3},'ALLISON HENSGEN · AUTHORED RESEARCH'));
 }
 function sync(){pause.textContent=running?'Pause motion':'Play motion';pause.setAttribute('aria-pressed',String(!running));}
 function animate(now){frame=0;if(!running||!visible||document.hidden)return;if(last)phase+=(Math.min(now-last,50)/1000)*.35;last=now;time.value=String(Math.round((phase%(2*Math.PI))/(2*Math.PI)*100));draw();frame=requestAnimationFrame(animate);}
 function start(){last=0;if(running&&visible&&!document.hidden&&!frame)frame=requestAnimationFrame(animate);}
 pause.onclick=()=>{running=!running;sync();if(!running){cancelAnimationFrame(frame);frame=0;}else start();};
 time.oninput=()=>{running=false;cancelAnimationFrame(frame);frame=0;phase=Number(time.value)/100*2*Math.PI;sync();draw();};depth.oninput=draw;
 new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;if(!visible){cancelAnimationFrame(frame);frame=0;}else start();}).observe(svg);
 document.addEventListener('visibilitychange',()=>{if(document.hidden){cancelAnimationFrame(frame);frame=0;}else start();});
 reduce.addEventListener('change',e=>{if(e.matches){running=false;cancelAnimationFrame(frame);frame=0;sync();}});sync();draw();start();
})();
