let cup;
let cupX = 200;
let cupY = 355;
let particles = [];
let numParticles = 125;
let score = 0;
let gameStarted = false;
let winner = false;

function setup() {
  createCanvas(400, 400);
  cup = rect(cupX, cupY, 80, 80, 0, 0, 30, 30);
}

function draw() {
  background(220);

  if (!gameStarted) {
    StartMenu();
  } else if(winner) {
    WinDisplay();
  } else {
    runGame();
  }
}

function runGame() {
  rectMode(CENTER);
  fill(255, 255, 255);
  cup = rect(cupX, cupY, 80, 80, 0, 0, 30, 30);
  fill(0);
  textAlign(CENTER, CENTER);
  textSize(15);
  text("Score: " + score, cupX, cupY);

  cupMove();
  
  if(particles.length === 0) {
    for(let i = 0; i < numParticles; i++) {
      particles.push(new Particle(random(400), -20));
    }
  }
  
  if(particles) {
  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].show();
    particles[i].deleted();
    if(particles && particles[i]) {
      if (particles[i].caught()) {
        numParticles--;
      } 
    }
  }
}
  if (particles.length < numParticles) {
    particles.push(new Particle(random(400), -20));
  }
}

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speed = random(1, 2);
    this.fall = 0;
    this.gravity = 0.02;
    this.a = random(PI);
    this.moveX = cos(this.a) * this.speed;
    this.moveY = sin(this.a) * this.speed;
    this.removed = false;

    if (random(2) < 0.1) {
      this.size = 10;
      this.points = 2;
    } else {
      this.points = 1;
      this.size = 5;
    }
  }

  update() {
    this.x += this.moveX;
    this.y += this.moveY;
    this.y += this.fall;
    this.fall += this.gravity;
  }

  show() {
    fill(255, 0, 0);
    noStroke();
    ellipse(this.x, this.y, this.size);
  }

  deleted() {
    if (this.y >= height) {
      this.removed = true;
    }
    for (let i = particles.length - 1; i >= 0; i--) {
      if (particles[i] && particles[i].removed) {
        particles.splice(i, 1);
      }
    }
  }

  caught() {
    if (
      this.y > cupY - 40 &&
      this.y < cupY - 35 &&
      this.x > cupX - 40 &&
      this.x < cupX + 40
    ) {
      this.removed = true;
      score += this.points;
      if (score === 101) {
        winner = true;
      }
      return true;
    }
    return false;
  }
}

function cupMove() {
  if (keyIsDown(RIGHT_ARROW)) {
    cupX += 2;
  } else if (keyIsDown(LEFT_ARROW)) {
    cupX -= 2;
  }
  if (cupX < 40) {
    cupX = 40;
  }
  if (cupX > width - 40) {
    cupX = width - 40;
  }
}

function StartMenu() {
  fill(0);
  textSize(26);
  textAlign(CENTER, CENTER);
  text("To win you need a score of 100", width / 2, 100);
  text("Click to start", width / 2, height / 2);

  if (mouseIsPressed) {
    gameStarted = true;
  }
}
function WinDisplay() {
        textSize(24);
        fill(0);
        text("You reached 100, You Win!", width / 2, 100);
        text("Replay?", width / 2, height/2)
    if(mouseIsPressed && mouseY > height/2 - 10 && mouseY < height/2 + 10 && mouseX > width/2 - 50 && mouseX < width/2 + 50) {
      resetGame();
    }
}

function resetGame() {
  score = 0;
  gameStarted = false;
  winner = false;
  particles = [];
  numParticles = 125
  cupX = 200;
  cupY = 355;
}