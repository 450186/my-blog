let step
let numAcross = 20

function setup() {
  createCanvas(500, 500);
  step = width/numAcross
  //frameRate(20)
}

function draw() {
  background(220);
  
  for (let j = 0; j<numAcross; j++){
    for (let i = 0; i<numAcross; i++){
      drawTile(i, j, step)
    }
  }
}

function drawTile(across, down, step){
  push()
  translate((across+0.5)*step, (down+0.5)*step)
  angleMode(DEGREES)
  rotate(frameCount+(across*down))
   rectMode(CENTER)
  let r=random()
  let r2=noise(across/2, down*3, frameCount)
  circle(frameCount%width,(frameCount/2)%height, r2*step)
  pop()
}