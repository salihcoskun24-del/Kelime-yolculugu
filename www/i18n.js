'use strict';
const I18n=(()=>{
 const languages=[{id:'tr',name:'Türkçe',flag:'🇹🇷'},{id:'en',name:'English',flag:'🇬🇧'},{id:'de',name:'Deutsch',flag:'🇩🇪'},{id:'es',name:'Español',flag:'🇪🇸'},{id:'ru',name:'Русский',flag:'🇷🇺'},{id:'ar',name:'العربية',flag:'🇸🇦'},{id:'fr',name:'Français',flag:'🇫🇷'}];
 let locale=AppPreferences.get().native||suggested();
 function suggested(){const id=(navigator.language||'en').split('-')[0];return languages.some(l=>l.id===id)?id:'en';}
 function number(value,options={}){return new Intl.NumberFormat(locale,options).format(value);}
 function translate(key,vars={}){const dictionaries=window.WordTrailLocales||{};let value=dictionaries[locale]?.[key]??dictionaries.en?.[key]??key;if(value&&typeof value==='object')value=value[new Intl.PluralRules(locale).select(Number(vars.count??vars.n??0))]??value.other??key;return String(value).replace(/\{(\w+)\}/g,(_,k)=>typeof vars[k]==='number'?number(vars[k]):String(vars[k]??`{${k}}`));}
 function apply(){document.documentElement.lang=locale;document.documentElement.dir=locale==='ar'?'rtl':'ltr';const meta=document.querySelector('meta[name="description"]');if(meta)meta.content=translate('meta');document.title='WordTrail: Learn Languages';window.dispatchEvent(new Event('wordtrail-locale'));}
 function set(id){if(!languages.some(l=>l.id===id))return;locale=id;AppPreferences.set({native:id});apply();}
 const date=value=>new Intl.DateTimeFormat(locale,{dateStyle:'medium'}).format(new Date(value+'T12:00:00'));
 apply();return Object.freeze({languages,suggested,get:()=>locale,set,t:translate,number,date,dir:id=>id==='ar'?'rtl':'ltr'});
})();
const t=(key,vars)=>I18n.t(key,vars);
