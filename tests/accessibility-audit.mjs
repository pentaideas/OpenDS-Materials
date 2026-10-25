import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { createRequire } from 'node:module';
import { pathToFileURL } from 'node:url';
import { chromium } from 'playwright';
const require = createRequire(import.meta.url);
const axe = readFileSync(require.resolve('axe-core/axe.min.js'),'utf8');
const repo = resolve(import.meta.dirname,'..');
const files=[
  'index.html',
  'introduction_chapter_1_interactive.html',
  'array_based_lists_chapter_2_interactive.html',
  'linked_lists_chapter_3_interactive.html',
  'skiplist_chapter_4_interactive.html',
  'hash_tables_chapter_5_interactive.html',
  'binary_tree_traversals_6_1_interactive.html',
  'bst_section_6_2_interactive.html',
  'binary_tree_anatomy_chapter_6_interactive.html',
  'random_binary_search_trees_chapter_7_interactive.html',
  'scapegoat_trees_chapter_8_interactive.html'
];
const browser=await chromium.launch({headless:true});
let failures=0,aaa=0;
for(const file of files){
  const page=await browser.newPage();
  await page.goto(pathToFileURL(resolve(repo,file)).href);
  await page.addScriptTag({content:axe});
  async function inspect(label) {
    const aa=await page.evaluate(async()=>window.axe.run(document,{
      runOnly:{type:'tag',values:['wcag2a','wcag2aa','wcag21a','wcag21aa','wcag22aa']}
    }));
    const triple=await page.evaluate(async()=>window.axe.run(document,{
      runOnly:{type:'tag',values:['wcag2aaa','wcag21aaa','wcag22aaa']}
    }));
    console.log(file+' / '+label+': AA '+aa.violations.length+' findings; AAA advisory '+triple.violations.length);
    for(const v of aa.violations) {
      failures++;
      console.log('  AA '+v.id+' '+v.impact+': '+v.help);
      for(const n of v.nodes.slice(0,5)) console.log('    '+n.target.join(' ')+' '+n.failureSummary?.slice(0,160));
    }
    for(const v of triple.violations) {
      aaa++;
      console.log('  AAA advisory '+v.id+': '+v.nodes.length+' elements');
      for(const n of v.nodes.slice(0,15)) console.log('    AAA target '+n.target.join(' ')+' '+n.failureSummary?.slice(0,160));
    }
  }
  await inspect('initial');
  const toggles=await page.locator('.tab[data-mode]').count();
  for(let i=0;i<toggles;i++){
    await page.locator('.tab[data-mode]').nth(i).click();
    await inspect('mode '+(i+1));
  }
  await page.close();
}
await browser.close();
console.log('AA findings across audited states: '+failures+'. AAA advisory findings: '+aaa+'. Manual assistive-technology review is still required.');
if(failures)process.exitCode=1;
