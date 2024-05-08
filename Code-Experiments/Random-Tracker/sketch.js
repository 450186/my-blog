let xPos, yPos;
let xPrev, yPrev;
let numDirections = 80;
let direction = 0;
let step = 20;

function setup() {
  createCanvas(windowWidth, windowHeight);
  xPos = width / 2;
  yPos = height / 2;
  // console.log(width);
  xPrev = xPos;
  yPrev = yPos;
  background(220);
  frameRate(30);
}

function draw() {
  //background(220, 50);
  // let newDir = floor(random(numDirections));
  direction+= (noise(xPos/100, yPos/100, frameCount/100) - 0.5) * HALF_PI
  step=noise(xPos/150, yPos/240, frameCount/100)*25
  let xStep = cos(direction) * step;
  let yStep = sin(direction) * step;
  xPrev = xPos;
  yPrev = yPos;
  xPos += xStep;
  yPos += yStep;
  edges();
  line(xPrev, yPrev, xPos, yPos);
  strokeWeight(20)
  stroke(random(1,255), random(1,255), random(1, 255))
  // rectMode(CENTER)
  // rect(xPrev, yPrev, xPos, yPos);
  // triangle(xPrev, yPrev, xPos, yPos/800, xPos/100, yPos/200)
  // ellipsoid(xPos/2, yPos/2, 100)
  //  fill(220, 50, 3);
  fill(150, 250, 120)
  // ellipse(xPos, yPos, 20);
}

function edges() {
  //   if (xPos < 0 || xPos > width) {
  //     xPos = width / 2;
  //   }
  //   if (yPos < 0 || yPos > height) {
  //     yPos = height / 2;
  //   }
  //   if (xPos < 0) xPos = width;
  //   if (xPos > width) xPos = 0;

  //   if (yPos < 0) yPos = height;
  //   if (yPos > height) yPos = 0;
  if (xPos < 0) {
    xPos = width-5;
    xPrev = xPos;
  }
  if (xPos > width) {
    xPos = 5;
    xPrev = xPos;
  }
  if (yPos < 0) {
    yPos = height-5;
    yPrev = yPos;
  }
  if (yPos > height) {
    yPos = 5;
    yPrev = yPos;
  }
}