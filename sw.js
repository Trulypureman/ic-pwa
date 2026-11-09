const V='ic-v12',S='ic-share',A=['./','index.html','manifest.json','logo.png','icon-192.png','icon-512.png','donate-qr.png','lib/jszip.min.js','lib/docx-preview.min.js','lib/html2canvas.min.js'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(A)));self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==V&&x!==S).map(x=>caches.delete(x)))));self.clients.claim()});

// Images shared from other apps (WhatsApp, Gallery…) arrive here as a POST.
async function share(req){
 try{const fs=(await req.formData()).getAll('img').filter(f=>f&&f.size),c=await caches.open(S);
  for(const k of await c.keys())await c.delete(k);
  for(let i=0;i<fs.length;i++)await c.put(new Request('shared/'+i),new Response(fs[i],{headers:{'content-type':fs[i].type||'image/*'}}))}catch(e){}
 return Response.redirect(new URL('index.html?shared=1',self.registration.scope).href,303)}

self.addEventListener('fetch',e=>{const r=e.request,u=new URL(r.url);
 if(r.method==='POST'&&u.pathname.endsWith('/share-target'))return e.respondWith(share(r));
 if(r.method!=='GET'||u.origin!==location.origin)return;
 e.respondWith(fetch(r).then(res=>{if(res.ok&&!u.search){const c=res.clone();caches.open(V).then(h=>h.put(r,c))}return res})
  .catch(async()=>(await caches.match(r,{ignoreSearch:true}))||(r.mode==='navigate'&&await caches.match('index.html'))||Response.error()))});
