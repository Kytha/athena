---
layout: documentation
doc-subnav: installation/quick-start
title: "Installation"
description: Learn how to setup the perfect environment for building Athena websites
---

{% include components/title.html %}

<ul class="w-full flex list-none">
  <li class="border-b-indigo-400">
      <a class="pv-3 ph-5 font-lg inline-block text-indigo-400" href="/documentation/installation/quick-start">Quick Start</a>
  </li>
    <li class="border-b-grey-400">
      <a class="pv-3 ph-5 font-lg inline-block" href="/documentation/installation/with-webpack">With Webpack</a>
  </li>
</ul>

{% include components/heading.html index=1 title="Download Athena" %}

If want to setup an environment where you can quickly start using Athena then you can simply download the stylesheet below. If you need full cross-browser support or need a smaller Athena package, then follow the [instructions for installing Athena with webpack](/documentation/installation/with-webpack).

<a class="no-style p-4 bg-indigo-400 text-white-500 clickable rounded-sm shadow-md hover:bg-indigo-500 focus:outline-indigo-100" href="http://github.com/Kytha/athena/releases/download/v2.0.4/athena-{{site.version_tag}}.min.css">
Athena v2.0
</a>

{% include components/heading.html index=2 title="Link stylesheet" %}

Next create an html file with the boilerplate provided below. Make sure you swap out `PATH` with the correct path to `athena.min.css` on your computer.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="{PATH}/athena-{{site.version_tag}}.min.css" />
    ...
  </head>
  <body>
    ...
  </body>
</html>
```

{% include components/heading.html index=3 title="Finished!" %}

Now you can start using Athena utilities in your html file! Browse the rest of documentation docs to discover all that you can do with Athena. Have fun!
