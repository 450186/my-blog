let imgs = [];
let currentimg = 0;
let numImgs = 8;
let interval = 5000;
let lastChange = 0;

let Names = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];

function preload() {
  for(let i = 0; i < numImgs; i++) {
    imgs[i] = loadImage('Planet_'+(i+1)+'.png');
  }
}

function setup() {
  createCanvas(600, 600);
  lastChange = millis(); // start timer
}

function draw() {
  background(220);
  
  if(imgs[currentimg]) {
    image(imgs[currentimg], 0,0,width,height);
  }
  if(millis() - lastChange > interval) {
    nextImage();
    lastChange = millis();
  }
  if(mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height) {
    let names = Names[currentimg];

    textSize(25);
    fill(255);
    textAlign(CENTER, CENTER);
    text(names, width/2, height - 40)
  }
}

function nextImage() {
  currentimg = (currentimg + 1) % numImgs;
}
