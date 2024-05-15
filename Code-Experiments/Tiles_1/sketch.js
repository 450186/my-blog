// Create variables we can use anywhere
let numAcross = 7; //how many squares do we want across the page?
let numDown; //how many squares can we fit down the page - to work out
let penThickness=0.025; //as a fraction of square size
let across = 0;
let down = 0;
let step; //how big will each square be - to work out
let penSize; //how thick a pen should be - to work out
let numDirections=4;

function setup() {
  createCanvas(windowWidth, windowHeight); //create a sheet of 'paper'
  //colorMode(HSB);
  step = width / numAcross;
  penSize = step *penThickness;
  numDown = floor(height / step);
  noLoop(); //run the draw process just once
  background(0,0,100); //set paper colour to white
  across = 0;
  down = 0;
}



function mousePressed() {
  pickAndDrawSquare();
  // drawAllSquares();
}

function pickAndDrawSquare() {
  if (across === 0 && down === 0) {
    background(0,0,100); //clean cheet of paper if we are at the start
  }
  let myPick = pickRandom(numDirections);
  myTile(across, down, myPick);
  // makeLineShape(across, down, myPick);
  //  makeWedgeShape(across, down, myPick);
   // makeCurveShape(across, down, myPick);
  //  makeDoubleCurveShape(across, down, myPick);
  nextSquare();
}


function drawAllSquares(){
  for(let squares=0; squares<numAcross*numDown; squares++){
    pickAndDrawSquare();
  }
}


function nextSquare() {
  across++;
  if (across >= numAcross) {
    across = 0; //go to start of row
    down++; //move to next row
    if (down >= numDown) {
      down = 0; //go to top
    }
  }
}

function pickRandom(n) {
  return floor(random(n));
}

function myTile(across, down, pick){
  push(); //start measuring from the top left corner
  translate((across + 0.5) * step, (down + 0.5) * step);
  rotate(pick * TWO_PI / numDirections); //rotate according to pick
  //*************************
  //Add your tile design here, use 'step' for tile size
  // ellipse(0,0, step, step)
  // ellipse(0,step*0.25, step*0.5, step*0.5)
  fill(234, 198, 26)
  fill(255, 0, 0)
  //arc(step/8, -step/9, step, step/2,0, 180)
  circle(step/2, step/2, step/2)
  fill(123, 123, 123)
  rect(5, 5, step*0.5, step*0.5)
  fill(125, 65, 134)
  triangle(-step/2, step/2, step/2, step/2, 0, -step/2)
  beginShape()
  vertex()
  //*************************
  pop(); //measure from wherever we were before
}

function makeLineShape(across, down, pick) {
  push(); //start measuring from the top left corner
  //move drawing position to the middle of the square 'across' and 'down'
  translate((across + 0.5) * step, (down + 0.5) * step);
  stroke(0,50,84); //set pen to back
  strokeWeight(penSize); //pen thickness
  strokeCap(ROUND); //use round tipped pen
  noFill(); //do not fill in any shapes
  rotate(pick * TWO_PI / numDirections); //rotate according to pick
  line(-step / 2, -step / 2, step / 2, step / 2); //draw a diagonal line
  pop(); //measure from wherever we were before
}

function makeWedgeShape(across, down, pick) {
  push(); //start measuring from the top left corner
  translate((across + 0.5) * step, (down + 0.5) * step);
  fill(121,45,79);
  noStroke();
  rotate(pick * TWO_PI / numDirections); //rotate according to pick
  triangle(-step/2, -step/2, step/2, -step/2, -step/2, step/2);
  pop(); //measure from wherever we were before
}

function makeCurveShape(across, down, pick) {
  push(); //start measuring from the top left corner
  translate((across + 0.5) * step, (down + 0.5) * step);
  stroke(21,62,92); //set pen to back
  strokeWeight(penSize); //pen thickness
  strokeCap(SQUARE); //use square tipped pen
  noFill(); //do not fill in any shapes
  rotate(pick * TWO_PI / numDirections);
  arc(-step / 2, -step / 2, step, step, 0, PI / 2);
  arc(-step / 2, -step / 2, step * 2, step * 2, 0, PI / 2);
  pop(); //measure from wherever we were before
}

function makeDoubleCurveShape(across, down, pick){
  push(); //start measuring from the top left corner
  translate((across + 0.5) * step, (down + 0.5) * step);
  stroke(257,54,85); //set pen to back
  strokeWeight(penSize); //pen thickness
  strokeCap(SQUARE); //use square tipped pen
  noFill(); //do not fill in any shapes
  rotate(pick * TWO_PI / numDirections);
  arc(step / 2, -step / 2, step, step, PI/2, PI);
  arc(-step / 2, step / 2, step, step, -PI/2, 0);
  pop(); //measure from wherever we were before
}