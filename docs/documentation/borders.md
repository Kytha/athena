---
layout: documentation
doc-subnav: borders
title: Borders
description: Utilities for Borders
---

{% capture default_example_display %}

<div class="p-5 w-8 inline-block mr-3 border-blue-300"></div>
<div class="p-5 w-8 inline-block mr-3 border-indigo-300"></div>
<div class="p-5 w-8 inline-block mr-3 border-grey-500 rounded-md"></div>
<div class="p-5 w-8 inline-block mr-3 border-green-500 rounded-2xl"></div>

{% endcapture %}

{% capture default_example %}

<div class="border-blue-300 ..."></div>
<div class="border-indigo-300 ..."></div>
<div class="border-grey-500 rounded-md ..."></div>
<div class="border-green-500 rounded-2xl ..."></div>

{% endcapture %}

{% capture single_side_example_display %}

<div class="p-5 w-8 inline-block mr-3 border-t-blue-300 bg-grey-200"></div>
<div class="p-5 w-8 inline-block mr-3 border-l-indigo-300 bg-grey-200"></div>
<div class="p-5 w-8 inline-block mr-3 border-b-grey-500 bg-grey-200"></div>
<div class="p-5 w-8 inline-block mr-3 border-r-green-500 bg-grey-200"></div>

{% endcapture %}

{% capture single_side_example %}

<div class="border-t-blue-300 bg-grey-200 ..."></div>
<div class="border-l-indigo-300 bg-grey-200 ..."></div>
<div class="border-b-grey-500 bg-grey-200 ..."></div>
<div class="border-r-green-500 bg-grey-200 ..."></div>

{% endcapture %}

{% capture hover_example_display %}

<div class="flex jc-center ai-center">
    <button class="ph-5 pv-3 border-orange-500 text-orange-500 hover:border-orange-600 hover:text-orange-600 clickable">Click Me</button>
</div>

{% endcapture %}

{% capture hover_example %}

<button class="ph-5 pv-3 border-orange-500 text-orange-500 hover:border-orange-600 hover:text-orange-600 clickable">Click Me</button>

{% endcapture %}

{% include components/title.html %}

{% include components/heading.html title="Usage" %}

Borders can be added to elements with the `.{border}-{$color}-{$shade}` utility class. For example, the class`.border-grey-500` will give an element a full grey border. Here are some examples of the different types of borders you can make with Athena.

{% include components/example.html language="html" code=default_example display=default_example_display %}

### Round out your corners

The above example includes borders which are rounded. This is achieved by using the `.rounded-{xs|sm|md|lg|2xl|3xl}` utility class. The default border-radius' for each size can be [found below](#variables).

### Add borders to a single side

Borders can also be added to a single side of an element through the `.{border}-{t|r|b|l}-{$color}-{$shade}` utility class. For example, the class `border-t-indigo-500` will give an element an indigo border but only on the top. Take a look below!

{% include components/example.html language="html" code=single_side_example display=single_side_example_display %}

### Use with hover variant

You can use borders to convey interactivity by appending them with the `hover:` variant. Take a look at this button which changes color when you hover over it.

{% include components/example.html language="html" code=hover_example display=hover_example_display %}

{% include components/heading.html title="Variables" %}

Like all other utilities in Athena, the borders utility comes with variables to which can be modified for an more unique feel. The `$border-size` variable controls the size of the border strokes.

The border radius system works similar to the spacing system. Each prefix has an associated default size which is scaled by the `$border-radius-modifier` variable. So you can tweak individual radius sizes or scale up/down the entire system by modifying the `$border-radius-modifier`.

### Source Code

```scss
// 3. Borders
// ==========================================================================

$border-size: 1px;
$border-radius-modifier: 1;
$border-radius-sizes: (
  "xs": 0.2rem,
  "sm": 0.4rem,
  "md": 0.7rem,
  "lg": 1rem,
  "xl": 1.5rem,
  "2xl": 2rem,
  "3xl": 4rem,
);
$border-variants: "hover", "active", "focus";
```
