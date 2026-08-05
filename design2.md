Rebuild this design in your project. Match it exactly: same layout,
typography, color, spacing, radius, shadow, and motion. Do not invent
new visuals.

## design.md

# Apple Quarter — Style Reference
> Geometric sans city guide, photography-first with Apple's restraint.

**Theme:** light

The signature move is full-bleed imagery sectioned by extreme whitespace, with Satoshi at 700 delivering the confident headline weight Apple's product pages use. Switzer handles body text at 400, keeping reading effortless. Radius is 16px on cards and 9999px on buttons, round and inviting without being soft. The tension is between the photography's warmth and the strict achromatic type system: the places have color, the interface does not.

**Ground truth (computed from tokens + reference HTML):** light theme · page #ffffff · ink #000000 · primary #e03a3e · secondary #3fa9b5 · applied action color #3fa9b5 · display "Satoshi" · body "Switzer". Where the description above conflicts with these values or the Reference HTML, the tokens and HTML are authoritative.

## Tokens: Colors

| Name | Value | Token | Role | Usage | Contrast |
|------|-------|-------|------|-------|----------|
| Canvas | `#ffffff` | `--gesso-canvas` | Page background, the floor everything sits on. | Outermost background: body, full-bleed sections. Mirrors Neutral 50. | n/a |
| Surface recessed | `#f5f5f5` | `--gesso-surface-recessed` | Sunken surface below the canvas. | Inset wells: input fields, progress tracks, code blocks. | n/a |
| Surface | `#ebebeb` | `--gesso-surface` | Card and panel fill, raised above the canvas. | Cards, panels, sheets, table rows. Mirrors Neutral 100. | n/a |
| Surface elevated | `#e2e2e2` | `--gesso-surface-elevated` | Top elevation tier. | Modals, dropdowns, popovers, tooltips. | n/a |
| Divider | `rgba(0,0,0,0.04)` | `--gesso-divider` | Hairline borders and separators. | 1px rules between rows and sections. Never for text. | n/a |
| Foreground | `#000000` | `--gesso-fg` | Primary text and high-emphasis icons. | Body copy, headings, primary icons. Mirrors Neutral 900. | AA 4.5:1 on canvas (guaranteed) |
| Foreground muted | `#7a7a7a` | `--gesso-fg-muted` | Secondary text. | Captions, metadata, placeholders, disabled labels. Mirrors Neutral 600. | AA 3.0:1 on canvas (guaranteed) |
| Primary | `#e03a3e` | `--gesso-primary` | Brand accent, FILL only (alias: --gesso-accent). | CTA fills, active and selected states, focus rings. 2 to 3 per screen. Do NOT use as text, reach for --gesso-accent-text. | Pair with --gesso-on-accent for the label on top. |
| On primary | `#000000` | `--gesso-on-accent` | Text and icons on a filled primary. | Label color for buttons and chips filled with --gesso-primary. | Contrast-derived against --gesso-primary. |
| Accent (as text) | `#ca3438` | `--gesso-accent-text` | AA-safe accent for text and icons. | Use THIS for accent-colored links, headings, and icons. Use --gesso-primary for fills. | AA 4.5:1 on canvas (guaranteed). |
| Secondary | `#3fa9b5` | `--gesso-secondary` | Supporting brand accent. | Secondary fills, logo discs, supporting highlights. | Pair with on-fill text per --gesso-on-accent. |
| Secondary (as text) | `#2f7f88` | `--gesso-accent-2-text` | AA-safe secondary for text. | Secondary accent used as text or icons. | AA 4.5:1 on canvas (guaranteed). |
| Neutral 50 | `#ffffff` | `--gesso-neutral-50` | Page background. | Ramp access by step; prefer the role token above where one exists. | n/a |
| Neutral 100 | `#ebebeb` | `--gesso-neutral-100` | Surface. | Ramp access by step; prefer the role token above where one exists. | n/a |
| Neutral 200 | `#d3d3d3` | `--gesso-neutral-200` | Neutral ramp step. | Ramp access by step; prefer the role token above where one exists. | n/a |
| Neutral 300 | `#bcbcbc` | `--gesso-neutral-300` | Neutral ramp step. | Ramp access by step; prefer the role token above where one exists. | n/a |
| Neutral 400 | `#a6a6a6` | `--gesso-neutral-400` | Neutral ramp step. | Ramp access by step; prefer the role token above where one exists. | n/a |
| Neutral 500 | `#8f8f8f` | `--gesso-neutral-500` | Neutral ramp step. | Ramp access by step; prefer the role token above where one exists. | n/a |
| Neutral 600 | `#7a7a7a` | `--gesso-neutral-600` | Muted text and dividers. | Ramp access by step; prefer the role token above where one exists. | AA 3.0:1 on canvas. |
| Neutral 700 | `#444444` | `--gesso-neutral-700` | Neutral ramp step. | Ramp access by step; prefer the role token above where one exists. | n/a |
| Neutral 800 | `#141414` | `--gesso-neutral-800` | Neutral ramp step. | Ramp access by step; prefer the role token above where one exists. | n/a |
| Neutral 900 | `#000000` | `--gesso-neutral-900` | Primary text. | Ramp access by step; prefer the role token above where one exists. | AA 4.5:1 on canvas. |
| Neutral 950 | `#000000` | `--gesso-neutral-950` | Neutral ramp step. | Ramp access by step; prefer the role token above where one exists. | n/a |
| Success | `#16A34A` | `--gesso-success` | Positive signals (gains, completed states). | Meaning only, never decoration. | AA 3.0:1 on canvas, chroma-floored distinct. |
| Warning | `#D97706` | `--gesso-warning` | Caution states. | Meaning only, never decoration. | AA 3.0:1 on canvas, chroma-floored distinct. |
| Error | `#DC2626` | `--gesso-error` | Errors, destructive actions, negative signals. | Meaning only, never decoration. | AA 3.0:1 on canvas, chroma-floored distinct. |
| Data 1 | `#a30019` | `--gesso-data-1` | Categorical data-viz series color. | Charts and series, applied in order. | n/a |
| Data 2 | `#c61928` | `--gesso-data-2` | Categorical data-viz series color. | Charts and series, applied in order. | n/a |
| Data 3 | `#e33d40` | `--gesso-data-3` | Categorical data-viz series color. | Charts and series, applied in order. | n/a |
| Data 4 | `#ff5b5a` | `--gesso-data-4` | Categorical data-viz series color. | Charts and series, applied in order. | n/a |
| Data 5 | `#ff9089` | `--gesso-data-5` | Categorical data-viz series color. | Charts and series, applied in order. | n/a |
| Data 6 | `#ffb9b3` | `--gesso-data-6` | Categorical data-viz series color. | Charts and series, applied in order. | n/a |

## Tokens: Typography

### Satoshi — Display. Headings, hero copy, large numerical specimens. · `--gesso-font-display`
- **Weights:** 300, 400, 500, 700
- **Line height:** 1.1
- **Letter spacing:** -0.02em
- **Role:** Display. Headings, hero copy, large numerical specimens.

### Switzer — Body. Paragraphs, labels, UI chrome. · `--gesso-font-body`
- **Weights:** 300, 400, 500, 700
- **Line height:** 1.5
- **Letter spacing:** 0em
- **Role:** Body. Paragraphs, labels, UI chrome.

### Switzer — Mono. Code, numerical tickers, mono-spaced metadata. · `--gesso-font-mono`
- **Weights:** 300, 400, 500, 700
- **Line height:** 1.4
- **Letter spacing:** 0em
- **Role:** Mono. Code, numerical tickers, mono-spaced metadata.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|------|------|-------------|----------------|-------|
| H1 | 56px | 1.2 | — | `--gesso-text-4xl` |
| H2 | 36px | 1.2 | — | `--gesso-text-3xl` |
| H3 | 24px | 1.2 | — | `--gesso-text-2xl` |
| Body | 16px | 1.5 | — | `--gesso-text-base` |
| Caption | 12px | 1.5 | — | `--gesso-text-xs` |

## Tokens: Spacing & Shapes

**Base unit:** 8px

**Density:** comfortable

### Spacing Scale

| Name | Value | Token |
|------|-------|-------|
| space-1 | 8px | `--gesso-space-1` |
| space-2 | 16px | `--gesso-space-2` |
| space-3 | 24px | `--gesso-space-3` |
| space-4 | 32px | `--gesso-space-4` |
| space-6 | 48px | `--gesso-space-6` |
| space-8 | 64px | `--gesso-space-8` |
| space-12 | 96px | `--gesso-space-12` |
| space-16 | 128px | `--gesso-space-16` |
| space-24 | 192px | `--gesso-space-24` |
| space-32 | 256px | `--gesso-space-32` |

### Border Radius

| Element | Value |
|---------|-------|
| none | 0px |
| sm | 0px |
| md | 2px |
| lg | 4px |
| full | 9999px |

### Shadows

| Name | Value | Token |
|------|-------|-------|
| sm | `none` | `--gesso-shadow-sm` |
| md | `none` | `--gesso-shadow-md` |
| lg | `0 1px 2px rgba(0,0,0,0.04)` | `--gesso-shadow-lg` |

### Layout

- **Page max-width:** 1280px
- **Section gap:** 80px
- **Container max-width:** 1280px
- **Grid columns:** 12
- **Grid gutter:** 24px
- **Outer margin:** 64px
- **Section padding:** 80px

## Breakpoints

| Name | Min Width |
|------|-----------|
| sm | 640px |
| md | 768px |
| lg | 1024px |
| xl | 1280px |

## Components

### Container
**Role:** Page-level width constraint and 12-column grid wrapper.

Max-width var(--container-max-width) (1280px), centered via margin-inline auto, horizontal padding var(--outer-margin) (64px; drop to 24-32px below the md breakpoint). Vertical rhythm var(--section-padding) (80px) per band. Multi-column regions use display:grid with grid-template-columns: repeat(var(--grid-columns), 1fr) (12) and gap var(--grid-gutter) (24px); children span column ranges (span 6 = half, span 4 = third).

### Navigation Bar
**Role:** Top-anchored primary navigation. One per page.

Full-bleed bar, height 64-72px, inner contents constrained to var(--container-max-width) with var(--outer-margin) inline padding. Logo left, primary links centered or left-grouped, one primary CTA right. Links in --gesso-font-body weight 400, color --gesso-neutral-700 (#48484A); hover/active resolve to --gesso-neutral-900 (#000000). CTA is the Primary Button. Transparent over a hero, then sticky with a --gesso-neutral-50 (#ffffff) fill and 1px --gesso-neutral-200 bottom border once scrolled. z-index 100.

### Hero Section
**Role:** Above-the-fold headline band. Sets the first impression.

Fills the upper 55-70% of the viewport with var(--section-padding) vertical breathing room, constrained to the Container. Headline in --gesso-font-display (Satoshi) at 3.5rem, weight 700, line-height 1.05-1.1, never italic. Subcopy in body font at --gesso-text-lg, color --gesso-neutral-600 (#7a7a7a), max-width ~60ch. Primary + Secondary Button pair beneath. Left-aligned for a marketing scroll, centered for a landing hero.

### Card
**Role:** Container surface for content groupings.

Background --gesso-neutral-50 (#ffffff), border 1px solid --gesso-neutral-200 (#E8E8ED), border-radius var(--gesso-radius-md) (2px), padding 48px, --gesso-shadow-sm. Body font for content; display font for any embedded headline. Text fg --gesso-neutral-900 (#000000). In a grid, cards span 3-6 of the 12 columns.

### Primary Button
**Role:** Highest-emphasis action. Reserved for the main CTA per section.

Background --gesso-primary (#e03a3e), text auto-picked for max contrast (white or near-black), padding 24px 48px, border-radius var(--gesso-radius-md) (2px), font-family --gesso-font-body, font-weight 500. Hover: mix toward --gesso-fg by 10-12%. Use 1-2 per section, never more. The reference screen applies #3fa9b5 as its dominant on-screen action color; follow the Reference HTML for color application.

### Secondary Button
**Role:** Supporting action next to a primary CTA.

Background transparent, border 1.5px solid --gesso-primary (#e03a3e), text --gesso-primary, padding 24px 48px (minus 1.5px each axis to compensate for the border), border-radius var(--gesso-radius-md) (2px), body font, weight 500.

### Input
**Role:** Single-line text entry. Default form field.

Background --gesso-neutral-100 (#ebebeb), border 1px solid --gesso-neutral-300 (#D2D2D7), border-radius var(--gesso-radius-md) (2px), padding 24px 32px, body font. Focus: border --gesso-primary, ring 3px --gesso-primary at 14% alpha.

### Footer
**Role:** Page-closing navigation and legal. One per page.

Full-bleed block with a top 1px --gesso-neutral-200 (#E8E8ED) divider, var(--section-padding) vertical padding, contents constrained to var(--container-max-width). Multi-column link groups (grid, 2-4 columns): group headings at body weight 500, links --gesso-neutral-600 (#7a7a7a) resolving to --gesso-neutral-900 on hover. Logo and copyright row pinned along the bottom.

### Badge
**Role:** Compact label for status, tags, counts.

Background --gesso-primary (#e03a3e) at 12% alpha, text --gesso-primary, padding 16px 24px, border-radius var(--gesso-radius-full) (9999px), font-size 12px, body font, weight 500, uppercase, letter-spacing 0.04em.

## Do's and Don'ts

### Do

- One clean grotesque/geometric sans across the board (Inter / SF / system-ui), with at most a mono only for codes. Display = semibold-to-bold (600-700) headlines at comfortable but not oversized scale; body = regular 400 charcoal; metadata labels = regular in muted grey, often slightly smaller. Tight-to-normal tracking, no all-caps except tiny section eyebrows (DEPART / ARRIVE) which get +0.04em.
- Tone-locked light. canvas = #FFFFFF to #F7F7F5 (near-white, faintly warm-neutral ground); surface = pure #FFFFFF flat cards lifted off canvas; ink = charcoal #1A1A1A / #222 (never pure black for body); muted = grey #8A8A8E for labels and inactive nav. One sparing accent only, an orange (#E8632A-ish) OR a muted moss green (#5A6B2F) used for the single primary CTA, active tab, and key data emphasis; semantic green/red reserved for status deltas. Accent occupies <=10% of any screen.
- Generous whitespace is the defining posture; layout is functional and grid-aligned on an 8px rhythm. Web (1280): calm multi-column shell, slim left nav, list column, roomy detail pane, with numbered/stepped content blocks separated by hairlines and lots of air. Never crowd; let labels breathe.
- Apply --gesso-primary (#e03a3e) to a maximum of 2-3 elements per screen: a button, a highlight, a badge. Never paint large areas with primary.
- Use --gesso-radius-md (2px) for cards and inputs, --gesso-radius-full for badges and avatars. Inner radii inside a parent: subtract the parent's padding from its radius.
- Build hierarchy with the neutral scale, not extra hues. 90%+ of any screen should be neutrals; chromatic colors carry meaning, never decoration.

### Don't

- Never use playful multi-color blocks or filled colored cards, accent appears on at most ONE element per region
- Never use raw/oversized display type or heavy black weights as decoration
- Never add drop shadows beyond a single near-invisible ambient lift; no stacked or colored shadows
- Never wrap cards in visible borders, use a white-on-near-white ground and hairline dividers instead
- Don't use Inter as the display font. It's the most overused font in tech. Pick something with character from the fontHints display list.
- Don't use #3B82F6 / indigo-600 as primary unless explicitly briefed. Default blue is the hallmark of a generic SaaS aesthetic.

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Page | `#ffffff` | Default page background. The lightest surface. |
| 1 | Raised | `#ebebeb` | Cards, panels, sidebars: anything that sits on top of the page. |
| 2 | Sunken | `#E8E8ED` | Inset surfaces (search bars, code blocks, disabled fields). |
| 3 | Overlay | `#ffffff` | Modals and floating panels. Same hue as page; depth comes from --gesso-shadow-lg. |

## Agent Prompt Guide

**Quick Color Reference**

- Primary: #e03a3e
- Secondary: #3fa9b5
- Page bg: #ffffff
- Body fg: #000000
- Muted fg: #7a7a7a
- Success: #16A34A

**Example Component Prompts**

1. Build a content container. max-width var(--container-max-width) (1280px), margin-inline auto, padding-inline var(--outer-margin) (64px, 24px below md). Wrap every section in it so the page shares one measure.

2. Build a responsive top navigation bar. Full-bleed, height 64-72px, inner row capped at var(--container-max-width) with var(--outer-margin) inline padding. Logo left, links centered (color #48484A, hover #000000), primary CTA right (bg #e03a3e, weight 500). Transparent over the hero, sticky #ffffff fill + 1px #E8E8ED border on scroll. Collapse links to a menu button below 768px.

3. Build a hero band. Constrain to var(--container-max-width) with var(--section-padding) vertical padding. Headline display font (Satoshi) at 3.5rem weight 700, never italic; subcopy body font (Switzer) max-width 60ch color #7a7a7a; primary + secondary CTA row beneath.

4. Build a 12-column responsive grid section. display:grid; grid-template-columns: repeat(12, 1fr); gap var(--grid-gutter) (24px); inside var(--container-max-width) + var(--outer-margin). Cards span 4 columns (3-up) on desktop, span 6 (2-up) at md, span 12 below sm.

5. Build a footer. Full-bleed with a top 1px #E8E8ED divider, var(--section-padding) vertical padding, contents at var(--container-max-width). 3-4 link-group columns (headings weight 500, links #7a7a7a), logo + copyright row pinned along the bottom.

## Similar Brands

- **Linear** — Modern SaaS reference: restrained palette, gridded layout.
- **Stripe** — Clean, confident system with strong type hierarchy.
- **Vercel** — Black-and-white discipline with a single high-impact accent.

## Quick Start

### CSS Custom Properties

```css
:root {
  /* Colors */
  --gesso-canvas: #ffffff;
  --gesso-surface-recessed: #f5f5f5;
  --gesso-surface: #ebebeb;
  --gesso-surface-elevated: #e2e2e2;
  --gesso-divider: rgba(0,0,0,0.04);
  --gesso-fg: #000000;
  --gesso-fg-muted: #7a7a7a;
  --gesso-primary: #e03a3e;
  --gesso-on-accent: #000000;
  --gesso-accent-text: #ca3438;
  --gesso-secondary: #3fa9b5;
  --gesso-accent-2-text: #2f7f88;
  --gesso-neutral-50: #ffffff;
  --gesso-neutral-100: #ebebeb;
  --gesso-neutral-200: #d3d3d3;
  --gesso-neutral-300: #bcbcbc;
  --gesso-neutral-400: #a6a6a6;
  --gesso-neutral-500: #8f8f8f;
  --gesso-neutral-600: #7a7a7a;
  --gesso-neutral-700: #444444;
  --gesso-neutral-800: #141414;
  --gesso-neutral-900: #000000;
  --gesso-neutral-950: #000000;
  --gesso-success: #16A34A;
  --gesso-warning: #D97706;
  --gesso-error: #DC2626;
  --gesso-data-1: #a30019;
  --gesso-data-2: #c61928;
  --gesso-data-3: #e33d40;
  --gesso-data-4: #ff5b5a;
  --gesso-data-5: #ff9089;
  --gesso-data-6: #ffb9b3;

  /* Typography — Font Families */
  --gesso-font-display: 'Satoshi', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --gesso-font-body: 'Switzer', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --gesso-font-mono: 'Switzer', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --gesso-text-4xl: 56px;
  --gesso-leading-4xl: 1.2;
  --gesso-text-3xl: 36px;
  --gesso-leading-3xl: 1.2;
  --gesso-text-2xl: 24px;
  --gesso-leading-2xl: 1.2;
  --gesso-text-base: 16px;
  --gesso-leading-base: 1.5;
  --gesso-text-xs: 12px;
  --gesso-leading-xs: 1.5;

  /* Typography — Weights */
  --font-weight-light: 300;
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-bold: 700;

  /* Spacing */
  --spacing-unit: 8px;
  --gesso-space-1: 8px;
  --gesso-space-2: 16px;
  --gesso-space-3: 24px;
  --gesso-space-4: 32px;
  --gesso-space-6: 48px;
  --gesso-space-8: 64px;
  --gesso-space-12: 96px;
  --gesso-space-16: 128px;
  --gesso-space-24: 192px;
  --gesso-space-32: 256px;

  /* Layout */
  --page-max-width: 1280px;
  --container-max-width: 1280px;
  --grid-columns: 12;
  --grid-gutter: 24px;
  --outer-margin: 64px;
  --section-padding: 80px;
  --section-gap: 80px;

  /* Breakpoints */
  --breakpoint-sm: 640px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 1024px;
  --breakpoint-xl: 1280px;

  /* Border Radius */
  --radius-none: 0px;
  --radius-sm: 0px;
  --radius-md: 2px;
  --radius-lg: 4px;
  --radius-full: 9999px;

  /* Shadows */
  --gesso-shadow-sm: none;
  --gesso-shadow-md: none;
  --gesso-shadow-lg: 0 1px 2px rgba(0,0,0,0.04);

  /* Surfaces */
  --surface-page: #ffffff;
  --surface-raised: #ebebeb;
  --surface-sunken: #E8E8ED;
  --surface-overlay: #ffffff;
}
```

### Tailwind v4

```css
@theme {
  /* Colors */
  --gesso-canvas: #ffffff;
  --gesso-surface-recessed: #f5f5f5;
  --gesso-surface: #ebebeb;
  --gesso-surface-elevated: #e2e2e2;
  --gesso-divider: rgba(0,0,0,0.04);
  --gesso-fg: #000000;
  --gesso-fg-muted: #7a7a7a;
  --gesso-primary: #e03a3e;
  --gesso-on-accent: #000000;
  --gesso-accent-text: #ca3438;
  --gesso-secondary: #3fa9b5;
  --gesso-accent-2-text: #2f7f88;
  --gesso-neutral-50: #ffffff;
  --gesso-neutral-100: #ebebeb;
  --gesso-neutral-200: #d3d3d3;
  --gesso-neutral-300: #bcbcbc;
  --gesso-neutral-400: #a6a6a6;
  --gesso-neutral-500: #8f8f8f;
  --gesso-neutral-600: #7a7a7a;
  --gesso-neutral-700: #444444;
  --gesso-neutral-800: #141414;
  --gesso-neutral-900: #000000;
  --gesso-neutral-950: #000000;
  --gesso-success: #16A34A;
  --gesso-warning: #D97706;
  --gesso-error: #DC2626;
  --gesso-data-1: #a30019;
  --gesso-data-2: #c61928;
  --gesso-data-3: #e33d40;
  --gesso-data-4: #ff5b5a;
  --gesso-data-5: #ff9089;
  --gesso-data-6: #ffb9b3;

  /* Typography */
  --gesso-font-display: 'Satoshi', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --gesso-font-body: 'Switzer', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --gesso-font-mono: 'Switzer', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --gesso-text-4xl: 56px;
  --gesso-leading-4xl: 1.2;
  --gesso-text-3xl: 36px;
  --gesso-leading-3xl: 1.2;
  --gesso-text-2xl: 24px;
  --gesso-leading-2xl: 1.2;
  --gesso-text-base: 16px;
  --gesso-leading-base: 1.5;
  --gesso-text-xs: 12px;
  --gesso-leading-xs: 1.5;

  /* Spacing */
  --gesso-space-1: 8px;
  --gesso-space-2: 16px;
  --gesso-space-3: 24px;
  --gesso-space-4: 32px;
  --gesso-space-6: 48px;
  --gesso-space-8: 64px;
  --gesso-space-12: 96px;
  --gesso-space-16: 128px;
  --gesso-space-24: 192px;
  --gesso-space-32: 256px;

  /* Border Radius */
  --radius-none: 0px;
  --radius-sm: 0px;
  --radius-md: 2px;
  --radius-lg: 4px;
  --radius-full: 9999px;

  /* Shadows */
  --gesso-shadow-sm: none;
  --gesso-shadow-md: none;
  --gesso-shadow-lg: 0 1px 2px rgba(0,0,0,0.04);

  /* Layout */
  --container-max-width: 1280px;
  --grid-columns: 12;
  --grid-gutter: 24px;
  --outer-margin: 64px;
  --section-padding: 80px;

  /* Breakpoints */
  --breakpoint-sm: 640px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 1024px;
  --breakpoint-xl: 1280px;
}
```


## Tokens (JSON)

```json
{
  "color": {
    "primary": "#e03a3e",
    "secondary": "#3fa9b5",
    "neutral": {
      "50": "#ffffff",
      "100": "#ebebeb",
      "200": "#E8E8ED",
      "300": "#D2D2D7",
      "400": "#AEAEB2",
      "500": "#8E8E93",
      "600": "#7a7a7a",
      "700": "#48484A",
      "800": "#2C2C2E",
      "900": "#000000",
      "950": "#0A0A0A"
    },
    "semantic": {
      "success": "#1A7F3C",
      "warning": "#B25000",
      "error": "#B22222"
    }
  },
  "typeface": {
    "display": "Satoshi",
    "body": "Switzer",
    "mono": "Switzer",
    "displayWeight": 700,
    "bodyWeight": 400,
    "scale": {
      "xs": "0.75rem",
      "sm": "0.875rem",
      "base": "1rem",
      "lg": "1.125rem",
      "xl": "1.25rem",
      "2xl": "1.5rem",
      "3xl": "2.25rem",
      "4xl": "3.5rem"
    },
    "weights": [
      300,
      400,
      500,
      700
    ]
  },
  "spacing": {
    "unit": 8,
    "scale": {
      "1": "8px",
      "2": "16px",
      "3": "24px",
      "4": "32px",
      "6": "48px",
      "8": "64px",
      "12": "96px",
      "16": "128px",
      "24": "192px",
      "32": "256px"
    }
  },
  "radius": {
    "none": "0px",
    "sm": "0px",
    "md": "2px",
    "lg": "4px",
    "full": "9999px"
  },
  "shadow": {
    "sm": "none",
    "md": "none",
    "lg": "0 1px 2px rgba(0,0,0,0.04)"
  },
  "motion": {
    "duration": {
      "fast": "100ms",
      "base": "200ms",
      "slow": "350ms"
    },
    "easing": {
      "default": "cubic-bezier(0.25,0.1,0.25,1)",
      "emphasis": "cubic-bezier(0.2,0,0,1)"
    }
  },
  "approach": {
    "name": "Apple Quarter",
    "mood": "spacious, precise, confident, unhurried",
    "anchor": "Apple product page, Apple.com marketing sections"
  },
  "extended": {
    "texture": {
      "type": "none",
      "opacity": 0
    },
    "gradient": {
      "enabled": false,
      "style": "none"
    },
    "glow": {
      "enabled": false,
      "color": "none",
      "spread": "0px"
    },
    "border": {
      "width": "1px",
      "style": "solid",
      "color": "#E8E8ED"
    }
  },
  "surfacePack": "web-editorial-paper"
}
```

## Reference HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="preconnect" href="https://api.fontshare.com" crossorigin>
<link rel="stylesheet" href="https://api.fontshare.com/v2/css?f[]=satoshi@300,400,500,700&f[]=switzer@300,400,500,700&display=swap">
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">

<style id="gesso-foundation">*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}html,body{width: 100%;min-height: 100vh;overflow-x:clip;max-width:100%;}body{font-family:var(--gesso-font-body,system-ui),sans-serif;color:var(--gesso-fg,#0a0a0a);background:var(--gesso-canvas,#ffffff);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;line-height:1.4;}img,svg{display:block;max-width:100%;}button{font:inherit;color:inherit;background:none;border:none;cursor:pointer;}a{color:inherit;text-decoration:none;}</style>
<style id="gesso-text-wrap">h1,h2,h3{text-wrap:balance}p,li,figcaption,blockquote{text-wrap:pretty}</style>
<style id="gesso-font-smoothing">html{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}</style>
<style id="gesso-image-outline">img:not([data-illustration]):not([data-icon]):not([aria-hidden="true"]){outline:1px solid rgba(0,0,0,0.05);outline-offset:-1px}</style>
<style>/* gesso-icon-base v1 */
.ic { display: inline-block; width: 16px; height: 16px; vertical-align: -0.125em; flex-shrink: 0; line-height: 0; }
.ic svg { width: 100%; height: 100%; display: block; }
svg.ic { width: 16px; height: 16px; display: inline-block; vertical-align: -0.125em; flex-shrink: 0; }
.ic[data-icon-style="line"] { stroke-width: var(--ic-stroke, 2); }
.ic[data-icon-style="line"] svg path, .ic[data-icon-style="line"] svg circle, .ic[data-icon-style="line"] svg rect, .ic[data-icon-style="line"] svg line, .ic[data-icon-style="line"] svg polyline, .ic[data-icon-style="line"] svg polygon { stroke-width: inherit; }
.ic-sm { --ic-stroke: 2.25; }
.ic-xs { --ic-stroke: 2.5; }
svg.ic-lg, .ic-lg svg { width: 24px; height: 24px; }
svg.ic-xl, .ic-xl svg { width: 32px; height: 32px; }
svg.ic-2xl, .ic-2xl svg { width: 32px; height: 32px; }
.ic-lg { --ic-stroke: 1.75; }
.ic-xl { --ic-stroke: 1.5; }
.ic-2xl { --ic-stroke: 1.5; }
button { border: 0; background: transparent; padding: 0; font: inherit; color: inherit; cursor: pointer; -webkit-appearance: none; appearance: none; }
</style>

<style id="gesso-responsive-shell">html,body{width:100%!important;max-width:100%!important;min-width:0;overflow-x:hidden}*{min-width:0}h1,h2,h3,h4,h5,h6,p,td,th{min-width:min-content}img,svg,video,canvas,iframe,table{max-width:100%}</style><style id="gesso-mobile-web-layer">.gesso-nav-check,.gesso-nav-burger{display:none}@media (max-width: 640px){.nav-links{display:none!important}}@media (max-width: 480px){nav,nav ul,header ul{flex-wrap:wrap}nav a,header ul a{display:inline-block}table{display:block;overflow-x:auto;min-width:0!important;max-width:100%}[data-gesso-flexwrap]{flex-wrap:wrap}h1,h2,h3{overflow-wrap:break-word}[data-gesso-pinned-height]{height:auto!important;min-height:0!important}.gesso-nav-check{display:block;position:absolute;width:1px;height:1px;margin:0;opacity:0;pointer-events:none}.gesso-nav-check:focus-visible+.gesso-nav-burger{outline:2px solid currentColor;outline-offset:2px}.gesso-nav-burger{display:inline-flex;align-items:center;justify-content:center;width:40px;height:40px;cursor:pointer;flex-shrink:0;border-radius:8px}.gesso-nav-burger span{display:block;position:relative;width:18px;height:2px;border-radius:1px;background:currentColor}.gesso-nav-burger span::before,.gesso-nav-burger span::after{content:"";position:absolute;left:0;width:18px;height:2px;border-radius:1px;background:currentColor;transition:transform 150ms ease}.gesso-nav-burger span::before{top:-6px}.gesso-nav-burger span::after{top:6px}.gesso-nav-check:checked~.gesso-nav-burger span{background:transparent}.gesso-nav-check:checked~.gesso-nav-burger span::before{transform:translateY(6px) rotate(45deg)}.gesso-nav-check:checked~.gesso-nav-burger span::after{transform:translateY(-6px) rotate(-45deg)}[data-gesso-navlinks]{display:none!important}.gesso-nav-check:checked~[data-gesso-navlinks]{display:flex!important;flex-direction:column;align-items:stretch;flex-basis:100%;min-width:100%;order:99}.wrap{width:100%!important;max-width:100%!important}.btn{flex-wrap:wrap}.link-accent{flex-wrap:wrap}.tile .cap{flex-wrap:wrap}.attrib{flex-wrap:wrap}}@media (prefers-reduced-motion: reduce){.gesso-nav-burger span::before,.gesso-nav-burger span::after{transition:none}}</style><!--gesso-fonts:start--><style id="gesso-font-lock">:root{--gesso-font-display:"Satoshi", system-ui, -apple-system, sans-serif !important;--gesso-font-body:"Switzer", system-ui, -apple-system, sans-serif !important;--gesso-font-mono:"Switzer", ui-monospace, "JetBrains Mono", monospace !important;}</style><!--gesso-fonts:end-->
</head>
<body>
<meta name="x-visual-moves" content="Channeled the MoMA catalog's gallery-white discipline by floating every Seoul photo directly on pure white — no cards, no shadows, hairline image outlines only. Mixed heavy 900 and light 300 weights of one sans in the wordmark, and reserved red strictly for the active nav item, one stat, and the explore link; teal appears only as letterspaced GATEKEPT status micro-labels. Sections divide with near-invisible hairline rules and tall gutters; the hero is the user's collection itself, a 12-column photo grid that stagger-reveals on scroll.">
<style>
:root{
  --gesso-canvas:#FFFFFF; --gesso-surface:#ebebeb; --gesso-surface-elevated:#e2e2e2; --gesso-surface-recessed:#f5f5f5;
  --gesso-fg:#000000; --gesso-fg-muted:#7A7A7A; --gesso-divider:rgba(0,0,0,0.04);
  --gesso-accent:#E03A3E; --gesso-accent-2:#3FA9B5; --gesso-on-accent:#000000;
  --gesso-data-1:#a30019; --gesso-data-2:#c61928; --gesso-data-3:#e33d40; --gesso-data-4:#ff5b5a; --gesso-data-5:#ff9089; --gesso-data-6:#ffb9b3;
  --gesso-on-image:#ffffff; --gesso-scrim:rgba(0,0,0,0.45);
  --gesso-primary:var(--gesso-accent); --gesso-secondary:var(--gesso-accent-2);
  --gesso-neutral-50:var(--gesso-canvas); --gesso-neutral-900:var(--gesso-fg);
  --gesso-font-display:"Satoshi", system-ui, -apple-system, sans-serif;
  --gesso-font-body:"Switzer", system-ui, -apple-system, sans-serif;
  --gesso-radius-sm:0px; --gesso-radius-md:2px; --gesso-radius-lg:4px; --gesso-radius-full:9999px;
  --gesso-shadow-sm:none; --gesso-shadow-md:none; --gesso-shadow-lg:0 1px 2px rgba(0,0,0,0.04);
  --gesso-duration-fast:160ms; --gesso-easing-default:cubic-bezier(.2,.6,.2,1);
}
html{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}
html,body{width:100%;min-height:100%;overflow-x:hidden}
*{min-width:0}
img,video{max-width:100%;display:block}
body{background:var(--gesso-canvas);color:var(--gesso-fg);font-family:var(--gesso-font-body);font-size:16px;line-height:1.55;padding:0}
.wrap{max-width:1280px;margin-inline:auto;padding-inline:clamp(20px,5vw,64px)}
h1,h2,h3,.stat{font-family:var(--gesso-font-display)}
h1,h2,h3{text-wrap:balance;overflow-wrap:break-word}
p{text-wrap:pretty}
a{text-decoration:none;color:inherit}

/* type roles */
.t-hero{font-size:clamp(36px,6vw,72px);line-height:clamp(40px,6.4vw,76px);font-weight:700;letter-spacing:-0.02em}
.t-section{font-size:clamp(28px,4vw,48px);line-height:clamp(32px,4.4vw,52px);font-weight:700;letter-spacing:-0.015em}
.t-sub{font-size:20px;line-height:1.35;font-weight:700}
.t-meta{font-size:13px;line-height:1.4;font-weight:500;letter-spacing:0.1em;text-transform:uppercase;color:var(--gesso-fg-muted)}
.t-stat{font-size:clamp(40px,5vw,60px);line-height:clamp(44px,5.4vw,64px);font-weight:700;letter-spacing:-0.02em}

/* nav */
.nav{display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:16px;padding-block:32px}
.wordmark{font-family:var(--gesso-font-display);font-size:20px;line-height:1.2}
.wordmark b{font-weight:900}
.wordmark span{font-weight:300}
.nav-links{display:flex;gap:32px;flex-wrap:wrap;align-items:center}
.nav-links a{color:var(--gesso-fg-muted);transition:color var(--gesso-duration-fast) var(--gesso-easing-default)}
.nav-links a:hover{color:var(--gesso-fg)}
.nav-links a:focus-visible{outline:2px solid var(--gesso-fg);outline-offset:2px}
.nav-links a[aria-current="page"]{color:var(--gesso-accent)}
@media (max-width:640px){.nav-links{display:none}}

/* buttons + links */
.btn{display:inline-flex;align-items:center;gap:12px;padding:16px 32px;border: 1px solid var(--gesso-divider, rgba(0,0,0,0.06));background:transparent;color:var(--gesso-fg);font-family:var(--gesso-font-body);font-size:16px;font-weight:600;border-radius:var(--gesso-radius-sm);cursor:pointer;transition:background var(--gesso-duration-fast) var(--gesso-easing-default),color var(--gesso-duration-fast) var(--gesso-easing-default),transform 80ms var(--gesso-easing-default)}
.btn:hover{background:var(--gesso-fg);color:var(--gesso-canvas)}
.btn:active{transform:translateY(1px) scale(.98)}
.btn:focus-visible{outline:2px solid var(--gesso-fg);outline-offset:2px}
.link-accent{display:inline-flex;align-items:center;gap:8px;color:var(--gesso-accent);font-weight:600;font-size:16px;transition:color var(--gesso-duration-fast) var(--gesso-easing-default)}
.link-accent:hover{color:color-mix(in oklch, var(--gesso-accent) 82%, black)}
.link-accent:focus-visible{outline:2px solid var(--gesso-fg);outline-offset:2px}

/* hero */
.hero{padding-block:clamp(48px,7vw,104px) clamp(32px,4vw,56px)}
.hero-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,420px),1fr));gap:clamp(16px,3vw,48px);align-items:end}
.hero p.lede{font-size:20px;line-height:1.5;font-weight:400;color:var(--gesso-fg-muted);max-width:44ch;margin-top:24px}
.hero-ctas{display:flex;gap:24px;align-items:center;flex-wrap:wrap;margin-top:32px}

/* gallery */
.gallery{display:grid;grid-template-columns:repeat(12,1fr);gap:clamp(12px,2vw,24px);padding-bottom:clamp(48px,8vw,112px)}
.tile{display:flex;flex-direction:column;gap:12px}
.s4{grid-column:span 4}.s6{grid-column:span 6}.s3{grid-column:span 3}
.tile figure{margin:0;overflow:hidden;border-radius:var(--gesso-radius-md)}
.tile img{width:100%;object-fit:cover;outline:1px solid rgba(0,0,0,0.05);outline-offset:-1px;border-radius:var(--gesso-radius-md);transition:transform 400ms var(--gesso-easing-default)}
.tile:hover img{transform:scale(1.02)}
.tile .cap{display:flex;align-items:baseline;justify-content:space-between;gap:12px}
.tile h3{font-size:16px;font-weight:700;font-family:var(--gesso-font-body);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.tile .where{color:var(--gesso-fg-muted)}
.tag-status{color:var(--gesso-accent-2)}
.ar-45{aspect-ratio:4/5}.ar-11{aspect-ratio:1/1}.ar-169{aspect-ratio:16/10}.ar-34{aspect-ratio:3/4}
@media (max-width:1024px){.s3,.s4{grid-column:span 6}.s6{grid-column:span 12}}
@media (max-width:640px){.s3,.s4,.s6{grid-column:span 12}}

/* sections */
section{border-top:1px solid var(--gesso-divider)}
.band{padding-block:clamp(48px,8vw,120px)}
.band-tight{padding-block:clamp(40px,6vw,80px)}
.sec-head{max-width:56ch;margin-bottom:clamp(32px,5vw,64px)}
.sec-head .t-meta{display:block;margin-bottom:16px}

/* steps */
.steps{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:clamp(24px,4vw,48px)}
.step{border-top:1px solid rgba(0,0,0,0.05);padding-top:24px;display:flex;flex-direction:column;gap:12px}
.step .num{font-family:var(--gesso-font-display);font-weight:300;font-size:20px;color:var(--gesso-fg-muted)}
.step p{color:var(--gesso-fg-muted)}

/* proof */
.stats{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:clamp(24px,4vw,48px)}
.stat-cell{border-top:1px solid rgba(0,0,0,0.05);padding-top:20px;display:flex;flex-direction:column;gap:8px}
.stat-cell .t-stat.red{color:var(--gesso-accent)}

/* trust */
.trust{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,420px),1fr));gap:clamp(24px,5vw,80px);align-items:center}
.trust img{width:100%;aspect-ratio:4/5;object-fit:cover;outline:1px solid rgba(0,0,0,0.05);outline-offset:-1px;border-radius:var(--gesso-radius-md)}
.quote{font-family:var(--gesso-font-display);font-size:clamp(28px,4vw,48px);line-height:clamp(32px,4.4vw,52px);font-weight:700;letter-spacing:-0.015em}
.attrib{display:flex;align-items:center;gap:16px;margin-top:32px}
.attrib img{width:48px;height:48px;aspect-ratio:1/1;border-radius:var(--gesso-radius-md)}
.attrib .who{display:flex;flex-direction:column}
.attrib .who b{font-weight:600}

/* final cta */
.final{text-align:center;display:flex;flex-direction:column;align-items:center;gap:32px}
.final p{color:var(--gesso-fg-muted);max-width:44ch}

/* footer */
footer{border-top:1px solid var(--gesso-divider)}
.foot{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:16px;padding-block:40px}
.foot-links{display:flex;gap:24px;flex-wrap:wrap}
.foot-links a{color:var(--gesso-fg-muted);font-size:13px;letter-spacing:0.1em;text-transform:uppercase;transition:color var(--gesso-duration-fast) var(--gesso-easing-default)}
.foot-links a:hover{color:var(--gesso-fg)}
.foot-links a:focus-visible{outline:2px solid var(--gesso-fg);outline-offset:2px}

/* reveal — fails open without JS */
html.js .reveal{opacity:0;transform:translateY(20px);transition:opacity 600ms var(--gesso-easing-default),transform 600ms var(--gesso-easing-default)}
html.js .reveal.in{opacity:1;transform:none}
html.js .steps .reveal:nth-child(2){transition-delay:120ms}
html.js .steps .reveal:nth-child(3){transition-delay:240ms}
html.js .stats .reveal:nth-child(2){transition-delay:100ms}
html.js .stats .reveal:nth-child(3){transition-delay:200ms}
html.js .stats .reveal:nth-child(4){transition-delay:300ms}

.ic{width:1em;height:1em}

@media (prefers-reduced-motion: reduce){
  *,*::before,*::after{animation-duration:0.01ms !important;animation-iteration-count:1 !important;transition-duration:0.01ms !important}
  html.js .reveal{opacity:1;transform:none}
}
</style>

<div style="display:contents" data-brief-id="screen-root" data-brief-role="screen">

<header class="wrap nav" data-brief-id="nav-top" data-brief-role="nav-top">
  <a href="#" class="wordmark"><b>Seoul Culture</b> <span>Map</span></a>
  <nav class="nav-links t-meta">
    <a href="#collection" aria-current="page">Collections</a>
    <a href="#how">How it works</a>
    <a href="#proof">Why us</a>
    <a href="#trust">Story</a>
  </nav>
  <a href="#start" class="btn" data-brief-id="nav-cta" data-brief-role="cta">Start your map</a>
</header>

<section class="hero" style="border-top:none" data-brief-id="hero" data-brief-role="hero">
  <div class="wrap hero-grid">
    <div>
      <h1 class="t-hero">The places you gatekeep are someone's whole taste.</h1>
    </div>
    <div>
      <p class="lede">A map of Seoul built from what locals actually protect — the tea house they never post, the bar with no sign, the record shop that closes when it feels like it. Your picks become your collection.</p>
      <div class="hero-ctas">
        <a href="#start" class="btn" data-brief-id="hero-cta" data-brief-role="cta">Start your map</a>
        <a href="#collection" class="link-accent">Explore a collection <svg data-icon="lucide/arrow-right" viewBox="0 0 24 24" fill="none" stroke="currentColor" data-icon-style="line" class="ic" style="max-width:32px;max-height:32px"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5 12h14m-7-7l7 7l-7 7"/></svg></a>
      </div>
    </div>
  </div>
</section>

<section id="collection" style="border-top:none" data-brief-id="collection-grid" data-brief-role="card-grid">
  <div class="wrap gallery">
    <section data-component="Card" data-brief-id="auto-card-6" data-brief-role="card" data-gesso-marker-wrap style="display: contents"><div class="tile s4 reveal" data-brief-id="tile-tea" data-brief-role="card">
      <figure><img class="ar-45" src="https://rpreisbpsxrjwqsfeggf.supabase.co/storage/v1/object/public/direction-images/directions/95f8471b-3fa9-4158-815f-c2f0b2eefa24/9990cf4f249e.jpg" alt="Hidden hanok tea house in Bukchon" /></figure>
      <div class="cap"><h3>Chairhwa Dabang</h3><span class="t-meta tag-status">Gatekept · 3 yrs</span></div>
      <span class="t-meta where">Bukchon · Tea house</span>
    </div></section>
    <section data-component="Card" data-brief-id="auto-card-5" data-brief-role="card" data-gesso-marker-wrap style="display: contents"><div class="tile s4 reveal" data-brief-id="tile-records" data-brief-role="card">
      <figure><img class="ar-45" src="https://rpreisbpsxrjwqsfeggf.supabase.co/storage/v1/object/public/direction-images/directions/95f8471b-3fa9-4158-815f-c2f0b2eefa24/c08e2cf4011e.jpg" alt="Basement record shop in Hoehyeon" /></figure>
      <div class="cap"><h3>Dope Records B1</h3></div>
      <span class="t-meta where">Hoehyeon · Records</span>
    </div></section>
    <section data-component="Card" data-brief-id="auto-card-4" data-brief-role="card" data-gesso-marker-wrap style="display: contents"><div class="tile s4 reveal" data-brief-id="tile-alley" data-brief-role="card">
      <figure><img class="ar-45" src="https://rpreisbpsxrjwqsfeggf.supabase.co/storage/v1/object/public/direction-images/directions/95f8471b-3fa9-4158-815f-c2f0b2eefa24/0eb68cab0c82.jpg" alt="Unmarked bar alley in Euljiro" /></figure>
      <div class="cap"><h3>Nogari Alley Door 7</h3></div>
      <span class="t-meta where">Euljiro · Bar</span>
    </div></section>
    <section data-component="Card" data-brief-id="auto-card-3" data-brief-role="card" data-gesso-marker-wrap style="display: contents"><div class="tile s6 reveal" data-brief-id="tile-ceramics" data-brief-role="card">
      <figure><img class="ar-169" src="https://rpreisbpsxrjwqsfeggf.supabase.co/storage/v1/object/public/direction-images/directions/95f8471b-3fa9-4158-815f-c2f0b2eefa24/6cead77cc48f.jpg" alt="Ceramics studio open one weekend a month" /></figure>
      <div class="cap"><h3>Baekja Workroom</h3><span class="t-meta tag-status">New pick</span></div>
      <span class="t-meta where">Seongsu · Studio</span>
    </div></section>
    <section data-component="Card" data-brief-id="auto-card-2" data-brief-role="card" data-gesso-marker-wrap style="display: contents"><div class="tile s3 reveal" data-brief-id="tile-jazz" data-brief-role="card">
      <figure><img class="ar-34" src="https://rpreisbpsxrjwqsfeggf.supabase.co/storage/v1/object/public/direction-images/directions/95f8471b-3fa9-4158-815f-c2f0b2eefa24/d262d8687532.jpg" alt="Twelve-seat jazz room in Sinchon" /></figure>
      <div class="cap"><h3>Once Blue</h3></div>
      <span class="t-meta where">Sinchon · Jazz</span>
    </div></section>
    <section data-component="Card" data-brief-id="auto-card-1" data-brief-role="card" data-gesso-marker-wrap style="display: contents"><div class="tile s3 reveal" data-brief-id="tile-market" data-brief-role="card">
      <figure><img class="ar-34" src="https://rpreisbpsxrjwqsfeggf.supabase.co/storage/v1/object/public/direction-images/directions/95f8471b-3fa9-4158-815f-c2f0b2eefa24/ee14343b12d8.jpg" alt="Third stall from the east gate, Gwangjang" /></figure>
      <div class="cap"><h3>Third Stall, East Gate</h3></div>
      <span class="t-meta where">Jongno · Market</span>
    </div></section>
  </div>
</section>

<section id="how" data-brief-id="how-it-works" data-brief-role="section">
  <div class="wrap band">
    <div class="sec-head">
      <span class="t-meta">How it works</span>
      <h2 class="t-section">Taste in, taste out.</h2>
    </div>
    <div class="steps" data-brief-id="steps-row" data-brief-role="list">
      <div class="step reveal" data-brief-id="step-pin" data-brief-role="list-item">
        <span class="num">01</span>
        <h3 class="t-sub">Pin what you protect</h3>
        <p>Save the tea house you've told exactly two people about. Add one line on why it matters. That's a pick.</p>
      </div>
      <div class="step reveal" data-brief-id="step-follow" data-brief-role="list-item">
        <span class="num">02</span>
        <h3 class="t-sub">Follow taste, not stars</h3>
        <p>No ratings, no rankings. Follow three locals whose picks you trust and the map redraws itself around them.</p>
      </div>
      <div class="step reveal" data-brief-id="step-trade" data-brief-role="list-item">
        <span class="num">03</span>
        <h3 class="t-sub">Trade one pick a week</h3>
        <p>Send a friend one spot, get one back. A slow exchange, the way recommendations used to work.</p>
      </div>
    </div>
  </div>
</section>

<section id="proof" data-brief-id="value-proof" data-brief-role="section">
  <div class="wrap band">
    <div class="sec-head">
      <span class="t-meta">The collection so far</span>
      <h2 class="t-section">Small on purpose. Sharp on purpose.</h2>
    </div>
    <div class="stats" data-brief-id="metrics-row" data-brief-role="metrics-row">
      <div class="stat-cell reveal" data-brief-id="metric-spots" data-brief-role="metric">
        <span class="stat t-stat">2,418</span>
        <span class="t-meta">Gatekept spots mapped</span>
      </div>
      <div class="stat-cell reveal" data-brief-id="metric-curators" data-brief-role="metric">
        <span class="stat t-stat">312</span>
        <span class="t-meta">Local curators</span>
      </div>
      <div class="stat-cell reveal" data-brief-id="metric-districts" data-brief-role="metric">
        <span class="stat t-stat">25</span>
        <span class="t-meta">Districts of Seoul covered</span>
      </div>
      <div class="stat-cell reveal" data-brief-id="metric-sponsored" data-brief-role="metric">
        <span class="stat t-stat red">0</span>
        <span class="t-meta">Sponsored pins, ever</span>
      </div>
    </div>
  </div>
</section>

<section id="trust" data-brief-id="trust" data-brief-role="section">
  <div class="wrap band trust">
    <figure style="margin:0">
      <img src="https://rpreisbpsxrjwqsfeggf.supabase.co/storage/v1/object/public/direction-images/directions/95f8471b-3fa9-4158-815f-c2f0b2eefa24/db4f2c257892.jpg" alt="Seongsu-dong street where the map began" />
    </figure>
    <div>
      <span class="t-meta" style="display:block;margin-bottom:24px">From the community</span>
      <blockquote class="quote" style="margin:0">&ldquo;I kept this list in my Notes app for three years. Now it lives somewhere my friends can actually use it.&rdquo;</blockquote>
      <div class="attrib">
        <img src="https://rpreisbpsxrjwqsfeggf.supabase.co/storage/v1/object/public/direction-images/directions/95f8471b-3fa9-4158-815f-c2f0b2eefa24/57662aa4df85.png" alt="Portrait of Haeun" />
        <div class="who">
          <b>Haeun</b>
          <span class="t-meta">Curator · Seongsu-dong</span>
        </div>
      </div>
      <p style="color:var(--gesso-fg-muted);margin-top:32px">Built in Seongsu by three friends who were tired of watching quiet places get loud. Every pin is placed by a person, signed with their name.</p>
    </div>
  </div>
</section>

<section id="start" data-brief-id="final-cta" data-brief-role="section">
  <div class="wrap band final">
    <h2 class="t-section">Stop gatekeeping alone.<br>Start curating together.</h2>
    <p>Your first collection takes five minutes. It stays private until you decide who deserves it.</p>
    <a href="#" class="btn" data-brief-id="cta-start-map" data-brief-role="cta">Start your map <svg data-icon="lucide/arrow-right" viewBox="0 0 24 24" fill="none" stroke="currentColor" data-icon-style="line" class="ic" style="max-width:32px;max-height:32px"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5 12h14m-7-7l7 7l-7 7"/></svg></a>
  </div>
</section>

<footer data-brief-id="footer" data-brief-role="footer">
  <div class="wrap foot">
    <a href="#" class="wordmark"><b>Seoul Culture</b> <span>Map</span></a>
    <nav class="foot-links">
      <a href="#collection">Collections</a>
      <a href="#how">How it works</a>
      <a href="#trust">Story</a>
      <a href="#">Contact</a>
    </nav>
    <span class="t-meta">Seongsu-dong, Seoul · 2025</span>
  </div>
</footer>

</div>

<script>
document.documentElement.classList.add('js');
var io = new IntersectionObserver(function(es){
  es.forEach(function(e){
    if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
  });
},{threshold:0.15});
document.querySelectorAll('.reveal').forEach(function(el){ io.observe(el); });
</script>
</body></html>
```

Use the tokens as CSS variables. Treat the reference HTML as the visual
source of truth; adapt structure to your framework, but do not deviate
from the visual system.
