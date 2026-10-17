#!/usr/bin/env node
'use strict';
const fs=require('node:fs'),path=require('node:path'),http=require('node:http');
const {chromium}=require('playwright-core');
const root=path.resolve(__dirname,'..');
const mime={'.html':'text/html','.js':'text/javascript','.css':'text/css','.svg':'image/svg+xml','.png':'image/png','.jpg':'image/jpeg'};
const server=http.createServer((req,res)=>{
  const pathname=new URL(req.url,'http://localhost').pathname;
  const target=path.resolve(root,'.'+decodeURIComponent(pathname==='/'?'/index.html':pathname));
  if(!target.startsWith(root+path.sep)){res.writeHead(403);res.end();return}
  fs.readFile(target,(err,body)=>{
    if(err){res.writeHead(404);res.end();return}
    res.writeHead(200,{'content-type':mime[path.extname(target)]||'application/octet-stream','cache-control':'no-store'});
    res.end(body);
  });
});
async function run(){
  await new Promise(r=>server.listen(0,'127.0.0.1',r));
  const base='http://127.0.0.1:'+server.address().port;
  let browser;
  const fail=[];
  try {
    browser=await chromium.launch({headless:true,executablePath:process.env.CHROME_PATH||'/usr/bin/google-chrome',args:['--no-sandbox','--disable-dev-shm-usage']});
    for(const device of [{name:'desktop',viewport:{width:1380,height:850}},{name:'mobile',viewport:{width:390,height:844},isMobile:true,hasTouch:true}]){
      const page=await browser.newPage({viewport:device.viewport,isMobile:!!device.isMobile,hasTouch:!!device.hasTouch});
      const errors=[];page.on('pageerror',e=>errors.push(e.stack||e.message));
      await page.goto(base+'/#/build',{waitUntil:'load'});
      const entry=page.locator('.ux-route-card[href="#/mini-projects"]');
      if(await entry.count()!==1)fail.push(device.name+': expected one Build → Mini-Projects entry');
      await entry.click();
      await page.waitForTimeout(120);
      if(!page.url().endsWith('#/mini-projects'))fail.push(device.name+': Build link wrong hash');
      const cards=page.locator('.mini-project-card');
      if(await cards.count()!==4)fail.push(device.name+': expected four project cards');
      const definitions=await page.evaluate(()=>window.UE5_MINI_PROJECT_DATA.projects.map(p=>({id:p.id,stages:p.stages.map(s=>s.id)})));
      if(definitions.reduce((n,p)=>n+p.stages.length,0)!==16)fail.push(device.name+': expected 16 stages');
      for(const p of definitions){
        await page.goto(base+'/#/mini-projects',{waitUntil:'load'});
        await page.locator('.mini-project-card[href="#/mini-projects/'+p.id+'"]').click();
        const overview=await page.evaluate(()=>({hash:location.hash,title:document.querySelector('#app h1')?.textContent?.trim(),count:document.querySelectorAll('.mini-stage-link').length}));
        if(overview.hash!=='#/mini-projects/'+p.id||overview.count!==p.stages.length)fail.push(device.name+' '+p.id+' project overview '+JSON.stringify(overview));
        console.log('PROJECT '+device.name+' '+p.id+' '+JSON.stringify(overview));
        for(const id of p.stages){
          await page.goto(base+'/#/mini-projects/'+p.id,{waitUntil:'load'});
          await page.locator('.mini-stage-link[href="#/mini-projects/'+p.id+'/'+id+'"]').click();
          const st=await page.evaluate(()=>({hash:location.hash,title:document.querySelector('#app h1')?.textContent?.trim(),tasks:document.querySelectorAll('.mini-task-list li').length,sourcePages:document.querySelectorAll('.mini-source-page').length,check:!!document.querySelector('.mini-proof'),complete:!!document.querySelector('[data-action="mini-complete"]')}));
          const correct=st.hash==='#/mini-projects/'+p.id+'/'+id&&st.tasks>=4&&st.sourcePages>=1&&st.check&&st.complete;
          if(!correct)fail.push(device.name+' '+id+' bad lesson '+JSON.stringify(st));
          console.log((correct?'PASS ':'FAIL ')+device.name+' '+id+' '+JSON.stringify(st));
        }
      }
      await page.goto(base+'/#/mini-projects/balloon-popper/balloon-1',{waitUntil:'load'});
      await page.locator('[data-action="mini-complete"]').click();
      let completed=await page.evaluate(()=>JSON.parse(localStorage.getItem('ue5hub:mini-projects:v1')||'[]').includes('balloon-1'));
      if(!completed)fail.push(device.name+' progress was not saved');
      await page.reload({waitUntil:'load'});
      if(!(await page.locator('[data-action="mini-complete"]').innerText()).includes('Completed'))fail.push(device.name+' progress did not persist after refresh');
      await page.locator('[data-action="mini-complete"]').click();
      completed=await page.evaluate(()=>JSON.parse(localStorage.getItem('ue5hub:mini-projects:v1')||'[]').includes('balloon-1'));
      if(completed)fail.push(device.name+' completion could not be undone');
      const search=page.locator('#globalSearch');await search.fill('Balloon Popper');
      await page.waitForTimeout(100);
      if(!(await page.locator('#searchPanel a.search-result[href^="#/mini-projects/"]').count()))
        fail.push(device.name+' Mini-Projects missing from global search');
      if(errors.length)fail.push(device.name+' browser exceptions:\n'+[...new Set(errors)].slice(0,3).join('\n'));
      console.log('COMPLETE '+device.name+' tested '+definitions.reduce((n,p)=>n+p.stages.length,0)+' stage routes and local progress.');
      await page.close();
    }
    if(fail.length){console.error('MINI-PROJECTS FAILED:\n'+fail.join('\n'));process.exitCode=1;}
    else console.log('MINI-PROJECTS PASS: four project overviews, all 16 stages, desktop/mobile, completion persistence and search');
  }finally{
    if(browser)await browser.close();
    await new Promise(r=>server.close(r));
  }
}
run().catch(err=>{console.error(err.stack||err);process.exitCode=1;server.close();});
