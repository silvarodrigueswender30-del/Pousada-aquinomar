const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { chromium } = require('playwright');

(async () => {
  const before = require('../docs/seo/inventario-antes.json');
  const after = require('../docs/seo/inventario-depois.json');
  const signature = rows => rows.map(r => JSON.stringify([r.tag,r.text,r.location])).sort();
  for (const page of new Set(before.map(r=>r.page))) {
    if (page !== '/') assert.deepEqual(signature(before.filter(r=>r.page===page)),signature(after.filter(r=>r.page===page)),page+' must be unchanged');
  }
  const browser = await chromium.launch({channel:'chrome',headless:true});
  try {
    for (const viewport of [{width:1366,height:900},{width:390,height:844}]) {
      const context = await browser.newContext({viewport,reducedMotion:'reduce'});
      const page = await context.newPage();
      await page.goto('http://localhost:3001',{waitUntil:'domcontentloaded'});
      await page.getByRole('button',{name:'Recusar não essenciais',exact:true}).click();
      await page.evaluate(()=>localStorage.setItem('aquino_exit_offer_seen',JSON.stringify({lastShown:Date.now(),action:'closed'})));
      const result = await page.evaluate(()=>({
        title:document.title,
        description:document.querySelector('meta[name="description"]').content,
        h1:[...document.querySelectorAll('h1')].map(e=>e.textContent),
        h2:[...document.querySelectorAll('main h2')].map(e=>e.textContent),
        overflow:document.documentElement.scrollWidth>innerWidth,
        headings:[...document.querySelectorAll('main h1,main h2')].map(e=>({text:e.textContent,width:e.clientWidth,scroll:e.scrollWidth})),
      }));
      assert.ok(result.title.length<=60);
      assert.ok(result.description.length<=155);
      assert.equal(result.h1.length,1);
      assert.ok(result.h1[0].includes('Pousada Aquino Mar'));
      assert.ok(result.h2.every(t=>/pousada|Paraty|hospedagem/i.test(t)));
      assert.equal(result.overflow,false);
      assert.ok(result.headings.every(h=>h.scroll<=h.width+1));
      const screenshot = path.join(os.tmpdir(),`aquino-home-${viewport.width}.png`);
      await page.screenshot({path:screenshot});
      console.log(JSON.stringify({viewport,title:result.title,titleLength:result.title.length,descriptionLength:result.description.length,headings:result.headings,screenshot}));
      await context.close();
    }
    console.log('PASS: metadata, responsive headings, and unchanged non-Home copy.');
  } finally {await browser.close();}
})().catch(error=>{console.error(error);process.exitCode=1;});
