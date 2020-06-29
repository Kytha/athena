---
layout: documentation
doc-subnav: flex
title: Flex
description: Utilities for flex items and containers
---

{% include components/title.html %}

The Flex display type comes with extra utilities to handle flex boxes and containers for modern UI design.

{% include components/heading.html title="Justify & align" %}

You can use the `jc-{$direction}` utility on a flex container to justify the items along the longitudinal axis. You can also use the `ai-{$direction}` on a flex container to align items along the transverse axis. The directions which are support are as follows;

- flex-start
- flex-end
- center
- space-between
- space-around
- stretch
- baseline

For example, `jc-center` would center justify all flex items along the flex longitudinal axis. In the case of a row flex container this would be equivalent to a horizontal center.

{% include components/heading.html title="Variables" %}

```scss
// 6. Flex
// ==========================================================================

$justify-content-directions: (
  0: flex-start,
  1: flex-end,
  2: center,
  3: space-between,
  4: space-around,
  5: stretch,
  6: baseline,
) !default;

$flex-variants: ();
```
