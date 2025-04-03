---
layout: page
title: project 7
description: with background image
img: assets/img/4.jpg
importance: 1
category: work
related_publications: true
---

While in my final year of undergraduate study I am researching the symmetries behind the Standard Model of Particle Physics under the supervision of [Dr Madalena Lemos](https://www.durham.ac.uk/staff/madalena-lemos/).
The project as a whole stems from her proposal to unify [symmetries and particles](https://www.maths.dur.ac.uk/users/madalena.lemos/projects/proj42425.html).
You might think that this would be a very particle physics-heavy project (and it is!), but underneath the physics lies some very beautiful maths in the form of <strong>group theory</strong>.

I chose this project because it has been a long curiosity of mine to figure what the universe is made from and how everything interacts with each other at a fundamental level.
Once I found out that beneath all of particle physics is nothing but abstract algebra, I was hooked. I am eternally grateful for [Dr Andreas Braun](https://www.durham.ac.uk/staff/andreas-braun/) who introduced me to this concept during his course on the _Geometry of Mathematical Physics_.

You can read my dissertation by clicking on the PDF button above. A question you might want answering first, however, is what actually _is_ the Standard Model?

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/1.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/3.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/5.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    The three fundamental forces. L-R: Stock photos I found of the electromagnetic force, weak nuclear force and strong nuclear force.
</div>

The Standard Model of Particle Physics is often described as the fundamental theory of Nature. It is, to date, the most successful description of particle physics the modern world has to offer.
Physically, it is a theory that describes all known fundamental particles and their interactions in terms of relativistic quantum field theories.
Mathematically, it is a <strong>gauge theory</strong>, a theory of symmetries. It is the culmination of decades of dedicated observation, theory, experiment, and more mathematics than any undergraduate mathematician would like to encounter.
But why take such a measure to construct a theory of this magnitude?

The question of what _stuff_ is made up of dates back millennia. There have been, in the history of humankind, many schools of thought with how to describe matter with intuition.
One initially successful idea proposes that matter is discrete, is made up of indivisible parts, aptly named <strong>particles</strong>.
These particles would be held together and interact via various forces. That then begs the question of how forces come about.

Flash forward some decades and one theorises that matter is continuously distributed; that there exist <strong>fields</strong> permeating space that carry information such as mass, momentum, energy and other such quantities via fluctuations.
Two fields may lie close to each other (in a strange, internal bundle sense) and interact with one another, creating the illusion of matter interaction and therefore forces.

As it turns out, both of these descriptions are correct. But also neither description is correct. There are subtleties in the study of quantum physics that satisfy both ideas, but leave some bits of either one unsatisfied.
It has therefore been desired for a long time for there to exist a natural triangular connection between particles, fields and forces that unifiy the theories.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/5.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    This image can also have a caption. It's like magic.
</div>

You can also put regular text between your rows of images, even citations {% cite einstein1950meaning %}.
Say you wanted to write a bit about your project before you posted the rest of the images.
You describe how you toiled, sweated, _bled_ for your project, and then... you reveal its glory in the next row of images.

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    You can also have artistically styled 2/3 + 1/3 images, like these.
</div>

The code is simple.
Just wrap your images with `<div class="col-sm">` and place them inside `<div class="row">` (read more about the <a href="https://getbootstrap.com/docs/4.4/layout/grid/">Bootstrap Grid</a> system).
To make images responsive, add `img-fluid` class to each; for rounded corners and shadows use `rounded` and `z-depth-1` classes.
Here's the code for the last row of images above:

{% raw %}

```html
<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-4 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
```

{% endraw %}
