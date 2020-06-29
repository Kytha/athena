---
layout: documentation
doc-subnav: typography
title: Typography
description: Utilities for typography
---

{% capture default_example %}

<p class="font-xs">The quick brown fox jumps over the lazy dog.</p>
<p class="font-sm">The quick brown fox jumps over the lazy dog.</p>
<p class="font-md">The quick brown fox jumps over the lazy dog.</p>
<p class="font-lg">The quick brown fox jumps over the lazy dog.</p>
<p class="font-xl">The quick brown fox jumps over the lazy dog.</p>
<p class="font-2xl">The quick brown fox jumps over the lazy dog.</p>

{% endcapture %}

{% capture font_weight_example %}

<p class="font-weight-thin font-xl">The quick brown fox jumps over the lazy dog.</p>
<p class="font-weight-light font-xl">The quick brown fox jumps over the lazy dog.</p>
<p class="font-weight-regular font-xl">The quick brown fox jumps over the lazy dog.</p>
<p class="font-weight-medium font-xl">The quick brown fox jumps over the lazy dog.</p>
<p class="font-weight-semi-bold font-xl">The quick brown fox jumps over the lazy dog.</p>
<p class="font-weight-bold font-xl">The quick brown fox jumps over the lazy dog.</p>
<p class="font-weight-heavy font-xl">The quick brown fox jumps over the lazy dog.</p>

{% endcapture %}

{% capture font_weight_display_example %}

<div class="mb-4">
  <p class="font-sm font-weight-light text-dark-grey-600">.font-weight-thin</p>
  <p class="font-weight-thin font-xl">The quick brown fox jumps over the lazy dog.</p>
</div>
<div class="mb-4">
  <p class="font-sm font-weight-light text-dark-grey-600">.font-weight-light</p>
  <p class="font-weight-light font-xl">The quick brown fox jumps over the lazy dog.</p>
</div>
<div class="mb-4">
  <p class="font-sm font-weight-light text-dark-grey-600">.font-weight-regular</p>
  <p class="font-weight-regular font-xl">The quick brown fox jumps over the lazy dog.</p>
</div>
<div class="mb-4">
  <p class="font-sm font-weight-light text-dark-grey-600">.font-weight-medium</p>
  <p class="font-weight-medium font-xl">The quick brown fox jumps over the lazy dog.</p>
</div>
<div class="mb-4">
  <p class="font-sm font-weight-light text-dark-grey-600">.font-weight-semi-bold</p>
  <p class="font-weight-semi-bold font-xl">The quick brown fox jumps over the lazy dog.</p>
</div>
<div class="mb-4">
  <p class="font-sm font-weight-light text-dark-grey-600">.font-weight-bold</p>
  <p class="font-weight-bold font-xl">The quick brown fox jumps over the lazy dog.</p>
</div>
<div class="mb-4">
  <p class="font-sm font-weight-light text-dark-grey-600">.font-weight-heavy</p>
  <p class="font-weight-heavy font-xl">The quick brown fox jumps over the lazy dog.</p>
</div>
{% endcapture %}

{% capture tracking_display_example %}

<div class="mb-4">
  <p class="font-sm font-weight-light text-dark-grey-600">.tracking-tight</p>
  <p class="tracking-tight font-xl">The quick brown fox jumps over the lazy dog.</p>
</div>
<div class="mb-4">
  <p class="font-sm font-weight-light text-dark-grey-600">.tracking-close</p>
  <p class="tracking-close font-xl">The quick brown fox jumps over the lazy dog.</p>
</div>
<div class="mb-4">
  <p class="font-sm font-weight-light text-dark-grey-600">.tracking-normal</p>
  <p class="tracking-normal font-xl">The quick brown fox jumps over the lazy dog.</p>
</div>
<div class="mb-4">
  <p class="font-sm font-weight-light text-dark-grey-600">.tracking-loose</p>
  <p class="tracking-loose font-xl">The quick brown fox jumps over the lazy dog.</p>
</div>
<div class="mb-4">
  <p class="font-sm font-weight-light text-dark-grey-600">.tracking-free</p>
  <p class="tracking-free font-xl">The quick brown fox jumps over the lazy dog.</p>
</div>

{% endcapture %}

{% capture tracking_example %}

<p class="tracking-tight font-xl">The quick brown fox jumps over the lazy dog.</p>
<p class="tracking-close font-xl">The quick brown fox jumps over the lazy dog.</p>
<p class="tracking-normal font-xl">The quick brown fox jumps over the lazy dog.</p>
<p class="tracking-loose font-xl">The quick brown fox jumps over the lazy dog.</p>
<p class="tracking-free font-xl">The quick brown fox jumps over the lazy dog.</p>

{% endcapture %}

{% capture leading_display_example %}

<div class="mb-4">
  <p class="font-sm font-weight-light text-dark-grey-600">.leading-tight</p>
  <p class="leading-tight font-xl">The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.</p>
</div>
<div class="mb-4">
  <p class="font-sm font-weight-light text-dark-grey-600">.leading-close</p>
  <p class="leading-close font-xl">The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.</p>
</div>
<div class="mb-4">
  <p class="font-sm font-weight-light text-dark-grey-600">.leading-normal</p>
  <p class="leading-normal font-xl">The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.</p>
</div>
<div class="mb-4">
  <p class="font-sm font-weight-light text-dark-grey-600">.leading-loose</p>
  <p class="leading-loose font-xl">The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.</p>
</div>
<div class="mb-4">
  <p class="font-sm font-weight-light text-dark-grey-600">.leading-free</p>
  <p class="leading-free font-xl">The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.</p>
</div>

{% endcapture %}

{% capture leading_example %}

<p class="leading-tight font-xl">The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.</p>
<p class="leading-close font-xl">The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.</p>
<p class="leading-normal font-xl">The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.</p>
<p class="leading-loose font-xl">The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.</p>
<p class="leading-free font-xl">The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.</p>

{% endcapture %}

{% capture responsive_example %}

<p class="sm:font-md md:font-lg lg:font-xl">The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.</p>

{% endcapture %}

{% include components/title.html %}

The typography utility is the largest module of Athena because it offers so much variation and control.

{% include components/heading.html title="Font size" %}

{% include components/table.html data=site.data.variables.typography.fontSize %}

Control the font size of an element by using the `.font-{$size}` utility.

{% include components/example.html language="html" code=default_example %}

{% include components/heading.html title="Font weight" %}

{% include components/table.html data=site.data.variables.typography.fontWeight %}

Control the font weight of an element by using the `.font-weight-{$weight}` utility.

{% include components/example.html language="html" code=font_weight_example display=font_weight_display_example%}

{% include components/heading.html title="Font tracking" %}

{% include components/table.html data=site.data.variables.typography.fontTracking %}

Tracking is the typographic term for letter spacing. Control the font tracking of an element by using the `.tracking-{$size}` utility.

{% include components/example.html language="html" code=tracking_example display=tracking_display_example %}

{% include components/heading.html title="Font leading" %}

Leading is the typographic term for line height. Control the font leading of an element by using the `.leading-{$size}` utility.

{% include components/example.html language="html" code=leading_example display=leading_display_example %}

{% include components/heading.html title="Responsive Typography" %}

All the typographic utilities can be paired with responsive modifiers to perform on different screen sizes. For example, you can prefix `md:` to `font-lg` to set the font size to large at or above medium screen sizes.

{% include components/example.html language="html" code=responsive_example %}

{% include components/heading.html title="Variables" %}

Below are all the typographic variables names and default values. You can edit anything from individual font sizes, to the default font stack.

### Source code

```scss
// 13. Text
// ==========================================================================

/// Regular font family
/// @type List
$text-font-stack: "Open Sans", "Helvetica Neue Light", "Helvetica Neue",
  "Helvetica", "Arial", sans-serif !default;

/// Code (monospace) font family
/// @type List
$code-font-stack: "Courier New", "DejaVu Sans Mono", "Bitstream Vera Sans Mono",
  "Monaco", monospace !default;

$font-weights: (
  "thin": 100,
  "light": 200,
  "regular": 400,
  "medium": 500,
  "semi-bold": 600,
  "bold": 700,
  "heavy": 900,
);

$font-leadings: (
  "none": 0,
  "tight": 0.9,
  "close": 1.25,
  "normal": 1.5,
  "loose": 1.75,
  "free": 2,
);

$font-trackings: (
  "tight": -0.05em,
  "close": -0.025em,
  "normal": 0,
  "loose": 0.05em,
  "free": 0.1em,
);

$font-sizes: (
  xs: 0.75,
  sm: 0.875,
  md: 1,
  lg: 1.25,
  xl: 1.5,
  2xl: 1.75,
  3xl: 2,
  4xl: 2.5,
  5xl: 3,
  6xl: 4,
) !default;

$text-variants: ();
```
