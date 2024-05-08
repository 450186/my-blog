---
title: Mouse Tracking
date: 2024-03-21
---

# Mouse Tracking

We started creating experiments that tracked the Mouse position. I made a sketch that created a circle at the position of the mouse and then drew a line from the previous position of the mouse
to the current mouse position. This gave it the affect that the circle had a tail/trail. It used an array called vertices and each time the mouse was moved it would add one to the verts array.
I had a variable called `maxVerts` to go with the `verts` array and an if statement that checked the length of the verts array, if it reached the number of maxVerts it would get rid of the first
vert in the array and create a new one at the Mouse's position. 
```
  if(verts.length>maxVerts){
    verts.shift()
  }
```
[Here's my experiment with mouse tracking](/my-blog/Code-Experiments/vertices-tail/index.html)

It is also very customisable very easily, you can change how big the line is by edditing the `maxVerts` value.
