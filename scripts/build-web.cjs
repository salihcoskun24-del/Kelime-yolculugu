const fs=require('node:fs');
const path=require('node:path');
const crypto=require('node:crypto');
function build(root=path.resolve(__dirname,'..')){
  const source=path.join(root,'www'),output=path.join(root,'dist');
  const files=[];
  function walk(dir,prefix=''){for(const entry of fs.readdirSync(dir,{withFileTypes:true}).sort((a,b)=>a.name.localeCompare(b.name))){const relative=prefix+entry.name;if(entry.isDirectory())walk(path.join(dir,entry.name),relative+'/');else if(relative!=='sw.js')files.push(relative);}}
  walk(source);
  const version=JSON.parse(fs.readFileSync(path.join(root,'package.json'),'utf8')).version;
  const template=fs.readFileSync(path.join(__dirname,'sw-template.js'),'utf8');
  const hash=crypto.createHash('sha256').update(version).update(template);
  for(const name of files)hash.update(name).update(fs.readFileSync(path.join(source,name)));
  const cacheName=`kelime-yolculugu-${version}-${hash.digest('hex').slice(0,16)}`;
  const urls=['./',...files.map(name=>'./'+name.split('/').map(encodeURIComponent).join('/'))];
  const worker=template.replace('__CACHE_NAME__',JSON.stringify(cacheName)).replace('__PRECACHE_URLS__',JSON.stringify(urls));
  fs.writeFileSync(path.join(source,'sw.js'),worker);
  fs.rmSync(output,{recursive:true,force:true});fs.cpSync(source,output,{recursive:true});
  console.log(`Web hazır: ${version}; ${files.length} dosya; otomatik önbellek ${cacheName}.`);
  return {cacheName,files,output};
}
if(require.main===module){require('./validate-vocabulary.cjs');build();}
module.exports={build};
