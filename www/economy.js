'use strict';
const GameEconomy = (() => {
  const MAX_LIVES = 5;
  const REFILL_MS = 10 * 60 * 1000;
  const MAX_BALANCE = Number.MAX_SAFE_INTEGER;
  const balance = (value, fallback = 5) => Number.isSafeInteger(value) && value >= 0 ? value : fallback;
  const levels = value => Array.isArray(value) ? [...new Set(value.filter(n => Number.isInteger(n) && n >= 1 && n <= 100))].sort((a,b)=>a-b) : [];
  function refillLives(value, now = Date.now()) {
    let count = Number.isInteger(value?.count) ? Math.max(0, Math.min(MAX_LIVES, value.count)) : MAX_LIVES;
    if (count === MAX_LIVES) return {count, nextRefillAt:null};
    let nextRefillAt = typeof value?.nextRefillAt === 'number' && Number.isFinite(value.nextRefillAt) && value.nextRefillAt > 0 ? value.nextRefillAt : now + REFILL_MS;
    // A device clock moving backwards must not leave a timer longer than ten minutes.
    nextRefillAt = Math.min(nextRefillAt, now + REFILL_MS);
    if (now >= nextRefillAt) {
      const earned = Math.floor((now - nextRefillAt) / REFILL_MS) + 1;
      count = Math.min(MAX_LIVES, count + earned);
      nextRefillAt = count === MAX_LIVES ? null : nextRefillAt + earned * REFILL_MS;
    }
    return {count, nextRefillAt};
  }
  function spendLife(value, now = Date.now()) {
    const lives = refillLives(value, now);
    if (lives.count === 0) return {lives, spent:false};
    return {lives:{count:lives.count - 1, nextRefillAt:lives.nextRefillAt ?? now + REFILL_MS}, spent:true};
  }
  function addLife(value, now = Date.now()) {
    const lives = refillLives(value, now);
    const count = Math.min(MAX_LIVES, lives.count + 1);
    return {count, nextRefillAt:count === MAX_LIVES ? null : lives.nextRefillAt};
  }
  function completionReward(progress, level) {
    if (!Number.isInteger(level) || level < 1 || level > 100) throw new Error('Invalid level');
    const rewardedLevels = levels([...(progress.rewardedLevels || []), ...(progress.completed || [])]);
    const reward = rewardedLevels.includes(level) ? {hint:0,jump:0} : {hint:1,jump:level % 5 === 0 ? 1 : 0};
    if (!rewardedLevels.includes(level)) rewardedLevels.push(level);
    rewardedLevels.sort((a,b)=>a-b);
    return {hint:Math.min(MAX_BALANCE,balance(progress.hint)+reward.hint),jump:Math.min(MAX_BALANCE,balance(progress.jump)+reward.jump),rewardedLevels,reward};
  }
  return Object.freeze({MAX_LIVES,REFILL_MS,balance,levels,refillLives,spendLife,addLife,completionReward});
})();
