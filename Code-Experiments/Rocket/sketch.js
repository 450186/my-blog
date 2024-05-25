let rocket1, rocket2;
let xPos, yPos; 
let numDirections = 80;
let direction = 0;
let step = 20;

function preload() {
  rocket1 = loadImage("rocket-nofire.png");
  rocket2 = loadImage("rocket-withfire.png");
}

function setup() {
  createCanvas(400, 400);
  colorMode(HSB);
  imageMode(CENTER);
  xPos = width/2;
  yPos = height-15;
}

function draw() {
  background(0,0,0)
  direction+= (noise(xPos/100, yPos/100, frameCount/100) - 0.5) * HALF_PI
  step = noise(xPos/150, yPos/240, frameCount/100)*25
  let xStep = cos(direction) * step;
  let yStep = sin(direction) * step;
  xPos += xStep
  yPos += yStep
  edges();
  push();
  translate(xPos, yPos)
  rotate(direction)
  image(rocket2, 0, 0)

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