let data;
let valMin, valMax, valRange;
let numVals;

function preload() {
  data = loadJSON("china.json");
  //china population data from https://api.worldbank.org/v2/countries/CHN/indicators/SP.POP.TOTL?per_page=5000&format=json
  // linked from https://github.com/jdorfman/awesome-json-datasets?tab=readme-ov-file#nasa
}

function setup() {
  createCanvas(windowWidth, windowHeight);
gradient = createLinearGradient(QUARTER_PI, height)
  gradient.colors(0, "lightblue", 0.25, "blue", 0.5, "green", 0.75, "yellow", 1, "red")
  gradient2 = createRadialGradient(HALF_PI, width)
  gradient2.colors(0,"indigo", 0.50, "brown", 1, "red")
  noLoop();
  let dataVals=data[1].map(function(element){
    return element.value
  })
  valMin = min(dataVals)
  valMax = max(dataVals)
  data[1].reverse()
  console.log(valMin, valMax)
}

function draw() {
  backgroundGradient(111);
  let numVals=data[1].length
  let step = width/numVals
  data[1].forEach(function (d, i) {
    console.log(d.date, d.value);
    fillGradient(gradient)
    strokeGradient(gradient)
    rect(i*step,height-height*d.value/valMax, i*step, height)
    push()
    translate(i*step,height-height*0.9*d.value/valMax+250, i*step, height)
    rotate(HALF_PI)
    textSize(step)
    text(d.date,0,0)
    textAlign(CENTER)
    text(valMax, -300,0)
    pop()
  });
}
