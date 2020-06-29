---
layout: documentation
doc-subnav: positioning
title: Positioning
description: utilities for Positioning
---

{% capture object_aligns_display_example %}

<div class="row">
  <div class="col-lg-4 flex flex-col ai-center">
    <p class="font-sm font-weight-light text-dark-grey-600">.object-left</p>
    <img class="bg-grey-400 w-full h-10 object-left object-none" src="/images/duck-small.jpg">
  </div>
    <div class="col-lg-4 flex flex-col ai-center">
    <p class="font-sm font-weight-light text-dark-grey-600">.object-center</p>
    <img class="bg-grey-400 w-full h-10 object-center object-none" src="/images/duck-small.jpg">
  </div>
    <div class="col-lg-4 flex flex-col ai-center">
    <p class="font-sm font-weight-light text-dark-grey-600">.object-right</p>
    <img class="bg-grey-400 w-full h-10 object-right object-none" src="/images/duck-small.jpg">
  </div>
</div>

{% endcapture %}

{% include components/title.html %}

{% include components/heading.html title="Positioning types" %}

{% include components/heading.html title="Insets" %}

Use the `inset-{$direction}-{$proportion}` utility class to set the absolute position of an element.

For example, `inset-t-quarter` would position the element with `top: 25%`, or `inset-b-0` would position the element with `bottom: 0`. Don't forget to add the utility class `absolute` to allow for inset styles.

{% include components/heading.html title="Variables" %}

```scss
// 9. Position
// ==========================================================================

$positionings: (
  0: absolute,
  1: fixed,
  2: relative,
  3: sticky,
) !default;

$insets: (
  "full": 100%,
  "two-thirds": 66.7%,
  "half": 50%,
  "third": 33.3%,
  "quarter": 25%,
  "0": 0,
) !default;

$inset-directions: (
  l: left,
  r: right,
  t: top,
  b: bottom,
) !default;

$position-variants: ();
```
