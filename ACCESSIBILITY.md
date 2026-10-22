# Accessibility and verification

**Target:** WCAG 2.2 AA for each standalone interactive lab, aiming for AAA enhanced text contrast and other AAA criteria when practicable.

**Status (October 22, 2026):** Source-level improvements are committed, but formal conformance has **not** been established. A site-wide AA or AAA compliance claim should not be made until browser-based automated checks and hands-on assistive-technology testing are complete.

## Implemented improvements

- Skip links and a clear main landmark on each page.
- Real keyboard-operable toggle buttons rather than incomplete ARIA tab widgets.
- Enlarged control targets, stronger foreground contrast and visible keyboard focus.
- Programmatically associated speed labels, updated accessible playback state, and a readable step number for the progress slider.
- Current-state text descriptions associated with dynamic diagrams.
- System reduced-motion preference prevents automatic playback on the Animate / guided-example buttons; Play remains available by choice.
- Optional prediction prompts without submissions, grading or forced interactions.
- Single-file, dependency-free labs remain usable offline.

## Still requiring verification

1. Automated browser-based WCAG AA checking in each animation state, including text, graphical labels, SVG outlines and controls.
2. Keyboard-only navigation and operation of every control, including interactive SVG nodes.
3. NVDA/Firefox and VoiceOver/Safari tests. Dynamic SVG relationship diagrams need assessment to determine whether the text descriptions convey equivalent structural information.
4. 200% and 400% text zoom / reflow, device-size layouts, and mobile touch use.
5. Color contrast for all focus, hover, selected, error and diagram states. The selected design palette aims for enhanced contrast but is not an exhaustive contrast audit.
6. Cognitive accessibility review with actual CS2 students. The teaching steps intentionally simplify some implementations.

## How to test

Download the repository and run `npm install`, `npx playwright install chromium`, then `npm test` for browser regression checks. Source-code review and browser tests are not substitutes for an assistive-technology audit.

Report access barriers in the repository issues: https://github.com/pentaideas/OpenDS-Materials/issues

This project has **no known intrinsically unachievable WCAG requirement**; where equivalence between an interactive visual representation and a text representation proves inadequate, a fully navigable textual alternative should be designed before conformance is claimed.
