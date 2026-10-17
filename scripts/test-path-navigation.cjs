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
