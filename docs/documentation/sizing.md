---
layout: documentation
doc-subnav: sizing
title: Sizing
description: utilities for Sizing
---

{% capture pixel_example %}

<div class="w-16px h-16px bg-indigo-400"> </div>
<div class="w-32px h-32px bg-indigo-400"> </div>
<div class="w-64px h-64px bg-indigo-400"> </div>
<div class="w-128px h-128px bg-indigo-400"> </div>

{% endcapture %}

{% capture pixel_display %}

<div class="mb-4">
  <p class="font-sm font-weight-light text-dark-grey-600">16x16</p>
  <div class="w-16px h-16px bg-indigo-400"> </div>
</div>
<div class="mb-4">
  <p class="font-sm font-weight-light text-dark-grey-600">32x32</p>
  <div class="w-32px h-32px bg-indigo-400"> </div>
</div>
<div class="mb-4">
  <p class="font-sm font-weight-light text-dark-grey-600">64x64</p>
  <div class="w-64px h-64px bg-indigo-400"> </div>
</div>
<div class="mb-4">
  <p class="font-sm font-weight-light text-dark-grey-600">128x128</p>
  <div class="w-128px h-128px bg-indigo-400"> </div>
</div>

{% endcapture %}

{% capture percentage_example %}

<div class="w-quarter h-10 bg-indigo-400"></div>

{% endcapture %}

{% capture screen_size_example %}

<div class="lg:w-sm h-10 bg-indigo-400"></div>

{% endcapture %}

{% capture index_display %}

<div class="mb-4">
  <p class="font-sm font-weight-light text-dark-grey-600">1</p>
  <div class="w-1 h-1 bg-indigo-400"> </div>
</div>
<div class="mb-4">
  <p class="font-sm font-weight-light text-dark-grey-600">2</p>
  <div class="w-2 h-2 bg-indigo-400"> </div>
</div>
<div class="mb-4">
  <p class="font-sm font-weight-light text-dark-grey-600">3</p>
  <div class="w-3 h-3 bg-indigo-400"> </div>
</div>
<div class="mb-4">
  <p class="font-sm font-weight-light text-dark-grey-600">4</p>
  <div class="w-4 h-4 bg-indigo-400"> </div>
</div>
<div class="mb-4">
  <p class="font-sm font-weight-light text-dark-grey-600">12</p>
  <div class="w-12 h-12 bg-indigo-400"> </div>
</div>

{% endcapture %}

{% capture index_example %}

<div class="w-1 h-1 bg-indigo-400"> </div>
<div class="w-2 h-2 bg-indigo-400"> </div>
<div class="w-3 h-3 bg-indigo-400"> </div>
<div class="w-4 h-4 bg-indigo-400"> </div>
<div class="w-12 h-12 bg-indigo-400"> </div>

{% endcapture %}

{% include components/title.html %}

{% include components/heading.html title="Usage" %}

Sizing utilities can be used to size elements. There are four types of sizing scales to offer the most versatility to your designs. You can size elements by pixels, by percentages, by screen size, or use Athena sizing indexes.

### Size by pixel

Sizing by pixel can be done by using the `{w|h}-{$pixel-size}`. These are restricted to only small sizes for when you need pixel perfect leverage. For larger elements it is better to use Athena's sizing indexes to avoid toiling over every single pixel of your design.

{% include components/example.html language="html" code=pixel_example display=pixel_display %}

### Size by percentage

If you need to size elements relative to their parent's size then you can use the `{w|h}-{$proportion}` percentage sizing classes.

{% include components/example.html language="html" code=percentage_example %}

### Size by screen size

If you need to size elements relative to Athena screen sizes then you can use the `{w|h}-{$size}` sizing classes.

{% include components/example.html language="html" code=screen_size_example %}

### Size using sizing indexes

You can use Athena's sizing index utility to size elements, `{w|h}-{$sizing-index}`.

{% include components/example.html language="html" code=index_example display=index_display %}

{% include components/heading.html title="Variables" %}

```scss
// 11. Sizing
// ==========================================================================

$sizes: (
  "0px": 0px,
  "1px": 1px,
  "12px": 12px,
  "16px": 16px,
  "32px": 32px,
  "48px": 48px,
  "64px": 64px,
  "128px": 128px,
  "192px": 192px,
  "auto": auto,
  "quarter": 25%,
  "third": 33.3333%,
  "half": 50%,
  "two-thirds": 66.6666%,
  "three-quarters": 75%,
  "full": 100%,
  "sm": 600px,
  "md": 968px,
  "lg": 1200px,
);

$sizer: 1;
$sizer-number: 60;
```
