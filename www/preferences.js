'use strict';
window.AppPreferences=(()=>{
  const KEY='ky-preferences-v1';let value={theme:'system',showIntro:true};
  try{const saved=JSON.parse(localStorage.getItem(KEY)||'null');if(saved){if(['system','light','dark'].includes(saved.theme))value.theme=saved.theme;value.showIntro=saved.showIntro!==false;}}catch{}
  const media=window.matchMedia('(prefers-color-scheme: dark)');
  function apply(){const theme=value.theme==='system'?(media.matches?'dark':'light'):value.theme;document.documentElement.dataset.theme=theme;document.documentElement.style.colorScheme=theme;document.documentElement.style.backgroundColor=theme==='dark'?'#091e2c':'#f4f8fa';const meta=document.querySelector('meta[name="theme-color"]');if(meta)meta.content=theme==='dark'?'#091e2c':'#f4f8fa';}
  function set(patch){if(['system','light','dark'].includes(patch.theme))value.theme=patch.theme;if(typeof patch.showIntro==='boolean')value.showIntro=patch.showIntro;try{localStorage.setItem(KEY,JSON.stringify(value));}catch{}apply();}
  const onSystemChange=()=>{if(value.theme==='system')apply();};
  if(media.addEventListener)media.addEventListener('change',onSystemChange);else media.addListener(onSystemChange);
  window.addEventListener('storage',event=>{if(event.key!==KEY||!event.newValue)return;try{set(JSON.parse(event.newValue));}catch{}});
  apply();return Object.freeze({get:()=>({...value}),set,apply});
})();
