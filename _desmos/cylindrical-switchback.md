---
layout: page
title: Cylindrical switchback solution
description: A solution for a magnetic switchback that is cylindrically symmetric.
img: assets/img/desmos/cylindrical-switchback.png
importance: 1
category: case studies
---

> To quickly see the given simulation, click the **play** triangle next to the **$s$** slider.
> You can copy, edit, modify and have more customisation by opening the file in a new tab [here](https://www.desmos.com/3d/ectuhvhsnn).

This is a Desmos file made using my [Cylindrical vector field](https://sam-kay.com/desmos/cylindrical-vector-field/) generator. I have modified the view window so that we are seeing only the $\theta=0$ slice.
The vector field we are looking at is a solution to a cylindrically-symmetric magnetic switchback that takes a rather disgusting, or beautifully simple, form:

$$
\boldsymbol{B} = b_r\,\boldsymbol{e}_r + b_{\theta}\,\boldsymbol{e}_{\theta} + b_z\,\boldsymbol{e}_z,
$$

where

$$
b_r = -\frac{b_0azL^2}{2H^2}\left(\frac{L\sqrt{\pi}}{r}\mathrm{erf}\left(\frac{r}{L}\right) - 2\mathrm{e}^{-\frac{z^2}{H^2}}\right),
$$

$$
b_{\theta} = +\sqrt{b_0^2 - b_r^2 - b_z^2},
$$

$$
b_z = b_0 \bigg[1 - ar\mathrm{e}^{-\frac{r^2}{L^2}-\frac{z^2}{H^2}} + \frac{a^2{h_1}^2L^4}{4H^4}\left(\frac{L\sqrt{\pi}}{r}\mathrm{erf}\left(\frac{r}{L}\right) - 2\mathrm{e}^{-\frac{r^2}{L^2}} \right)^2 \bigg],
$$

in the domain $r\in[0,3],\theta=0,z\in[-3,3]$.

<embed src="https://www.desmos.com/3d/ectuhvhsnn" style="width:100%; height: 50vw;">

---

## What are we looking at?

The **animation time** parameter $s$ will, for a short period, animate the vector field _at its given time_. When time is static, each vector in the field is pointing in a certain direction. By running $s$ we move each vector in the direction it is facing.
These vectors will arrive at a new destination and continue to move according to the defined vector field.

The reason we may only animate this vector field for a short 'time' is due to the fact that this file uses first order Taylor approximation to evaluate the next vector.
It gets more complicated (and way beyond Desmos' computational power) to go higher in derivatives and get a more accurate picture.

Still, even for a short while, there is some nice intuition for what the vector field is basically doing.

---

## Magnetic switchbacks

To do...

---

## Modifying the particle trajectory

A particle in orange appeared in the initial file---but you may have lost track of it after a certain amount of simulation run time. Fear not! Stop the **Run** ticker, open the **initial position** folder and click the arrow on the left side of $f_{xA}$ to reset the position.

Desmos in 3D does not yet have a function to change a coordinate point dynamically, so to bypass that we must change each coordinate with its own slider and then hit the 'reset' arrow after each change.
You can then freely run the animation time, coordinate time or **Run** ticker to see how that particle moves over time.

You can go one step further (if you are brave) and **trace out the entire trajectory**. To do this, open the **recursive trajectory** folder and navigate down to the "ticker actions" note and consider the three sets $I,J,K$ that follow.
Change each of the $K_{xA},K_{yA},K_{zA}$ variables to $J_{xA},J_{yA},J_{zA}$. This evaluates the vector field at the a point, and _joins_ it to a list of points. This is what creates the illusion of a traced-out trajectory.

---

## Other variables to consider

By opening the **variables & comp lists** folder, slide $l$ along to change the length of each plotted vector and slide $T$ to change their tickness. The "trajectory scale" $\sigma$ defines the gap between each time step of the particle's trajectory. You can have more clarity with a smaller scale, but we lose on length.

You can also change the numbers in the $X,Y,Z$ lists to vary the domain.

---

## Have any comments?

Feel free to email me with your thoughts, modifications, ideas or general questions!
