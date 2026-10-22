import test, { before, after } from 'node:test';
import assert from 'node:assert/strict';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { chromium } from 'playwright';

const root = resolve(import.meta.dirname, '..');
let browser;
before(async () => { browser = await chromium.launch({headless: true}); });
after(async () => { if (browser) await browser.close(); });

async function open(name) {
  const page = await browser.newPage();
  const errors = [];
  page.on('pageerror', err => errors.push(err.message));
  await page.goto(pathToFileURL(resolve(root, name)).href);
  return { page, errors };
}
async function finish(page) {
  await page.locator('#progress').evaluate(el => {
    el.value = el.max;
    el.dispatchEvent(new Event('input', {bubbles: true}));
  });
}
const labs = [
 'introduction_chapter_1_interactive.html',
 'array_based_lists_chapter_2_interactive.html',
 'linked_lists_chapter_3_interactive.html',
 'skiplist_chapter_4_interactive.html',
 'hash_tables_chapter_5_interactive.html',
 'binary_tree_traversals_6_1_interactive.html',
 'bst_section_6_2_interactive.html'
];

for (const lab of labs) {
  test('opens without a JavaScript exception: ' + lab, async () => {
    const {page,errors} = await open(lab);
    try {
      assert.equal(await page.locator('main#primary-content').count(),1);
      assert.equal(await page.locator('a.skip-link').count(),1);
      assert.ok((await page.locator('.prediction summary').count())>=1);
      assert.equal(await page.locator('#animated-diagram-description').count(),1);
      assert.deepEqual(errors,[]);
    } finally { await page.close(); }
  });
}

test('ArrayQueue removes every element, then permits enqueue',async()=>{
  const {page,errors}=await open(labs[1]);
  try {
    await page.locator('[data-mode="queue"]').click();
    await page.locator('#operation').selectOption('remove');
    for(let i=0;i<5;i++) {
      await page.locator('#runBtn').click();
      await finish(page);
      assert.equal((await page.locator('#error').isHidden()),true);
      assert.equal(Number(await page.locator('#metricN').textContent()),4-i);
    }
    await page.locator('#operation').selectOption('add');
    await page.locator('#valueInput').fill('73');
    await page.locator('#runBtn').click();
    await finish(page);
    assert.equal(Number(await page.locator('#metricN').textContent()),1);
    assert.match(await page.locator('#sequence').textContent(),/73/);
    assert.deepEqual(errors,[]);
  } finally {await page.close();}
});

test('SLList tail removal updates length and displayed pseudocode',async()=>{
  const {page,errors}=await open(labs[2]);
  try {
    await page.locator('#operation').selectOption('removeTail');
    await page.locator('#runBtn').click();
    await finish(page);
    assert.equal(await page.locator('#metricN').textContent(),'4');
    assert.match(await page.locator('#codeCard').textContent(),/n--; return old/);
    assert.deepEqual(errors,[]);
  } finally {await page.close();}
});

test('Skiplist operations start from the displayed frame, not a hidden future frame',async()=>{
  const {page,errors}=await open(labs[3]);
  try {
    await page.locator('#operation').selectOption('add');
    await page.locator('#keyValue').fill('10');
    await page.locator('#newHeight').selectOption('2');
    await page.locator('#runBtn').click();
    await finish(page);
    assert.equal(await page.locator('#mNodes').textContent(),'10');
    await page.locator('#progress').evaluate(el=>{
      el.value=0;el.dispatchEvent(new Event('input',{bubbles:true}));
    });
    await page.locator('#operation').selectOption('find');
    await page.locator('#runBtn').click();
    await finish(page);
    assert.match(await page.locator('#resultText').textContent(),/find\(10\) = 11/);
    assert.deepEqual(errors,[]);
  } finally {await page.close();}
});

test('Linear hashing tombstones preserve later probe paths',async()=>{
 const {page,errors}=await open(labs[4]);
 try {
   await page.locator('[data-mode="probe"]').click();
   await page.locator('[data-example="delete"]').click();
   await finish(page);
   assert.match(await page.locator('#visual').textContent(),/DEL/);
   assert.deepEqual(errors,[]);
 } finally {await page.close();}
});

test('Breadth-first traversal visits every node',async()=>{
 const {page,errors}=await open(labs[5]);
 try {
   await page.locator('[data-mode="bfs"]').click();
   await finish(page);
   assert.match(await page.locator('#metricVisits').textContent(),/9\s*\/\s*9/);
   assert.deepEqual(errors,[]);
 } finally {await page.close();}
});

test('BST two-child deletion preserves order and decreases count',async()=>{
 const {page,errors}=await open(labs[6]);
 try {
   await page.locator('[data-example="two"]').click();
   await finish(page);
   assert.equal(await page.locator('#metricNodes').textContent(),'11');
   assert.match(await page.locator('#invariant').textContent(),/holds/);
   assert.match(await page.locator('[data-mode="shape"]').textContent(),/Tree shape/);
   assert.deepEqual(errors,[]);
 } finally {await page.close();}
});

test('reduced-motion preference prevents automatic playback',async()=>{
 const {page,errors}=await open(labs[1]);
 try {
  await page.emulateMedia({reducedMotion:'reduce'});
  await page.locator('#runBtn').click();
  assert.match(await page.locator('#playBtn').textContent(),/Play/);
  assert.match(await page.locator('#stepCounter').textContent(),/Step 1 of/);
  assert.deepEqual(errors,[]);
 } finally {await page.close();}
});
