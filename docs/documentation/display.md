---
layout: documentation
doc-subnav: display
title: Display
description: display
---

{% capture default_display_example %}

<div class="mb-10">
  <div class="inline-block bg-green-300 p-3">inline-block</div>
  <div class="inline-block bg-green-300 p-3">inline-block</div>
  <div class="inline-block bg-green-300 p-3">inline-block</div>
</div>
<div>
  <div class="block bg-green-300 p-3 mv-3">block</div>
  <div class="block bg-green-300 p-3 mv-3">block</div>
  <div class="block bg-green-300 p-3 mv-3">block</div>
</div>

{% endcapture %}

{% capture default_example %}

<div class="inline-block bg-green-300 p-3">inline-block</div>
<div class="inline-block bg-green-300 p-3">inline-block</div>
<div class="inline-block bg-green-300 p-3">inline-block</div>

<div class="block bg-green-300 p-3">block</div>
<div class="block bg-green-300 p-3">block</div>
<div class="block bg-green-300 p-3">block</div>

{% endcapture %}

{% capture responsive_example %}

<div class="block md:none bg-green-300 p-3">Element</div>

{% endcapture %}

{% include components/title.html %}

{% include components/heading.html title="Usage" %}

Pick a display type from the above list and add it as a class to an element to change it's display type. For example the class `.flex` will make the element a flex container.

{% include components/example.html language="html" code=default_example display=default_display_example %}

### Responsive display

You can prefix a display class wit a responsive variant to make that style only apply at that screen size or above. For example `.md:none` will hide the element at the medium screen size and above. Adjust your screen size and watch the element below disappear.

{% include components/example.html language="html" code=responsive_example %}

{% include components/heading.html title="Variables" %}

By overwriting the `$display` variable, you can remove or add display types to Athena. By default, the display utility only supports responsive variants but you can add other variants such as `hover:` or `focus:` by overwriting the `$display-variants` variable.

### Source code

```scss
// 5. Display
// ==========================================================================

$displays: inline, inline-block, block, table, table-row, table-cell, flex,
  inline-flex, none !default;

$display-variants: ();
```
