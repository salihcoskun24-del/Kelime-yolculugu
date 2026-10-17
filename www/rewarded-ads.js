'use strict';
const RewardedAds = (() => {
  let scriptPromise = null;
  let active = false;
  let servicesEnabled = false;
  const config = () => window.REWARDED_ADS_CONFIG || {};
  const isAvailable = () => config().provider === 'google-ad-manager' && typeof config().adUnitPath === 'string' && /^\/\d+\/.+/.test(config().adUnitPath.trim());
  function loadSdk() {
    if (window.googletag?.apiReady) return Promise.resolve();
    if (scriptPromise) return scriptPromise;
    window.googletag = window.googletag || {cmd:[]};
    scriptPromise = new Promise((resolve,reject) => {
      const script = document.createElement('script');
      const timeout = setTimeout(() => {script.remove();scriptPromise=null;reject(new Error('Reklam servisine ulaşılamadı.'));},15000);
      script.src = 'https://securepubads.g.doubleclick.net/tag/js/gpt.js';
      script.async = true;
      script.crossOrigin = 'anonymous';
      script.onload = () => {clearTimeout(timeout);resolve();};
      script.onerror = () => {clearTimeout(timeout);script.remove();scriptPromise=null;reject(new Error('Reklam yüklenemedi. İnternet bağlantını kontrol et.'));};
      document.head.appendChild(script);
    });
    return scriptPromise;
  }
  async function show({onReward}) {
    if (!isAvailable()) throw new Error('Reklamlar henüz hazır değil.');
    if (active) throw new Error('Bir reklam zaten açık.');
    active = true;
    try {
      await loadSdk();
      return await new Promise((resolve,reject) => {
        let slot=null,pubads=null,settled=false,granted=false,timeout=null;
        const listeners=[];
        const cleanup=()=>{
          clearTimeout(timeout);
          for(const [name,fn] of listeners)pubads?.removeEventListener(name,fn);
          if(slot)window.googletag.destroySlots([slot]);
        };
        const finish=(error=null)=>{if(settled)return;settled=true;cleanup();if(error)reject(error);else resolve({rewarded:granted});};
        timeout=setTimeout(()=>finish(new Error('Şu anda uygun reklam bulunamadı.')),25000);
        window.googletag.cmd.push(()=>{
          if(settled)return;
          try{
            const g=window.googletag;
            slot=g.defineOutOfPageSlot(config().adUnitPath.trim(),g.enums.OutOfPageFormat.REWARDED);
            if(!slot){finish(new Error('Bu tarayıcıda ödüllü reklam desteklenmiyor.'));return;}
            pubads=g.pubads();
            const listen=(name,fn)=>{pubads.addEventListener(name,fn);listeners.push([name,fn]);};
            listen('rewardedSlotReady',event=>{
              if(event.slot!==slot||settled)return;
              clearTimeout(timeout);
              try{event.makeRewardedVisible();}catch{finish(new Error('Reklam açılamadı.'));}
            });
            listen('rewardedSlotGranted',event=>{
              if(event.slot!==slot||settled||granted)return;
              granted=true;
              onReward();
            });
            listen('rewardedSlotClosed',event=>{if(event.slot===slot)finish();});
            listen('slotRenderEnded',event=>{if(event.slot===slot&&event.isEmpty)finish(new Error('Şu anda uygun reklam bulunamadı.'));});
            slot.addService(pubads);
            if(!servicesEnabled){g.enableServices();servicesEnabled=true;}
            g.display(slot);
          }catch{finish(new Error('Reklam başlatılamadı.'));}
        });
      });
    } finally {active=false;}
  }
  return Object.freeze({isAvailable,show});
})();
