//let clickBlob1, clickBlob2

let clickBlobs =[]
let numBlobs = 100

function setup() {
  createCanvas(400, 400);
  clickBlob1 = new ClickBlob(200, 100, 50)
  clickBlob2 = new ClickBlob(200, 300, 50)
  for(let i = 0; i<numBlobs; i++) {
    clickBlobs.push(new ClickBlob(random(width), random(height), 50))
  }
//   noCanvas()
//   noLoop()
// let student1 = new Student("Dave", 123456)
// let student2 = new Student("John", 789010)
// student1.sayHello()
// student2.sayHello()
}

function draw() {
  background(220);
  // clickBlob1.update()
  // clickBlob2.update()
  // clickBlob1.show()
  // clickBlob2.show()
  clickBlobs.forEach(function(blob){
    blob.update()
    blob.show()
  })
}

function mousePressed() {
  clickBlobs.forEach(function(blob){
    blob.click()
  })
}

class ClickBlob{
  constructor(x,y,s){
    this.tx = x
    this.ty = y
    this.x = x
    this.y = y
    this.s = s
    this.hover = false
  }
  
  click(){
    if(this.hover) {
  this.tx=random(width)
  this.ty=random(height)
    }
  }
  
  show(){
    stroke(0)
    fill(128)
    if(this.hover){
      fill(random(1, 255), random(1,255), random(1,255))
    }
    ellipse(this.x, this.y, this.s)
  }
  
  update(){
    this.x += (this.tx - this.x)/100
    this.y += (this.ty - this.y)/100
    let d=dist(this.x, this.y, mouseX, mouseY)
    this.hover = d<this.s/2
  }
}

class Student{
  constructor(name, number) {
  this.name=name
  this.number=number
  }
  sayHello(){
    console.log("Hello from " + this.name)
  }
}