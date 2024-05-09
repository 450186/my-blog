---
title: Working With Images
date: 2024-04-18
---

# Working With Images

## Jellyfish

In this experiment we used an assets folder with 9 images of a jellyfish, each of which was in a different position. We then turned the assets folder into an array and then the code kept
repeating through the array using the following code:
```
  for(let i=0; i<numImages; i++){
    jelly[i]=loadImage('jelly_'+i+'.png')
  }
```
Images usually follow the mouse from the top left corner. This can be changed to do it from the center of the image by using `imageMode(CENTER)`, similar to the way we use `rectMode(CENTER)` to
control where the rectangle from the mouse. We made the jellyfish image get bigger or smaller depending on how fast the mouse moves from `pmouseX` and `pmouseY` to the current mouse position.

[Here's my first experiment using images](/my-blog/Code-Experiments/Jelly-fish/index.html)

<img src="/my-blog/Images/Jellyfish.png" width = "200">
