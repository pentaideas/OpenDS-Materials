# OpenDS Materials

Interactive, self-contained teaching materials for **Chapters 1–8** of Pat Morin's *Open Data Structures*.

## Launch the labs

| Section | Lab | Concepts |
| --- | --- | --- |
| **1 — Introduction** | [Interfaces & Complexity](https://pentaideas.github.io/OpenDS-Materials/introduction_chapter_1_interactive.html) | Stack/Queue/Deque/List/USet/SSet interfaces; asymptotic growth, coin-flip probability, loop invariants |
| **2.1–2.6 — Array-Based Lists** | [Interactive Arrays Lab](https://pentaideas.github.io/OpenDS-Materials/array_based_lists_chapter_2_interactive.html) | ArrayStack, FastArrayStack, ArrayQueue, ArrayDeque, DualArrayDeque, RootishArrayStack |
| **3.1–3.3 — Linked Lists** | [Interactive Linked Lists Lab](https://pentaideas.github.io/OpenDS-Materials/linked_lists_chapter_3_interactive.html) | SLList, DLList, SEList; next/prev references; head/tail; linked blocks |
| **4.1–4.4 — Skiplists** | [Interactive Skiplist Lab](https://pentaideas.github.io/OpenDS-Materials/skiplist_chapter_4_interactive.html) | Basic towers; SSet find/add/remove; indexed List get/set/add/remove; coin-flip analysis and span labels |
| **5.1–5.3 — Hash Tables** | [Interactive Hash Tables Lab](https://pentaideas.github.io/OpenDS-Materials/hash_tables_chapter_5_interactive.html) | Bucket chaining, linear probing, tombstones, collisions, insertion/search/deletion, resizing, and load factors |
| **6 — Binary Tree Anatomy** | [Tree Anatomy & Vocabulary](https://pentaideas.github.io/OpenDS-Materials/binary_tree_anatomy_chapter_6_interactive.html) | Clickable root/parent/child/sibling/ancestor/subtree relationships, depth/height, nil pointers, practice questions |
| **6.1 — BinaryTree** | [Tree Traversals](https://pentaideas.github.io/OpenDS-Materials/binary_tree_traversals_6_1_interactive.html) | Preorder, inorder, postorder, breadth-first traversal, and traversal with parent pointers |
| **6.2 — BinarySearchTree** | [BST Operations](https://pentaideas.github.io/OpenDS-Materials/bst_section_6_2_interactive.html) | Search, successor search, insertion, deletion, tree height, and degenerate trees |
| **7.1–7.2 — Random BSTs & Treaps** | [Random BSTs & Treaps](https://pentaideas.github.io/OpenDS-Materials/random_binary_search_trees_chapter_7_interactive.html) | Random insertion orders, min-heap priority, Treap find/add/remove and rotations |
| **8.1 — ScapegoatTree** | [Scapegoat Trees](https://pentaideas.github.io/OpenDS-Materials/scapegoat_trees_chapter_8_interactive.html) | Depth bound, 2/3 subtree test, partial/full rebuilding, n and q counters |

Open the [**GitHub Pages website**](https://pentaideas.github.io/OpenDS-Materials/) for a landing page linking to all ten labs.

### Run locally

1. Download this repository (GitHub **Code → Download ZIP**, or `git clone https://github.com/pentaideas/OpenDS-Materials.git`).
2. Open `index.html` in a current desktop or mobile browser.
3. Select a lab. No dependencies, installation, server, or internet connection are required.

Each lab is a single HTML file with its CSS and JavaScript embedded. You can also open any HTML file directly.

### Lab 1 — Introduction, interfaces, and complexity

- Practice Stack (LIFO), Queue (FIFO), Deque, List, USet, and SSet contracts.
- Distinguish exact USet membership from successor-style SSet `find(x)`.
- Compare illustrative O(1), O(log n), O(n), O(n log n), and O(n²) operation counts.
- Animate independent coin flips and a loop invariant for linear search.

### Lab 2.1–2.6 — Array-based lists

- Animate shifting and resizing in `ArrayStack`, and bulk copying in `FastArrayStack`.
- Examine physical vs logical indexing in circular `ArrayQueue` and `ArrayDeque`.
- Watch `DualArrayDeque` rebalance its two backing arrays.
- See triangular blocks grow and shrink in `RootishArrayStack`.
- Compare live capacity, moved cells, and annotated pseudocode.

### Lab 3.1–3.3 — Linked lists

- Animate head/tail updates with `SLList` stack and FIFO operations.
- Trace `DLList` prev/next references and the dummy sentinel.
- Insert, remove, and transfer values between bounded blocks in an `SEList` teaching demonstration.
- Show pointer steps and descriptions below highlighted code.

### Lab 4.1–4.4 — Skiplists

- See how nodes form towers across nested levels, starting at the sentinel.
- Animate `SkiplistSSet` successor searches, unique-key insertions, and removals.
- Use coin-flip-generated tower heights or select a height for teaching examples.
- Animate `SkiplistList` indexed `get(i)`, `set(i,x)`, `add(i,x)`, and `remove(i)`.
- Show forward-pointer **span lengths** (number of L0 steps) and explain why the indexed search moves right or down.
- Inspect a randomized sample of tower heights and review the expected `O(log n)` search cost.
- Follow annotated pseudocode, with a plain-English explanation directly below the highlighted line.

### Lab 5.1–5.3 — Hash tables

- Compare **ChainedHashTable** (multiple keys per bucket) with **LinearHashTable** (one key per array slot).
- Animate `find(x)`, `add(x)`, and `remove(x)` with collision paths and highlighted pseudocode.
- See why open addressing uses `DEL` tombstones and never-used `null` slots.
- Trigger table growth and watch each live key get rehashed to its new array index.
- Track the load factor and distinguish `n` (live keys) from `q` (non-null slots including tombstones).
- Use a clear deterministic `h(x)=x mod m` to make teaching examples repeatable. This is **not** the randomized hashing used in Morin's analysis.
- Read context-dependent explanations directly below each highlighted code line.

### Lab 6 — Binary tree anatomy and vocabulary

- Click nodes to inspect their `parent`, `left`, and `right` fields.
- Highlight parents, children, siblings, proper ancestors, descendants, and rooted subtrees.
- Learn leaves, internal nodes, out-degree, depth, level, height, edges and paths.
- Switch between example tree shapes and display nil/external child pointers.
- Use the guided vocabulary tour and interactive click-the-node practice questions.

### Lab 6.1 — Tree traversals

- Animate **preorder**, **inorder**, **postorder**, **breadth-first**, and **parent-pointer** traversal.
- Step through node visits, or play/pause the animation and adjust playback speed.
- See the current recursive call stack or BFS queue.
- Switch example trees, including sparse and one-sided trees, and explore traversal order and complexity.

### Lab 6.2 — Unbalanced BST

- Step through comparisons made by exact search and successor search.
- Animate insertion and the three deletion cases.
- Explore unbalanced-tree behavior and how height affects running time.
- Control playback and use examples or custom values.

### Lab 7.1–7.2 — Random binary search trees and Treaps

- Compare ordinary BSTs built from uniformly shuffled keys, sorted keys, and median-first order.
- Animate Treap `find(x)`, `add(x,p)`, and `remove(x)`.
- See min-heap priority violations and exact left/right rotations.
- Use random priorities or a manual teaching value; inspect rotation counts and tree height.

### Lab 8.1 — Scapegoat trees

- Trace ordinary BST insertion and test `depth(u) > floor(log₃⁄₂ q)`.
- Climb ancestors to identify a child subtree larger than two-thirds of its parent.
- Watch an inorder traversal pack keys and rebuild a balanced subtree.
- Remove keys, retain the historical `q`, and rebuild the full tree when `2n < q`.
- Explore `rebuild(u)` as an explicit instructional demonstration.

## Accessibility and quality checks

The labs target **WCAG 2.2 Level AA**, with enhanced contrast, clear focus indicators, keyboard-accessible transport controls, reduced-motion support, and text descriptions supplementing diagrams. AAA criteria are pursued where feasible; a full AAA or AA conformance claim requires manual testing and is **not yet made**. See [ACCESSIBILITY.md](ACCESSIBILITY.md) for known verification work.

Before each animation, an optional **Think before you animate** disclosure invites a prediction. All labs can still be opened directly without a server. The illustrations are teaching models: simulated array movements, pointers, and operation metrics must not be mistaken for measured runtime or a drop-in version of Morin's implementation.

Development-only browser checks can be run using Node 22 or later, `npm install`, `npx playwright install chromium`, and `npm test`. Opening the lab HTML pages requires **none** of these tools.

## License and AI disclosure

Original material and contributions in this repository are offered under [Creative Commons Attribution 4.0](LICENSE.md), subject to the rights of any third-party material. Pat Morin's *Open Data Structures* is independently licensed under Creative Commons Attribution 2.5 Canada; the source is credited and its terms remain applicable. The animation files are not an official edition of the textbook.

Accessibility and code revisions dated October 22, 2026 were assisted by OpenAI ChatGPT (GPT-6), with human direction. Automated verification and final human accessibility review are separate activities; no unperformed review is claimed.

## Live website

The labs are published at [https://pentaideas.github.io/OpenDS-Materials/](https://pentaideas.github.io/OpenDS-Materials/). Links in the **Launch the labs** table open the live GitHub Pages versions. The source files can still be downloaded and run offline.

## Reference and attribution

The explanations and visualizations are original teaching materials that follow concepts from:

Pat Morin, *Open Data Structures* — [official online textbook](https://opendatastructures.org/) (Chapters 1–8, including §§2.1–2.6, 3.1–3.3, 4.1–4.4, 5.1–5.3, 6.1–6.2, 7.1–7.2, and 8.1).

These are supplementary interactive exercises, not an official edition or reproduction of the textbook.

## Repository layout

```text
OpenDS-Materials/
├── README.md
├── index.html
├── introduction_chapter_1_interactive.html
├── array_based_lists_chapter_2_interactive.html
├── linked_lists_chapter_3_interactive.html
├── skiplist_chapter_4_interactive.html
├── hash_tables_chapter_5_interactive.html
├── binary_tree_anatomy_chapter_6_interactive.html
├── binary_tree_traversals_6_1_interactive.html
├── bst_section_6_2_interactive.html
├── random_binary_search_trees_chapter_7_interactive.html
└── scapegoat_trees_chapter_8_interactive.html
```
