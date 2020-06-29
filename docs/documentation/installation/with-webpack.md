---
layout: documentation
doc-subnav: installation/quick-start
title: "Installation"
description: Learn how to setup the perfect environment for building Athena websites
---

{% include components/title.html %}

<ul class="w-full flex list-none">
  <li class="border-b-grey-400">
      <a class="pv-3 ph-5 font-lg inline-block" href="/documentation/installation/quick-start">Quick Start</a>
  </li>
    <li class="border-b-indigo-400">
      <a class="pv-3 ph-5 font-lg inline-block text-indigo-400" href="/documentation/installation/with-webpack">With Webpack</a>
  </li>
</ul>

{% include components/heading.html index=1 title="Create a package.json file" %}

For most projects, you'll want to link in Athena and PostCSS plugins in your build chain. Because of this, let's explore
how we can utilize webpack to build an environment to customize and compile Athena.

In your terminal, create a new folder called athena, navigate to it, then
type the following command:

```bash
npm init
```

{% include components/heading.html index=2 title="Install the dev dependencies" %}

Install the packages required to parse and build your CSS:

```bash
npm install athena-css --save-dev
npm install @fullhuman/postcss-purgecss --save-dev
npm install autoprefixer --save-dev
npm install css-loader --save-dev
npm install cssnano --save-dev
npm install mini-css-extract-plugin --save-dev
npm install postcss --save-dev
npm install postcss-loader --save-dev
npm install sass-loader --save-dev
npm install style-loader --save-dev
npm install webpack --save-dev
npm install webpack-cli --save-dev
```

{% include components/heading.html index=3 title="Configure Webpack" %}

Create a `webpack.config.js` file in your root directory as shown. Here we use the MiniCssExtractPlugin
to extract Athena's compiled `CSS` into a separate file. We link in `PostCSS` with the `postcss-loader`.
This will preform our purge and auto prefixing for a optimized and cross-browser compatible bundle.

```javascript
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: path.resolve(__dirname, "./src/index.scss"),
  output: {
    path: path.resolve(__dirname, "./dist/"),
    filename: "js/bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          "css-loader",
          "postcss-loader",
          {
            loader: "sass-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/athena.css",
    }),
  ],
};
```

{% include components/heading.html index=4 title="Configure Webpack" %}

Next create a
`postcss.config.js`
in your root directory like so:

```javascript
const purgecss = require("@fullhuman/postcss-purgecss")({
  content: [
    // Specify the paths to all of the template files in your project
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx',
  ],
  defaultExtractor: (content) => content.match({{"/[\w-/:]+(?<!:)/g" | escape}}) || [],
});

module.exports = {
  syntax: "postcss-scss",
  plugins: [
    require("cssnano")(),
    require("autoprefixer"),
    [purgecss],
  ],
};
```

Here we first configure `PurgeCSS` by specifying paths to our source files and templates. We also need to define
a `defaultExtractor` which will properly escape colons in template files.

Lastly, we define our configuration object by specifying the syntax type
and mixing in our plugins. Learn more about purging your css [here](/documentation/file-size).

{% include components/heading.html index=5 title="Link in Athena" %}

Now we will create an index.scss file wherever you specified your Webpack
entry point. Here is where we import Athena's source files.

```bash
@import "node_modules/athena-css/src/athena.scss"
```

This can be done in different ways depending on the level of customization
you want. Virtually everything about Athena can be configured at this
step. Learn more [here](/documentation/configuration).

{% include components/heading.html index=5 title="Build Athena" %}

```bash
webpack --mode development --watch
```

All that's left to do is run webpack and build `athena.css`! Now with the perfect Athena environment set up, you can browse the rest of the docs to discover all you can do with Athena. Have fun!
