const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root=path.resolve(__dirname,'..');
const ctx=vm.createContext({});
vm.runInContext(fs.readFileSync(path.join(root,'www/words.js'),'utf8')+'\n'+fs.readFileSync(path.join(root,'www/vocabularies.js'),'utf8')+'\nthis.banks={en:WORDS,...VOCABULARIES};',ctx);
const names={en:'ingilizce',de:'almanca',es:'ispanyolca',ru:'rusca',ar:'arapca',fr:'fransizca'};
const out=path.join(root,'kelime-listeleri');fs.mkdirSync(out,{recursive:true});
const cell=s=>'"'+String(s).replaceAll('"','""')+'"';
for(const [id,pairs] of Object.entries(ctx.banks)){
 const rows=[['Sıra','Bölüm','Aşama','Kelime / İfade','Türkçe'],...pairs.map(([word,tr],i)=>{const level=Math.floor(i/10)+1;return [i+1,level,id==='en'?'Özgün bölüm sırası':level<=30?'Başlangıç':level<=60?'Orta':level<=85?'İleri':'Ustalık',word,tr];})];
 fs.writeFileSync(path.join(out,names[id]+'.csv'),'\ufeff'+rows.map(row=>row.map(cell).join(';')).join('\r\n')+'\r\n');
}
console.log('6 dilin sıralı CSV listeleri kelime-listeleri/ klasöründe.');
