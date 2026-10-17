const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const web = path.resolve(__dirname, '../www');
for (const name of ['app.js','sw.js','words.js','vocabularies.js']) {
  new vm.Script(fs.readFileSync(path.join(web, name), 'utf8'), {filename:name});
}
const context = vm.createContext({});
vm.runInContext(fs.readFileSync(path.join(web,'words.js'),'utf8') + '\n' + fs.readFileSync(path.join(web,'vocabularies.js'),'utf8') + '\nthis.banks={en:WORDS,...VOCABULARIES};', context);
assert.equal(Object.keys(context.banks).length, 6);
for (const [lang,pairs] of Object.entries(context.banks)) {
  assert.equal(pairs.length, 1000, `${lang}: 1000 entries required`);
  assert.equal(new Set(pairs.map(p=>p[0].toLocaleLowerCase(lang))).size, 1000, `${lang}: repeated source words`);
  for (const pair of pairs) assert.ok(Array.isArray(pair)&&pair.length===2&&pair.every(s=>typeof s==='string'&&s.trim().length>0), `${lang}: invalid pair`);
  for (let level=0;level<100;level++) {
    const lesson=pairs.slice(level*10,level*10+10);
    assert.equal(new Set(lesson.map(p=>p[0])).size, 10, `${lang}: duplicated card in level ${level+1}`);
    assert.equal(new Set(lesson.map(p=>p[1])).size, 10, `${lang}: ambiguous Turkish cards in level ${level+1}`);
  }
  if(lang==='ru')assert.ok(pairs.every(p=>/[А-Яа-яЁё]/u.test(p[0])&&!/[A-Za-z]/u.test(p[0])),'Russian script');
  if(lang==='ar')assert.ok(pairs.every(p=>/[\u0600-\u06ff]/u.test(p[0])&&!/[A-Za-z]/u.test(p[0])),'Arabic script');
}
console.log('Validated: 6 languages, 6,000 unique source entries, 100 levels per language, unambiguous lesson cards, Russian/Arabic scripts, JavaScript syntax.');
