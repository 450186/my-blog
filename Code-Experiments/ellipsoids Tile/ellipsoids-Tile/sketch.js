let step;
let numAcross = 20;

function setup() {
  createCanvas(500, 500, WEBGL);
  step = width / numAcross;
  //frameRate(20)
}

function draw() {
  background(255, 120, 65);
  translate(-width/2, -height/2)
  for (let j = 0; j < numAcross; j++) {
    for (let i = 0; i < numAcross; i++) {
      drawTile(i, j, step);
    }
  }
}

function drawTile(across, down, step) {
  let numSquares = 7;
  push();
  translate((across+0.5)*step,(down+0.5) * step);
  rectMode(CENTER);
  noFill();
  for (let k = numSquares - 1; k >= 0; k--) {
    for (let l = numSquares - 2; l >= 0; l--) {
      fill(random(230, 255), random(100, 255), random(100, 255));
    }
    let r = random(15);
    if (r < 10) {
      strokeWeight(0.15);
      ellipsoid(step/2, step/2, step/2);
      //circle(0,0, step*2, step*k/numSquares)
      // rotate(r*k, r*k)
      // //triangle(step/2, step/2, step, step, step/2, step/2)
      // square(r*k, r*2)
      // beginShape();
      // vertex(step/2, step/2);
      // vertex(step*2, step*2);
      // vertex(r*step, r*step);
      // vertex(step*4,step*3);
      // vertex(step, step);
      // vertex(step/2, step);
      // endShape(CLOSE);
      //rect(0,0,step*k/numSquares)
    }
  }
  pop();
}
