#!/usr/bin/env node
'use strict';
const fs=require('node:fs'),path=require('node:path'),http=require('node:http'),crypto=require('node:crypto');
const {chromium}=require('playwright-core');
const root=path.resolve(__dirname,'..');
const mime={'.html':'text/html','.js':'text/javascript','.css':'text/css','.svg':'image/svg+xml','.png':'image/png','.jpg':'image/jpeg','.json':'application/json','.zip':'application/zip'};
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
  const figureManifest=JSON.parse(fs.readFileSync(path.join(root,'assets/mini-projects/images/manifest.json'),'utf8'));
  const figureGroups=figureManifest.stage_figures;
  const figureFiles=Object.values(figureGroups).flat();
  if(figureFiles.length!==320)fail.push('figure count expected 320, got '+figureFiles.length);
  for(const figure of figureFiles){
    if(!Number.isInteger(figure.afterParagraph)||figure.afterParagraph<-1)fail.push('missing source paragraph anchor '+figure.file);
    if(!fs.existsSync(path.join(root,figure.file)))fail.push('missing illustration '+figure.file);
  }
  const archivePath=path.join(root,'assets/mini-projects/Assets.zip');
  const sha256=filename=>crypto.createHash('sha256').update(fs.readFileSync(filename)).digest('hex');
  if(!fs.existsSync(archivePath))fail.push('hosted models ZIP is missing');
  else if(sha256(archivePath)!=='722fa6ec2012600e342b7426bae6b405fce866513a215490c69c0ed9ebaf0ef5')fail.push('hosted models ZIP SHA-256 mismatch');

  try {
    browser=await chromium.launch({headless:true,executablePath:process.env.CHROME_PATH||'/usr/bin/google-chrome',args:['--no-sandbox','--disable-dev-shm-usage']});
    for(const device of [{name:'desktop',viewport:{width:1380,height:850}},{name:'mobile',viewport:{width:390,height:844},isMobile:true,hasTouch:true}]){
      const page=await browser.newPage({viewport:device.viewport,isMobile:!!device.isMobile,hasTouch:!!device.hasTouch,acceptDownloads:true});
      const errors=[];page.on('pageerror',e=>errors.push(e.stack||e.message));
      await page.goto(base+'/#/build',{waitUntil:'load'});
      const entry=page.locator('.ux-route-card[href="#/mini-projects"]');
      if(await entry.count()!==1)fail.push(device.name+': expected one Build → Mini-Projects entry');
      await entry.click();
      await page.waitForTimeout(120);
      if(!page.url().endsWith('#/mini-projects'))fail.push(device.name+': Build link wrong hash');
      const cards=page.locator('.mini-project-card');
      if(await cards.count()!==4)fail.push(device.name+': expected four project cards');
      if(await page.getByText('How to use this series',{exact:true}).count())
        fail.push(device.name+': removed How to use this series section still visible');
      if(await page.getByText('Course source:',{exact:false}).count())
        fail.push(device.name+': removed course source block still visible');
      if(await page.locator('.mini-header').count()!==1)
        fail.push(device.name+': Mini-Projects header missing after intro removal');
      const definitions=await page.evaluate(()=>window.UE5_MINI_PROJECT_DATA.projects.map(p=>({id:p.id,stages:p.stages.map(s=>s.id)})));
      if(definitions.reduce((n,p)=>n+p.stages.length,0)!==16)fail.push(device.name+': expected 16 stages');
      for(const p of definitions){
        await page.goto(base+'/#/mini-projects',{waitUntil:'load'});
        await page.waitForSelector('.mini-project-card',{timeout:10000});
        await page.locator('.mini-project-card[href="#/mini-projects/'+p.id+'"]').click();
        await page.waitForSelector('.mini-stage-link',{timeout:10000});
        const overview=await page.evaluate(()=>({hash:location.hash,title:document.querySelector('#app h1')?.textContent?.trim(),count:document.querySelectorAll('.mini-stage-link').length}));
        if(overview.hash!=='#/mini-projects/'+p.id||overview.count!==p.stages.length)fail.push(device.name+' '+p.id+' project overview '+JSON.stringify(overview));
        console.log('PROJECT '+device.name+' '+p.id+' '+JSON.stringify(overview));
        for(const id of p.stages){
          await page.goto(base+'/#/mini-projects/'+p.id,{waitUntil:'load'});
          await page.waitForSelector('.mini-stage-link',{timeout:10000});
          await page.locator('.mini-stage-link[href="#/mini-projects/'+p.id+'/'+id+'"]').click();
          await page.waitForSelector('.mini-task-list li',{timeout:10000});
          const st=await page.evaluate(()=>({hash:location.hash,title:document.querySelector('#app h1')?.textContent?.trim(),tasks:document.querySelectorAll('.mini-task-list li').length,sourcePages:document.querySelectorAll('.mini-source-page').length,check:!!document.querySelector('.mini-proof'),complete:!!document.querySelector('[data-action="mini-complete"]')}));
          const correct=st.hash==='#/mini-projects/'+p.id+'/'+id&&st.tasks>=4&&st.sourcePages>=1&&st.check&&st.complete;
          // Task-based sections replace the old per-PDF-page headings. Source
          // page elements still exist for exact image placement and attribution.
          const headings=await page.locator('.mini-source-section > summary').allTextContents();
          const allLabels=headings.map(x=>x.trim());
          if(allLabels.length<2||allLabels.some(x=>/Source page|Read instructions and illustrations/i.test(x)))
            fail.push(device.name+' '+id+': generic or missing walkthrough task headings '+JSON.stringify(allLabels));
          const sectionData=await page.evaluate(stageId=>{
            const st=window.UE5_MINI_PROJECT_DATA.projects.flatMap(x=>x.stages).find(x=>x.id===stageId);
            const expected=st.walkthroughSections.flatMap(x=>Array.from({length:x.end-x.start+1},(_,i)=>x.start+i));
            const pageIds=[...document.querySelectorAll('.mini-source-page')].map(x=>Number(x.dataset.miniPage));
            return {expected,pageIds,sections:st.walkthroughSections.length,unique:new Set(st.walkthroughSections.map(x=>x.title)).size};
          },id);
          if(sectionData.expected.join(',')!==sectionData.pageIds.join(',')||sectionData.sections!==allLabels.length||sectionData.unique!==allLabels.length)
            fail.push(device.name+' '+id+': source pages missing, duplicated or unclear heading');
          if(!correct)fail.push(device.name+' '+id+' bad lesson '+JSON.stringify(st));
          // Open each student-facing task: figures must still be attached to
          // their original source page and paragraph, not floated to the end.
          const expectedFigures=(figureGroups[p.id+'/'+id]||[]).length;
          await page.locator('.mini-source-section').evaluateAll(items=>items.forEach(el=>el.open=true));
          try {
            await page.waitForFunction(count=>document.querySelectorAll('.mini-illustration img').length===count,expectedFigures,{timeout:8000});
          }catch(e){fail.push(device.name+' '+id+': did not mount '+expectedFigures+' illustrations');}
          const placed=await page.locator('.mini-illustration img').count();
          if(placed!==expectedFigures)fail.push(device.name+' '+id+': figure count '+placed+'/'+expectedFigures);
          if(placed){
            const image=page.locator('.mini-illustration img').first();
            await image.scrollIntoViewIfNeeded();
            try{
              await page.waitForFunction(()=>{const img=document.querySelector('.mini-illustration img');return img?.complete&&img.naturalWidth>0;},null,{timeout:8000});
            }catch(e){fail.push(device.name+' '+id+': first course image failed to load');}
            const info=await image.evaluate(img=>({alt:img.alt,width:img.getBoundingClientRect().width,parent:img.closest('.mini-page-text')?.getBoundingClientRect().width}));
            if(!info.alt.includes('source page')||!info.parent||info.width>info.parent+1)fail.push(device.name+' '+id+': missing caption or image overflows layout');
          }
          console.log((correct?'PASS ':'FAIL ')+device.name+' '+id+' '+JSON.stringify(st));
        }
      }
      await page.goto(base+'/#/mini-projects/balloon-popper/balloon-1',{waitUntil:'load'});
      await page.waitForSelector('[data-action="mini-complete"]',{timeout:10000});
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
      // The real user-supplied archive is now hosted, not a mocked placeholder.
      await page.goto(base+'/#/mini-projects/balloon-popper',{waitUntil:'load'});
      await page.locator('[data-mini-assets-link]').waitFor({state:'visible',timeout:6000}).catch(async()=>{
        const probe=await page.evaluate(async()=>{
          const link=document.querySelector('[data-mini-assets-link]'),fallback=document.querySelector('[data-mini-assets-fallback]');
          let head;try{const r=await fetch(link.href,{method:'HEAD',cache:'no-store'});head={status:r.status,ok:r.ok};}catch(e){head={error:String(e)};}
          return {url:location.href,linkHidden:link?.hidden,fallbackHidden:fallback?.hidden,head};
        });
        throw Error('Hosted ZIP availability probe failed: '+JSON.stringify(probe));
      });
      if(await page.locator('[data-mini-assets-fallback]').isVisible())
        fail.push(device.name+': fallback visible even though hosted ZIP exists');
      const [download]=await Promise.all([
        page.waitForEvent('download',{timeout:10000}),
        page.locator('[data-mini-assets-link]').click()
      ]);
      if(sha256(await download.path())!=='722fa6ec2012600e342b7426bae6b405fce866513a215490c69c0ed9ebaf0ef5')
        fail.push(device.name+': browser download contents incorrect');
      // Simulate a missing asset: students must never receive a broken CTA.
      await page.route('**/assets/mini-projects/Assets.zip',route=>route.fulfill({status:404,body:''}));
      await page.goto(base+'/#/mini-projects/bowling',{waitUntil:'load'});
      await page.waitForSelector('[data-mini-assets]',{timeout:6000});
      await page.waitForTimeout(200);
      if(await page.locator('[data-mini-assets-link]').isVisible())fail.push(device.name+': unavailable ZIP exposed download CTA');
      if(!(await page.locator('[data-mini-assets-fallback]').isVisible()))fail.push(device.name+': missing ZIP fallback absent');
      await page.unroute('**/assets/mini-projects/Assets.zip');
      // Reload, not a same-hash navigation, so the asset HEAD check runs again.
      await page.reload({waitUntil:'load'});
      await page.locator('[data-mini-assets-link]').waitFor({state:'visible',timeout:6000});
      console.log('ASSETS '+device.name+' real ZIP downloaded and verified; 404 fallback tested.');
      if(errors.length)fail.push(device.name+' browser exceptions:\n'+[...new Set(errors)].slice(0,3).join('\n'));
      console.log('COMPLETE '+device.name+' tested '+definitions.reduce((n,p)=>n+p.stages.length,0)+' stage routes and local progress.');
      await page.close();
    }
    if(fail.length){console.error('MINI-PROJECTS FAILED:\n'+fail.join('\n'));process.exitCode=1;}
    else console.log('MINI-PROJECTS PASS: 320 source-linked illustrations, model download checksum, four overviews, 16 stages, desktop/mobile, progress and search');
  }finally{
    if(browser)await browser.close();
    await new Promise(r=>server.close(r));
  }
}
run().catch(err=>{console.error(err.stack||err);process.exitCode=1;server.close();});
