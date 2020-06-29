---
layout: documentation
doc-subnav: buttons
title: Buttons
description: Inspo for buttons
---

{% capture default_example_display %}

<button class="mr-5 mb-3 bg-indigo-400 p-5 text-white-500 uppercase font-weight-bold font-lg clickable hover:bg-indigo-500 focus:outline-indigo-100">Subscribe</button>
<button class="mr-5 mb-3 bg-red-400 text-white-500 ph-4 pv-3 rounded-sm uppercase font-weight-bold clickable hover:bg-red-500 focus:outline-red-100">Cancel</button>
<button class="mr-5 mb-3 border-green-400 ph-4 pv-3 text-green-400 font-weight-bold clickable hover:bg-green-400 hover:text-white-500 focus:outline-green-100">Purchase</button>
<button class="bg-indigo-400 mb-3 rounded-md ph-4 pv-3 shadow-lg inline-flex ai-center jc-center text-white-500 clickable hover:bg-indigo-500 focus:outline-indigo-100"><i class="fas fa-user mr-3"></i>Log In</button>

{% endcapture %}

{% capture default_example %}

<button class="bg-indigo-400 text-white-500 p-5 font-lg font-weight-bold uppercase clickable hover:bg-indigo-500 focus:outline-indigo-100">Subscribe</button>
<button class="bg-red-400 text-white-500 ph-4 pv-3 rounded-sm font-weight-bold uppercase clickable hover:bg-red-500 focus:outline-red-100">Cancel</button>
<button class="border-green-400 text-green-400 ph-4 pv-3 font-weight-bold clickable hover:bg-green-400 hover:text-white-500 focus:outline-green-100">Purchase</button>
<button class="inline-flex ai-center jc-center bg-indigo-400 text-white-500 ph-4 pv-3 rounded-md shadow-lg clickable hover:bg-indigo-500 focus:outline-indigo-100"><i class="fas fa-user mr-3"></i>Log In</button>

{% endcapture %}

{% include components/title.html %}

{% include components/heading.html title="So many styles!" %}

Making a button component is a real breeze using only utility classes - without a single line of CSS! The possible styles are seemingly endless, allowing your designs to stand out! Here are just a few examples of some button styles.

{% include components/example.html language="html" code=default_example display=default_example_display%}

Notice here how we have utilized the `clickable` class which will display the pointer icon when we cursor over the button. We have also taken advantage of the color and outline classes in combination with the state variants `focus` and `hover` which give our buttons some much needed life.
