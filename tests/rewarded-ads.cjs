const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const source=fs.readFileSync(path.resolve(__dirname,'../www/rewarded-ads.js'),'utf8');
function harness(config={provider:'google-ad-manager',adUnitPath:'/123/rewarded'}){
 const handlers=new Map();let requests=0,visible=0,destroyed=0;
 const slot={addService(){}};
 const pubads={addEventListener(n,fn){if(!handlers.has(n))handlers.set(n,new Set());handlers.get(n).add(fn);},removeEventListener(n,fn){handlers.get(n)?.delete(fn);}};
 const g={apiReady:true,cmd:{push(fn){fn();}},enums:{OutOfPageFormat:{REWARDED:'rewarded'}},defineOutOfPageSlot(){requests++;return slot;},pubads(){return pubads;},enableServices(){},display(){},destroySlots(){destroyed++;}};
 const context={window:{googletag:g,REWARDED_ADS_CONFIG:config},document:{},setTimeout,clearTimeout};vm.createContext(context);vm.runInContext(source+'\nthis.ads=RewardedAds;',context);
 return {ads:context.ads,slot,g,get requests(){return requests;},get destroyed(){return destroyed;},get visible(){return visible;},emit(name,extra={}){for(const fn of [...(handlers.get(name)||[])])fn({slot,makeRewardedVisible(){visible++;},...extra});}};
}
(async()=>{
 let h=harness({provider:'google-ad-manager',adUnitPath:null});assert.equal(h.ads.isAvailable(),false);await assert.rejects(h.ads.show({onReward(){throw Error('must not reward');}}));assert.equal(h.requests,0);
 h=harness();let rewards=0;let promise=h.ads.show({onReward(){rewards++;}});await Promise.resolve();h.emit('rewardedSlotReady');assert.equal(h.visible,1);assert.equal(rewards,0);h.emit('rewardedSlotClosed');assert.equal((await promise).rewarded,false);assert.equal(rewards,0);h.emit('rewardedSlotGranted');assert.equal(rewards,0);
 h=harness();promise=h.ads.show({onReward(){rewards++;}});await Promise.resolve();h.emit('rewardedSlotGranted',{slot:{}});assert.equal(rewards,0);h.emit('rewardedSlotGranted');h.emit('rewardedSlotGranted');assert.equal(rewards,1);h.emit('rewardedSlotClosed');assert.equal((await promise).rewarded,true);assert.equal(h.destroyed,1);
 h=harness();promise=h.ads.show({onReward(){throw Error('no inventory must not reward');}});await Promise.resolve();h.emit('slotRenderEnded',{isEmpty:true});await assert.rejects(promise);
 h=harness();h.g.defineOutOfPageSlot=()=>null;await assert.rejects(h.ads.show({onReward(){throw Error('unsupported must not reward');}}));
 h=harness();promise=h.ads.show({onReward(){}});await assert.rejects(h.ads.show({onReward(){}}));await Promise.resolve();h.emit('rewardedSlotClosed');await promise;
 console.log('PASS rewarded ads: disabled without account, no reward for ready/early close/no inventory/unsupported, reward once only for SDK grant, unrelated slots ignored, cleanup, concurrent-show guard.');
})().catch(error=>{console.error(error);process.exitCode=1;});
