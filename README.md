# OpenDS Materials

Interactive, self-contained teaching materials for **Chapter 4: Skiplists**, **Chapter 5: Hash Tables**, and **Chapter 6: Binary Trees** of Pat Morin's *Open Data Structures*.

## Launch the labs

| Section | Lab | Concepts |
| --- | --- | --- |
| **5.1–5.3 — Hash Tables** | [Interactive Hash Tables Lab](hash_tables_chapter_5_interactive.html) | Bucket chaining, linear probing, tombstones, collisions, insertion/search/deletion, resizing, and load factors |
| **4.1–4.4 — Skiplists** | [Interactive Skiplist Lab](skiplist_chapter_4_interactive.html) | Basic towers; SSet find/add/remove; indexed List get/set/add/remove; coin-flip analysis and span labels |
| **6.1 — BinaryTree** | [Tree Traversals](binary_tree_traversals_6_1_interactive.html) | Preorder, inorder, postorder, breadth-first traversal, and traversal with parent pointers |
| **6.2 — BinarySearchTree** | [BST Operations](bst_section_6_2_interactive.html) | Search, successor search, insertion, deletion, tree height, and degenerate trees |

Open [**index.html**](index.html) for a simple landing page linking to all four labs.

### Run locally

1. Download this repository (GitHub **Code → Download ZIP**, or `git clone https://github.com/pentaideas/OpenDS-Materials.git`).
2. Open `index.html` in a current desktop or mobile browser.
3. Select a lab. No dependencies, installation, server, or internet connection are required.

Each lab is a single HTML file with its CSS and JavaScript embedded. You can also open any HTML file directly.

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

## Publish as a website (optional)

If GitHub Pages is enabled for this repository, configure **Settings → Pages → Deploy from a branch**, choose `main` and `/ (root)`. GitHub Pages will then serve `index.html` as the homepage.

## Reference and attribution

The explanations and visualizations are original teaching materials that follow concepts from:

Pat Morin, *Open Data Structures* — [official online textbook](https://opendatastructures.org/) (Chapters 4–6, including §§4.1–4.4, 5.1–5.3, and 6.1–6.2).

These are supplementary interactive exercises, not an official edition or reproduction of the textbook.

## Repository layout

```text
OpenDS-Materials/
├── README.md
├── index.html
├── skiplist_chapter_4_interactive.html
├── hash_tables_chapter_5_interactive.html
├── binary_tree_traversals_6_1_interactive.html
└── bst_section_6_2_interactive.html
```
