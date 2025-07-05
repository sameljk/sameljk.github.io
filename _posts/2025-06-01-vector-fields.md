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

<iframe title="Cartesian vector field" style="width:100%; height: 50vw;" src="https://www.desmos.com/3d/29ubkqi3mg" frameborder="0"></iframe>

## How the vector fields are plotted

The vector field is plotted under the hood of the *vector field $\boldsymbol{A}$ plot* folder. $D_1$ scales the vector field with factor $l$, $F_1$ adds that to some coordinate, and $V_1$ draws a vector from $(x,y,z)$ to $F_1(x,y,z)$.
The extra bits involving $A_1,A_2,A_3$ and $s$ are there to animate the dynamics of each vector to first order in Taylor.

The vector $V_1$ is drawn over all coordinates defined in the lists $X,Y$ and $Z$. Drop down the *variables & comp lists* folder to change the values in these lists to make a larger, smaller or varied domain.

> In this folder we also have $l$ that changes the length of each vector and $T$ that changes their thickness.
> The *trajectory scale* $\sigma$ defines the gap between each time-step of a particle's trajectory. You can have more clarity with a smaller scale, but we lose on length.

## How the particle trajectory is done

_Work in progress._


## What if I want a different coordinate system?

I have tools for that too, but I will leave that explanation for another day.

