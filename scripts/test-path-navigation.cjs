#!/usr/bin/env node
'use strict';
const fs = require('node:fs');
const path = require('node:path');
const http = require('node:http');
const {chromium} = require('playwright-core');
const root = path.resolve(__dirname, '..');
const mime = {'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.json':'application/json','.svg':'image/svg+xml','.png':'image/png','.jpg':'image/jpeg','.webp':'image/webp'};
const server = http.createServer((req,res)=>{
  const pathname = new URL(req.url, 'http://localhost').pathname;
  const target = path.resolve(root, '.' + decodeURIComponent(pathname === '/' ? '/index.html' : pathname));
  if (!target.startsWith(root+path.sep)) {res.writeHead(403);res.end();return;}
  fs.readFile(target,(err,body)=>{
    if(err){res.writeHead(404);res.end();return;}
    res.writeHead(200,{'content-type':mime[path.extname(target)]||'application/octet-stream','cache-control':'no-store'});
    res.end(body);
  });
});
(async()=>{
  await new Promise(r=>server.listen(0,'127.0.0.1',r));
  const url='http://127.0.0.1:'+server.address().port;
  let browser;
  try {
    browser=await chromium.launch({headless:true,executablePath:process.env.CHROME_PATH||'/usr/bin/google-chrome',args:['--no-sandbox','--disable-dev-shm-usage']});
    const failures=[];
    for(const device of [{name:'desktop',viewport:{width:1400,height:850}},{name:'mobile',viewport:{width:390,height:844},isMobile:true,hasTouch:true}]){
      const page=await browser.newPage({viewport:device.viewport,isMobile:device.isMobile||false,hasTouch:device.hasTouch||false});
      const errors=[];
      page.on('pageerror',err=>errors.push(err.stack||err.message));
      await page.goto(url+'/#/programming',{waitUntil:'load'});
      await page.waitForSelector('.path-card',{timeout:15000});
      const cards=await page.locator('.path-card').evaluateAll(nodes=>nodes.map(n=>({title:n.querySelector('h3')?.textContent?.trim(),href:n.getAttribute('href')})));
      if(cards.length!==6)failures.push(device.name+': expected 6 core paths, got '+cards.length);
      for(const c of cards){
        await page.goto(url+'/#/programming',{waitUntil:'load'});
        await page.waitForSelector('.path-card',{timeout:10000});
        const card=page.locator('.path-card[href="'+c.href+'"]');
        await card.click({timeout:6000});
        await page.waitForTimeout(180);
        const got=await page.evaluate(()=>({hash:location.hash,title:document.querySelector('#app h1')?.textContent?.trim()||'',lessons:document.querySelectorAll('.lesson-row').length,notFound:!!document.querySelector('.not-found')}));
        const pass=got.hash===c.href&&got.lessons>0&&got.title.includes(c.title);
        console.log((pass?'PASS ':'FAIL ')+device.name+' '+c.title+' -> '+JSON.stringify(got));
        if(!pass)failures.push(device.name+' '+c.title+': '+JSON.stringify(got)+'; browser errors '+errors.join('; '));
      }
      await page.goto(url+'/#/programming',{waitUntil:'load'});
      await page.locator('.path-card[href="#/path/framework"]').click();
      await page.waitForSelector('.lesson-row',{timeout:8000});
      const lessonLink=page.locator('.lesson-row').first();
      const lessonHref=await lessonLink.getAttribute('href');
      await lessonLink.click();
      await page.waitForTimeout(180);
      const lessonState=await page.evaluate(()=>({hash:location.hash,title:document.querySelector('#app h1')?.textContent?.trim()||''}));
      if(lessonState.hash!==lessonHref)failures.push(device.name+' lesson navigation: '+JSON.stringify(lessonState));
      console.log('CHECK '+device.name+' core lesson -> '+JSON.stringify(lessonState));

      // The reported regression is NOT the path cards: the inner lesson rows
      // must open their actual lesson on desktop and mobile, including rows
      // marked completed in a student's saved browser progress.
      const lessonIds = await page.evaluate(()=>window.UE5_COURSE_DATA.lessons.map(l=>l.id));
      for(const completed of [false,true]){
        if(completed){
          await page.evaluate(ids=>{
            const key='ue5hub:v2:progress';
            const value=JSON.parse(localStorage.getItem(key)||'null')||{};
            value.completed=ids;
            localStorage.setItem(key,JSON.stringify(value));
          },lessonIds);
          await page.reload({waitUntil:'load'});
        }
        for(const c of cards){
          await page.goto(url+c.href,{waitUntil:'load'});
          await page.waitForSelector('.lesson-row',{timeout:12000});
          const links=await page.locator('.lesson-row').evaluateAll(nodes=>nodes.map(n=>({
            href:n.getAttribute('href'),
            title:n.querySelector('strong')?.textContent?.trim()||''
          })));
          for(const link of links){
            try{
              await page.locator('.lesson-row[href="'+link.href+'"]').click({timeout:5000});
              await page.waitForTimeout(90);
              const got=await page.evaluate(()=>({
                hash:location.hash,
                title:document.querySelector('#app h1')?.textContent?.trim()||'',
                lesson:!!document.querySelector('#app .lesson-layout'),
                sectionCount:document.querySelectorAll('#app .content-card').length,
                breadcrumb:!!document.querySelector('#app .breadcrumb a[href^="#/path/"]')
              }));
              const pass=got.hash===link.href&&got.lesson&&got.sectionCount>=5&&got.title===link.title&&got.breadcrumb;
              if(!pass)failures.push(device.name+' '+(completed?'COMPLETED':'FRESH')+' '+link.title+' -> '+JSON.stringify(got));
              console.log((pass?'PASS':'FAIL')+' '+device.name+' '+(completed?'COMPLETED':'FRESH')+' '+link.title+' -> '+JSON.stringify(got));
              await page.goto(url+c.href,{waitUntil:'load'});
              await page.waitForSelector('.lesson-row',{timeout:10000});
            }catch(error){
              failures.push(device.name+' '+(completed?'COMPLETED':'FRESH')+' '+link.title+' -> '+(error.stack||error.message).slice(0,650));
              await page.goto(url+c.href,{waitUntil:'load'});
            }
          }
        }
      }
      if(lessonIds.length!==20)failures.push(device.name+': expected 20 original core lessons; found '+lessonIds.length);

      // Level 4 research is a shared starting task, not another specialist project.
      // The hub card, direct URL, page content and site search must all work on both viewports.
      await page.goto(url+'/#/level4',{waitUntil:'load'});
      await page.waitForSelector('.level4-choice-grid',{timeout:10000});
      const researchLink=page.locator('.level4-game-ref-grid a[href="#/level4/research"]');
      if(await researchLink.count()!==1){
        failures.push(device.name+': research card missing from Level 4 landing');
      }else{
        await researchLink.click();
        await page.waitForSelector('.level4-stage-list',{timeout:10000});
        const research=await page.evaluate(()=>({
          hash:location.hash,
          title:document.querySelector('#app h1')?.textContent?.trim(),
          specialisms:document.querySelectorAll('#app .level4-prompt-grid article').length,
          steps:document.querySelectorAll('#app .level4-stage').length,
          evidence:document.querySelectorAll('#app .level4-deliver div').length,
          search:(()=>{const input=document.querySelector('#globalSearch');if(!input)return false;input.value='Game Development Research';input.dispatchEvent(new Event('input',{bubbles:true}));return !!document.querySelector('#searchPanel a[href="#/level4/research"]');})(),
          width:document.querySelector('#app').getBoundingClientRect().width,
          scrollWidth:document.querySelector('#app').scrollWidth
        }));
        const pass=research.hash==='#/level4/research'&&research.title?.includes('Game Development Research')&&research.specialisms===7&&research.steps===5&&research.evidence===4&&research.search&&research.scrollWidth<=research.width+3;
        console.log((pass?'PASS ':'FAIL ')+device.name+' Level 4 research -> '+JSON.stringify(research));
        if(!pass)failures.push(device.name+' Level 4 research -> '+JSON.stringify(research));
      }
      await page.goto(url+'/#/level4/research',{waitUntil:'load'});
      await page.waitForSelector('.level4-stage-list',{timeout:10000});
      if(await page.locator('.level4-stage').count()!==5)failures.push(device.name+': direct research URL does not show all five tasks');

      // Research gallery should show eight grounded game examples with
      // screenshots, an official/developer talk, a written source and a prompt.
      const gallery=await page.evaluate(()=>{
        const cards=[...document.querySelectorAll('.level4-example-card')];
        return {count:cards.length,images:cards.filter(c=>c.querySelector('img[alt][src]')).length,
          developerVideos:cards.filter(c=>c.querySelectorAll('.level4-example-links a[href*="youtube.com/watch"]').length===1).length,
          articles:cards.filter(c=>c.querySelectorAll('.level4-example-links a').length===2).length,
          prompts:cards.filter(c=>c.querySelector('.level4-example-prompt')).length,
          annotation:!!document.querySelector('.level4-annotation-example img'),
          width:document.querySelector('#app').clientWidth,scrollWidth:document.querySelector('#app').scrollWidth};
      });
      const galleryPass=gallery.count===8&&gallery.images===8&&gallery.developerVideos===8&&gallery.articles===8&&gallery.prompts===8&&gallery.annotation&&gallery.scrollWidth<=gallery.width+3;
      console.log((galleryPass?'PASS ':'FAIL ')+device.name+' Level 4 visual gallery -> '+JSON.stringify(gallery));
      if(!galleryPass)failures.push(device.name+' Level 4 visual gallery -> '+JSON.stringify(gallery));



      if(errors.length)failures.push(device.name+' uncaught browser errors:\n'+[...new Set(errors)].slice(0,4).join('\n'));
      await page.close();
    }
    if(failures.length){console.error('PATH NAVIGATION FAILED\n'+failures.join('\n'));process.exitCode=1;}
    else console.log('PATH NAVIGATION PASS (6 path links + lesson link across desktop/mobile)');
  } finally {
    if(browser)await browser.close();
    await new Promise(r=>server.close(r));
  }
})().catch(err=>{console.error(err.stack||err);process.exitCode=1;server.close();});
