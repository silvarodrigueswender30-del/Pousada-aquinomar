const assert = require('node:assert/strict');
const os = require('node:os');
const path = require('node:path');
const { chromium } = require('playwright');

const captions = [
  ['praia-de-sao-goncalo', 'Mar calmo · Boa para famílias'],
  ['passeio-de-escuna', 'Saída fácil do Centro · Bate-volta pelas ilhas de Paraty'],
  ['passeio-de-jeep', 'Trilhas e cachoeiras · Roteiro de aventura na Mata Atlântica'],
  ['ilha-do-pelado', 'Mar transparente · Acesso só de barco'],
  ['praia-da-trindade', 'Paisagem preservada · Ideal para um dia inteiro'],
];
const footer = 'Pousada em Caboré, Paraty, com acolhimento familiar, café da manhã incluso e contato direto com a recepção.';

(async () => {
  const browser = await chromium.launch({channel:'chrome',headless:true});
  try {
    const noJs = await browser.newContext({javaScriptEnabled:false});
    const staticPage = await noJs.newPage();
    await staticPage.goto('http://localhost:3001', {waitUntil:'domcontentloaded'});
    assert.equal(await staticPage.locator('#inicio .sr-only').textContent(), '5');
    assert.equal(await staticPage.locator('#inicio span[aria-hidden="true"]').textContent(), '5');
    assert.deepEqual(await staticPage.locator('#avaliacoes .sr-only').allTextContents(), ['5','411','98']);
    assert.deepEqual(await staticPage.locator('#avaliacoes span[aria-hidden="true"]').allTextContents(), ['5','','411','','98','']);
    await noJs.close();
    for (const viewport of [{width:1366,height:900},{width:390,height:844}]) {
      const context = await browser.newContext({viewport,reducedMotion:'reduce'});
      const page = await context.newPage();
      const errors=[];
      page.on('pageerror', error=>errors.push(error.message));
      await page.goto('http://localhost:3001',{waitUntil:'domcontentloaded'});
      await page.getByRole('button',{name:'Recusar não essenciais',exact:true}).click();
      await page.evaluate(()=>localStorage.setItem('aquino_exit_offer_seen',JSON.stringify({lastShown:Date.now(),action:'closed'})));
      assert.ok((await page.locator('#inicio p').allTextContents()).join(' ').includes('hospedagem familiar em Caborê'));
      await page.screenshot({path:path.join(os.tmpdir(),`aquino-followup-hero-${viewport.width}.png`)});
      for (const [id,caption] of captions) {
        await page.locator(`#destination-trigger-${id}`).click();
        const active = page.locator(`#destination-panel-${id} p`).filter({hasText:caption});
        assert.equal(await active.count(),2);
        assert.ok(await active.first().isVisible() || await active.last().isVisible());
      }
      await page.locator('#destination-trigger-passeio-de-jeep').click();
      await page.locator('#destaques').screenshot({path:path.join(os.tmpdir(),`aquino-followup-cards-${viewport.width}.png`)});
      const questions = page.locator('#faq button[aria-expanded]');
      assert.equal(await questions.count(),7);
      for(let i=0;i<7;i++) {
        const question = questions.nth(i);
        await page.evaluate(index => {
          document.querySelectorAll('#faq button[aria-expanded]')[index].click();
        }, i);
        await page.waitForFunction(
          element => element.getAttribute('aria-expanded') === 'true',
          await question.elementHandle(),
        );
        const answer = question.locator('..').locator('p');
        assert.ok((await answer.textContent()).length>40);
      }
      assert.ok(await page.locator('footer').getByText(footer,{exact:true}).count());
      assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);
      assert.deepEqual(errors,[]);
      console.log('PASS: Home, five captions, seven FAQ answers, footer, no overflow, viewport '+viewport.width);
      await context.close();
    }
    const page = await browser.newPage();
    for(const route of ['/grupos-e-caravanas','/politica-de-privacidade-e-cookies']) {
      await page.goto('http://localhost:3001'+route,{waitUntil:'domcontentloaded'});
      assert.ok(await page.locator('footer').getByText(footer,{exact:true}).count());
    }
    await page.goto('http://localhost:3001/quartos/suite-casal',{waitUntil:'domcontentloaded'});
    assert.ok((await page.locator('body').textContent()).includes('que prezam por espaço e privacidade'));
    console.log('PASS: final numbers without JavaScript, shared footer, unchanged room detail.');
  } finally {await browser.close();}
})().catch(error=>{console.error(error);process.exitCode=1;});
