var sliderB, sliderH;

function setup () {
  createCanvas(displayWidth-500, displayHeight-500);
  //background(123);
  sliderB = createSlider(0, 200, 50);
  sliderH = createSlider(0, 200, 50);
}

function draw() {
  background(random(100,150);
  fill(random(255), 0, 50);
  noStroke();
  ellipse(touchX, touchY, sliderB.value(), sliderH.value());
  console.log('sciiiddiby doo');
}
