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

## Planet Slideshow

I used the idea of the Jellyfish example shown above to create a slideshow of all the planets in our solar system. I made all of the images the same size in photoshop to allow for continuity and so that I could decide the canvas size for the slideshow. I then made all of the photos have the same file extension (.png) and made sure they all had the same beginning name (Planet_) and just changed the numbers in the file. This meant that with 1 line of code I could load all images with a for loop. I load all of the images into an array called `imgs` using the for loop
```
  for(let i = 0; i < numImgs; i++) {
    imgs[i] = loadImage('Planet_'+(i+1)+'.png');
  }
```which is inside the preload function.

I have a variable called `interval` set to 5000. This is so that I can control how often the slideshow changes, in this instance its 5 seconds. I did research on the `millis()` inbuilt function to p5.js. this essentially starts a timer. I used it and set it with the `lastChange` variable. This meant that every time the slideshow changed, the `lastChange` variable is set back to zero using this for loop
```
  if(millis() - lastChange > interval) {
    nextImage();
    lastChange = millis();
  }
  ```.
To make it a bit more advanced than just a slideshow, I also made it so that if the user is hovering the mouse over any part of the canvas it will display the name of the planet shown. I have done this very easily by having a `names` array with all the names in order and then set the index to the `currentimg` variable which meant that it will always display the current image. I have done this using a simple if statement shown below
```
  if(mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height) {
    let names = Names[currentimg];

    textSize(25);
    fill(255);
    textAlign(CENTER, CENTER);
    text(names, width/2, height - 40)
  }
  ```
the `nextImage` function is incredibly simple. it takes the number of images using the `numimgs` variable which is set to 8 and uses the modulus operator to the `currentimg + 1` which would grab the next image.

[Here is the slideshow of planets]("/my-blog/Code-Experiments/Planet-Slideshow/index.html")

<img src="/my-blog/Images/Slideshow-Screenshot.png" width="200">
