import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
const repo = resolve(import.meta.dirname, '..');
const names = [
  'introduction_chapter_1_interactive.html',
  'array_based_lists_chapter_2_interactive.html',
  'linked_lists_chapter_3_interactive.html',
  'skiplist_chapter_4_interactive.html',
  'hash_tables_chapter_5_interactive.html',
  'binary_tree_anatomy_chapter_6_interactive.html',
  'binary_tree_traversals_6_1_interactive.html',
  'bst_section_6_2_interactive.html',
  'random_binary_search_trees_chapter_7_interactive.html',
  'scapegoat_trees_chapter_8_interactive.html'
];
const css = readFileSync(resolve(repo, 'styles/workbench.css'), 'utf8').trimEnd();
const start = '/* WORKBENCH_STYLE_START */';
const end = '/* WORKBENCH_STYLE_END */';
const block = start + '\n' + css + '\n' + end;
const write = process.argv.includes('--write');
let mismatches = 0;
for (const name of names) {
  const location = resolve(repo, name);
  const html = readFileSync(location, 'utf8');
  const open = html.indexOf(start);
  const close = html.indexOf(end);
  if (open < 0 || close < open) {
    console.error(name + ': missing shared style markers');
    mismatches++;
    continue;
  }
  const embedded = html.slice(open, close + end.length);
  if (embedded === block) continue;
  mismatches++;
  if (write) {
    writeFileSync(location, html.slice(0, open) + block + html.slice(close + end.length));
    console.log(name + ': updated');
  } else console.error(name + ': embedded styles differ; run npm run sync:styles');
}
if (mismatches && !write) process.exitCode = 1;
else console.log(write ? 'Embedded styles synchronized.' : 'All embedded Workbench styles match.');
