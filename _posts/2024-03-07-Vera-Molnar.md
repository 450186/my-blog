---
title: Vera Molnar Experiments
date: 2024-03-07
---

# Vera Molnar's work using Tiles

Vera Molnar used geometry as her specialty. To recreate this, we use "tiles". The tiles are decided by dividing the width and height of the canvas. We use 2 variables called `numDown` and `numAcross` to determine how many tiles there are and how big they are. I made my own version, although this was very early into learning javascript for this purpose, I was not happy with the way it turned out. One of my biggest struggles personally with this is triangles. In terms of using tiles, it is very difficult to figure out how to plot each point. We use a variable called `step` to work it out, but it is still very hard to try to do it if you say want a smaller triangle. I figured out how to plot it but for some reason, it falls outside of the tiles, which means I lose a lot of both symmetry and geometry because the tiles overlap.

[Here's my first Tiles experiment using Vera Molnar's method](/my-blog/Code-Experiments/Tiles_1/index.html)

<img src="/my-blog/Images/Tiles_no1.png" width ="200">

## Wind Tiles

This code started out as us testing Vera Molnar's work. This is using "tiles" across a page. I then had creative freedom to change it and see how changing certain lines of code change the way the tiles behaved.
```
  let r2=noise(across/2, down*3, frameCount)
```
this for example was not always like that. This line can change the noise which determines where the circles go on their path. 

[Here's my Wind Tiles experiment using Vera Molnar's method](/my-blog/Code-Experiments/Wind-tiles/index.html)

<img src="/my-blog/Images/Wind-test.png" width ="200">

## Chicken Scratches

I created another piece of work using the tiles method. 
Similar to the other work shown above, I changed it from being ellipsis to being triangles that accidentally turned into lines. 
I have since looked at the code and I know why the triangles did not turn out as expected however I liked the way the accident turned out so I kept it.

[Here's my Chicken Scratches experiment using Vera Molnar's method](/my-blog/Code-Experiments/chicken_scratch_2024_05_07_10_31_57/index.html)

<img src="/my-blog/Images/Chicken scratch test.png" width ="200">

## Ellipsoid Tiles

I have once again made another experiment using the tiles method like Vera Molnar. I created this using a bit of my own research into P5. I went onto the website and looked up how ellipsoids and 3d shapes worked. They require you to have `WEBGL` in the canvas set up and then it works the way a normal ellipse would work.

[Here is the ellipsoid Tiles work inspired by Vera Molnar](/my-blog/Code-Experiments/ellipsoids-Tile/index.html)

<img src="/my-blog/Images/ellipsoid tiles.png" width="200" text-align="center">
