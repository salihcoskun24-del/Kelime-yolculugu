'use strict';
const app = document.querySelector('#app');
const LANGUAGE_LIST = [
  {id:'en',name:'İngilizce',native:'English',flag:'🇬🇧',locale:'en-US',dir:'ltr'},
  {id:'de',name:'Almanca',native:'Deutsch',flag:'🇩🇪',locale:'de-DE',dir:'ltr'},
  {id:'es',name:'İspanyolca',native:'Español',flag:'🇪🇸',locale:'es-ES',dir:'ltr'},
  {id:'ru',name:'Rusça',native:'Русский',flag:'🇷🇺',locale:'ru-RU',dir:'ltr'},
  {id:'ar',name:'Arapça',native:'العربية',flag:'🇸🇦',locale:'ar-SA',dir:'rtl'},
  {id:'fr',name:'Fransızca',native:'Français',flag:'🇫🇷',locale:'fr-FR',dir:'ltr'}
];
const STORAGE_KEY = 'ky-v2';
const escapeHTML = s => String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const clamp = (n,lo,hi,fallback) => Number.isInteger(n)?Math.max(lo,Math.min(hi,n)):fallback;
const freshProgress = () => ({unlocked:1,completed:[],jump:5,hint:5,session:null,recovery:null,rewardedLevels:[],...Learning.normalizeProgress({})});
function cleanProgress(value={}){
  const completed = Array.isArray(value.completed)?[...new Set(value.completed.filter(n=>Number.isInteger(n)&&n>=1&&n<=100))].sort((a,b)=>a-b):[];
  return {unlocked:Math.max(clamp(value.unlocked,1,100,1),Math.min(100,Math.max(0,...completed)+1)),completed,
    jump:GameEconomy.balance(value.jump),hint:GameEconomy.balance(value.hint),session:value.session||null,recovery:value.recovery||null,rewardedLevels:GameEconomy.levels([...(Array.isArray(value.rewardedLevels)?value.rewardedLevels:[]),...completed]),...Learning.normalizeProgress(value)};
}
function normalizeState(value){
  const result={version:3,language:'en',sound:true,activity:Learning.normalizeActivity(),badges:{},badgeMigrationDone:true,lives:GameEconomy.refillLives(null),progress:Object.fromEntries(LANGUAGE_LIST.map(l=>[l.id,freshProgress()]))};
  if(!value||typeof value!=='object')return result;
  result.sound=value.sound!==false;
  result.lives=GameEconomy.refillLives(value.lives);
  result.activity=Learning.normalizeActivity(value.activity||{});result.badges=Learning.normalizeBadges(value.badges);
  if(LANGUAGE_LIST.some(l=>l.id===value.language))result.language=value.language;
  if([2,3].includes(value.version)&&value.progress&&typeof value.progress==='object'){
    for(const l of LANGUAGE_LIST)result.progress[l.id]=cleanProgress(value.progress[l.id]||{});
  }else if(Number.isInteger(value.unlocked))result.progress.en=cleanProgress(value);
  if(value.badgeMigrationDone!==true)Learning.migrateSections(result);
  return result;
}
let state=normalizeState(null),storageWarning=false;
try{
  const current=localStorage.getItem(STORAGE_KEY);
  state=normalizeState(JSON.parse(current||localStorage.getItem('ky-v1')||'null'));
  localStorage.setItem(STORAGE_KEY,JSON.stringify(state));
}catch{storageWarning=true;}
let screen='languages',game=null,timer=null,hintTimer=null,audioCtx=null,installPrompt=null;
let lifeDialog=null,adBusy=false,pendingLevel=null;
const language=()=>LANGUAGE_LIST.find(l=>l.id===state.language);
const progress=()=>state.progress[state.language];
const vocabulary=()=>state.language==='en'?WORDS:VOCABULARIES[state.language];
function save(){try{localStorage.setItem(STORAGE_KEY,JSON.stringify(state));}catch{toast('İlerleme kaydedilemedi. Tarayıcı depolama iznini kontrol et.');}}
function toast(message){const t=document.querySelector('#toast');t.textContent=message;t.classList.add('show');clearTimeout(toast.t);toast.t=setTimeout(()=>t.classList.remove('show'),3300);}
function stopPronunciation(){if('speechSynthesis' in window){try{window.speechSynthesis.cancel();}catch{}}}
function pronounce(word){
  if(!state.sound)return;
  if(!('speechSynthesis' in window)||!('SpeechSynthesisUtterance' in window)){
    toast('Bu tarayıcı sesli okumayı desteklemiyor. Chrome veya Safari ile dene.');return;
  }
  try{
    const synthesis=window.speechSynthesis,lang=language();
    synthesis.cancel();
    const utterance=new SpeechSynthesisUtterance(word);
    const voices=synthesis.getVoices().filter(v=>v.lang.toLowerCase().split(/[-_]/)[0]===lang.id);
    const voice=voices.find(v=>v.lang.toLowerCase().replace('_','-')===lang.locale.toLowerCase())||voices[0];
    if(voice)utterance.voice=voice;
    utterance.lang=voice?voice.lang:lang.locale;
    utterance.rate=0.85;utterance.pitch=1;utterance.volume=1;
    utterance.onerror=event=>{if(!['canceled','interrupted'].includes(event.error))toast(`${lang.name} sesi kullanılamadı. Telefonun ses paketini ve ses ayarlarını kontrol et.`);};
    synthesis.speak(utterance);
  }catch{toast('Sesli okuma başlatılamadı. Tarayıcı ve ses ayarlarını kontrol et.');}
}
function sound(ok=true){if(!state.sound)return;try{audioCtx=audioCtx||new(window.AudioContext||window.webkitAudioContext)();audioCtx.resume();const o=audioCtx.createOscillator(),g=audioCtx.createGain();o.connect(g);g.connect(audioCtx.destination);o.type='sine';o.frequency.setValueAtTime(ok?650:180,audioCtx.currentTime);o.frequency.exponentialRampToValueAtTime(ok?980:90,audioCtx.currentTime+.13);g.gain.setValueAtTime(.07,audioCtx.currentTime);g.gain.exponentialRampToValueAtTime(.001,audioCtx.currentTime+.2);o.start();o.stop(audioCtx.currentTime+.22);}catch{}}
function clearHint(){clearTimeout(hintTimer);if(game)game.hintVisible=false;app.querySelectorAll('.hinted').forEach(b=>b.classList.remove('hinted'));}
function cleanup(){cleanupStudy();stopPronunciation();clearTimeout(timer);clearHint();}
function syncLives(){
  const updated=GameEconomy.refillLives(state.lives);
  if(updated.count!==state.lives.count||updated.nextRefillAt!==state.lives.nextRefillAt){state.lives=updated;save();}
}
function lifeTime(){
  if(state.lives.count===GameEconomy.MAX_LIVES)return 'Canların dolu';
  const seconds=Math.max(0,Math.ceil((state.lives.nextRefillAt-Date.now())/1000));
  return `${Math.floor(seconds/60).toString().padStart(2,'0')}:${(seconds%60).toString().padStart(2,'0')} sonra +1`;
}
function lifeStrip(){
  syncLives();
  return `<button class="life-strip" data-action="lives" aria-label="Canların: ${state.lives.count} / 5"><span class="life-hearts" aria-hidden="true">${Array.from({length:5},(_,i)=>`<span data-heart="${i}" class="${i<state.lives.count?'full':'empty'}">♥</span>`).join('')}</span><strong><span data-life-count>${state.lives.count}</span> / 5</strong><span class="life-time" data-life-timer>${lifeTime()}</span></button>`;
}
function updateLifeUI(){
  app.querySelectorAll('[data-life-count]').forEach(el=>el.textContent=state.lives.count);
  app.querySelectorAll('[data-life-timer]').forEach(el=>el.textContent=lifeTime());
  app.querySelectorAll('[data-action="lives"]').forEach(el=>el.setAttribute('aria-label',`Canların: ${state.lives.count} / 5`));
  app.querySelectorAll('[data-heart]').forEach(el=>{el.classList.toggle('full',Number(el.dataset.heart)<state.lives.count);el.classList.toggle('empty',Number(el.dataset.heart)>=state.lives.count);});
  app.querySelectorAll('.word,.quiz-choice,[data-action="next-sentence"]').forEach(button=>{
    if(state.lives.count===0){
      if(!button.hasAttribute('data-life-disabled'))button.dataset.lifeDisabled=button.disabled?'1':'0';
      button.disabled=true;
    }else if(button.hasAttribute('data-life-disabled')){
      button.disabled=button.dataset.lifeDisabled==='1';delete button.dataset.lifeDisabled;
    }
  });
  updateTools();
  if(lifeDialog){
    lifeDialog.querySelector('[data-life-title]').textContent=state.lives.count===0?'Canların tükendi':state.lives.count===5?'Canların dolu':'Biraz enerji topla';
    lifeDialog.querySelector('[data-life-count]').textContent=state.lives.count;
    lifeDialog.querySelector('[data-life-timer]').textContent=lifeTime();
    const button=lifeDialog.querySelector('[data-action="watch-ad"]');
    button.disabled=adBusy||!RewardedAds.isAvailable()||state.lives.count>=5;
    button.textContent=adBusy?'Reklam açılıyor…':'Reklam izle · +1 can';
    lifeDialog.querySelector('[data-ad-unavailable]').hidden=RewardedAds.isAvailable();
    lifeDialog.querySelector('[data-action="life-continue"]').textContent=state.lives.count>0?'Oyuna devam et →':'Haritaya dön';
    lifeDialog.querySelector('[data-life-explanation]').textContent=state.lives.count===0?'İlerlemen saklandı. Yeni bir can geldiğinde kaldığın yerden devam edebilirsin.':state.lives.count===5?'5 canın hazır. Yolculuğuna devam edebilirsin.':'Canların tüm dillerde ortaktır. Cümle testindeki her yanlış cevap 1 can götürür.';
  }
}
function refreshLives(){syncLives();updateLifeUI();refreshLearningClock();}
function requireLife(){refreshLives();if(state.lives.count>0)return true;openLives();return false;}
function openLives(){
  syncLives();
  if(!lifeDialog){
    lifeDialog=document.createElement('dialog');lifeDialog.className='life-dialog';
    lifeDialog.setAttribute('aria-labelledby','life-dialog-title');
    lifeDialog.innerHTML=`<button class="life-close iconbtn" data-action="life-close" aria-label="Pencereyi kapat">×</button><div class="life-orb" aria-hidden="true">♥</div><div class="eyebrow">YOLCULUĞUNA BİR MOLA</div><h2 id="life-dialog-title" data-life-title></h2><p data-life-explanation></p><div class="life-dialog-count"><span data-life-count></span><small>/ 5 can</small></div><div class="life-refill"><b data-life-timer></b><span>Eksilen canlar 10 dakikada bir yenilenir.</span></div><button class="primary" data-action="watch-ad">Reklam izle · +1 can</button><p class="tiny" data-ad-unavailable>Reklamlar henüz hazır değil. Canların otomatik yenilenir.</p><p class="life-message" role="status" data-ad-feedback></p><button class="secondary" data-action="life-continue">Oyuna devam et →</button>`;
    lifeDialog.addEventListener('click',async event=>{
      const button=event.target.closest('button');if(!button||button.disabled)return;
      if(button.dataset.action==='life-close'){lifeDialog.close();return;}
      if(button.dataset.action==='watch-ad'){await watchRewardedAd();return;}
      if(button.dataset.action==='life-continue'){
        refreshLives();lifeDialog.close();
        if(state.lives.count===0){pendingLevel=null;screen='map';render();return;}
        const pending=pendingLevel;pendingLevel=null;
        if(pending&&pending.language===state.language)start(pending.level,false,null,pending.skipIntro===true);
        else if(screen==='game'&&game?.matches.length===10)renderQuiz();
      }
    });
    document.body.appendChild(lifeDialog);
  }
  updateLifeUI();
  if(!lifeDialog.open)lifeDialog.showModal();
}
async function watchRewardedAd(){
  syncLives();
  if(adBusy||state.lives.count>=5||!RewardedAds.isAvailable())return;
  adBusy=true;updateLifeUI();lifeDialog.close();
  let credited=false,added=0,message='';
  try{
    const result=await RewardedAds.show({onReward:()=>{
      if(credited)return;credited=true;syncLives();
      const before=state.lives.count;state.lives=GameEconomy.addLife(state.lives);
      added=state.lives.count-before;save();updateLifeUI();
    }});
    message=result.rewarded?(added?'Reklam tamamlandı. +1 can kazandın!':'Canların zaten dolu.'):'Reklam tamamlanmadı; can eklenmedi.';
  }catch(error){message=error.message||'Reklam yüklenemedi. Daha sonra tekrar dene.';}
  finally{adBusy=false;openLives();lifeDialog.querySelector('[data-ad-feedback]').textContent=message;}
}

function header(){return `<header><div class="brand"><span class="logo">✦</span> KELİME YOLCULUĞU</div><button class="iconbtn" data-action="sound" aria-label="Sesi ${state.sound?'kapat':'aç'}">${state.sound?'♫':'♩'}</button></header>${lifeStrip()}`;}
function nav(){return `<nav class="nav" aria-label="Ana menü">${[['home','⌂','Keşfet'],['map','♧','Bölümler'],['practice','▷','Pratik'],['words','▤','Kelimeler'],['stats','▥','İstatistik'],['settings','⚙','Ayarlar']].map(([id,icon,label])=>`<button data-go="${id}" class="${screen===id?'active':''}"><b>${icon}</b>${label}</button>`).join('')}</nav>`;}
function languageBadge(){const l=language();return `<button class="language-badge" data-go="languages" aria-label="Dil değiştir: ${l.name}"><span>${l.flag}</span> ${l.name} <span aria-hidden="true">⌄</span></button>`;}
function tools(inGame=false){const p=progress();return `<aside class="tools ${inGame?'game-tools':''}" aria-label="Bölüm yardımcıları"><button class="tool" data-action="jump" ${p.jump===0||state.lives.count===0?'disabled':''}><span>◎ Kaldığım yere gel</span><b data-balance="jump">${p.jump}</b></button><button class="tool" data-action="hint" ${p.hint===0||state.lives.count===0?'disabled':''}><span>✧ İpucu</span><b data-balance="hint">${p.hint}</b></button></aside>`;}
function updateTools(){const p=progress();for(const type of ['jump','hint']){const b=app.querySelector(`[data-action="${type}"]`);if(b){b.disabled=p[type]===0||state.lives.count===0;b.querySelector('[data-balance]').textContent=p[type];}}}
function region(n){return ['İlk Kelimeler','Ev ve Günlük Yaşam','Hareket ve İletişim','İnsan ve Duygular','Şehir ve Keşif','Öğrenme ve Çalışma','Toplum ve Dünya','Bilim ve Yöntem','Soyut Kavramlar','Ustalık Yolculuğu'][Math.floor((n-1)/10)];}
function difficulty(n){return n<=30?'Başlangıç':n<=60?'Orta':n<=85?'İleri':'Ustalık';}
function render(){
  cleanup();game=null;refreshLearningClock();window.scrollTo(0,0);
  const l=language(),p=progress();let body='';
  if(screen==='languages'){
    body=`${header()}<div class="eyebrow">6 DİL • 6 YENİ DÜNYA</div><h1>Bugün hangi dili<br><span>keşfedelim?</span></h1><p>Yolculuğunu seç. Her dilde 100 bölüm,<br>1.000 kelime ve sana özel ilerleme.</p><div class="language-grid">${LANGUAGE_LIST.map(lang=>{const lp=state.progress[lang.id];return `<button class="language-card ${lang.id===state.language?'last-language':''}" data-language="${lang.id}"><span class="language-flag">${lang.flag}</span><strong>${lang.name}</strong><span class="native-name" lang="${lang.id}" dir="${lang.dir}">${lang.native}</span><span class="language-progress">${lp.completed.length?`${lp.completed.length} bölüm tamamlandı`:'İlk adımını at'} <span>→</span></span></button>`;}).join('')}</div><p class="footer-note">Diller arasında geçiş yap; ilerlemen ve hakların saklı kalsın.</p>`;
  }
  if(screen==='home'){
    body=`${header()}${languageBadge()}<div class="eyebrow">ÖĞREN • EŞLEŞTİR • KEŞFET</div><h1>Yeni kelimeler,<br><span>yeni ufuklar.</span></h1><p>${l.name} öğrenmenin en keyifli yolculuğu.<br>Her eşleşmede bir adım daha ileri!</p>${island}${homeLearning()}<div class="stats"><div class="stat"><strong style="color:var(--gold)">${p.unlocked}</strong><span>Aktif bölüm</span></div><div class="stat"><strong style="color:var(--mint)">${p.completed.length*10}</strong><span>Tamamlanan kelime</span></div><div class="stat"><strong>100</strong><span>Keşfedilecek bölüm</span></div></div><div class="section"><h2>Yolculuğuna devam et</h2><span class="pill">${l.name.toLocaleUpperCase('tr')} → TÜRKÇE</span></div><div class="journey"><div class="row"><div><span class="eyebrow">BÖLÜM ${p.unlocked} · ${difficulty(p.unlocked)}</span><h3 style="margin:8px 0">${region(p.unlocked)}</h3></div><span style="font-size:30px">✦</span></div><div class="row tiny"><span>Genel ilerleme</span><span>${p.completed.length} / 100 bölüm</span></div><div class="progress"><i style="width:${p.completed.length}%"></i></div><button class="primary" data-start="${p.unlocked}">${p.session?'Kaldığın yerden devam et':'Yolculuğa devam et'} <span style="float:right">→</span></button></div><div class="footer-note">${l.name} · 100 bölüm · 1.000 kelime</div>`;
  }
  if(screen==='map'){
    body=`${header()}${languageBadge()}<div class="eyebrow">ADIM ADIM İLERLE</div><h1>Senin <span>yolculuğun.</span></h1><p>Her bölümde 10 kelime eşleştir, 3 cümlede boşluk doldur.<br>Kolaydan zora yeni durakları keşfet.</p><p class="tiny">◎ Yanlış öncesi eşleşmelerini geri getir · ✧ Doğru çifti gör<br>Her ilk bölüm bitişinde +1 ipucu; her 5. bölümde ayrıca +1 geri dönme hakkı.</p><div class="map">${Array.from({length:100},(_,i)=>{const n=i+1,locked=n>p.unlocked,done=p.completed.includes(n);return `${i%10===0?`<div class="map-region"><span>${i/10+1}. ADA</span><strong>${region(n)}</strong><small>${difficulty(n)}</small></div>`:''}<div class="maprow"><button class="node ${locked?'locked':!done?'current':''}" style="--x:${[0,-65,-90,-65,0,65,90,65][i%8]}px" data-level="${n}" data-start="${n}" ${locked?'disabled':''} aria-label="Bölüm ${n}${locked?', kilitli':done?', tamamlandı':''}">${locked?'⌑':done?'✓':n}<small>Bölüm ${n}</small></button></div>`;}).join('')}</div>`;
  }
  if(screen==='words'){
    body=`${header()}${languageBadge()}<div class="eyebrow">KELİME DEFTERİN</div><h1>Keşfettiğin <span>kelimeler.</span></h1><p>Tamamladığın ${l.name} bölümlerini burada tekrar et. Kelimeye dokun, telaffuzunu dinle.</p><input id="search" class="search" placeholder="${l.name} veya Türkçe kelime ara…" aria-label="Kelime ara"><div id="wordlist"></div>`;
  }
  if(screen==='settings'){
    body=`${header()}${languageBadge()}<div class="eyebrow">SANA GÖRE</div><h1>Yolculuk <span>ayarları.</span></h1>${learningSettings()}<div class="setting row"><span>Sesler ve kelime telaffuzu</span><button class="iconbtn" data-action="sound">${state.sound?'Açık':'Kapalı'}</button></div><div class="setting"><strong>${l.name} yardımcı hakları</strong><p>Kaldığım yere gel: <b>${p.jump}</b><br>İpucu: <b>${p.hint}</b></p><p class="tiny">Başlangıçta 5’er hak verilir. İlk kez bitirdiğin her bölüm +1 ipucu; 5, 10, 15… numaralı bölümler ayrıca +1 geri dönme hakkı kazandırır.</p></div><div class="setting"><strong>Nasıl oynanır?</strong><p>${l.name} kelimeye dokununca telaffuzunu dinle, ardından Türkçe karşılığını seç. 10 doğru eşleşmeden sonra 3 cümlede boşluk doldur; ardından sonraki bölüm açılır. Eşleştirmede ilk yanlışta devam edersin; ikinci yanlışta bölüm yeniden başlar.</p><p>İpucu bir doğru çifti işaretler; eşleştirmeyi sen yaparsın. Kaldığım yere gel, yanlış cevapla sıfırlanan bölümde önceki doğru eşleşmelerini 1 hak karşılığında geri getirir. Örneğin 8 doğru yaptıysan yeniden 8/10 olur. Geri getirilecek eşleşme yoksa hak harcanmaz. Cümle testindeki her yanlış cevap 1 can götürür. 5 can tüm dillerde ortaktır; eksilen canlar 10 dakikada bir yenilenir. Can sıfırken oynayamazsın; eşleşmelerin ve doğru cümlelerin saklanır.</p></div><div class="setting"><strong>Telefonuna ekle</strong><p>Android: Chrome menüsü → Ana ekrana ekle / Uygulamayı yükle.<br>iPhone: Safari → Paylaş → Ana Ekrana Ekle.</p><button class="secondary" data-action="install">Uygulamayı yükle</button><p class="tiny">Çevrimdışı kullanım için HTTPS üzerinden ilk açılışı tamamla. Telaffuz için ${l.name} ses paketi gerekebilir; ses kalitesi ve çevrimdışı ses desteği cihaza bağlıdır.</p></div><div class="setting"><strong>İlerlemen bu cihazda saklanır</strong><p>Tüm dillerin ilerlemesini ve haklarını yedekleyebilirsin. Tarayıcı verilerini silmek kaydı siler.</p><button class="secondary" data-action="export">Tüm dilleri yedekle ↓</button><button class="secondary" data-action="import">Yedekten geri yükle ↑</button><input type="file" accept="application/json" id="backup" hidden><button class="secondary danger" data-action="reset">${l.name} ilerlemesini sıfırla</button><p class="tiny">İlerlemeyi sıfırlamak canlarını veya yardımcı haklarını yenilemez. Aynı bölümden tekrar ödül alınmaz.</p></div><p class="footer-note">Kelime Yolculuğu · Sürüm 3.0<br>6 dil · 6.000 kelime · Hesap yok</p>`;
  }
  const feature=featurePage(screen);if(feature!==null)body=feature;
  const isMap=screen==='map';
  app.innerHTML=`<main class="screen ${isMap?'with-tools':''}">${body}</main>${screen==='languages'?'':nav()}${isMap?tools():''}`;
  if(screen==='words')listWords('');
  updateLifeUI();
}
function listWords(q){
  const l=language(),query=Learning.fold(q,l.id);
  const list=completedWords().filter(word=>word.pair.some(text=>Learning.fold(text,l.id).includes(query)||text.toLocaleLowerCase('tr').includes(q.toLocaleLowerCase('tr'))));
  document.querySelector('#wordlist').innerHTML=list.length?list.map(({key,pair:[word,tr]})=>`<article class="word-entry"><button class="worditem" data-speak="${escapeHTML(word)}"><strong lang="${l.id}" dir="${l.dir}">${escapeHTML(word)}</strong><span>${escapeHTML(tr)} ♫</span></button><div class="word-actions"><button class="mini-button ${progress().wordMarks[key]==='known'?'active':''}" data-self-key="${key}" data-known="true">✓ Bildim</button><button class="mini-button ${progress().wordMarks[key]==='unknown'?'active':''}" data-self-key="${key}" data-known="false">↻ Bilemedim</button>${progress().review[key]?`<small>Kutu ${progress().review[key].box}</small>`:''}</div></article>`).join(''):`<p>${q?'Aramana uygun kelime bulunamadı.':'Henüz tamamlanmış bölüm yok. İlk adana doğru yola çık!'}</p>`;
}
function shuffle(a){const b=[...a];for(let i=b.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[b[i],b[j]]=[b[j],b[i]];}return b;}
function validSession(s,level,pairs){
  const order=a=>Array.isArray(a)&&a.length===10&&new Set(a).size===10&&a.every(x=>Number.isInteger(x)&&x>=0&&x<10);
  return s&&s.level===level&&order(s.left)&&order(s.right)&&Array.isArray(s.matches)&&s.matches.length<=10&&(s.mistakes===undefined||(Number.isInteger(s.mistakes)&&s.mistakes>=0&&s.mistakes<=1))&&(s.quizProgress===undefined||(Number.isInteger(s.quizProgress)&&s.quizProgress>=0&&s.quizProgress<=3))&&(s.matches.length===10||!s.quizProgress)&&s.matches.every(pair=>Array.isArray(pair)&&pair.length===2&&pair.every(i=>Number.isInteger(i)&&i>=0&&i<10)&&pairs[pair[0]][1]===pairs[pair[1]][1])&&new Set(s.matches.map(x=>x[0])).size===s.matches.length&&new Set(s.matches.map(x=>x[1])).size===s.matches.length;
}
function sessionData(){return {level:game.level,left:[...game.left],right:[...game.right],matches:game.matches.map(pair=>[...pair]),quizProgress:game.quizProgress||0,mistakes:game.mistakes||0};}
function snapshot(){if(!game)return;progress().session=sessionData();save();}
function start(n,fresh=false,restored=null,skipIntro=false){
  const p=progress(),l=language();
  if(!Number.isInteger(n)||n>p.unlocked||n<1||n>100)return;
  const pairs=vocabulary().slice((n-1)*10,n*10),session=validSession(restored,n,pairs)?restored:!fresh&&validSession(p.session,n,pairs)?p.session:null;
  if(!session&&!fresh&&!skipIntro&&AppPreferences.get().showIntro){showIntro(n);return;}
  if(!requireLife()){pendingLevel={language:state.language,level:n,skipIntro:true};return;}
  pendingLevel=null;cleanup();screen='game';
  game={level:n,pairs,left:session?[...session.left]:shuffle(Array.from({length:10},(_,i)=>i)),right:session?[...session.right]:shuffle(Array.from({length:10},(_,i)=>i)),matches:session?session.matches.map(pair=>[...pair]):[],selected:null,blocked:false,hintVisible:false,quizProgress:clamp(session?.quizProgress,0,3,0),mistakes:clamp(session?.mistakes,0,1,0)};
  snapshot();window.scrollTo(0,0);
  if(game.matches.length===10){renderQuiz();return;}
  const matched=(id,side)=>game.matches.some(pair=>pair[side]===id);
  app.innerHTML=`<main class="screen game-screen"><div class="gamehead"><button class="iconbtn" data-go="map" aria-label="Haritaya dön">‹</button><div style="text-align:center"><div class="eyebrow">${l.flag} ${l.name} · ${difficulty(n)}</div><h2>Bölüm ${n} <span class="tiny">/ 100</span></h2></div><button class="iconbtn" data-action="sound" aria-label="Sesi aç veya kapat">${state.sound?'♫':'♩'}</button></div>${lifeStrip()}<div class="game-status"><div class="match-error-line"><span data-match-errors>Hata: ${game.mistakes}/2</span></div><div class="row tiny"><span id="status" role="status">${game.matches.length?'Kaldığın yerden devam et':'İlk kelimeni seç'}</span><strong id="count" style="color:var(--mint)">${game.matches.length} / 10</strong></div><div class="progress"><i id="gameprogress" style="width:${game.matches.length*10}%"></i></div></div><div class="board"><div class="col-title">${l.name.toLocaleUpperCase('tr')}</div><div class="col-title">TÜRKÇE</div>${game.left.map((id,i)=>`<button class="word ${matched(id,0)?'matched':''}" lang="${l.id}" dir="${l.dir}" data-id="${id}" data-side="0" ${matched(id,0)?'disabled':''}>${escapeHTML(pairs[id][0])}</button><button class="word ${matched(game.right[i],1)?'matched':''}" lang="tr" dir="ltr" data-id="${game.right[i]}" data-side="1" ${matched(game.right[i],1)?'disabled':''}>${escapeHTML(pairs[game.right[i]][1])}</button>`).join('')}</div><div class="game-info">♫ ${l.name} kelimeye dokun, dinle ve eşleştir.<br>Her denemede 2 hata hakkın var. İkinci yanlışta bölüm yeniden başlar.</div></main>${tools(true)}`;
  updateLifeUI();
}
function markSelected(item){game.selected=item;item.btn.classList.add('selected');item.btn.setAttribute('aria-pressed','true');}
function choose(btn){
  if(!game||game.blocked||btn.disabled||!requireLife())return;
  clearHint();
  const id=Number(btn.dataset.id),side=Number(btn.dataset.side),old=game.selected;
  if(side===0)pronounce(game.pairs[id][0]);
  if(!old){markSelected({id,side,btn});return;}
  old.btn.classList.remove('selected');old.btn.setAttribute('aria-pressed','false');game.selected=null;
  if(old.btn===btn)return;
  if(old.side===side){markSelected({id,side,btn});return;}
  const enId=side===0?id:old.id,trId=side===1?id:old.id;
  if(game.pairs[enId][1]===game.pairs[trId][1]){
    learningAnswer('matching',true,`${game.level}:${enId}`);
    sound();for(const b of [btn,old.btn]){b.disabled=true;b.classList.add('matched');}
    game.matches.push([enId,trId]);snapshot();
    document.querySelector('#count').textContent=game.matches.length+' / 10';
    document.querySelector('#status').textContent=['Harika eşleşme!','Böyle devam et!','Bir adım daha ileri!'][game.matches.length%3];
    document.querySelector('#gameprogress').style.width=game.matches.length*10+'%';
    if(game.matches.length===10){
      game.blocked=true;
      document.querySelector('#status').textContent='Eşleştirmeler tamam! Şimdi 3 cümle.';
      timer=setTimeout(()=>renderQuiz(),450);
    }
  }else{
    learningAnswer('matching',false,`${game.level}:${enId}`);
    game.mistakes++;game.blocked=true;
    sound(false);buttonError(btn,old.btn);
    document.querySelector('[data-match-errors]').textContent=`Hata: ${game.mistakes}/2`;
    if(game.mistakes===1){
      snapshot();document.querySelector('#status').textContent='İlk hata. Eşleşmelerin duruyor; devam et!';
      const current=game;
      timer=setTimeout(()=>{if(game!==current)return;btn.classList.remove('wrong');old.btn.classList.remove('wrong');game.blocked=false;},650);
    }else{
      document.querySelector('#status').textContent='İkinci hata. Bölüm yeniden başlıyor.';
      const n=game.level;
      if(game.matches.length>0)progress().recovery={...sessionData(),mistakes:0};
      if(progress().session?.level===n)progress().session=null;
      save();timer=setTimeout(()=>start(n,true),1100);
    }
  }
}
function buttonError(...buttons){buttons.forEach(button=>button.classList.add('wrong'));}
function useHint(){
  if(!requireLife())return;
  const p=progress();
  if(p.hint<=0){toast('İpucu hakkın bitti. Reklamla hak kazanma henüz açık değil.');return;}
  if(screen!=='game'&&screen!=='quiz')start(p.unlocked);
  if(!game||game.blocked)return;
  if(screen==='quiz'){useQuizHint();return;}
  if(game.hintVisible){toast('İpucun işaretli. Doğru çifti eşleştir.');return;}
  const remaining=side=>Array.from(app.querySelectorAll(`.word[data-side="${side}"]:not(:disabled)`));
  const left=remaining(0),right=remaining(1);if(!left.length||!right.length)return;
  const selected=game.selected;
  let source=selected?.side===0?selected.btn:null,target=selected?.side===1?selected.btn:null;
  if(source)target=right.find(b=>game.pairs[Number(b.dataset.id)][1]===game.pairs[Number(source.dataset.id)][1]);
  else if(target)source=left.find(b=>game.pairs[Number(b.dataset.id)][1]===game.pairs[Number(target.dataset.id)][1]);
  else{source=left[0];target=right.find(b=>game.pairs[Number(b.dataset.id)][1]===game.pairs[Number(source.dataset.id)][1]);}
  if(!source||!target)return;
  p.hint--;save();updateTools();
  source.classList.add('hinted');target.classList.add('hinted');game.hintVisible=true;
  const pair=game.pairs[Number(source.dataset.id)];
  document.querySelector('#status').textContent='İpucu: Işıklı iki kelimeyi eşleştir.';
  toast(`${pair[0]} → ${pair[1]}`);pronounce(pair[0]);
  hintTimer=setTimeout(clearHint,5000);
}
function restoreMatches(){
  if(!requireLife())return;
  const p=progress(),recovery=p.recovery;
  if(p.jump<=0){toast('Geri getirme hakkın bitti.');return;}
  if(game?.blocked)return;
  if(screen==='quiz'){toast('Eşleştirmelerin zaten tamam. Cümle sorusunu tekrar deneyebilirsin.');return;}
  const level=recovery?.level;
  const pairs=Number.isInteger(level)?vocabulary().slice((level-1)*10,level*10):[];
  if(!Number.isInteger(level)||level<1||level>p.unlocked||!validSession(recovery,level,pairs)||recovery.matches.length===0||recovery.matches.length>=10){
    toast('Geri getirilecek eşleşme yok. Hak harcanmadı.');return;
  }
  if(screen==='game'&&game.level!==level){toast('Bu bölümde geri getirilecek eşleşme yok. Hak harcanmadı.');return;}
  const currentCount=screen==='game'?game.matches.length:validSession(p.session,level,pairs)?p.session.matches.length:0;
  if(currentCount>=recovery.matches.length){toast('Önceki doğru sayına zaten ulaştın. Hak harcanmadı.');return;}
  const count=recovery.matches.length;
  p.jump--;p.recovery=null;save();
  start(level,false,{...recovery,mistakes:0});
  toast(`${count} doğru eşleşmen geri geldi. 1 hak kullanıldı.`);
}
function renderQuiz(reviewIndex=null){
  if(!game||game.matches.length!==10)return;
  if(!requireLife()){game.blocked=false;return;}
  stopPronunciation();clearHint();clearTimeout(timer);game.blocked=false;screen='quiz';
  if(game.quizProgress===3&&reviewIndex===null){completeLevel();return;}
  const l=language(),review=reviewIndex!==null,index=review?reviewIndex:game.quizProgress;
  const questions=SENTENCES[state.language][game.level-1],question=questions[index];
  if(game.quizOptionIndex!==index){game.quizOptionIndex=index;game.quizOptions=shuffle(questions.map(q=>q.answer));}
  game.quizReview=review;
  const sentence=escapeHTML(question.text).replace('___',`<span class="sentence-blank ${review?'filled':''}" dir="auto">${review?escapeHTML(question.answer):'…'}</span>`);
  app.innerHTML=`<main class="screen quiz-screen"><div class="gamehead"><button class="iconbtn" data-go="map" aria-label="Haritaya dön">‹</button><div style="text-align:center"><div class="eyebrow">${l.flag} ${l.name} · BÖLÜM ${game.level}</div><h2>Cümle zamanı</h2></div><button class="iconbtn" data-action="sound" aria-label="Sesi aç veya kapat">${state.sound?'♫':'♩'}</button></div>${lifeStrip()}<div class="quiz-heading"><span class="pill">✓ 10 / 10 EŞLEŞME</span><span class="tiny">Cümle ${index+1} / 3</span></div><div class="progress"><i style="width:${game.quizProgress/3*100}%"></i></div><p class="eyebrow">BOŞLUĞA HANGİ KELİME GELİR?</p><div class="sentence-card"><p class="sentence-text" lang="${l.id}" dir="${l.dir}">${sentence}</p><div class="sentence-translation"><span>TÜRKÇESİ</span><p>${escapeHTML(question.translation)}</p></div></div><div class="quiz-options" aria-label="Cevap seçenekleri">${game.quizOptions.map(option=>`<button class="quiz-choice ${review&&option===question.answer?'correct':''}" lang="${l.id}" dir="${l.dir}" data-answer="${escapeHTML(option)}" data-correct="${option===question.answer}" ${review?'disabled':''}>${escapeHTML(option)}</button>`).join('')}</div><p id="quiz-feedback" class="quiz-feedback" role="status">${review?'Doğru! Kelimeyi cümle içinde de kullandın.':'Türkçe anlamından yararlan, doğru kelimeyi seç.'}</p>${review?`<button class="secondary" data-speak="${escapeHTML(question.text.replace('___',question.answer))}">♫ Cümleyi dinle</button><button class="primary quiz-next" data-action="next-sentence">${game.quizProgress===3?'Bölümü tamamla ✦':'Sonraki cümle →'}</button>`:''}<p class="tiny quiz-note">Her yanlış seçim 1 can götürür. Eşleşmelerin korunur.</p></main>${tools(true)}`;
  window.scrollTo(0,0);updateLifeUI();
}
function chooseSentence(button){
  if(screen!=='quiz'||!game||game.quizReview||button.disabled||!requireLife())return;
  clearHint();
  const index=game.quizProgress,question=SENTENCES[state.language][game.level-1][index];
  if(button.dataset.answer===question.answer){
    learningAnswer('sentence',true,`${game.level}:${question.wordIndex}`);
    sound();game.quizProgress++;snapshot();renderQuiz(index);
    pronounce(question.text.replace('___',question.answer));
  }else{
    learningAnswer('sentence',false,`${game.level}:${question.wordIndex}`);
    sound(false);button.disabled=true;button.classList.add('wrong');
    const result=GameEconomy.spendLife(state.lives);state.lives=result.lives;save();updateLifeUI();
    document.querySelector('#quiz-feedback').textContent='Yanlış cevap: 1 can gitti. Cümleyi okuyup yeniden dene.';
    if(state.lives.count===0)openLives();
  }
}
function useQuizHint(){
  if(!requireLife())return;
  if(!game||game.quizReview){toast('Bu soruyu zaten doğru yanıtladın. Hak harcanmadı.');return;}
  if(game.hintVisible){toast('Doğru kelime zaten işaretli. Hak harcanmadı.');return;}
  const button=app.querySelector('.quiz-choice[data-correct="true"]');if(!button||button.disabled)return;
  progress().hint--;save();updateTools();
  button.classList.add('hinted');game.hintVisible=true;
  document.querySelector('#quiz-feedback').textContent='İpucu: Işıklı kelime boşluğu tamamlar.';
  hintTimer=setTimeout(clearHint,5000);
}
function completeLevel(){
  if(!game||game.matches.length!==10||game.quizProgress!==3||!requireLife())return;
  const n=game.level,p=progress();
  const previousCount=p.completed.length,previousAll=LANGUAGE_LIST.every(l=>state.progress[l.id].completed.length>0);
  const awarded=GameEconomy.completionReward(p,n);
  p.hint=awarded.hint;p.jump=awarded.jump;p.rewardedLevels=awarded.rewardedLevels;
  if(!p.completed.includes(n))p.completed.push(n);
  p.completed.sort((a,b)=>a-b);
  if(n===p.unlocked)p.unlocked=Math.min(100,n+1);
  if(p.session?.level===n)p.session=null;
  if(p.recovery?.level===n)p.recovery=null;
  const badges=Learning.recordCompletion(state,state.language,previousCount,previousAll);
  save();celebrate(n,awarded.reward);notifyAwards(badges,false);
}
function celebrate(n,reward={hint:0,jump:0}){
  screen='success';clearHint();game=null;const p=progress(),l=language();
  app.innerHTML=`<main class="screen success"><div class="medal">✦</div><div class="eyebrow">${l.name} · ${n===100?'BÜYÜK YOLCULUK TAMAMLANDI':'BİR ADA DAHA KEŞFEDİLDİ'}</div><h1>${n===100?'Zirveye ulaştın!':'Muhteşemsin!'}</h1><p>Bölüm ${n} tamamlandı.<br>${n===100?'1.000 kelimelik yolculuğunu tamamladın.':'Yeni kelimeler artık senin dünyanda.'}</p><div class="stats"><div class="stat"><strong style="color:var(--mint)">10/10</strong><span>Doğru eşleşme</span></div><div class="stat"><strong style="color:var(--gold)">${p.completed.length*10}</strong><span>Toplam kelime</span></div><div class="stat"><strong>${p.completed.length}</strong><span>Tamamlanan bölüm</span></div></div><p class="quiz-result">✓ 3 / 3 cümle tamamlandı</p><div class="reward-summary">${reward.hint?`<span>✧ +${reward.hint} ipucu</span>`:'<span>Bu bölümün ödülünü daha önce aldın.</span>'}${reward.jump?`<span>◎ +${reward.jump} geri dönme hakkı</span>`:''}</div>${n<100?`<button class="primary" data-start="${n+1}">Sonraki adaya git →</button>`:''}<button class="secondary" data-go="map">Bölüm haritasına dön</button><button class="secondary" data-go="languages">Başka bir dil keşfet</button></main>`;
  confetti();
}

const island=`<div class="hero" aria-label="Havada süzülen üç boyutlu ada illüstrasyonu"><svg class="island" viewBox="0 0 440 270" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="rock" x2="0" y2="1"><stop stop-color="#557d79"/><stop offset="1" stop-color="#183d49"/></linearGradient><linearGradient id="grass" x2="1" y2="1"><stop stop-color="#a5e8af"/><stop offset="1" stop-color="#3eab86"/></linearGradient><linearGradient id="book" x2="1" y2="1"><stop stop-color="#ffe6a2"/><stop offset="1" stop-color="#da9e56"/></linearGradient></defs><ellipse cx="219" cy="238" rx="116" ry="13" fill="#051722" opacity=".5"/><path d="M75 147L153 115 337 136 364 165 293 210 218 229 132 195Z" fill="url(#rock)"/><path d="M75 147L132 163 132 195Z" fill="#36636a"/><path d="M132 163L218 181 218 229 173 202Z" fill="#244c58"/><path d="M218 181L296 166 293 210 247 220Z" fill="#3e6d6c"/><path d="M75 147Q103 117 163 112L280 113Q336 120 364 150L364 165Q307 192 224 183L131 169Z" fill="#28745f"/><path d="M75 147Q105 111 170 106L280 110Q336 119 364 150L296 172 216 176 128 160Z" fill="url(#grass)"/><path d="M145 154Q175 128 206 150T290 145" fill="none" stroke="#f3d99c" stroke-width="16"/><path d="M145 154Q175 128 206 150T290 145" fill="none" stroke="#ffe9b8" stroke-width="10"/><g fill="#165e51"><path d="M100 128V87L120 75 138 88V130Z"/><path d="M297 125V75L315 65 333 80V134Z"/></g><g><path d="M103 104L121 45 142 105Z" fill="#459f76"/><path d="M121 45L121 112 142 105Z" fill="#27775f"/><path d="M292 95L315 22 341 96Z" fill="#67bb85"/><path d="M315 22V108L341 96Z" fill="#358d6c"/></g><g transform="translate(170 40) rotate(-8 45 50)"><path d="M0 30L55 9 96 34 41 56Z" fill="url(#book)"/><path d="M0 30V88L41 111V56Z" fill="#c48a43"/><path d="M41 56L96 34V91L41 111Z" fill="#f6edcc"/><path d="M48 64L90 47M48 74L90 57M48 84L90 67M48 94L90 77" stroke="#ccbca0" stroke-width="2"/><path d="M0 24L54 3 100 29 43 52Z" fill="#ffdb89"/><path d="M43 52V59L100 36V29Z" fill="#e4ae60"/><path d="M18 26L54 12 80 27 44 42Z" fill="#ecc077"/><text x="39" y="31" fill="#8e622f" font-size="19" font-weight="bold" transform="rotate(-6 40 30)">A</text></g><g transform="translate(266 118)"><ellipse cy="38" rx="22" ry="7" fill="#246c58"/><path d="M-18 7Q-20-18 0-19Q23-19 21 7L18 24Q0 36-17 23Z" fill="#b4f6db"/><ellipse cx="-5" cy="4" rx="3" ry="5" fill="#164c47"/><ellipse cx="9" cy="4" rx="3" ry="5" fill="#164c47"/><path d="M-3 16Q3 21 9 15" fill="none" stroke="#377b67" stroke-width="2"/><path d="M-19 5L-28-2M21 6L29-3" stroke="#b4f6db" stroke-width="7" stroke-linecap="round"/></g><g fill="#ffdf85"><circle cx="151" cy="118" r="4"/><circle cx="331" cy="147" r="4"/><circle cx="104" cy="149" r="3"/></g><g fill="#95d9c3" opacity=".5"><path d="M56 89L61 79 66 89 61 99Z"/><path d="M370 107L374 99 378 107 374 115Z"/></g></svg><span class="float-star">✧</span><span class="hero-label">Bir kelime, yeni bir dünya.</span></div>`;

function confetti(count=90){if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;const c=document.querySelector('#confetti'),ctx=c.getContext('2d');c.width=innerWidth;c.height=innerHeight;const particles=Array.from({length:count},()=>({x:Math.random()*c.width,y:-Math.random()*c.height,v:2+Math.random()*4,r:Math.random()*6+3,color:[1,2,3,4].map(n=>getComputedStyle(document.documentElement).getPropertyValue(`--confetti-${n}`).trim())[Math.floor(Math.random()*4)]}));let frames=0;function draw(){ctx.clearRect(0,0,c.width,c.height);for(const p of particles){p.y+=p.v;p.x+=Math.sin(frames/20+p.r);ctx.fillStyle=p.color;ctx.fillRect(p.x,p.y,p.r,p.r*1.5);}if(frames++<220)requestAnimationFrame(draw);else ctx.clearRect(0,0,c.width,c.height);}draw();}

function parseBackup(value){
  const validLevels=p=>p&&typeof p==='object'&&Number.isInteger(p.unlocked)&&p.unlocked>=1&&p.unlocked<=100&&Array.isArray(p.completed)&&p.completed.every(n=>Number.isInteger(n)&&n>=1&&n<=100);
  if([2,3].includes(value?.version)){
    if(!value.progress||typeof value.progress!=='object'||!LANGUAGE_LIST.every(l=>validLevels(value.progress[l.id])&&['jump','hint'].every(key=>Number.isSafeInteger(value.progress[l.id][key])&&value.progress[l.id][key]>=0)))throw Error('invalid backup');
    const imported=normalizeState(value);
    imported.lives=GameEconomy.refillLives(state.lives);
    imported.activity={...state.activity,best:Math.max(state.activity.best,imported.activity.best),reviewAnswered:Math.max(state.activity.reviewAnswered,imported.activity.reviewAnswered)};
    imported.badges={...imported.badges,...state.badges};
    for(const l of LANGUAGE_LIST)imported.progress[l.id].rewardedLevels=GameEconomy.levels([...state.progress[l.id].rewardedLevels,...imported.progress[l.id].rewardedLevels]);
    return imported;
  }
  if(!validLevels(value))throw Error('invalid backup');
  return {...state,progress:{...state.progress,en:{...cleanProgress(value),jump:state.progress.en.jump,hint:state.progress.en.hint,rewardedLevels:GameEconomy.levels([...state.progress.en.rewardedLevels,...value.completed])}}};
}
app.addEventListener('click',async e=>{
  const b=e.target.closest('button');if(!b||b.disabled)return;
  if(handleFeatureClick(b))return;
  if(b.dataset.language){state.language=b.dataset.language;save();screen='home';render();return;}
  if(b.dataset.go){screen=b.dataset.go;render();return;}
  if(b.dataset.start){start(Number(b.dataset.start));return;}
  if(b.dataset.speak){pronounce(b.dataset.speak);return;}
  if(b.classList.contains('quiz-choice')){chooseSentence(b);return;}
  if(b.classList.contains('word')){choose(b);return;}
  switch(b.dataset.action){
    case 'sound':state.sound=!state.sound;if(!state.sound)stopPronunciation();save();
      app.querySelectorAll('[data-action="sound"]').forEach(button=>{button.textContent=screen==='settings'&&button.closest('.setting')?(state.sound?'Açık':'Kapalı'):(state.sound?'♫':'♩');button.setAttribute('aria-label',state.sound?'Sesi kapat':'Sesi aç');});
      toast(state.sound?'Sesler ve telaffuz açık':'Sesler ve telaffuz kapalı');break;
    case 'lives':openLives();break;
    case 'hint':useHint();break;
    case 'jump':restoreMatches();break;
    case 'next-sentence':renderQuiz();break;
    case 'install':if(installPrompt){await installPrompt.prompt();installPrompt=null;}else toast('Safari: Paylaş → Ana Ekrana Ekle. Chrome: Menü → Uygulamayı yükle.');break;
    case 'export':{
      const url=URL.createObjectURL(new Blob([JSON.stringify(state,null,2)],{type:'application/json'}));const a=document.createElement('a');a.href=url;a.download='kelime-yolculugu-tum-diller-yedek.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);break;
    }
    case 'import':document.querySelector('#backup').click();break;
    case 'reset':if(confirm(`${language().name} ilerlemen sıfırlanacak. Diğer diller korunur; canlar ve yardımcı hakların yenilenmez. Devam etmek istiyor musun?`)){
      const p=progress();state.progress[state.language]={...freshProgress(),jump:p.jump,hint:p.hint,rewardedLevels:p.rewardedLevels};save();render();toast('Bu dilde yeni bir yolculuk başladı.');
    }break;
  }
});
app.addEventListener('submit',event=>{if(event.target.id==='typing-form'){event.preventDefault();answerStudy(document.querySelector('#typed-word').value);}});
window.addEventListener('app-before-update',()=>{if(game&&!game.blocked)snapshot();save();});
app.addEventListener('input',e=>{if(e.target.id==='search')listWords(e.target.value);});
app.addEventListener('change',async e=>{
  if(featureChange(e.target))return;
  if(e.target.id!=='backup'||!e.target.files[0])return;
  try{
    if(e.target.files[0].size>2_000_000)throw Error('too large');
    state=parseBackup(JSON.parse(await e.target.files[0].text()));save();render();toast('İlerlemen ve hakların geri yüklendi.');
  }catch{toast('Geçerli bir ilerleme yedeği seç.');}
});
document.addEventListener('visibilitychange',()=>{if(document.hidden)stopPronunciation();else refreshLives();});
window.addEventListener('focus',refreshLives);
window.addEventListener('storage',event=>{if(event.key!==STORAGE_KEY||!event.newValue)return;try{state.lives=GameEconomy.refillLives(JSON.parse(event.newValue).lives);updateLifeUI();}catch{}});
window.addEventListener('pagehide',stopPronunciation);
window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();installPrompt=e;});
render();
setInterval(refreshLives,1000);
if(storageWarning)toast('Tarayıcı kaydı açılamadı. İlerlemeni korumak için depolama iznini kontrol et.');
