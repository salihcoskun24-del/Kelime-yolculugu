'use strict';
const PairData=(()=>{
 let catalog=null,active=null,request=null,serial=0;
 async function getCatalog(){if(!catalog){const response=await fetch('./data/catalog.json');if(!response.ok)throw Error('catalog');catalog=await response.json();}return catalog;}
 async function load(key){const manifest=await getCatalog(),entry=manifest.pairs[key];if(!entry?.available)throw Error('unavailable');request?.abort();request=new AbortController();const token=++serial;const response=await fetch('./'+entry.file,{signal:request.signal});if(!response.ok)throw Error('network');const data=await response.json();if(token!==serial)return null;if(data.target!==entry.target||data.native!==entry.native||data.words.length!==1000||data.sentences.length!==300||data.words.some(w=>!w.translation?.trim())||data.sentences.some(q=>!q.translation?.trim()))throw Error('invalid');active={key,data};const reg=await navigator.serviceWorker?.getRegistration().catch(()=>null);(reg?.active||navigator.serviceWorker?.controller)?.postMessage({type:'CACHE_PAIR',key});return data;}
 function cancel(){serial++;request?.abort();active=null;}
 return {getCatalog,load,cancel,get:()=>active};
})();
if('serviceWorker'in navigator)navigator.serviceWorker.ready.then(reg=>{const current=PairData.get();if(current)reg.active?.postMessage({type:'CACHE_PAIR',key:current.key});});
