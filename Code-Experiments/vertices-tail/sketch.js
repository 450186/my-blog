let verts = []
let maxVerts=120

function setup() {
  createCanvas(400, 400);
  background(220);
  
}

function draw() {
  background(220)
  beginShape()
  noFill()
verts.forEach(function(vert){
  vertex(vert.x, vert.y)
})
  endShape()
  ellipse(mouseX, mouseY, 40)
  verts.push({x: mouseX, y: mouseY})
  text(verts.length, 100, 100)
  if(verts.length>maxVerts){
    verts.shift()
  }
}