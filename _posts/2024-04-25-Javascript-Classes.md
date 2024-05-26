---
date: 2024-04-25
title: Javascript Classes
---

# Javascript Classes

## Blobs

We were introduced into Javascript classes. Classes allow us to shorten our code whilst also tidying it up. It allows us to create one object and then have that object repetitively added into
the code using one line of code. In the first example of this I have used it to create circles. I have a class that creates an Ellipse with different functions within the class that can be
added to the blob. In this case it is `click`, `show` and `update`. The `click` function moves the blob when it is clicked by a random amount on the width and height. The `show` function is 
where the ellipse is drawn. we set the colour and the size. In my case I have used the `random()` inbuilt function to it to change colours as the circle is being hovered over. I have a variable
called `numBlobs` that sets how many "blobs" I want on my screen. I use a simple `for`statement to make sure I only have that many blobs using the code `for(int i; i<numBlobs; i++)` which means
it'll create a new blob for as long as it is less than the `numBlobs` variable.
`clickBlobs.push(new ClickBlob(random(width), random(height), 50))` is the code inside the for statement previously mentioned. the `.push` adds another blob using the `clickBlobs` function.
The function has 2 lines of code within it. 
```
    blob.update()
    blob.show()
```
These lines of code call the blob class with the 2 functions; the `show` and `update` functions which means it adds a new ellipse and gives it the functionality where it moves when clicked.

We use the inbuilt `mousePressed` function to check if the mouse is pressed over a blob. When this happens, it moves it a random amount along the x and y axis. 

[Here's my blob experiment made using Javascript Classes](/my-blog/Code-Experiments/Blobs/index.html)

<img src="/my-blog/Images/blobs.png" width ="200">

## Ellipsoids

I repurposed the code above to experiment what would happen if i created a 3D shape instead of a 2D ellipse. It created a very unexpected result. 3D shapes work a lot different in comparison to
2D shapes. Just changing an ellipse into an ellipsoid would not give the same result. This made it so that it looked like a bunch of lines randomly positioned on the canvas. In my eyes it looks
like it resembles a spiderweb.

Although it isn't how I thought it would work, I still very much like the outcome therefore I have included it. 

[Here's the blob code repurposed into using an ellipsoid](/my-blog/Code-Experiments/Ellipsoid-Java/index.html)

<img src="/my-blog/Images/Ellipsoid-Javascript.png" width ="200">

## Fireworks

We created a firework using classes. We have a class called Firework and we get the firework affect by creating a certain amount of particles that is declared by the variable `numParticles`
in the constructor of the firework class. We then use a for statement to push a particle until the number of particles has been reached. We do this by having a `particles` array and each time
a particle is created it is pushed into the array until the length of the array has been reached using `particles.length` as the parameter for the for statement. 
We also have a class called `Particle`. This is where the functionality for the particles are made. This includes where they spring from using random x and y coordinates, giving the particles
"gravity" and giving them speed. The way we dispurse the particles is using trigonometry. we use the two lines of code `this.moveX = cos(this.a)*this.speed` and 
`this.moveY = sin(this.a)*this.speed`. The `a` variable is equal to `random(TWO_PI)`. `TWO_PI`means a full circle, using the random means that it picks a random point in a circle. The particles 
also havea lifespan, `this.lifeSpan = 200;` means that the lifespan of a particle will be 200ms, after that time, they are spliced from the array using the code 
```
if (fireworks[i].particles.length === 0) {
      fireworks.splice(i, 1);
    }
```
When we did it in class, I changed the code to make it more colourful by randomising the colours of the particles, similar to a firework.

I wanted to make it look more like a firework. Some fireworks have multiple explosions and I wanted to recreate that; hence why I added another function called `createBurst`. 
```
  createBurst(x, y) {
    for (let i = 0; i < 20; i++) {
      let p = new Particle(x, y, true); // Set burst to true
      this.particles.push(p);
    }
```
This code block pushes a new particle and sets the burst variable to true. If it is true, a new particle is pushed. This is run 20 times because the standard firework has 50 particles and I did
not want the bursts to be as prominent and as big as the original burst. 
```
        if (random(3) < this.burstChance && !this.particles[i].burst) {
          this.createBurst(this.particles[i].x, this.particles[i].y);
          this.particles[i].burst = true;
        }
```
This code block is used to randomise the chance of a burst being created. In this case, there is a chance between 1 and 3 of a burst being created. the `burstChance` variable within the firework
constructor is set to `0.1`. This means that when the random number is the same as this number, a burst is created. the code `!this.particles[i].burst` stops a burst being created from another
burst, meaning we do not get stuck in a loop which was a problem I faced during development stage. If I wanted to increase/decrease the chance of a burst, I could decrease or increase the 
number within the `random` for this if statement.

[Here's my firework code with burst feature](/my-blog/Code-Experiments/Firework-Burst/index.html)

<img src="/my-blog/Images/Firework.png" width ="200">
