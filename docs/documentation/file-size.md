---
layout: documentation
doc-subnav: file-size
title: Reducing File Size
description: A guide on how to write purgeable source code and why it's necessary
---

{% include components/title.html %}

{% include components/heading.html  title="Why is Athena so big?" %}

If your looking at the Athena file size of **349Kb** and are worried about package size; don't be! Athena can get really, really small. The size of the stylesheet for this website is only **27Kb!** Athena is a utility-first CSS framework. This means it includes hundreds, if not thousands of classes for you to make unique designs. Most of these classes will go unused in your final product; this is why we must purge. **Purging your CSS means to tree shake all the styles which go unused in your source files to optimize your bundle size**.

This means Athena can become extremely tiny; like milligram type of tiny, yet you get to keep that unique and one-of-a-kind feel.

{% include components/heading.html  title="Let the purge begin" %}

If you are just testing out Athena or making quick mock-ups there is really no need to do any purging. But if you plan to take your product into production, the best method is to use a `PostCSS` plugin called `PurgeCSS`. The setup for this can be found in the [installation docs](/documentation/installation). But what does it do and how does it work?

The idea behind `PurgeCSS` is very simple. It will search your source files for references to any class names in your CSS. All classes which do not appear in your source files will be purged. **This ensures your CSS file only contains code you actually need**.

`PurgeCSS` does a "plain-face-reading" of your source files. Therefore any references to class names need to appear exactly how they are spelt. **So you should avoid using string concatenation when forming class names**. Here is an example of how **not** to do a conditional class assignment;

```javascript
<div className=`text-${ error ? 'red' : 'green' }-600`></div>
```

Instead write the code like this,

```javascript
<div className={error ? "text-red-600" : "text-green-600"}></div>
```
