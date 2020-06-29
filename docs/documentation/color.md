---
layout: documentation
doc-subnav: color
title: Color
description: Utilities for Color
---

{% capture default_example_display %}

<div class="p-5 bg-blue-200 rounded-md">
    <h1 class="font-lg text-white-500">The quick brown fox jumps over the lazy dog.</h1>
</div>

{% endcapture %}

{% capture default_example %}

<div class="p-5 bg-blue-200 rounded-md">
    <h1 class="font-lg text-white-500">The quick brown fox jumps over the lazy dog.</h1>
</div>

{% endcapture %}

{% capture variant_example_display %}

<h1 class="font-lg font-weight-bold clickable text-indigo-400 hover:text-indigo-600">The quick brown fox jumps over the lazy dog.</h1>

{% endcapture %}

{% capture variant_example %}

<h1 class="text-purple-400 hover:text-indigo-600">The quick brown fox jumps over the lazy dog.</h1>

{% endcapture %}

{% include components/title.html %}

{% include components/table.html data=site.data.variables.colors.colors %}

{% include components/heading.html title="Usage" %}

You can control the color of backgrounds and text with the `{text|bg}-{$color}-{$shade}`color utility. For example, `text-orange-500` will make style an element
with orange text. `bg-orange-500` will style on element with an orange background.

{% include components/example.html language="html" code=default_example display=default_example_display%}

You can control the shade of each color with a shade modifier. A shade modifier is a multiple of 100; the lightest being 100 and the darkest being 900. For example, `bg-green-100` will be a much lighter green then `bg-green-900`.

### Use with variants

You can append variant modifiers to color utility for dynamic coloring. By default the only variant enabled for color utilities is `hover`. Hover over the text below and watch it get darker.

{% include components/example.html language="html" code=variant_example display=variant_example_display%}

{% include components/heading.html title="Variables" %}

Each color included in the colors utility can be changed or removed, while new colors can be added. The number and magnitude of shades can also be changed to accommodate for a shorter or larger spectrum of color.

### Source Code

```scss
// 4. Colors
// ==========================================================================

$shades: (
  100: 25%,
  200: 20%,
  300: 15%,
  400: 10%,
  500: 0%,
  600: 10%,
  700: 15%,
  800: 20%,
  900: 25%,
);
$colors: (
  "red": #d74247,
  "blue": #2f74b7,
  "green": #45a049,
  "purple": #7442c8,
  "teal": #66b2b2,
  "grey": #b6b6b6,
  "orange": #fe9f01,
  "yellow": #ffd300,
  "brown": #98623c,
  "cyan": #80ffff,
  "pink": #f987c5,
  "dark-grey": #818181,
  "indigo": #3f51b5,
  "black": #000,
  "white": #fff,
);

$color-variants: ("hover");
```
