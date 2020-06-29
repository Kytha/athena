---
layout: documentation
doc-subnav: configuration
title: Configuration
description: Learn how to customize Athena for that unique and one-of-a-kind feel
---

{% include components/title.html %}

{% include components/heading.html  title="Import Athena for configuration" %}

Athena's source code is split into 3 distinct sections; abstracts, base, & utilities. Athena's abstract module contains all variables which later modules reference. For convenience, those who do not wish to customize Athena can simply import these modules with the global Athena import like such;

```scss
@import "node_modules/athena-css/src/athena";
```

This method is convenient but does not allow for any configuration. This is because Athena's base and utilities modules will be unaware of any variable changes made after the import. Therefore, it is necessary to import Athena's modules separately. Abstracts should be imported **first**, then you may overwrite any Athena's defaults, and then import the rest of Athena. The basic structure of this method is shown below.

```scss
// Import Athena variables, functions, and mixins
@import "node_modules/athena-css/src/abstracts";

/*
    Overwrite Athena variables here
*/

// Import the rest of Athena
@import "node_modules/athena-css/src/base";
@import "node_modules/athena-css/src/utilities";
```

{% include components/heading.html  title="Athena variables" %}
Variables are how Athena is customized, and Athena has variables for each utility type. Almost everything is customizable; from font sizes and weights, to colors and shadows. Even Athena's grid system is customizable through variables!

An extensive list of each utilities variables and defaults can be found on their respective pages. This page serves to detail some examples how to tailor Athena to your liking. In this example an extra `lime` color has been added to the color collection and the spectrum of shades has increased.

```scss
@import "node_modules/athena-css/src/abstracts";

$shades: (
  100: 40%,
  200: 30%,
  300: 20%,
  400: 10%,
  500: 0%,
  600: 10%,
  700: 20%,
  800: 30%,
  900: 40%,
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
  "dark-grey": #919191,
  "indigo": #3f51b5,
  "black": #000,
  "white": #fff,
  "lime": #bfff00,
);

@import "node_modules/athena-css/src/base";
@import "node_modules/athena-css/src/utilities";
```

{% include components/heading.html  title="Customize variants" %}

A note should be made here about a special type of variable called variants. Variants are the prefixes which are appended to the front of Athena classes
and control when to active that style.

Virtually all Athena classes support breakpoint variants by default. Other variants such as hover, active, or focus
have been made default for utilities where it makes sense. However this can always be changed. You can add or remove variants simply by changing the variants variable as shown below. In this example, we overwrite the `color-variants` to allow not only hover but focus as well.

```scss
// Import Athena variables, functions, and mixins
@import "node_modules/athena-css/src/abstracts";

color-variants: ("hover", "focus");

// Import the rest of Athena
@import "node_modules/athena-css/src/base";
@import "node_modules/athena-css/src/utilities";
```
