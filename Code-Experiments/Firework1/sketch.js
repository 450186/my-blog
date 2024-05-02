let firework;
let fireworks = []

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0, 10);
  if(firework){
    firework.update()
    if(firework.burst()){
     fireworks.push(new Firework(mouseX, mouseY, random(2, 300)) )
    }
  }
  for(let i = 0; i<fireworks.length; i++){
    fireworks[i].update()
  }
}

function mousePressed(){
    firework = new Firework(mouseX, mouseY, random(2, 300));
}

class Firework {
  constructor(x, y, n) {
    this.p = [];
    this.numParticles = 50;
    for (let i = 0; i < this.numParticles; i++) {
      this.p.push(new Particle(x, y));
    }
  }
  
  burst() {
    let doburst = false;
    this.p.forEach(function(particle, i){
      if(particle.y-250<2){
        if(random(1000)<5){
          doburst=true
        }
      }
    })
    return doburst
  }

  update() {
    // this.p.forEach(function (particle, i) {
    //   if(particle.update()){
    //   particle.show();
    //     } else {
    //       this.p.splice(i,1)
    //     }
    // });
    
    for(let i = this.p.length-1; i>=0; i--){
      if(this.p[i].update()){
        this.p[i].show()
      }else {
        this.p.splice(i,1)
      }
    }
    
  }
}

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speed = random(1, 2);
    this.fall = 0;
    this.gravity = 0.01;
    this.a = random(TWO_PI);
    this.moveX = cos(this.a) * this.speed;
    this.moveY = sin(this.a) * this.speed;
    this.lifeSpan = 200;
    this.ttl=this.lifeSpan
  }

  update() {
    this.x += this.moveX;
    this.y += this.moveY;
    this.y += this.fall;
    this.fall += this.gravity;
    this.ttl--
    return this.ttl>0
  }

  show() {
    fill(random(255), random(255), random(255));
    noStroke();
    ellipse(this.x, this.y, 5);
  }
}
