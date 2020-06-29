---
layout: documentation
doc-subnav: spacing
title: Spacing
description: utilities for spacing elements
---

{% capture default_example_display %}

<div class="flex jc-space-around ai-flex-start flex-wrap">
    <div class="pt-8 bg-yellow-100 flex"><span class="bg-indigo-400 p-2 text-white-500">Element</span></div>
    <div class="pr-8 bg-yellow-100 flex"><span class="bg-indigo-400 p-2 text-white-500">Element</span></div>
    <div class="pb-8 bg-yellow-100 flex"><span class="bg-indigo-400 p-2 text-white-500">Element</span></div>
    <div class="pl-8 bg-yellow-100 flex"><span class="bg-indigo-400 p-2 text-white-500">Element</span></div>
</div>

{% endcapture %}

{% capture default_example %}

<div class="pt-8"><span class="bg-indigo-400">Element</span></div>
<div class="pr-8"><span class="bg-indigo-400">Element</span></div>
<div class="pb-8"><span class="bg-indigo-400">Element</span></div>
<div class="pl-8"><span class="bg-indigo-400">Element</span></div>

{% endcapture %}

{% capture horizontal_example_display %}

<div class="flex jc-space-around ai-flex-start">
    <div class="ph-8 bg-yellow-100 flex"><span class="bg-indigo-400 p-2 text-white-500">Element</span></div>
</div>

{% endcapture %}

{% capture horizontal_example %}

<div class="ph-8"><span class="bg-indigo-400">Element</span></div>

{% endcapture %}

{% capture vertical_example_display %}

<div class="flex jc-space-around ai-flex-start">
    <div class="pv-8 bg-yellow-100 flex"><span class="bg-indigo-400 p-2 text-white-500">Element</span></div>
</div>

{% endcapture %}

{% capture vertical_example %}

<div class="pv-8"><span class="bg-indigo-100">Element</span></div>

{% endcapture %}

{% capture all_example_display %}

<div class="flex jc-space-around ai-flex-start">
    <div class="p-8 bg-yellow-100 flex"><span class="bg-indigo-400 p-2 text-white-500">Element</span></div>
</div>

{% endcapture %}

{% capture all_example %}

<div class="p-8"><span class="bg-indigo-400">Element</span></div>

{% endcapture %}

{% capture responsive_example_display %}

<div class="flex jc-space-around ai-flex-start">
    <div class="md:p-8 bg-yellow-100 flex"><span class="bg-indigo-400 p-2 text-white-500">Element</span></div>
</div>

{% endcapture %}

{% capture responsive_example %}

<div class="md:p-8"><span class="bg-indigo-400">Element</span></div>

{% endcapture %}

{% include components/title.html %}

{% include components/heading.html title="Add spacing to one side" %}

Control the margin or padding on one side of an element using the `{m|p}{t|r|b|l}-{$spacingIndex}` utilities.

For example, `mt-6` would add 1.5rem of margin to the top of an element, `pr-4` would add 1rem of padding to the right of an element, `mb-8` would add 2rem of margin to the bottom of an element, and `pl-2` would add 0.5rem of padding to the left of an element.

{% include components/example.html language="html" code=default_example display=default_example_display%}

{% include components/heading.html  title="Add horizontal spacing" %}

Control the horizontal margin or padding of an element using the `{m|p}h-{size}` utilities.

{% include components/example.html language="html" code=horizontal_example display=horizontal_example_display%}

{% include components/heading.html  title="Add vertical spacing" %}

Control the horizontal margin or padding of an element using the `{m|p}v-{size}` utilities.

{% include components/example.html language="html" code=vertical_example display=vertical_example_display%}

{% include components/heading.html  title="Add spacing to all sides" %}

Control the margin or padding of an element for all sides at once by using the `{m|p}-{size}` utilities.

{% include components/example.html language="html" code=all_example display=all_example_display%}

{% include components/heading.html  title="Responsive spacing" %}

To control the margin of an element at a specific breakpoint, add a `{screen}:` prefix to any existing margin utility. For example, adding the class `md:m-8` to an element would apply the `m-8` utility at medium screen sizes and above.

For more information about Athena's responsive design features, check out the [Responsive Design documentation](/responsive-design).

{% include components/example.html language="html" code=responsive_example display=responsive_example_display%}

{% include components/heading.html  title="Spacing variables" %}

The spacing system works as follows. Each value associated with a spacing index gets multiplied by the `$spacer` to determine to spacing size in `rem`(s). This way it is possible to tweak individual spacing indexes, or scale the entire system up or down by changing the `$spacer` value.

{% include components/table.html data=site.data.variables.spacing.spacings %}

### Source Code

```scss
// 12. Spacing
// ==========================================================================

$spacings: (
  0: 0,
  1: 0.25,
  2: 0.5,
  3: 0.75,
  4: 1,
  5: 1.25,
  6: 1.5,
  7: 1.75,
  8: 2,
  9: 2.5,
  10: 3,
  11: 4,
  12: 5,
  13: 6,
  14: 7,
  15: 8,
) !default;

// Spacing reference for spacing helpers
$spacer: 1;
```
