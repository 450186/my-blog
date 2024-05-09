let pic, star
let jelly=[]
let numImages=9
let jellyNum = 0

function preload(){
  pic = loadImage("noodle.png")
  star = loadImage('star2_alpha.png')
  jelly1=loadImage('jelly_1.png')
  for(let i=0; i<numImages; i++){
    jelly[i]=loadImage('jelly_'+i+'.png')
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CORNER)
  //background(pic);
  colorMode(HSB)
}

function draw() {
  background(50)
  let d=4+dist(pmouseX,pmouseY, mouseX, mouseY)
  imageMode(CENTER)
  //tint(frameCount*100%360, 100, 100)
  //image(pic,width/2, height/2)
  // image(star, mouseX, mouseY, 50, 50)
  image(jelly[jellyNum%numImages], mouseX, mouseY,d*8 , d*8)
  if(frameCount%4==0){
  jellyNum++    
  }
}