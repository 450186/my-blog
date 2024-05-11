let fireworks = [];

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0, 10);
  
  // Update and display existing fireworks
  for (let i = fireworks.length - 1; i >= 0; i--) {
    fireworks[i].update();
    fireworks[i].show();
    if (fireworks[i].particles.length === 0) {
      fireworks.splice(i, 1);
    }
  }
}

function mousePressed() {
  fireworks.push(new Firework(mouseX, mouseY));
}

class Firework {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.particles = [];
    this.numParticles = 50;
    this.burstChance = 0.1; // Adjust this value for the burst chance
    for (let i = 0; i < this.numParticles; i++) {
      this.particles.push(new Particle(this.x, this.y));
    }
  }

  update() {
    for (let i = this.particles.length - 1; i >= 0; i--) {
      if (this.particles[i].update()) {
        this.particles[i].show();
      } else {
        if (random(3) < this.burstChance && !this.particles[i].burst) {
          this.createBurst(this.particles[i].x, this.particles[i].y);
          this.particles[i].burst = true;
        }
        this.particles.splice(i, 1);
      }
    }
  }

  createBurst(x, y) {
    for (let i = 0; i < 20; i++) {
      let p = new Particle(x, y, true); // Set burst to true
      this.particles.push(p);
    }
  }

  show() {
    fill(random(255), random(255), random(255));
    noStroke();
    ellipse(this.x, this.y, 5);
  }
}

class Particle {
  constructor(x, y, burst = false) {
    this.x = x;
    this.y = y;
    this.speed = random(1, 2);
    this.fall = 0;
    this.gravity = 0.01;
    this.a = random(TWO_PI);
    this.moveX = cos(this.a) * this.speed;
    this.moveY = sin(this.a) * this.speed;
    this.lifeSpan = 200;
    this.ttl = this.lifeSpan;
    this.burst = burst; //is a burst a burst? this helps us to stop a loop where a burst can come from a burst
  }

  update() {
    this.x += this.moveX;
    this.y += this.moveY;
    this.y += this.fall;
    this.fall += this.gravity;
    this.ttl--;
    return this.ttl > 0;
  }

  show() {
    fill(random(255), random(255), random(255));
    noStroke();
    ellipse(this.x, this.y, 5);
  }
}
