Rebuild this design in your project. Match it exactly: same layout,
typography, color, spacing, radius, shadow, and motion. Do not invent
new visuals.

## design.md

# Press Column — Style Reference
> Light interface — soft magenta accents on a pale blue ground.

**Theme:** light

A light system built on pale blue surfaces (#f6f8fa) with near-black ink (#0a0a0a). Soft magenta (#e2d3d8) carries the primary actions. Type pairs Sora for display with Inter for body and UI.

**Ground truth (computed from tokens + reference HTML):** light theme · page #f6f8fa · ink #0a0a0a · primary #e2d3d8 · secondary #fdf2fb · display "Sora" · body "Inter". Where the description above conflicts with these values or the Reference HTML, the tokens and HTML are authoritative.

## Tokens: Colors

| Name | Value | Token | Role | Usage | Contrast |
|------|-------|-------|------|-------|----------|
| Canvas | `#f6f8fa` | `--gesso-canvas` | Page background, the floor everything sits on. | Outermost background: body, full-bleed sections. Mirrors Neutral 50. | n/a |
| Surface recessed | `#eceef0` | `--gesso-surface-recessed` | Sunken surface below the canvas. | Inset wells: input fields, progress tracks, code blocks. | n/a |
| Surface | `#e4e4e4` | `--gesso-surface` | Card and panel fill, raised above the canvas. | Cards, panels, sheets, table rows. Mirrors Neutral 100. | n/a |
| Surface elevated | `#dbdbdb` | `--gesso-surface-elevated` | Top elevation tier. | Modals, dropdowns, popovers, tooltips. | n/a |
| Divider | `rgba(0,0,0,0.04)` | `--gesso-divider` | Hairline borders and separators. | 1px rules between rows and sections. Never for text. | n/a |
| Foreground | `#0a0a0a` | `--gesso-fg` | Primary text and high-emphasis icons. | Body copy, headings, primary icons. Mirrors Neutral 900. | AA 4.5:1 on canvas (guaranteed) |
| Foreground muted | `#5a5a5a` | `--gesso-fg-muted` | Secondary text. | Captions, metadata, placeholders, disabled labels. Mirrors Neutral 600. | AA 3.0:1 on canvas (guaranteed) |
| Primary | `#e2d3d8` | `--gesso-primary` | Brand accent, FILL only (alias: --gesso-accent). | CTA fills, active and selected states, focus rings. 2 to 3 per screen. Do NOT use as text, reach for --gesso-accent-text. | Pair with --gesso-on-accent for the label on top. |
| On primary | `#000000` | `--gesso-on-accent` | Text and icons on a filled primary. | Label color for buttons and chips filled with --gesso-primary. | Contrast-derived against --gesso-primary. |
| Accent (as text) | `#716a6c` | `--gesso-accent-text` | AA-safe accent for text and icons. | Use THIS for accent-colored links, headings, and icons. Use --gesso-primary for fills. | AA 4.5:1 on canvas (guaranteed). |
| Secondary | `#fdf2fb` | `--gesso-secondary` | Supporting brand accent. | Secondary fills, logo discs, supporting highlights. | Pair with on-fill text per --gesso-on-accent. |
| Secondary (as text) | `#726d71` | `--gesso-accent-2-text` | AA-safe secondary for text. | Secondary accent used as text or icons. | AA 4.5:1 on canvas (guaranteed). |
| Neutral 50 | `#f6f8fa` | `--gesso-neutral-50` | Page background. | Ramp access by step; prefer the role token above where one exists. | n/a |
| Neutral 100 | `#e4e4e4` | `--gesso-neutral-100` | Surface. | Ramp access by step; prefer the role token above where one exists. | n/a |
| Neutral 200 | `#c7c7c7` | `--gesso-neutral-200` | Neutral ramp step. | Ramp access by step; prefer the role token above where one exists. | n/a |
| Neutral 300 | `#aaaaaa` | `--gesso-neutral-300` | Neutral ramp step. | Ramp access by step; prefer the role token above where one exists. | n/a |
| Neutral 400 | `#8e8e8e` | `--gesso-neutral-400` | Neutral ramp step. | Ramp access by step; prefer the role token above where one exists. | n/a |
| Neutral 500 | `#747474` | `--gesso-neutral-500` | Neutral ramp step. | Ramp access by step; prefer the role token above where one exists. | n/a |
| Neutral 600 | `#5a5a5a` | `--gesso-neutral-600` | Muted text and dividers. | Ramp access by step; prefer the role token above where one exists. | AA 3.0:1 on canvas. |
| Neutral 700 | `#3d3d3d` | `--gesso-neutral-700` | Neutral ramp step. | Ramp access by step; prefer the role token above where one exists. | n/a |
| Neutral 800 | `#222222` | `--gesso-neutral-800` | Neutral ramp step. | Ramp access by step; prefer the role token above where one exists. | n/a |
| Neutral 900 | `#0a0a0a` | `--gesso-neutral-900` | Primary text. | Ramp access by step; prefer the role token above where one exists. | AA 4.5:1 on canvas. |
| Neutral 950 | `#090909` | `--gesso-neutral-950` | Neutral ramp step. | Ramp access by step; prefer the role token above where one exists. | n/a |
| Success | `#16A34A` | `--gesso-success` | Positive signals (gains, completed states). | Meaning only, never decoration. | AA 3.0:1 on canvas, chroma-floored distinct. |
| Warning | `#c36b05` | `--gesso-warning` | Caution states. | Meaning only, never decoration. | AA 3.0:1 on canvas, chroma-floored distinct. |
| Error | `#DC2626` | `--gesso-error` | Errors, destructive actions, negative signals. | Meaning only, never decoration. | AA 3.0:1 on canvas, chroma-floored distinct. |
| Data 1 | `#5e5156` | `--gesso-data-1` | Categorical data-viz series color. | Charts and series, applied in order. | n/a |
| Data 2 | `#75686c` | `--gesso-data-2` | Categorical data-viz series color. | Charts and series, applied in order. | n/a |
| Data 3 | `#8d7f84` | `--gesso-data-3` | Categorical data-viz series color. | Charts and series, applied in order. | n/a |
| Data 4 | `#a5979c` | `--gesso-data-4` | Categorical data-viz series color. | Charts and series, applied in order. | n/a |
| Data 5 | `#beb0b5` | `--gesso-data-5` | Categorical data-viz series color. | Charts and series, applied in order. | n/a |
| Data 6 | `#d8c9ce` | `--gesso-data-6` | Categorical data-viz series color. | Charts and series, applied in order. | n/a |

## Tokens: Typography

### Sora — Display. Headings, hero copy, large numerical specimens. · `--gesso-font-display`
- **Weights:** 400, 700
- **Line height:** 1.1
- **Letter spacing:** -0.02em
- **Role:** Display. Headings, hero copy, large numerical specimens.

### Inter — Body. Paragraphs, labels, UI chrome. · `--gesso-font-body`
- **Weights:** 400, 700
- **Line height:** 1.5
- **Letter spacing:** 0em
- **Role:** Body. Paragraphs, labels, UI chrome.

### Geist — Mono. Code, numerical tickers, mono-spaced metadata. · `--gesso-font-mono`
- **Weights:** 400, 700
- **Line height:** 1.4
- **Letter spacing:** 0em
- **Role:** Mono. Code, numerical tickers, mono-spaced metadata.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
|------|------|-------------|----------------|-------|
| H1 | 82.56px | 1.2 | — | `--gesso-text-4xl` |
| H2 | 47.776px | 1.2 | — | `--gesso-text-3xl` |
| H3 | 27.648px | 1.2 | — | `--gesso-text-2xl` |
| Body | 16px | 1.5 | — | `--gesso-text-base` |
| Caption | 11.104px | 1.5 | — | `--gesso-text-xs` |

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

Full-bleed bar, height 64-72px, inner contents constrained to var(--container-max-width) with var(--outer-margin) inline padding. Logo left, primary links centered or left-grouped, one primary CTA right. Links in --gesso-font-body weight 400, color --gesso-neutral-700 (#2E2E2E); hover/active resolve to --gesso-neutral-900 (#0a0a0a). CTA is the Primary Button. Transparent over a hero, then sticky with a --gesso-neutral-50 (#f6f8fa) fill and 1px --gesso-neutral-200 bottom border once scrolled. z-index 100.

### Hero Section
**Role:** Above-the-fold headline band. Sets the first impression.

Fills the upper 55-70% of the viewport with var(--section-padding) vertical breathing room, constrained to the Container. Headline in --gesso-font-display (Sora) at 5.16rem, weight 700, line-height 1.05-1.1, never italic. Subcopy in body font at --gesso-text-lg, color --gesso-neutral-600 (#5a5a5a), max-width ~60ch. Primary + Secondary Button pair beneath. Left-aligned for a marketing scroll, centered for a landing hero.

### Card
**Role:** Container surface for content groupings.

Background --gesso-neutral-50 (#f6f8fa), border 1px solid --gesso-neutral-200 (#E0E0E0), border-radius var(--gesso-radius-md) (2px), padding 48px, --gesso-shadow-sm. Body font for content; display font for any embedded headline. Text fg --gesso-neutral-900 (#0a0a0a). In a grid, cards span 3-6 of the 12 columns.

### Primary Button
**Role:** Highest-emphasis action. Reserved for the main CTA per section.

Background --gesso-primary (#e2d3d8), text auto-picked for max contrast (white or near-black), padding 24px 48px, border-radius var(--gesso-radius-md) (2px), font-family --gesso-font-body, font-weight 700. Hover: mix toward --gesso-fg by 10-12%. Use 1-2 per section, never more.

### Secondary Button
**Role:** Supporting action next to a primary CTA.

Background transparent, border 1.5px solid --gesso-primary (#e2d3d8), text --gesso-primary, padding 24px 48px (minus 1.5px each axis to compensate for the border), border-radius var(--gesso-radius-md) (2px), body font, weight 700.

### Input
**Role:** Single-line text entry. Default form field.

Background --gesso-neutral-100 (#e4e4e4), border 1px solid --gesso-neutral-300 (#C4C4C4), border-radius var(--gesso-radius-md) (2px), padding 24px 32px, body font. Focus: border --gesso-primary, ring 3px --gesso-primary at 14% alpha.

### Footer
**Role:** Page-closing navigation and legal. One per page.

Full-bleed block with a top 1px --gesso-neutral-200 (#E0E0E0) divider, var(--section-padding) vertical padding, contents constrained to var(--container-max-width). Multi-column link groups (grid, 2-4 columns): group headings at body weight 700, links --gesso-neutral-600 (#5a5a5a) resolving to --gesso-neutral-900 on hover. Logo and copyright row pinned along the bottom.

### Badge
**Role:** Compact label for status, tags, counts.

Background --gesso-primary (#e2d3d8) at 12% alpha, text --gesso-primary, padding 16px 24px, border-radius var(--gesso-radius-full) (9999px), font-size 12px, body font, weight 700, uppercase, letter-spacing 0.04em.

## Do's and Don'ts

### Do

- One clean grotesque/geometric sans across the board (Inter / SF / system-ui), with at most a mono only for codes. Display = semibold-to-bold (600-700) headlines at comfortable but not oversized scale; body = regular 400 charcoal; metadata labels = regular in muted grey, often slightly smaller. Tight-to-normal tracking, no all-caps except tiny section eyebrows (DEPART / ARRIVE) which get +0.04em.
- Tone-locked light. canvas = #FFFFFF to #F7F7F5 (near-white, faintly warm-neutral ground); surface = pure #FFFFFF flat cards lifted off canvas; ink = charcoal #1A1A1A / #222 (never pure black for body); muted = grey #8A8A8E for labels and inactive nav. One sparing accent only, an orange (#E8632A-ish) OR a muted moss green (#5A6B2F) used for the single primary CTA, active tab, and key data emphasis; semantic green/red reserved for status deltas. Accent occupies <=10% of any screen.
- Generous whitespace is the defining posture; layout is functional and grid-aligned on an 8px rhythm. Web (1280): calm multi-column shell, slim left nav, list column, roomy detail pane, with numbered/stepped content blocks separated by hairlines and lots of air. Never crowd; let labels breathe.
- Apply --gesso-primary (#e2d3d8) to a maximum of 2-3 elements per screen: a button, a highlight, a badge. Never paint large areas with primary.
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
| 0 | Page | `#f6f8fa` | Default page background. The lightest surface. |
| 1 | Raised | `#e4e4e4` | Cards, panels, sidebars: anything that sits on top of the page. |
| 2 | Sunken | `#E0E0E0` | Inset surfaces (search bars, code blocks, disabled fields). |
| 3 | Overlay | `#f6f8fa` | Modals and floating panels. Same hue as page; depth comes from --gesso-shadow-lg. |

## Agent Prompt Guide

**Quick Color Reference**

- Primary: #e2d3d8
- Secondary: #fdf2fb
- Page bg: #f6f8fa
- Body fg: #0a0a0a
- Muted fg: #5a5a5a
- Success: #16A34A

**Example Component Prompts**

1. Build a content container. max-width var(--container-max-width) (1280px), margin-inline auto, padding-inline var(--outer-margin) (64px, 24px below md). Wrap every section in it so the page shares one measure.

2. Build a responsive top navigation bar. Full-bleed, height 64-72px, inner row capped at var(--container-max-width) with var(--outer-margin) inline padding. Logo left, links centered (color #2E2E2E, hover #0a0a0a), primary CTA right (bg #e2d3d8, weight 700). Transparent over the hero, sticky #f6f8fa fill + 1px #E0E0E0 border on scroll. Collapse links to a menu button below 768px.

3. Build a hero band. Constrain to var(--container-max-width) with var(--section-padding) vertical padding. Headline display font (Sora) at 5.16rem weight 700, never italic; subcopy body font (Inter) max-width 60ch color #5a5a5a; primary + secondary CTA row beneath.

4. Build a 12-column responsive grid section. display:grid; grid-template-columns: repeat(12, 1fr); gap var(--grid-gutter) (24px); inside var(--container-max-width) + var(--outer-margin). Cards span 4 columns (3-up) on desktop, span 6 (2-up) at md, span 12 below sm.

5. Build a footer. Full-bleed with a top 1px #E0E0E0 divider, var(--section-padding) vertical padding, contents at var(--container-max-width). 3-4 link-group columns (headings weight 700, links #5a5a5a), logo + copyright row pinned along the bottom.

## Similar Brands

- **Linear** — Modern SaaS reference: restrained palette, gridded layout.
- **Stripe** — Clean, confident system with strong type hierarchy.
- **Vercel** — Black-and-white discipline with a single high-impact accent.

## Quick Start

### CSS Custom Properties

```css
:root {
  /* Colors */
  --gesso-canvas: #f6f8fa;
  --gesso-surface-recessed: #eceef0;
  --gesso-surface: #e4e4e4;
  --gesso-surface-elevated: #dbdbdb;
  --gesso-divider: rgba(0,0,0,0.04);
  --gesso-fg: #0a0a0a;
  --gesso-fg-muted: #5a5a5a;
  --gesso-primary: #e2d3d8;
  --gesso-on-accent: #000000;
  --gesso-accent-text: #716a6c;
  --gesso-secondary: #fdf2fb;
  --gesso-accent-2-text: #726d71;
  --gesso-neutral-50: #f6f8fa;
  --gesso-neutral-100: #e4e4e4;
  --gesso-neutral-200: #c7c7c7;
  --gesso-neutral-300: #aaaaaa;
  --gesso-neutral-400: #8e8e8e;
  --gesso-neutral-500: #747474;
  --gesso-neutral-600: #5a5a5a;
  --gesso-neutral-700: #3d3d3d;
  --gesso-neutral-800: #222222;
  --gesso-neutral-900: #0a0a0a;
  --gesso-neutral-950: #090909;
  --gesso-success: #16A34A;
  --gesso-warning: #c36b05;
  --gesso-error: #DC2626;
  --gesso-data-1: #5e5156;
  --gesso-data-2: #75686c;
  --gesso-data-3: #8d7f84;
  --gesso-data-4: #a5979c;
  --gesso-data-5: #beb0b5;
  --gesso-data-6: #d8c9ce;

  /* Typography — Font Families */
  --gesso-font-display: 'Sora', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --gesso-font-body: 'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --gesso-font-mono: 'Geist', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --gesso-text-4xl: 82.56px;
  --gesso-leading-4xl: 1.2;
  --gesso-text-3xl: 47.776px;
  --gesso-leading-3xl: 1.2;
  --gesso-text-2xl: 27.648px;
  --gesso-leading-2xl: 1.2;
  --gesso-text-base: 16px;
  --gesso-leading-base: 1.5;
  --gesso-text-xs: 11.104px;
  --gesso-leading-xs: 1.5;

  /* Typography — Weights */
  --font-weight-regular: 400;
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
  --surface-page: #f6f8fa;
  --surface-raised: #e4e4e4;
  --surface-sunken: #E0E0E0;
  --surface-overlay: #f6f8fa;
}
```

### Tailwind v4

```css
@theme {
  /* Colors */
  --gesso-canvas: #f6f8fa;
  --gesso-surface-recessed: #eceef0;
  --gesso-surface: #e4e4e4;
  --gesso-surface-elevated: #dbdbdb;
  --gesso-divider: rgba(0,0,0,0.04);
  --gesso-fg: #0a0a0a;
  --gesso-fg-muted: #5a5a5a;
  --gesso-primary: #e2d3d8;
  --gesso-on-accent: #000000;
  --gesso-accent-text: #716a6c;
  --gesso-secondary: #fdf2fb;
  --gesso-accent-2-text: #726d71;
  --gesso-neutral-50: #f6f8fa;
  --gesso-neutral-100: #e4e4e4;
  --gesso-neutral-200: #c7c7c7;
  --gesso-neutral-300: #aaaaaa;
  --gesso-neutral-400: #8e8e8e;
  --gesso-neutral-500: #747474;
  --gesso-neutral-600: #5a5a5a;
  --gesso-neutral-700: #3d3d3d;
  --gesso-neutral-800: #222222;
  --gesso-neutral-900: #0a0a0a;
  --gesso-neutral-950: #090909;
  --gesso-success: #16A34A;
  --gesso-warning: #c36b05;
  --gesso-error: #DC2626;
  --gesso-data-1: #5e5156;
  --gesso-data-2: #75686c;
  --gesso-data-3: #8d7f84;
  --gesso-data-4: #a5979c;
  --gesso-data-5: #beb0b5;
  --gesso-data-6: #d8c9ce;

  /* Typography */
  --gesso-font-display: 'Sora', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --gesso-font-body: 'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --gesso-font-mono: 'Geist', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --gesso-text-4xl: 82.56px;
  --gesso-leading-4xl: 1.2;
  --gesso-text-3xl: 47.776px;
  --gesso-leading-3xl: 1.2;
  --gesso-text-2xl: 27.648px;
  --gesso-leading-2xl: 1.2;
  --gesso-text-base: 16px;
  --gesso-leading-base: 1.5;
  --gesso-text-xs: 11.104px;
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
    "neutral": {
      "50": "#f6f8fa",
      "100": "#e4e4e4",
      "200": "#E0E0E0",
      "300": "#C4C4C4",
      "400": "#A0A0A0",
      "500": "#6E6E6E",
      "600": "#5a5a5a",
      "700": "#2E2E2E",
      "800": "#1A1A1A",
      "900": "#0a0a0a",
      "950": "#000000"
    },
    "primary": "#e2d3d8",
    "semantic": {
      "error": "#B80000",
      "success": "#7252a5",
      "warning": "#8B6000"
    },
    "secondary": "#fdf2fb"
  },
  "motion": {
    "easing": {
      "default": "cubic-bezier(0.25, 0.1, 0.25, 1)",
      "emphasis": "cubic-bezier(0.4, 0, 1, 1)"
    },
    "duration": {
      "base": "160ms",
      "fast": "80ms",
      "slow": "280ms"
    }
  },
  "radius": {
    "lg": "4px",
    "md": "2px",
    "sm": "0px",
    "full": "9999px",
    "none": "0px"
  },
  "shadow": {
    "lg": "0 1px 2px rgba(0,0,0,0.04)",
    "md": "none",
    "sm": "none"
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
  "approach": {
    "mood": "confrontational, declarative, critical, precise",
    "name": "Press Column",
    "anchor": "Postwar Swiss typography applied to a fashion broadsheet"
  },
  "extended": {
    "glow": {
      "color": "",
      "spread": "",
      "enabled": false
    },
    "border": {
      "color": "#0A0A0A",
      "style": "solid",
      "width": "2px"
    },
    "texture": {
      "type": "none",
      "opacity": 0
    },
    "gradient": {
      "style": "",
      "enabled": false
    }
  },
  "typeface": {
    "body": "Inter",
    "mono": "Geist",
    "scale": {
      "lg": "1.2rem",
      "sm": "0.833rem",
      "xl": "1.44rem",
      "xs": "0.694rem",
      "2xl": "1.728rem",
      "3xl": "2.986rem",
      "4xl": "5.16rem",
      "base": "1rem"
    },
    "display": "Sora",
    "weights": [
      400,
      700
    ],
    "bodyWeight": 400,
    "displayWeight": 700
  },
  "surfacePack": "web-editorial-paper"
}
```

## Reference HTML

```html
<!doctype html>
<html lang="en"><head>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="preconnect" href="https://api.fontshare.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Sora:wght@400;700&family=Geist:wght@400;700&display=swap"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700&display=swap"><style id="gesso-fork-restyle">:root{--gesso-font-display:"Sora", system-ui, -apple-system, sans-serif;}</style>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Gesso — SS26 Runway</title>
<meta name="x-visual-moves" content="Channeled the anchor's editorial restraint by replacing its centered wordmark hero with a horizontal contact-sheet of runway frames that scroll under a fixed press-room rail. Reinterpreted its colored review cards as a press archive grid where each tile is a black-and-white frame plus a single critic's verdict. Translated the anchor's relentless small-caps meta labels into a wire-service teletype rhythm that runs above every section like a press ticker.">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;700&amp;display=swap">
<style>
:root {
  --gesso-canvas: #f6f8fa;
  --gesso-surface: #e4e4e4;
  --gesso-surface-elevated: #dbdbdb;
  --gesso-surface-recessed: #eceef0;
  --gesso-fg: #0A0A0A;
  --gesso-fg-muted: #5A5A5A;
  --gesso-divider: rgba(0, 0, 0, 0.04);
  --gesso-accent: #e2d3d8;
  --gesso-accent-2: #fdf2fb;
  --gesso-on-accent: #000000;
  --gesso-data-1: #5e5155;
  --gesso-data-2: #75686c;
  --gesso-data-3: #8c7f83;
  --gesso-data-4: #a5979c;
  --gesso-data-5: #bfb0b5;
  --gesso-data-6: #d8c9ce;
  --gesso-font-display:"Sora", system-ui, -apple-system, sans-serif;
  --gesso-font-body:"Inter", "Geist", system-ui, -apple-system, sans-serif;
  --gesso-radius-sm: 2px;
  --gesso-radius-md: 4px;
  --gesso-radius-lg: 8px;
  --gesso-radius-full: 9999px;
  --hero-fs: clamp(28px, 7vw, 112px);
  --section-fs: clamp(24px, 3.6vw, 48px);
  --subhead-fs: clamp(18px, 2vw, 24px);
  --body-fs: 16px;
  --meta-fs: 11px;
  --stat-fs: clamp(32px, 5vw, 72px);
}
* { box-sizing: border-box; min-width: 0; margin: 0; padding: 0; }
html, body { width: 100%; min-height: 100%; overflow-x: hidden; }
html { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
body {
  background: var(--gesso-canvas);
  color: var(--gesso-fg);
  font-family: var(--gesso-font-body);
  font-size: var(--body-fs);
  line-height: 1.55;
  display: flex;
  flex-direction: column;
}
img, video { max-width: 100%; display: block; }
a { color: inherit; text-decoration: none; }
button { font: inherit; color: inherit; background: none; border: 0; cursor: pointer; }
h1, h2, h3 { font-family: var(--gesso-font-display); font-weight: 700; line-height: 0.95; letter-spacing: -0.02em; text-wrap: balance; overflow-wrap: break-word; }
p { text-wrap: pretty; }

.wrap { max-width: 1280px; margin-inline: auto; padding-inline: clamp(20px, 5vw, 64px); width: 100%; }

/* META — the press-ticker eyebrow */
.meta {
  font-size: var(--meta-fs);
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--gesso-fg-muted);
  font-weight: 500;
}

/* === NAV === */
.nav {
  position: absolute;
  top: 0; left: 0; right: 0;
  z-index: 10;
  padding: 24px clamp(20px, 5vw, 64px);
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.nav__mark {
  font-family: var(--gesso-font-display);
  font-weight: 700;
  font-size: 18px;
  letter-spacing: -0.02em;
}
.nav__cta {
  font-size: 14px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  font-weight: 500;
  padding: 12px 16px;
  border: 1px solid var(--gesso-divider, rgba(0,0,0,0.06));
  transition: background 150ms ease, color 150ms ease;
}
.nav__cta:hover { background: var(--gesso-fg); color: var(--gesso-canvas); }
.nav__cta:focus-visible { outline: 2px solid var(--gesso-fg); outline-offset: 2px; }

/* === HERO — CONTACT SHEET === */
.hero {
  position: relative;
  background: var(--gesso-canvas);
  padding-top: 88px;
  padding-bottom: clamp(48px, 8vw, 120px);
}
.hero__head {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  column-gap: 24px;
  row-gap: 16px;
  padding-bottom: 32px;
}
.hero__eyebrow {
  grid-column: span 12;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid var(--gesso-divider, rgba(0,0,0,0.06));
  border-bottom: 1px solid var(--gesso-divider, rgba(0,0,0,0.06));
  padding: 12px 0;
  font-size: var(--meta-fs);
  letter-spacing: 0.16em;
  text-transform: uppercase;
  font-weight: 500;
  flex-wrap: wrap;
  gap: 16px;
}
.hero__eyebrow span + span { color: var(--gesso-fg-muted); }
.hero__title {
  grid-column: span 12;
  font-size: var(--hero-fs);
  font-weight: 700;
  line-height: 0.92;
  letter-spacing: -0.035em;
  text-transform: uppercase;
  padding-top: clamp(24px, 4vw, 48px);
}
.hero__sub {
  grid-column: span 7;
  font-size: var(--subhead-fs);
  line-height: 1.3;
  color: var(--gesso-fg);
  max-width: 56ch;
  padding-top: 16px;
}
@media (max-width: 900px){ .hero__sub { grid-column: span 12; } }

/* Contact sheet strip — horizontal scroll */
.sheet {
  position: relative;
  margin-top: clamp(32px, 5vw, 64px);
}
.sheet__bar {
  display: flex;
  justify-content: space-between;
  padding: 8px clamp(20px, 5vw, 64px);
  border-top: 1px solid var(--gesso-divider, rgba(0,0,0,0.06));
  border-bottom: 1px solid var(--gesso-divider, rgba(0,0,0,0.06));
  font-size: var(--meta-fs);
  letter-spacing: 0.16em;
  text-transform: uppercase;
  font-weight: 500;
}
.sheet__bar .muted { color: var(--gesso-fg-muted); }
.sheet__rail {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  padding: 16px clamp(20px, 5vw, 64px) 24px;
  gap: 8px;
  scrollbar-width: thin;
}
.sheet__rail::-webkit-scrollbar { height: 4px; }
.sheet__rail::-webkit-scrollbar-thumb { background: var(--gesso-fg-muted); }
.frame {
  flex: 0 0 auto;
  scroll-snap-align: start;
  width: clamp(220px, 22vw, 320px);
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.frame__img {
  position: relative;
  aspect-ratio: 3/4;
  background: var(--gesso-surface);
  overflow: hidden;
}
.frame__img img {
  width: 100%; height: 100%;
  object-fit: cover;
  filter: grayscale(1) contrast(1.08);
}
.frame__img::after {
  content: '';
  position: absolute; inset: 0;
  background: rgba(10,10,10,0.04);
  mix-blend-mode: multiply;
  pointer-events: none;
}
.frame__meta {
  display: flex;
  justify-content: space-between;
  font-size: var(--meta-fs);
  letter-spacing: 0.14em;
  text-transform: uppercase;
  font-weight: 500;
  color: var(--gesso-fg-muted);
}
.frame__meta b { color: var(--gesso-fg); font-weight: 600; }

/* === STATEMENT BAND === */
.statement {
  padding: clamp(64px, 10vw, 160px) 0;
}
.statement__grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  column-gap: 24px;
  row-gap: 32px;
}
.statement__kicker {
  grid-column: span 12;
  border-top: 1px solid var(--gesso-divider, rgba(0,0,0,0.06));
  padding-top: 16px;
  font-size: var(--meta-fs);
  letter-spacing: 0.16em;
  text-transform: uppercase;
  font-weight: 500;
}
.statement__body {
  grid-column: 3 / span 8;
  font-family: var(--gesso-font-display);
  font-size: var(--section-fs);
  line-height: 1.1;
  letter-spacing: -0.02em;
  font-weight: 500;
}
@media (max-width: 900px){ .statement__body { grid-column: span 12; } }

/* === TWO-COLUMN TEXT === */
.twocol {
  padding-bottom: clamp(48px, 8vw, 120px);
}
.twocol__grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  column-gap: 24px;
  row-gap: 32px;
}
.twocol__label { grid-column: span 12; }
.twocol__head {
  grid-column: span 4;
  font-size: var(--section-fs);
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 0.95;
}
.twocol__body {
  grid-column: span 5;
  font-size: var(--body-fs);
  color: var(--gesso-fg);
  line-height: 1.55;
}
.twocol__list {
  grid-column: 10 / span 3;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 14px;
}
.twocol__list li {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid var(--gesso-divider);
  padding-bottom: 8px;
}
.twocol__list b { font-weight: 600; }
.twocol__list span { color: var(--gesso-fg-muted); font-size: var(--meta-fs); letter-spacing: 0.14em; text-transform: uppercase; }
@media (max-width: 900px){
  .twocol__head, .twocol__body, .twocol__list { grid-column: span 12; }
}

/* === FEATURE-SPLIT (Press archive) === */
.feature {
  padding: clamp(48px, 6vw, 96px) 0;
  border-top: 1px solid var(--gesso-divider, rgba(0,0,0,0.06));
}
.feature__grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  column-gap: 24px;
  row-gap: 32px;
  align-items: start;
}
.feature__media {
  grid-column: span 6;
  position: relative;
  aspect-ratio: 4/5;
  background: var(--gesso-surface);
  overflow: hidden;
}
.feature__media img {
  width: 100%; height: 100%;
  object-fit: cover;
  filter: grayscale(1) contrast(1.08);
}
.feature__media::after {
  content: '';
  position: absolute; inset: 0;
  background: rgba(10,10,10,0.04);
  mix-blend-mode: multiply;
  pointer-events: none;
}
.feature__media--accent { background: var(--gesso-accent); }
.feature__text {
  grid-column: 8 / span 5;
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.feature__num {
  font-family: var(--gesso-font-display);
  font-size: 14px;
  letter-spacing: 0.18em;
  font-weight: 500;
}
.feature__title {
  font-size: var(--section-fs);
  font-weight: 700;
  letter-spacing: -0.025em;
  line-height: 0.95;
}
.feature__copy {
  font-size: var(--body-fs);
  line-height: 1.55;
  color: var(--gesso-fg);
  max-width: 42ch;
}
.feature__rule {
  height: 1px;
  background: var(--gesso-fg);
  width: 100%;
}
.feature__meta {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  font-size: var(--meta-fs);
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--gesso-fg-muted);
}
.feature__meta b { color: var(--gesso-fg); display: block; font-weight: 600; font-family: var(--gesso-font-display); }
.feature--reverse .feature__media { grid-column: 7 / span 6; grid-row: 1; }
.feature--reverse .feature__text { grid-column: 1 / span 5; grid-row: 1; }
@media (max-width: 900px){
  .feature__media, .feature__text,
  .feature--reverse .feature__media, .feature--reverse .feature__text {
    grid-column: span 12; grid-row: auto;
  }
}

/* Accent card variant (no photo) */
.feature__card {
  grid-column: span 6;
  aspect-ratio: 4/5;
  background: var(--gesso-accent);
  padding: clamp(24px, 4vw, 48px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: var(--gesso-on-accent);
}
.feature__card--alt { background: var(--gesso-fg); color: var(--gesso-canvas); }
.feature__card--surface { background: var(--gesso-surface); color: var(--gesso-fg); }
.feature__card-num {
  font-family: var(--gesso-font-display);
  font-size: clamp(48px, 8vw, 96px);
  font-weight: 700;
  letter-spacing: -0.04em;
  line-height: 0.9;
}
.feature__card-label {
  font-size: var(--meta-fs);
  letter-spacing: 0.18em;
  text-transform: uppercase;
  font-weight: 500;
}
.feature__card-headline {
  font-family: var(--gesso-font-display);
  font-size: clamp(24px, 3vw, 40px);
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 0.95;
}
@media (max-width: 900px){ .feature__card { grid-column: span 12; } }

/* === FOOTER === */
.foot {
  border-top: 1px solid var(--gesso-divider, rgba(0,0,0,0.06));
  padding: 48px 0 32px;
  margin-top: clamp(48px, 6vw, 96px);
}
.foot__grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  column-gap: 24px;
  row-gap: 32px;
}
.foot__mark {
  grid-column: span 4;
  font-family: var(--gesso-font-display);
  font-weight: 700;
  font-size: clamp(40px, 6vw, 72px);
  letter-spacing: -0.04em;
  line-height: 0.9;
}
.foot__col {
  grid-column: span 2;
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 14px;
}
.foot__col h4 {
  font-family: var(--gesso-font-body);
  font-size: var(--meta-fs);
  letter-spacing: 0.16em;
  text-transform: uppercase;
  font-weight: 500;
  color: var(--gesso-fg-muted);
  margin-bottom: 8px;
}
.foot__col a { transition: color 150ms ease; }
.foot__col a:hover { color: var(--gesso-fg-muted); }
.foot__col a:focus-visible { outline: 2px solid var(--gesso-fg); outline-offset: 2px; }
.foot__bottom {
  grid-column: span 12;
  display: flex;
  justify-content: space-between;
  padding-top: 24px;
  border-top: 1px solid var(--gesso-divider);
  font-size: var(--meta-fs);
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--gesso-fg-muted);
  flex-wrap: wrap;
  gap: 16px;
}
@media (max-width: 900px){
  .foot__mark { grid-column: span 12; }
  .foot__col { grid-column: span 6; }
}

/* Reveal */
.reveal { opacity: 1; transform: none; }
html.js .reveal { opacity: 0; transform: translateY(20px); transition: opacity 600ms ease, transform 600ms ease; }
html.js .reveal.in { opacity: 1; transform: none; }

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
  html.js .reveal { opacity: 1; transform: none; }
}
</style>
<style id="gesso-text-wrap">h1,h2,h3{text-wrap:balance}p,li,figcaption,blockquote{text-wrap:pretty}</style>
<style id="gesso-font-smoothing">html{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}</style>
<style id="gesso-image-outline">img:not([data-illustration]):not([data-icon]):not([aria-hidden="true"]){outline:1px solid rgba(0,0,0,0.05);outline-offset:-1px}</style>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;700&amp;family=JetBrains%20Mono:wght@400;500;700&amp;display=swap">

<style>html.lenis,html.lenis body{height:auto}.lenis.lenis-smooth{scroll-behavior:auto!important}.lenis.lenis-stopped{overflow:clip}</style>
<style id="gesso-responsive-shell">html,body{width:100%!important;max-width:100%!important;min-width:0;overflow-x:hidden}*{min-width:0}img,svg,video,canvas,iframe,table{max-width:100%}</style><style id="frame-edit-hero">[data-brief-id="hero"] > div:first-child::before { content: ''; position: absolute; inset: 0; z-index: -1; background-image: url('https://rpreisbpsxrjwqsfeggf.supabase.co/storage/v1/object/public/direction-images/directions/4f26d545-5a15-4388-ab26-8d9a8005489e/b70c008e1d36.jpg'); background-size: cover; background-position: center; filter: grayscale(1) contrast(1.1); }</style><style id="comment-css-contact-sheet-mqpw7bj1">[data-brief-id="contact-sheet"] .frame__img img {
  filter: none !important;
}
[data-brief-id="contact-sheet"] .frame__img::after {
  display: none !important;
}</style><!--gesso-fonts:start--><style id="gesso-font-lock">:root{--gesso-font-display:"Sora", system-ui, -apple-system, sans-serif !important;--gesso-font-body:"Inter", "Geist", system-ui, -apple-system, sans-serif !important;--gesso-font-mono:"Geist", ui-monospace, "JetBrains Mono", monospace !important;}</style><!--gesso-fonts:end-->
</head>
<body data-brief-id="screen-root" data-brief-role="screen">

<nav class="nav" data-brief-id="nav-top" data-brief-role="nav-top">
  <div class="nav__mark">GESSO</div>
  <a href="#access" class="nav__cta">Request Access</a>
</nav>

<header class="hero" data-brief-id="hero" data-brief-role="hero" style="position:relative; overflow:hidden;">

  
  <div style="position:absolute;inset:0;z-index:0;overflow:hidden;">
    <video src="https://videos.pexels.com/video-files/7305163/7305163-hd_1366_720_25fps.mp4" poster="https://images.pexels.com/videos/7305163/pexels-photo-7305163.jpeg?auto=compress&amp;cs=tinysrgb&amp;fit=crop&amp;h=630&amp;w=1200" autoplay="" muted="" loop="" playsinline="" preload="metadata" data-pexels-video="true" style="object-fit:cover;width:100%;height:100%;inset:0;filter:grayscale(1) contrast(1.06)"></video>
    
    <div style="position:absolute;inset:0;background:rgba(249,248,246,0.72);"></div>
  </div>

  
  <div class="wrap" style="position:relative;z-index:1;">
    <div class="hero__head">
      <div class="hero__eyebrow">
        <span>Spring / Summer 2026 — Look Book No. 14</span>
        <span>Paris — 03 / 03 / 2026 — 19:00 CET</span>
      </div>
      <h1 class="hero__title">The Archive,<br>Unsealed.</h1>
      <p class="hero__sub">Eighty-four runway frames. One ceremony. Press preview opens nine days before the public release.</p>
    </div>
  </div>

  <div class="sheet" data-brief-id="contact-sheet" data-brief-role="card-grid" style="position:relative;z-index:1;">
    <div class="sheet__bar">
      <span>Contact Sheet — Roll 01 / 03</span>
      <span class="muted">Scroll →</span>
    </div>
    <div class="sheet__rail">
      <article class="frame">
        <div class="frame__img"><img src="https://rpreisbpsxrjwqsfeggf.supabase.co/storage/v1/object/public/direction-images/directions/4f26d545-5a15-4388-ab26-8d9a8005489e/61d520e9064c.png" alt=""></div>
        <div class="frame__meta"><b>014A</b><span>Opening</span></div>
      </article>
      <article class="frame">
        <div class="frame__img"><img src="https://rpreisbpsxrjwqsfeggf.supabase.co/storage/v1/object/public/direction-images/directions/4f26d545-5a15-4388-ab26-8d9a8005489e/140de569e1b0.png" alt=""></div>
        <div class="frame__meta"><b>014B</b><span>Look 02</span></div>
      </article>
      <article class="frame">
        <div class="frame__img"><img src="https://rpreisbpsxrjwqsfeggf.supabase.co/storage/v1/object/public/direction-images/directions/4f26d545-5a15-4388-ab26-8d9a8005489e/8285df9b5a1e.jpg" alt=""></div>
        <div class="frame__meta"><b>014C</b><span>Look 07</span></div>
      </article>
      <article class="frame">
        <div class="frame__img"><img src="https://rpreisbpsxrjwqsfeggf.supabase.co/storage/v1/object/public/direction-images/directions/4f26d545-5a15-4388-ab26-8d9a8005489e/a4120be97ad2.png" alt=""></div>
        <div class="frame__meta"><b>014D</b><span>Look 11</span></div>
      </article>
      <article class="frame">
        <div class="frame__img"><img src="https://rpreisbpsxrjwqsfeggf.supabase.co/storage/v1/object/public/direction-images/directions/4f26d545-5a15-4388-ab26-8d9a8005489e/3eae2ca03c5c.jpg" alt=""></div>
        <div class="frame__meta"><b>014E</b><span>Look 19</span></div>
      </article>
      <article class="frame">
        <div class="frame__img"><img src="https://rpreisbpsxrjwqsfeggf.supabase.co/storage/v1/object/public/direction-images/directions/4f26d545-5a15-4388-ab26-8d9a8005489e/e8907f5ff9b7.jpg" alt=""></div>
        <div class="frame__meta"><b>014F</b><span>Look 24</span></div>
      </article>
      <article class="frame">
        <div class="frame__img"><img src="https://rpreisbpsxrjwqsfeggf.supabase.co/storage/v1/object/public/direction-images/directions/4f26d545-5a15-4388-ab26-8d9a8005489e/15623bcd1e09.jpg" alt=""></div>
        <div class="frame__meta"><b>014G</b><span>Look 31</span></div>
      </article>
      <article class="frame">
        <div class="frame__img"><img src="https://rpreisbpsxrjwqsfeggf.supabase.co/storage/v1/object/public/direction-images/directions/4f26d545-5a15-4388-ab26-8d9a8005489e/af431e7a9f4f.jpg" alt=""></div>
        <div class="frame__meta"><b>014H</b><span>Closing</span></div>
      </article>
    </div>
  </div>
</header>

<section class="statement reveal" data-brief-id="statement" data-brief-role="section">
  <div class="wrap">
    <div class="statement__grid">
      
      <p class="statement__body">
        A collection is not a single image. It is sequence, repetition, refusal. Gesso refuses the gatekeeper frame. The contact sheet stands in its place — every look, no edit, no winner.
      </p>
    </div>
  </div>
</section>

<section class="twocol reveal" data-brief-id="collection-note" data-brief-role="section">
  <div class="wrap">
    <div class="twocol__grid">
      <div class="twocol__label">
        <div class="meta">— Collection Note 01 / 02</div>
      </div>
      <h2 class="twocol__head">A press preview, in full.</h2>
      <div class="twocol__body">
        <p>Eighty-four looks photographed in continuous sequence at the Pavillon des Invalides, 02 March 2026. Press receives the unedited archive nine days before the public release, with no embargoed lead frame and no curated opening image.</p>
      </div>
      <ul class="twocol__list">
        <li><b>Looks</b><span>84</span></li>
        <li><b>Rolls</b><span>03</span></li>
        <li><b>Press</b><span>09 days</span></li>
        <li><b>Public</b><span>12 / 03</span></li>
      </ul>
    </div>
  </div>
</section>

<section class="feature reveal" data-brief-id="feature-01" data-brief-role="section">
  <div class="wrap">
    <div class="feature__grid">
      <div class="feature__card" style="position:relative;overflow:hidden;">
        <img src="https://images.unsplash.com/photo-1557777586-f6682739fcf3?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5NTIzODB8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwYXRlbGllciUyMHByZXNzJTIwY3JlZGVudGlhbHMlMjBydW53YXl8ZW58MXwxfHx8MTc4MjE3MzEyNXww&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;filter:grayscale(1) contrast(1.08);z-index:0;">
        <div style="position:absolute;inset:0;background:rgba(10,10,10,0.38);z-index:1;"></div>
        <div style="position:relative;z-index:2;">
          <div class="feature__card-num" style="color:#ffffff;">01</div>
          <div class="feature__card-label" style="color:rgba(255,255,255,0.7);">— Access Protocol</div>
        </div>
        <div class="feature__card-headline" style="position:relative;z-index:2;color:#ffffff;">Credentials are reviewed within forty-eight hours.</div>
      </div>
      <div class="feature__text">
        <div class="feature__num">— Press Credentialing</div>
        <h3 class="feature__title">Submit, verify, receive.</h3>
        <p class="feature__copy">Editors and contributing critics submit masthead credentials through the press portal. Review is manual, conducted by the Gesso atelier. Approved press receive a private archive link and an embargo schedule.</p>
        <div class="feature__rule"></div>
        <div class="feature__meta">
          <div><b>48 hrs</b>Review window</div>
          <div><b>Atelier</b>Reviewed by</div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="twocol reveal" data-brief-id="show-notes" data-brief-role="section">
  <div class="wrap">
    <div class="twocol__grid">
      <div class="twocol__label"><div class="meta">— Collection Note 02 / 02</div></div>
      <h2 class="twocol__head">On the title:<br>Press Column.</h2>
      <div class="twocol__body">
        <p>The collection borrows its grammar from the wire-service column: declarative, datelined, terse. Garments are titled by date and roll. No story other than the one the reader assembles from the sequence itself.</p>
      </div>
      <ul class="twocol__list">
        <li><b>Atelier</b><span>Paris</span></li>
        <li><b>Director</b><span>S. Marchant</span></li>
        <li><b>Editions</b><span>1 of 1</span></li>
        <li><b>House</b><span>Gesso, est. MMXXIII</span></li>
      </ul>
    </div>
  </div>
</section>

<section class="feature reveal" data-brief-id="feature-02" data-brief-role="section">
  <div class="wrap">
    <div class="feature__grid">
      <div class="feature__media">
        <img src="https://rpreisbpsxrjwqsfeggf.supabase.co/storage/v1/object/public/direction-images/directions/4f26d545-5a15-4388-ab26-8d9a8005489e/6c638c5e234a.jpg" alt="">
      </div>
      <div class="feature__text">
        <div class="feature__num">— 02 / Atelier</div>
        <h3 class="feature__title">Cut, assembled, photographed in one continuous week.</h3>
        <p class="feature__copy">The full Spring/Summer 2026 collection was constructed across five working days in the Rue de Sèvres atelier. Photography began the morning the last hem was set.</p>
        <div class="feature__rule"></div>
        <div class="feature__meta">
          <div><b>05 days</b>Construction</div>
          <div><b>01 session</b>Photography</div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="feature feature--reverse reveal" data-brief-id="feature-03" data-brief-role="section">
  <div class="wrap">
    <div class="feature__grid">
      <div class="feature__media">
        <img src="https://rpreisbpsxrjwqsfeggf.supabase.co/storage/v1/object/public/direction-images/directions/4f26d545-5a15-4388-ab26-8d9a8005489e/88dbac685d5e.jpg" alt="">
      </div>
      <div class="feature__text">
        <div class="feature__num">— 03 / Show</div>
        <h3 class="feature__title">A nineteen-minute walk, in silence.</h3>
        <p class="feature__copy">No score. No house lights. The runway is lit only by overhead strip and the focal hum of the press photographers' rigs. Sound is the rigs and the steps.</p>
        <div class="feature__rule"></div>
        <div class="feature__meta">
          <div><b>19 min</b>Show length</div>
          <div><b>84 looks</b>Continuous</div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="feature reveal" data-brief-id="feature-05" data-brief-role="section">
  <div class="wrap">
    <div class="feature__grid">
      <div class="feature__media">
        <img src="https://rpreisbpsxrjwqsfeggf.supabase.co/storage/v1/object/public/direction-images/directions/4f26d545-5a15-4388-ab26-8d9a8005489e/1673fad2efe3.png" alt="">
      </div>
      <div class="feature__text">
        <div class="feature__num">— 05 / Distribution</div>
        <h3 class="feature__title">Three rolls, eighty-four files.</h3>
        <p class="feature__copy">The archive is delivered as three sequential rolls, named by the runway order. Files are tiff and jpeg in matched grades. No edited "key looks" — the press chooses.</p>
        <div class="feature__rule"></div>
        <div class="feature__meta">
          <div><b>TIFF + JPG</b>Formats</div>
          <div><b>Matched grade</b>Per file</div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="feature feature--reverse reveal" data-brief-id="feature-06" data-brief-role="section">
  <div class="wrap">
    <div class="feature__grid">
      <div class="feature__card feature__card--surface" style="position:relative;overflow:hidden;">
        <img src="https://images.pexels.com/photos/18869915/pexels-photo-18869915.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=650&amp;w=940" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;filter:grayscale(1) contrast(1.08);z-index:0;">
        <div style="position:absolute;inset:0;background:rgba(249,248,246,0.55);z-index:1;"></div>
        <div style="position:relative;z-index:2;">
          <div class="feature__card-num">06</div>
          <div class="feature__card-label">— Press List, Partial</div>
        </div>
        <div class="feature__card-headline" style="position:relative;z-index:2;">Vogue · BoF · WWD · System · 032c · AnOther · Document · Re-Edition</div>
      </div>
      <div class="feature__text">
        <div class="feature__num">— Trusted by editors</div>
        <h3 class="feature__title">Already credentialed.</h3>
        <p class="feature__copy">Editors from the houses listed have received credentials for the SS26 preview. The list is partial and does not constitute endorsement. Credentialing remains open through 25 February 2026.</p>
        <div class="feature__rule"></div>
        <div class="feature__meta">
          <div><b>25 / 02 / 26</b>Credentialing closes</div>
          <div><b>Manual</b>Review</div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="feature reveal" id="access" data-brief-id="cta-final" data-brief-role="cta">
  <div class="wrap">
    <div class="feature__grid">
      <div class="feature__card feature__card--alt" style="position:relative;overflow:hidden;">
        <img src="https://images.unsplash.com/photo-1557777586-f6682739fcf3?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5NTIzODB8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwcnVud2F5JTIwcHJlc3MlMjBhcmNoaXZlJTIwZWRpdG9yaWFsfGVufDF8MXx8fDE3ODIxNzMxNjV8MA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;filter:grayscale(1) contrast(1.08);z-index:0;">
        <div style="position:absolute;inset:0;background:rgba(10,10,10,0.55);z-index:1;"></div>
        <div style="position:relative;z-index:2;">
          <div class="feature__card-num" style="color:#ffffff;">07</div>
          <div class="feature__card-label" style="color:rgba(255,255,255,0.7);">— Early Access</div>
        </div>
        <div class="feature__card-headline" style="position:relative;z-index:2;color:#ffffff;">Receive the archive before the show.</div>
      </div>
      <div class="feature__text">
        <div class="feature__num">— Request Press Access</div>
        <h3 class="feature__title">For accredited editors and critics.</h3>
        <p class="feature__copy">Submit your masthead and contact details. The atelier responds within forty-eight hours. Submissions close 25 February 2026.</p>
        <div class="feature__rule"></div>
        <a href="#" class="nav__cta" style="align-self: flex-start;">Submit Credentials</a>
      </div>
    </div>
  </div>
</section>

<footer class="foot" data-brief-id="footer" data-brief-role="footer">
  <div class="wrap">
    <div class="foot__grid">
      <div class="foot__mark">GESSO</div>
      <div class="foot__col">
        <h4>Collection</h4>
        <a href="#">Spring / Summer 26</a>
        <a href="#">Fall / Winter 25</a>
        <a href="#">Archive</a>
      </div>
      <div class="foot__col">
        <h4>Press</h4>
        <a href="#">Credentials</a>
        <a href="#">Embargo</a>
        <a href="#">Downloads</a>
      </div>
      <div class="foot__col">
        <h4>House</h4>
        <a href="#">Atelier</a>
        <a href="#">Director</a>
        <a href="#">Contact</a>
      </div>
      <div class="foot__bottom">
        <span>Gesso — Atelier, Paris — Est. MMXXIII</span>
        <span>© 2026 — All rights reserved</span>
      </div>
    </div>
  </div>
</footer>

<style id="gesso-color-lock">:root{--gesso-canvas:#f6f8fa;--gesso-surface:#e4e4e4;--gesso-surface-elevated:#dbdbdb;--gesso-surface-recessed:#eceef0;--gesso-fg:#0A0A0A;--gesso-fg-muted:#5A5A5A;--gesso-divider:rgba(0,0,0,0.04);--gesso-accent:#e2d3d8;--gesso-on-accent:#000000;--gesso-success:#986cdf;--gesso-warning:#00a7b9;--gesso-error:#008e79;--gesso-on-image:#FFFFFF;--gesso-scrim:rgba(0,0,0,0.5);--gesso-primary:#e2d3d8;--gesso-secondary:#fdf2fb;--gesso-accent-2:#fdf2fb;--gesso-on-accent-2:#000000;--gesso-neutral-50:#f6f8fa;--gesso-neutral-100:#e4e4e4;--gesso-neutral-200:#c7c7c7;--gesso-neutral-300:#aaaaaa;--gesso-neutral-400:#8e8e8e;--gesso-neutral-500:#747474;--gesso-neutral-600:#5A5A5A;--gesso-neutral-700:#3d3d3d;--gesso-neutral-800:#222222;--gesso-neutral-900:#0A0A0A;--gesso-neutral-950:#090909;--gesso-data-1:#5e5155;--gesso-data-2:#75686c;--gesso-data-3:#8c7f83;--gesso-data-4:#a5979c;--gesso-data-5:#bfb0b5;--gesso-data-6:#d8c9ce;}</style>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/gsap.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/ScrollTrigger.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/SplitText.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/lenis@1.3.4/dist/lenis.min.js"></script>
<script id="__gesso_gsap_motion__">
(function(){
  if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") return; // degrade: content stays visible
  gsap.registerPlugin(ScrollTrigger);
  var hasSplit = typeof SplitText !== "undefined"; if (hasSplit) gsap.registerPlugin(SplitText);
  var mm = gsap.matchMedia();
  mm.add("(prefers-reduced-motion: no-preference)", function(){
    var hero = document.querySelector('[data-brief-role="hero"],[data-component="Hero"],header[class*="hero"],header');
    var inHero = function(el){ return hero && hero.contains(el); };
    var isCard = function(el){ return !!el.closest('[data-brief-role="card"],[class*="card"],[class*="grid"],[class*="proj"],[class*="tile"]'); };
    var T = function(fn){ try{ fn(); }catch(e){ if(window.console) console.warn("[gsap-motion]", e); } };

    // ---- Smooth Scroll (Lenis) ----
    T(function(){
      if (typeof Lenis === "undefined") return;
      var lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
      lenis.on("scroll", ScrollTrigger.update);
      gsap.ticker.add(function(t){ lenis.raf(t * 1000); });
      gsap.ticker.lagSmoothing(0);
    });

    // ---- Parallax — FULL-BLEED / HERO media ONLY, OVERSIZED so the shift never
    //      reveals a gap (the "image doesn't fill" bug). Never cards/grids. ----
    T(function(){
      var media = gsap.utils.toArray(
        '[data-brief-role="hero"] img, [data-brief-role="hero"] video,' +
        '[data-component="Hero"] img, [data-component="Hero"] video,' +
        '[class*="full-bleed"] img, [class*="fullbleed"] img,' +
        '[data-brief-role="full-bleed"] img, [class*="band"] img, [class*="parallax"] img'
      );
      media.forEach(function(el){
        if (isCard(el)) return;                       // never parallax card thumbnails
        if (el.tagName === "VIDEO") return;           // a hero/background VIDEO must object-fit:cover FILL — never transform it (the yPercent shift opens an edge gap)
        if (inHero(el)) return;                        // the hero's own media is owned by the OPENING timeline, which settles scale->1; parallaxing it too leaves a yPercent translate with no oversize to cover it -> the gap above/below the video. Parallax is for NON-hero full-bleed / band imagery only.
        var host = el.parentElement; if (host) host.style.overflow = "hidden";
        // Oversize THEN translate: 18% larger covers the +/-6% travel on every edge.
        gsap.set(el, { scale: 1.18, transformOrigin: "50% 50%", force3D: true });
        el.setAttribute("data-gsap-plx", "1");        // so the reveal batch skips it
        gsap.fromTo(el, { yPercent: -6 }, { yPercent: 6, ease: "none",
          scrollTrigger: { trigger: el.closest("section,header,figure") || el, start: "top bottom", end: "bottom top", scrub: true } });
      });
    });

    // ---- Composing Stick on non-hero headlines: PRE-HIDE then reveal (no flash) ----
    if (hasSplit) T(function(){
      gsap.utils.toArray("section h1, section h2").forEach(function(h){
        if (inHero(h) || h.closest("footer")) return;
        T(function(){
          var s = SplitText.create(h, { type: "lines", mask: "lines" });
          gsap.set(s.lines, { yPercent: 115 });        // hidden behind the line mask up-front
          gsap.to(s.lines, { yPercent: 0, ease: "back.out(1.3)", stagger: 0.08, duration: 0.7, force3D: true,
            scrollTrigger: { trigger: h, start: "top 88%", once: true } });
        });
      });
    });

    // ---- Reveal-on-enter: PRE-HIDE synchronously with set(), reveal with to().
    //      Revealing CONTAINERS (cards/figures/copy) as units — never raw image tags —
    //      so a fading element never shows a gap. This kills the scroll flash. ----
    T(function(){
      var content = gsap.utils.toArray(
        'section p, section li, section figure, [data-brief-role="card"], [class*="card"], [class*="proj"], [class*="tile"], section [class*="stat"], footer ul, footer .col'
      ).filter(function(el){
        return !inHero(el) && !el.closest("h1,h2") && !el.hasAttribute("data-gsap-plx")
          && !(el.parentElement && el.parentElement.closest('[data-brief-role="card"],[class*="card"]')) // skip nested children of a card we already reveal
          && el.getClientRects().length;
      });
      if (!content.length) return;
      gsap.set(content, { autoAlpha: 0, y: 28 });       // pre-hide BEFORE the trigger -> no flash
      ScrollTrigger.batch(content, { start: "top 90%",
        onEnter: function(els){ gsap.to(els, { autoAlpha: 1, y: 0, stagger: 0.07, duration: 0.6, ease: "power3.out", overwrite: true }); } });
    });

    // ---- Opening (hero): PRE-HIDE synchronously, reveal after fonts (no load flash) ----
    if (hero) T(function(){
      var navEl = document.querySelector('[data-brief-role="nav-top"],nav');
      var h1 = hero.querySelector("h1, .hero-wordmark");
      var bits = hero.querySelectorAll('p, a, .btn, [data-brief-role="cta"], [class*="eyebrow"], [class*="kicker"]');
      var media = hero.querySelector("img, video");
      if (navEl) gsap.set(navEl, { autoAlpha: 0, y: -16 });
      if (h1) gsap.set(h1, { autoAlpha: 0 });
      if (bits.length) gsap.set(bits, { autoAlpha: 0, y: 16 });
      if (media) gsap.set(media, { autoAlpha: 0, scale: 1.08 });
      (document.fonts ? document.fonts.ready : Promise.resolve()).then(function(){ T(function(){
        var tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 0.8 } });
        if (navEl) tl.to(navEl, { autoAlpha: 1, y: 0 }, 0);
        if (h1 && hasSplit) { var s = SplitText.create(h1, { type: "lines", mask: "lines" });
          gsap.set(h1, { autoAlpha: 1 }); gsap.set(s.lines, { yPercent: 115 });
          tl.to(s.lines, { yPercent: 0, ease: "back.out(1.4)", stagger: 0.09, duration: 0.8, force3D: true }, 0.05); }
        else if (h1) tl.to(h1, { autoAlpha: 1, y: 0 }, 0.05);
        if (bits.length) tl.to(bits, { autoAlpha: 1, y: 0, stagger: 0.06 }, "-=0.4");
        if (media) tl.to(media, { autoAlpha: 1, scale: 1, duration: 1.1 }, "-=0.9");
        ScrollTrigger.refresh();
      }); });
    });

    ScrollTrigger.refresh();
  });
})();</script>

</body></html>
```

Use the tokens as CSS variables. Treat the reference HTML as the visual
source of truth; adapt structure to your framework, but do not deviate
from the visual system.
