'use strict';
(()=>{
 if(!('serviceWorker' in navigator)||location.protocol==='file:')return;
 let registration=null,worker=null,reloadRequested=false,reloading=false,controller=navigator.serviceWorker.controller,lastCheck=0,dismissed=null;
 const banner=document.createElement('div');banner.className='update-banner';banner.hidden=true;banner.setAttribute('role','status');
 banner.innerHTML=`<span>${t('update')}</span><button class="primary" id="apply-update">${t('refresh')}</button><button class="text-button" id="dismiss-update" aria-label="${t('later')}">×</button>`;
 window.addEventListener('wordtrail-locale',()=>{banner.querySelector('span').textContent=t('update');banner.querySelector('#apply-update').textContent=t('refresh');banner.querySelector('#dismiss-update').setAttribute('aria-label',t('later'));});
 document.body.appendChild(banner);
 function show(waiting){if(dismissed&&dismissed===waiting)return;worker=waiting;banner.hidden=false;}
 function watch(reg){
  registration=reg;
  if(reg.waiting&&navigator.serviceWorker.controller)show(reg.waiting);
  reg.addEventListener('updatefound',()=>{const installing=reg.installing;if(!installing)return;installing.addEventListener('statechange',()=>{if(installing.state==='installed'&&navigator.serviceWorker.controller&&reg.waiting)show(reg.waiting);});});
 }
 document.querySelector('#dismiss-update').addEventListener('click',()=>{dismissed=worker;banner.hidden=true;});
 document.querySelector('#apply-update').addEventListener('click',()=>{
  window.dispatchEvent(new Event('app-before-update'));
  const waiting=registration?.waiting||worker;
  if(!waiting||waiting.state==='activated'){location.reload();return;}
  reloadRequested=true;document.querySelector('#apply-update').disabled=true;
  waiting.postMessage({type:'SKIP_WAITING'});
  setTimeout(()=>{if(!reloading){document.querySelector('#apply-update').disabled=false;reloadRequested=false;}},10000);
 });
 navigator.serviceWorker.addEventListener('controllerchange',()=>{
  if(reloadRequested&&!reloading){reloading=true;location.reload();return;}
  if(controller&&controller!==navigator.serviceWorker.controller)show(null);
  controller=navigator.serviceWorker.controller;
 });
 navigator.serviceWorker.register('./sw.js',{updateViaCache:'none'}).then(watch).catch(()=>{});
 function check(){if(registration&&Date.now()-lastCheck>60000){lastCheck=Date.now();registration.update().catch(()=>{});}}
 window.addEventListener('focus',check);document.addEventListener('visibilitychange',()=>{if(!document.hidden)check();});
})();
