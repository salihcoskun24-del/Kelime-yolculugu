// Rebuild parallel translations from persistent concept IDs and shared sentence contexts.
// Never join on row position: English keeps its original order, other banks use another block order.
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const {LANGS,NAMES,readSources}=require('./data.cjs');const root=path.resolve(__dirname,'..'),sources=readSources(root);
const concepts=Object.fromEntries(Object.entries(sources).map(([target,{words}])=>[target,new Map(words.map(w=>[w.conceptId,w]))]));
const contexts=Object.fromEntries(Object.entries(sources).map(([target,{sentences}])=>[target,new Map(sentences.map(q=>[q.translations.tr,q]))]));
const cell=v=>'"'+String(v).replaceAll('"','""')+'"';
function write(file,headers,rows){fs.writeFileSync(file,'\ufeff'+[headers,...rows].map(row=>row.map(cell).join(';')).join('\n')+'\n');}
for(const [target,bank]of Object.entries(sources)){
 assert.equal(concepts[target].size,1000);assert.equal(contexts[target].size,300);
 for(const w of bank.words)for(const native of Object.keys(NAMES)){const match=concepts[native].get(w.conceptId);assert(match,`${target}:${w.id} has no ${native} concept`);w.translations[native]=match.text;}
 const byId=new Map(bank.words.map(w=>[w.id,w]));
 for(const q of bank.sentences)for(const native of Object.keys(NAMES)){const match=contexts[native].get(q.translations.tr);assert(match,`${target}:${q.id} has no ${native} context`);const nativeWord=sources[native].words.find(w=>w.id===match.wordId);assert.equal(byId.get(q.wordId).conceptId,nativeWord.conceptId);q.translations[native]=match.text.replace('___',match.answer);}
 write(path.join(root,'kelime-listeleri',NAMES[target]+'.csv'),['id','conceptId','target','text','level','stage',...LANGS],bank.words.map(w=>[w.id,w.conceptId,target,w.text,w.level,w.stage,...LANGS.map(l=>w.translations[l])]));
 write(path.join(root,'cumle-sorulari',NAMES[target]+'.csv'),['id','target','level','wordId','text','answer',...LANGS],bank.sentences.map(q=>[q.id,target,q.level,q.wordId,q.text,q.answer,...LANGS.map(l=>q.translations[l])]));
}
console.log('Completed all translations from validated parallel concepts and sentence contexts.');
