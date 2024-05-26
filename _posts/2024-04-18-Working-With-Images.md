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

## Rocket

I have reused code from the [tracker project](/my-blog/_posts/2024-03-14-Trackers.md) and the first experiment where there was a line that changed direction. I have basically made it so that the code instead of having a line, it has an image of a rocket on a black background and its as if the rocket has lost control and is flying through space. I have made it so that the image also changes direction using the functions `push`, `rotate`, `translate` and `pop`. `push` and `pop` are used when changing something temporarily when you still want it to keep its original state. `push` is used to save it, `pop` is used to restore it. These are commonly used with `rotate` and `translate`. `translate` is used to move the origin to the rocket's current position and `rotate` is used to of course rotate the image. It rotates by the `direction` variable. 

[Heres the rocket experiment](/my-blog/Code-Experiments/Rocket/index.html)

<img src="/my-blog/Images/rocket-experiment.png" width="200">
