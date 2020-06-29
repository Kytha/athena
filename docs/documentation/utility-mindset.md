---
layout: documentation
doc-subnav: utility-mindset
title: Utility Mindset
description: Learn what it means to be utility-first
---

{% capture component_example %}

<div class="employee-card">
  <div class="employee-card-profile-pic-wrapper">
    <img
      class="profile-pic"
      src="/images/profile_pic.jpg"
      alt="Profile Picture"
    />
  </div>
  <div class="employee-card--content">
    <h4 class="employee-card-name">Ashley Levesque</h4>
    <p class="employee-card-job">Machine Learning Engineer</p>
  </div>
</div>

<style>
  .employee-card {
    display: flex;
    max-width: 24rem;
    margin: 0 auto;
    padding: 1.5rem;
    border-radius: 0.5rem;
    background-color: #fff;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
  .employee-card-profile-pic-wrapper {
    flex-shrink: 0;
    margin-right: 1rem;
  }
  .profile-pic {
    height: 4rem;
    width: 4rem;
    border-radius: 48px;
  }
  .employee-card-content {
    margin-left: 1.5rem;
    padding-top: 0.25rem;
  }
  .employee-card-name {
    color: #1a202c;
    font-size: 1.25rem;
    line-height: 1.25;
  }
  .employee-card-job {
    color: #718096;
    font-size: 1rem;
    line-height: 1.5;
  }
</style>

{% endcapture %}

{% capture utility_example %}

<div class="flex max-w-24 mh-auto p-5 rounded-md bg-white-500 shadow-lg">
  <div class="flex-shrink mr-4">
    <img
      class="profile-pic"
      src="/images/profile_pic.jpg"
      alt="Profile Picture"
    />
  </div>
  <div class="ml-1">
    <h4 class="font-lg text-dark-grey-900">Ashley Levesque</h4>
    <p class="text-grey-600 font-md">Machine Learning Engineer</p>
  </div>
</div>

{% endcapture %}

{% include components/title.html %}

Component-first CSS has dominated the field of styling since its inception. And there is a lot to love about it; it provides great abstraction, easy to read source code, and everything is compartmentalized nicely. However, if your willing to put in some time I can show you why and how utility-first CSS can be just as elegant.

{% include components/heading.html  title="Favour composition over inheritance" %}

These iconic words of wisdom form the basis from which utility-first CSS was born. **Utility-first CSS aims to remove rigid styling structures and replace them with compositions of extremely specific styles**.

The motivation for this comes from the nature of component-first architectures to inevitably lead to one of two things:

- **Premature Abstraction**: You make a component for a certain use-case and end up never reusing it
- **Over Abstraction**: You make a component for a certain use-case and want to use it somewhere else, but is not robust enough for the new use-case

These problems can be especially frustrating when using a pre-made framework. It can leave your websites looking exactly the same as others using the same technology. You could end up spending half your time in a fight against the framework trying to introduce your own styles overtop of it.

Most frameworks assume to much. Athena tries to assume nothing. **By favouring composition of styles over inheritance, Athena let's you rapidly create beautiful layouts which feel unique and one-of-a-kind**.

{% include components/heading.html  title="Component-first vs Utility-first" %}

Let's dive into an example. This is an example of traditional component-first CSS. Here custom CSS is written for a custom `employee-card` component.

{% include components/example.html language="html" code=component_example %}

Athena's approach is to instead apply pre-made classes to achieve the same level of customization - **without writing any CSS!**

{% include components/example.html language="html" code=utility_example %}

This example highlights some of the major benefits of using Athena:

- **No more silly names** No more creating ridiculous class names like `navbar-inner-wrapper-container-thingy` which don't convey purpose and only help confuse designers. Let's face it, they're all pretty much just flex containers.

- **You avoid complicated stylesheets** Using a component-first approach, you need to write more and more CSS each time you add a new feature. With utility-first, you will rarely need to write any CSS, keeping your own stylesheets small or nonexistent.

- **True robustness** Modifying CSS directly can cause unintended side-effects since its global. However, changing class names in your HTML is safe since it can't break other components.

{% include components/heading.html  title="\"But it violates separation of concerns\"" %}

This is a common critique some have of utility-first CSS. It is the idea that CSS should strictly be in charge of the styling, HTML should semantically structure the page, and JS should strictly handle user interaction.

Following this philosophy to such a dogmatic degree can take your eye from whats important; solving actual problems. SoC originated to ensure code remains stable, maintainable, and is mentally digestible by the developer. Separation by technology or language doesn't always produce the best results. React is a perfect example of how we can rethink what SoC means for web developers. I would argue having utility-first CSS baked into html markup can often offer a **functionally** superior alternative to component-based styling with **less side-effects**.

Check out the [Installation page](/documentation/installation.html) for how you can get started using Athena. You can also browse the utility documentation pages for more information on how to use each utility. Or you can check out the examples documentation for more examples of building layouts and UI components.
