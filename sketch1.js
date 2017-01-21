var sliderB, sliderH;

function setup () {
  createCanvas(displayWidth-500, displayHeight-500);
  //background(123);
  sliderB = createSlider(0, 200, 50);
  sliderH = createSlider(0, 200, 50);
  
  capture = createCapture(VIDEO);
  capture.size(320, 240);
  capture.hide();
}

function draw() {
  
  background(random(100,150));
  ellipse(touchX, touchY, sliderB.value(), sliderH.value());
  fill(random(255), 0, 50);
  noStroke();
  console.log('sciiiddiby doo');
  
  image(capture, touchX, touchY, 320, 240);
  filter('INVERT');
}
