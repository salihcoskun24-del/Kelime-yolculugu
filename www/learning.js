'use strict';
const Learning = (() => {
  const LANGS=['en','de','es','ru','ar','fr'];
  const integer=(v,f=0)=>Number.isSafeInteger(v)&&v>=0?v:f;
  const day = (now=Date.now()) => {const d=new Date(now);return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;};
  const validDay=s=>typeof s==='string'&&/^\d{4}-\d{2}-\d{2}$/.test(s)&&!Number.isNaN(Date.parse(s+'T00:00:00Z'))&&new Date(s+'T00:00:00Z').toISOString().slice(0,10)===s;
  const ordinal=s=>Date.parse(s+'T00:00:00Z')/86400000;
  const addDay=(s,n)=>new Date((ordinal(s)+n)*86400000).toISOString().slice(0,10);
  const validKey=s=>typeof s==='string'&&/^(?:[1-9]|[1-9]\d|100):[0-9]$/.test(s);
  const count=()=>({correct:0,wrong:0});
  const freshStats=()=>({matching:count(),sentence:count(),practice:count(),review:count()});
  function normalizeProgress(p){
    const review={};
    if(p.review&&typeof p.review==='object')for(const [key,v] of Object.entries(p.review))if(validKey(key)&&v&&typeof v==='object')review[key]={box:[1,2,3].includes(v.box)?v.box:1,due:validDay(v.due)?v.due:addDay(day(),1),wrong:integer(v.wrong),correct:integer(v.correct)};
    const stats=freshStats();for(const kind of Object.keys(stats)){stats[kind].correct=integer(p.stats?.[kind]?.correct);stats[kind].wrong=integer(p.stats?.[kind]?.wrong);}
    const wordMarks={};if(p.wordMarks&&typeof p.wordMarks==='object')for(const [key,v] of Object.entries(p.wordMarks))if(validKey(key)&&['known','unknown'].includes(v))wordMarks[key]=v;
    return {review,stats,wordMarks,speedRecord:integer(p.speedRecord)};
  }
  function normalizeActivity(value={},now=Date.now()){
    const today=day(now),maxDateSeen=validDay(value.maxDateSeen)?value.maxDateSeen:today;
    const target=[1,2,3].includes(value.target)?value.target:1;
    const lastCompleted=validDay(value.lastCompleted)?value.lastCompleted:null;
    const current=value.current&&validDay(value.current.date)?{date:value.current.date,lessons:integer(value.current.lessons),practiceCorrect:integer(value.current.practiceCorrect),reviewAnswered:integer(value.current.reviewAnswered),goal:[1,2,3].includes(value.current.goal)?value.current.goal:target,completed:value.current.completed===true}:{date:maxDateSeen,lessons:0,practiceCorrect:0,reviewAnswered:0,goal:target,completed:false};
    const activity={target,maxDateSeen,current,lastCompleted,streak:integer(value.streak),best:Math.max(integer(value.best),integer(value.streak)),reviewAnswered:integer(value.reviewAnswered)};
    touchDay(activity,now);return activity;
  }
  function touchDay(activity,now=Date.now()){
    const today=day(now);
    if(today<activity.maxDateSeen)return {date:activity.maxDateSeen,rollback:true};
    if(today>activity.maxDateSeen)activity.maxDateSeen=today;
    if(activity.current.date!==today)activity.current={date:today,lessons:0,practiceCorrect:0,reviewAnswered:0,goal:activity.target,completed:false};
    if(activity.lastCompleted&&ordinal(today)-ordinal(activity.lastCompleted)>1)activity.streak=0;
    return {date:today,rollback:false};
  }
  const anchor=(state,now=Date.now())=>touchDay(state.activity,now).date;
  const units=activity=>activity.current.lessons+Math.floor((activity.current.practiceCorrect+activity.current.reviewAnswered)/10);
  function definitions(){return [...[3,7,30].map(n=>({id:`streak-${n}`})),...LANGS.flatMap(l=>[10,50,100].map(n=>({id:`levels-${l}-${n}`}))),...['speed-first','review-100','six-languages'].map(id=>({id}))];}
  function normalizeBadges(value){const out={},ids=new Set(definitions().map(b=>b.id));if(value&&typeof value==='object')for(const [id,v] of Object.entries(value))if(ids.has(id)&&validDay(v?.date))out[id]={date:v.date,source:v.source==='migration'?'migration':'earned'};return out;}
  function award(state,id,date,source='earned'){if(state.badges[id])return [];state.badges[id]={date,source};return [id];}
  function qualify(state,now=Date.now()){
    const a=state.activity,clock=touchDay(a,now);if(clock.rollback||a.current.completed||units(a)<a.current.goal)return [];
    a.current.completed=true;
    if(a.lastCompleted!==clock.date){a.streak=a.lastCompleted===addDay(clock.date,-1)?a.streak+1:1;a.lastCompleted=clock.date;a.best=Math.max(a.best,a.streak);}
    return [3,7,30].filter(n=>a.streak===n).flatMap(n=>award(state,`streak-${n}`,clock.date));
  }
  function setTarget(state,target,now=Date.now()){if(![1,2,3].includes(target))return [];touchDay(state.activity,now);state.activity.target=target;if(!state.activity.current.completed)state.activity.current.goal=target;return qualify(state,now);}
  function markWord(state,lang,key,correct,now=Date.now()){
    if(!validKey(key))return;
    const p=state.progress[lang],date=anchor(state,now),old=p.review[key];
    if(correct){if(!old)return;const box=Math.min(3,old.box+1);p.review[key]={box,due:addDay(date,[0,1,3,7][box]),wrong:old.wrong,correct:integer(old.correct)+1};}
    else p.review[key]={box:1,due:addDay(date,1),wrong:integer(old?.wrong)+1,correct:integer(old?.correct)};
  }
  function recordAnswer(state,lang,kind,correct,key,now=Date.now()){
    const p=state.progress[lang],counter=p.stats[kind];if(!counter)return [];
    counter[correct?'correct':'wrong']++;
    markWord(state,lang,key,correct,now);
    const clock=touchDay(state.activity,now);let awards=[];
    if(kind==='review'){
      const before=state.activity.reviewAnswered;state.activity.reviewAnswered++;
      if(before<100&&state.activity.reviewAnswered>=100)awards.push(...award(state,'review-100',clock.date));
    }
    if((kind==='review'||(kind==='practice'&&correct))&&!clock.rollback){state.activity.current[kind==='review'?'reviewAnswered':'practiceCorrect']++;awards.push(...qualify(state,now));}
    return awards;
  }
  function recordCompletion(state,lang,previousCount,previousAll,now=Date.now()){
    const clock=touchDay(state.activity,now);let awards=[];
    for(const n of [10,50,100])if(previousCount<n&&state.progress[lang].completed.length>=n)awards.push(...award(state,`levels-${lang.split('-')[0]}-${n}`,clock.date));
    if(!previousAll&&LANGS.every(l=>Object.entries(state.progress).some(([key,p])=>key.split('-')[0]===l&&p.completed.length>0)))awards.push(...award(state,'six-languages',clock.date));
    if(!clock.rollback){state.activity.current.lessons++;awards.push(...qualify(state,now));}
    return awards;
  }
  function migrateSections(state,now=Date.now()){for(const lang of Object.keys(state.progress))for(const n of [10,50,100])if(state.progress[lang].completed.length>=n)award(state,`levels-${lang.split('-')[0]}-${n}`,day(now),'migration');}
  function speedResult(state,lang,score,now=Date.now()){const p=state.progress[lang];if(score<=p.speedRecord)return {record:false,awards:[]};const first=p.speedRecord===0;p.speedRecord=score;return {record:true,awards:first?award(state,'speed-first',anchor(state,now)):[]};}
  const due=(state,lang,now=Date.now())=>{const date=anchor(state,now);return Object.entries(state.progress[lang].review).filter(([,v])=>v.due<=date).sort((a,b)=>a[1].due.localeCompare(b[1].due)||b[1].wrong-a[1].wrong).map(([key])=>key);};
  const accuracy=p=>{const totals=Object.values(p.stats).reduce((s,c)=>({correct:s.correct+c.correct,wrong:s.wrong+c.wrong}),{correct:0,wrong:0});return {...totals,total:totals.correct+totals.wrong,percent:totals.correct+totals.wrong?Math.round(totals.correct/(totals.correct+totals.wrong)*100):null};};
  const fold=(s,lang)=>String(s).trim().toLocaleLowerCase(lang).normalize('NFD').replace(/\p{M}/gu,'').replace(/ß/g,'ss').replace(/œ/g,'oe').replace(/æ/g,'ae').replace(/\s+/g,' ');
  function typed(answer,input,lang,known=[]){
    const a=fold(answer,lang),b=fold(input,lang);if(!b)return {empty:true,correct:false,near:false};
    if(a===b)return {correct:true,near:answer.trim()!==input.trim()};
    if(a.length<5||Math.abs(a.length-b.length)>1||known.some(word=>fold(word,lang)===b))return {correct:false,near:false};
    let row=Array.from({length:b.length+1},(_,i)=>i);for(let i=1;i<=a.length;i++){const next=[i];for(let j=1;j<=b.length;j++)next[j]=Math.min(next[j-1]+1,row[j]+1,row[j-1]+(a[i-1]===b[j-1]?0:1));row=next;}
    return {correct:row[b.length]<=1,near:row[b.length]<=1};
  }
  return Object.freeze({day,validDay,addDay,validKey,normalizeProgress,normalizeActivity,touchDay,anchor,units,definitions,normalizeBadges,award,qualify,setTarget,markWord,recordAnswer,recordCompletion,migrateSections,speedResult,due,accuracy,fold,typed});
})();
