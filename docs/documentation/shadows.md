---
layout: documentation
doc-subnav: shadows
title: Shadows
description: Utilities for Shadows
---

{% capture default_example_display %}

<div class="p-5 w-8 h-4 inline-block mr-3 shadow-sm bg-white-500 rounded-sm"></div>
<div class="p-5 w-8 h-4 inline-block mr-3 shadow-md bg-white-500 rounded-sm"></div>
<div class="p-5 w-8 h-4 inline-block mr-3 shadow-lg bg-white-500 rounded-sm"></div>
<div class="p-5 w-8 h-4 inline-block mr-3 shadow-xl bg-white-500 rounded-sm"></div>

{% endcapture %}

{% capture default_example %}

<div class="shadow-sm bg-white-500 rounded-sm ..."></div>
<div class="shadow-md bg-white-500 rounded-sm ..."></div>
<div class="shadow-lg bg-white-500 rounded-sm ..."></div>
<div class="shadow-xl bg-white-500 rounded-sm ..."></div>

{% endcapture %}

{% capture inner_example_display %}

<input class="p-5 w-full shadow-inner bg-white-500 rounded-sm border-grey-200 focus:outline-indigo-200 outline-none font-lg text-dark-grey-800" placeholder="Email"/>

{% endcapture %}

{% capture inner_example %}

<input class="p-5 w-full shadow-inner rounded-sm bg-white-500 text-dark-grey-800 border-grey-200 focus:outline-indigo-200 outline-none font-lg" placeholder="Email"/>

{% endcapture %}

{% capture none_example_display %}

<div class="flex jc-center ai-center">
    <div class="shadow-none w-10 font-lg p-5 rounded-sm bg-white-500 border-grey-200 text-center text-grey-900">No Shadow</div>
</div>

{% endcapture %}

{% capture none_example %}

<div class="shadow-none ...">No Shadow</div>

{% endcapture %}

{% include components/title.html %}

{% include components/heading.html title="Usage" %}

Shadows can be added to elements with the `.{shadow}-{$size}` utility class. For example, the class`.shadow-md` class will add a medium shadow-box to and element. All the box-size properties for each size can be found below in the [Variables section](#variables).

{% include components/example.html language="html" code=default_example display=default_example_display %}

### Set inner shadows

A shadow can also be made inset by using the `.shadow-inner` utility class. It is subtle but a nice way to accent form controls!

{% include components/example.html language="html" code=inner_example display=inner_example_display %}

### Remove shadows

A shadow can removed from an element easily by using the `.shadow-none` utility class.

{% include components/example.html language="html" code=none_example display=none_example_display %}

{% include components/heading.html title="Variables" %}

```scss
// 10. Shadow
// ==========================================================================

$xs-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
$sm-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
$reg-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
$md-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
$lg-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
$xl-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
$two-xl-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);

$shadows: (
  xs: $xs-shadow,
  sm: $sm-shadow,
  reg: $reg-shadow,
  md: $md-shadow,
  lg: $lg-shadow,
  xl: $xl-shadow,
  2xl: $two-xl-shadow,
  none: none,
  outline: 0 0 0 2px rgba(66, 153, 225, 0.5),
  inner: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06),
);
$shadow-variants: ("focus", "active");
```
