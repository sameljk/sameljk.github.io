---
layout: page
title: in Cartesian coordinates
description: Good for vector fields in your favourite coordinate system.
img: assets/img/desmos/vector-field.png
importance: 1
category: vector fields
---

> To quickly see the given simulation, click **Run** in the top left corner. 
> You can copy, edit, modify and have more customisation by opening the file in a new tab [here](https://www.desmos.com/3d/gtjbljnaj7).

Below is a Desmos file that will allow you to visualise how any vector field will affect a particle depending on its initial position... and its position thereafter. 
This particular **Run** action will activite the simulation of the vector field

$$
\boldsymbol{A} = \sin(t)x\boldsymbol{e}_x + \sin(t)y\boldsymbol{e}_y + \cos(t)z\boldsymbol{e}_z,
$$

in the domain $[-1.5,1.5]$ in all directions.

<embed src="https://www.desmos.com/3d/gtjbljnaj7" style="width:100%; height: 50vw;">

---

## What are we looking at?

The **animation time** parameter $s$ will, for a short period, animate the vector field _at its given time_. When time is static, each vector in the field is pointing in a certain direction. By running $s$ we move each vector in the direction it is facing.
These vectors will arrive at a new destination and continue to move according to the defined vector field.

The **coordinate time** parameter $t$ evolves our vector field in coordinate time. In the example above, we have oscillatory behaviour in each of the coordinates and thus the vector field changes in time.

Combining these two operations (running $s$ and $t$ at the same time) will show how these vectors behave over animation time and coordinate time. This, to me, was not a very intuitive picture as to how the vector field actually affects the particles living in it, which is why I introduced particle trajectory (see below).

---

## Try it yourself!

Click on the drop down menu labelled **vector field $\boldsymbol{A}$**. You can set the vector field to be anything you like, as long as it depends on $x,y,z$ and $t$.
The vector field is of the form

$$
\boldsymbol{A}(x,y,z) = A_1(x,y,z)\boldsymbol{e}_x + A_2(x,y,z)\boldsymbol{e}_y + A_3(x,y,z)\boldsymbol{e}_z.
$$

If you are stuck for inspiration you can try some of my simple favourites:

$$
\boldsymbol{A} = -y\boldsymbol{e}_x + x\boldsymbol{e}_y \text{ for a steady 2D circular vector field};
$$

$$
\boldsymbol{A} = y\boldsymbol{e}_x + x\boldsymbol{e}_y \text{ for a steady 2D hyperbolic vector field};
$$

$$
\boldsymbol{A} = -y\boldsymbol{e}_x + x\boldsymbol{e}_y + \sin(t)\boldsymbol{e}_z \text{ for a circular field oscillating in the }z\text{-direction}.
$$

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

