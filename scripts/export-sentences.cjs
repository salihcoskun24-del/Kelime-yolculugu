const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const root=path.resolve(__dirname,'..'),context=vm.createContext({});
vm.runInContext(fs.readFileSync(path.join(root,'www/words.js'),'utf8')+'\n'+fs.readFileSync(path.join(root,'www/vocabularies.js'),'utf8')+'\n'+fs.readFileSync(path.join(root,'www/sentences.js'),'utf8')+'\nthis.banks={en:WORDS,...VOCABULARIES};this.questions=SENTENCES;',context);
const names={en:'ingilizce',de:'almanca',es:'ispanyolca',ru:'rusca',ar:'arapca',fr:'fransizca'};
const out=path.join(root,'cumle-sorulari');fs.mkdirSync(out,{recursive:true});
const cell=s=>'"'+String(s).replaceAll('"','""')+'"';
for(const [lang,levels] of Object.entries(context.questions)){
 const rows=[['Bölüm','Soru','Bölümdeki kelime','Boşluklu cümle','Cevap','Türkçe'],...levels.flatMap((questions,index)=>questions.map((q,i)=>[index+1,i+1,context.banks[lang][index*10+q.wordIndex][0],q.text,q.answer,q.translation]))];
 fs.writeFileSync(path.join(out,names[lang]+'.csv'),'\ufeff'+rows.map(row=>row.map(cell).join(';')).join('\r\n')+'\r\n');
}
console.log('1,800 sentence exercises exported to cumle-sorulari/.');
