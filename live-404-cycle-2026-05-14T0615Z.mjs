import { writeFileSync } from 'node:fs';
const base='https://www.peaknewsdaily.com';
const runTag='2026-05-14T0615Z';
const highlightedPaths=['/','/news','/markets','/markets/stocks','/markets/crypto','/markets/calendar','/tools','/about','/contact','/submit','/submit-content','/admin','/admin/','/admin/posts','/admin/categories','/api/admin/posts','/api/admin/categories','/api/auth/signin','/api/auth/signout','/login','/signup','/onboarding','/dashboard','/trading','/category/trading','/education','/search','/search?q=bitcoin','/privacy','/privacy-policy','/terms','/disclaimer','/dmca','/editorial-policy','/robots.txt','/sitemap.xml','/news-sitemap.xml','/rss.xml','/feed.xml','/manifest.webmanifest','/manifest.json','/site.webmanifest','/favicon.ico','/logo','/icon.svg','/icons/icon-192.png','/icons/icon-512.png','/apple-touch-icon.png','/api/prices?symbols=BTC-USD','/api/quotes?symbols=AAPL','/api/market-analytics','/api/search?q=bitcoin','/api/posts','/api/assets','/api/assets?quotes=true'];
const abs=u=>new URL(u,base).toString();
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
async function fetchFollow(url,maxHops=8){
  const hops=[]; let current=abs(url), res;
  for(let i=0;i<=maxHops;i++){
    res=await fetch(current,{redirect:'manual',headers:{'user-agent':'OpenClaw live 404 remediation sweep/2026-05-14T0615Z'}});
    if(![301,302,303,307,308].includes(res.status)) break;
    const location=res.headers.get('location'); if(!location) break;
    const next=new URL(location,current).toString(); hops.push({status:res.status,url:current,location,next}); current=next;
  }
  const ct=res.headers.get('content-type')||'';
  const text=ct.includes('text/')||ct.includes('json')||ct.includes('xml')||ct.includes('html')?await res.text():'';
  return {requested:abs(url),final:current,status:res.status,contentType:ct,text,hops};
}
function extractLinks(html,fromUrl){
  const out=new Set(); const re=/(?:href|src)=["']([^"'#]+?)(?:#[^"']*)?["']/gi; let m;
  while((m=re.exec(html))){try{const u=new URL(m[1],fromUrl); u.hash=''; if(u.origin===base&&!u.pathname.startsWith('/_next/')&&!u.pathname.match(/\.(js|css|map)$/)) out.add(u.toString());}catch{}}
  return [...out];
}
function semantic404(text,status,ct,title){
  if(status===404) return true; if(!ct.includes('html')) return false;
  const t=(title||'').toLowerCase(); const body=text.toLowerCase();
  return /^404(\b|\s|\|)/.test(t)||t.includes('page not found')||body.includes('<h1>404</h1>')||body.includes('this page could not be found');
}
function classify(r,title){
  const req=new URL(r.requested); const badStatus=r.status>=500||r.status===404;
  const badRedirect=r.hops.some(h=>{try{return new URL(h.next).origin!==base}catch{return true}});
  const sem=semantic404(r.text,r.status,r.contentType,title);
  const intentionallyGone=['/signup','/onboarding'].includes(req.pathname)&&r.status===410;
  const ok=intentionallyGone||(!badStatus&&!badRedirect&&!sem);
  return {ok,reason:ok?'':[badStatus?`bad_status_${r.status}`:'',badRedirect?'bad_redirect':'',sem?'semantic_404':''].filter(Boolean).join(','),badStatus,badRedirect,semantic404:sem};
}
async function sitemapUrls(p){const r=await fetchFollow(p); return [...r.text.matchAll(/<loc>([^<]+)<\/loc>/gi)].map(m=>m[1].trim()).filter(u=>u.startsWith(base));}
const seeds=new Set(highlightedPaths.map(abs));
for(const p of ['/sitemap.xml','/news-sitemap.xml']){try{for(const u of await sitemapUrls(p)) seeds.add(u)}catch(e){console.error('sitemap failed',p,e.message)}}
const queue=[...seeds], seen=new Set(), results=[];
for(let i=0;i<queue.length&&seen.size<750;i++){
  const url=queue[i]; if(seen.has(url)) continue; seen.add(url);
  try{const r=await fetchFollow(url); const title=(r.text.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1]||'').replace(/\s+/g,' ').trim(); const c=classify(r,title); const entry={url,status:r.status,final:r.final,hops:r.hops,contentType:r.contentType,bytes:Buffer.byteLength(r.text),title,...c}; results.push(entry); if(r.contentType.includes('html')&&r.status>=200&&r.status<300){for(const link of extractLinks(r.text,r.final)) if(!seen.has(link)&&!queue.includes(link)) queue.push(link)}}
  catch(e){results.push({url,status:0,final:url,hops:[],contentType:'',bytes:0,title:'',ok:false,reason:`fetch_error:${e.message}`,badStatus:true,badRedirect:false,semantic404:false})}
  await sleep(25);
}
const issues=results.filter(r=>!r.ok);
const highlighted=results.filter(r=>highlightedPaths.map(abs).includes(r.url));
const out={ranAt:new Date().toISOString(),runTag,base,highlightedCount:highlightedPaths.length,seedCount:seeds.size,checked:results.length,issueCount:issues.length,issues,highlighted,verify:results};
writeFileSync(`live-proof-cron-${runTag}-sweep.json`,JSON.stringify(out,null,2));
console.log(JSON.stringify({ranAt:out.ranAt,checked:out.checked,issueCount:out.issueCount,issues:issues.map(i=>({url:i.url,status:i.status,final:i.final,reason:i.reason,title:i.title}))},null,2));
process.exit(issues.length?2:0);
