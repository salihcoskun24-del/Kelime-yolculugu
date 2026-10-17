const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const web = path.resolve(__dirname, '../www');
for (const name of ['app.js','sw.js','words.js','vocabularies.js','sentences.js']) {
  new vm.Script(fs.readFileSync(path.join(web, name), 'utf8'), {filename:name});
}
const context = vm.createContext({});
vm.runInContext(fs.readFileSync(path.join(web,'words.js'),'utf8') + '\n' + fs.readFileSync(path.join(web,'vocabularies.js'),'utf8') + '\n' + fs.readFileSync(path.join(web,'sentences.js'),'utf8') + '\nthis.exercises=SENTENCES;this.banks={en:WORDS,...VOCABULARIES};', context);
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

assert.equal(Object.keys(context.exercises).length,6);
for(const [lang,levels] of Object.entries(context.exercises)){
  assert.equal(levels.length,100,`${lang}: sentence exercises for 100 levels`);
  for(const [index,questions] of levels.entries()){
    assert.equal(questions.length,3,`${lang}: three exercises at level ${index+1}`);
    assert.equal(new Set(questions.map(q=>q.wordIndex)).size,3,`${lang}: three distinct lesson words`);
    assert.equal(new Set(questions.map(q=>q.answer.toLocaleLowerCase(lang))).size,3,`${lang}: distinct options`);
    for(const question of questions){
      assert.ok(Number.isInteger(question.wordIndex)&&question.wordIndex>=0&&question.wordIndex<10);
      assert.ok(context.banks[lang][index*10+question.wordIndex]);
      assert.equal((question.text.match(/___/g)||[]).length,1,`${lang}: single blank`);
      assert.ok(question.answer.trim()&&question.translation.trim());
      assert.ok(!/[<>]/.test(question.text+question.answer),`${lang}: text must not contain markup`);
      if(lang==='ar')assert.ok(/[\u0600-\u06ff]/u.test(question.text)&&/[\u0600-\u06ff]/u.test(question.answer));
      if(lang==='ru')assert.ok(/[А-Яа-яЁё]/u.test(question.text)&&/[А-Яа-яЁё]/u.test(question.answer));
    }
  }
}
console.log('Validated: 1,800 sentence exercises, three distinct lesson words per level, one blank per question, unique answer options.');
