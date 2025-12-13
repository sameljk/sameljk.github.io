---
layout: post
title: How I like my vector fields
description: Want to know the secrets behind my Desmos files?
date: 2025-06-01
tags: fun
related_posts: false
thumbnail:
---

> This really works best if you read with a visual aid.
> My [vector field plots](https://sam-kay.com/desmos/) may help with that.

We follow one of the simpler vector fields, like the one shown below. Clicking 'Run' in the top left corner will activite the simulation of the vector field

$$
\boldsymbol{A} = \sin(t)x\,\boldsymbol{e}_x + \sin(t)y\,\boldsymbol{e}_y + \cos(t)z\,\boldsymbol{e}_z,
$$

in the domain $[-1.5,1.5]$ in all directions.

<iframe title="Cartesian vector field" style="width:100%; height: 50vw;" src="https://www.desmos.com/3d/8a2f6b7b70" frameborder="0"></iframe>

---

## How the vector fields are plotted

The vector field is plotted under the hood of the **vector field $\boldsymbol{A}$ plot** folder. You can freely change what kind of vector field you are playing with by changing the functions within the simulation:

$$
\boldsymbol{A} = A_x(x,y,z)\,\boldsymbol{e}_x + A_y(x,y,z)\,\boldsymbol{e}_y + A_z(x,y,z)\,\boldsymbol{e}_z.
$$

At each coordinate $\boldsymbol{x}=(x,y,z)$, a vector field tells the coordinate where to move to in 3D space. In order to draw this we make use of the built-in Desmos <code>vector</code> tool that will draw a straight line from point $\boldsymbol{x}_1$ to $\boldsymbol{x}_2$ as such:

$$
\text{vector}(\boldsymbol{x}_1,\boldsymbol{x}_2) = \text{vector}\left((x_1,y_1,z_1),(x_2,y_2,z_2)\right).
$$

If $\boldsymbol{A}$ is your vector field, each coordinate $\boldsymbol{x}$ will be moved to $\boldsymbol{x} + \boldsymbol{A}(\boldsymbol{x})$. We plot it in Desmos via

$$
\text{vector}\left((x,y,z),(x+A_x,y+A_y,z+A_z)\right).
$$

It would be a lot of work to write this out for every coordinate in the plane, so we can also use Desmos' <code>list</code> tool to define a list of values, for which the <code>vector</code> tool will draw from.
For a first simple model, this is all you need!

<iframe title="simple circular field" style="width:100%; height: 50vw;" src="https://www.desmos.com/3d/krnfnffvdf" frameborder="0"></iframe>

> This would look messy if it weren't scaled appropriately; I've added a length scaler $l$ to reduce how far each vector points and a thickness scaler $T$ for less bulky vectors.

---

## Animating the vector field

Enabling the vector field to animate was a key feature of my goal: seeing exactly _how_ the vectors are moving in parameter space. Due to Desmos' limited capability of treating vectors, we will use a second-order Taylor expansion model that will capture the main dynamics.

This Taylor expansion of a multivariative scalar field $f(\boldsymbol{x})$ about a small number $ε$ looks like

$$
f(x+ε,y+ε,z+ε) = f(x,y,z) + ε\left(\frac{\partial f}{\partial x} + \frac{\partial f}{\partial y} + \frac{\partial f}{\partial z}\right)
$$

$$
\quad\quad\quad\quad+ \frac{ε^2}{2}\left(\frac{\partial^2 f}{\partial x^2} + \frac{\partial^2 f}{\partial y^2} + \frac{\partial^2 f}{\partial z^2} + 2\frac{\partial^2 f}{\partial x\partial y} + 2\frac{\partial^2 f}{\partial y\partial z} + 2\frac{\partial^2 f}{\partial z\partial x}\right) + \mathcal{O}(ε^3).
$$

Our vector field $\boldsymbol{A}$ is then three copies of the above, one for each $A_x,A_y,A_z$. The subtlely here, though, is that our zero-th order derivative is our coordiante $\boldsymbol{x}$. This makes sense because we are asking how much the coodinate changes from one to the next.
Then, the first-order derivatives are our vector field components and so on.

Desmos allows us to readily calculate derivatives. In the simulation below, in the **Taylor expansion** and **derivatives** folders, you can find the explicit way this is done. Each coordinate is now shifted by $ε$, and we can move the value of $ε$ or run it via the triangle on the left to see how the vector field moves.

<iframe title="animated circular field" style="width:100%; height: 50vw;" src="https://www.desmos.com/3d/oi1u5enjno" frameborder="0"></iframe>

---

## How the particle trajectory is done

> The *trajectory scale* $\sigma$ defines the gap between each time-step of a particle's trajectory. You can have more clarity with a smaller scale, but we lose on length.

_Work in progress._


## What if I want a different coordinate system?

I have tools for that too, but I will leave that explanation for another day.

