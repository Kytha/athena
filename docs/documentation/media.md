---
layout: documentation
doc-subnav: media
title: Media
description: Utilities for Media
---

{% capture contain_display_example %}

<div class="bg-grey-400">
  <img class="object-contain h-13 w-full ..." src="/images/duck.jpeg" width="" height="">
</div>

{% endcapture %}

{% capture contain_example %}

<div class="bg-grey-400">
  <img class="object-contain h-13 w-full ...">
</div>

{% endcapture %}

{% capture cover_display_example %}

<div class="bg-grey-400">
  <img class="object-cover h-13 w-full ..." src="/images/duck.jpeg" width="" height="">
</div>

{% endcapture %}

{% capture cover_example %}

<div class="bg-grey-400">
  <img class="object-cover h-13 w-full ...">
</div>

{% endcapture %}

{% capture fill_display_example %}

<div class="bg-grey-400">
  <img class="object-fill h-13 w-full ..." src="/images/duck.jpeg" width="" height="">
</div>

{% endcapture %}

{% capture fill_example %}

<div class="bg-grey-400">
  <img class="object-fill h-13 w-full ...">
</div>

{% endcapture %}

{% capture scale_down_display_example %}

<div class="bg-grey-400">
  <img class="object-scale-down h-13 w-full ..." src="/images/duck.jpeg" width="" height="">
</div>

{% endcapture %}

{% capture scale_down_example %}

<div class="bg-grey-400">
  <img class="object-scale-down h-13 w-full ...">
</div>

{% endcapture %}

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

{% capture object_aligns_example %}

<img class="bg-grey-400 w-full h-10 object-left object-none" src="/images/duck-small.jpg">
<img class="bg-grey-400 w-full h-10 object-center object-none" src="/images/duck-small.jpg">
<img class="bg-grey-400 w-full h-10 object-right object-none" src="/images/duck-small.jpg">

{% endcapture %}

{% include components/title.html %}

{% include components/heading.html title="Object Fit" %}

{% include components/table.html data=site.data.variables.media.objectFit %}

### Contain

Resize an element's content to stay contained within its container using `.object-contain`

{% include components/example.html language="html" code=contain_example display=contain_display_example %}

### Cover

Resize an element's content to cover its container using `.object-cover`

{% include components/example.html language="html" code=cover_example display=cover_display_example %}

### Fill

Stretch an element's content to fill its container using `.object-fill`

{% include components/example.html language="html" code=fill_example display=fill_display_example %}

### Scale down

Display an element's content at its original size but scale it down to fit its container if necessary using `.object-scale-down`.

{% include components/example.html language="html" code=scale_down_example display=scale_down_display_example %}

{% include components/heading.html title="Object Align" %}

{% include components/table.html data=site.data.variables.media.objectAlign %}

Use the `.object-{side}` utilities to specify how a replaced element's content should be positioned within its container.

{% include components/example.html language="html" code=object_aligns_example display=object_aligns_display_example%}

{% include components/heading.html title="Variables" %}

```scss
// 7. Media
// ==========================================================================

$object-fits: contain, cover, fill, scale-down, none;
$object-aligns: center, left, right;

$media-variants: ();
```
