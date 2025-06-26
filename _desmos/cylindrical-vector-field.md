---
layout: page
title: in cylindrical coordinates
description: Good for pipe flows, flow past a cylinder, or anything axisymmetric.
img: assets/img/desmos/cylindrical-vector-field.png
importance: 2
category: vector fields
---

> To quickly see the given simulation, click **Run** in the top left corner. 
> You can copy, edit, modify and have more customisation by opening the file in a new tab [here](https://www.desmos.com/3d/f6cj40oom0).

Below is a Desmos file that will allow you to visualise a vector field defined in _cylindrical_ coordinates; all of the motion is defined with respect to a radius $r$, angle $\theta$ and vertical position $z$.
This particular **Run** action will activite the simulation of the vector field

$$
\boldsymbol{B} = \frac{1}{r}\,\boldsymbol{e}_\theta,
$$

in the domain $r\in[0,1.5],\theta\in[0,2\pi],z\in[1.5,1.5]$.

<embed src="https://www.desmos.com/3d/f6cj40oom0" style="width:100%; height: 50vw;">

---

## What are we looking at?

The **animation time** parameter $s$ will, for a short period, animate the vector field _at its given time_. When time is static, each vector in the field is pointing in a certain direction. By running $s$ we move each vector in the direction it is facing.
These vectors will arrive at a new destination and continue to move according to the defined vector field.

The **coordinate time** parameter $t$ evolves our vector field in coordinate time. In the example above, we have oscillatory behaviour in each of the coordinates and thus the vector field changes in time.

Combining these two operations (running $s$ and $t$ at the same time) will show how these vectors behave over animation time and coordinate time. This, to me, was not a very intuitive picture as to how the vector field actually affects the particles living in it, which is why I introduced particle trajectory (see below).

Oftentimes in more complicated coordinate systems (like this one) we define the vector field via a vector potential $\varphi(r,\theta,z)$. Our flow can then be defined via

$$
\boldsymbol{B} = \boldsymbol{\nabla}\varphi = \frac{\partial\varphi}{\partial r}\,\boldsymbol{e}_r + \frac{1}{r}\frac{\partial\varphi}{\partial \theta}\,\boldsymbol{e}_\theta + \frac{\partial\varphi}{\partial z}\,\boldsymbol{e}_z.
$$

---

## Try it yourself!

Click on the drop down menu labelled **vector field $\boldsymbol{B}$**. You can set the vector field to be anything you like, as long as it depends on $r,\theta,z$ and $t$.
The vector field is of the form

$$
\boldsymbol{B}(r,\theta,z) = B_1(r,\theta,z)\,\boldsymbol{e}_r + B_2(r,\theta,z)\,\boldsymbol{e}_\theta + B_3(r,\theta,z)\,\boldsymbol{e}_z.
$$

If you are stuck for inspiration, here are some premade ones to play with:

> Fluid flow past a static cylinder of radius $a$:
>
> $$
> \varphi(r,\theta,z) = \left(1+\frac{a^2}{r^2}\right)r\cos\theta.
> $$

<embed src="https://www.desmos.com/3d/oxjx8kgbuz" style="width:100%; height: 50vw;">

> Fluid flow past a rotating cylinder of radius $a$ and circulation $\Gamma$:
>
> $$
> \varphi(r,\theta,z) = \left(1+\frac{a^2}{r^2}\right)r\cos\theta + \frac{\Gamma}{2\pi}\theta.
> $$

<embed src="https://www.desmos.com/3d/ajigrcwaxo" style="width:100%; height: 50vw;">

---

## Modifying the particle trajectory

A particle in orange appeared in the initial file---but you may have lost track of it after a certain amount of simulation run time. Fear not! Stop the **Run** ticker, open the **initial position** folder and click the arrow on the left side of $f_{r}$ to reset the position.

Desmos in 3D does not yet have a function to change a coordinate point dynamically, so to bypass that we must change each coordinate with its own slider and then hit the 'reset' arrow after each change.
You can then freely run the animation time, coordinate time or **Run** ticker to see how that particle moves over time.

You can go one step further (if you are brave) and **trace out the entire trajectory**. To do this, open the **recursive trajectory** folder and navigate down to the "ticker actions" note and consider the three sets $I,J,K$ that follow.
Change each of the $K_{r},K_{u},K_{z}$ variables to $J_{r},J_{u},J_{z}$. This evaluates the vector field at the a point, and _joins_ it to a list of points. This is what creates the illusion of a traced-out trajectory.

In both of the example cases, the vector field is periodic in $x$ so that when we hit the boundary, we arrive back at the reflected boundary.
I have not yet figured out a nice way to do this for the particle trajectory as well as the vector field. If you have a solution, please let me know!

---

## Other variables to consider

By opening the **variables & comp lists** folder, slide $l$ along to change the length of each plotted vector and slide $T$ to change their tickness. The "trajectory scale" $\sigma$ defines the gap between each time step of the particle's trajectory. You can have more clarity with a smaller scale, but we lose on length.

You can also change the numbers in the $R,\Theta,Z$ lists to vary the domain.

---

## Have any comments?

Feel free to email me with your thoughts, modifications, ideas or general questions!

