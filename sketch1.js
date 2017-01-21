var sliderB, sliderH;
var scale;

function setup () {
  createCanvas(displayWidth-500, displayHeight-500);
  //background(123);
  sliderB = createSlider(0, 200, 50);
  sliderH = createSlider(0, 200, 50);
  
  capture = createCapture(VIDEO);
  capture.size(320, 240);
  capture.hide();
  scale = 1;
}

function draw() {
  ellipse(mouseX, mouseY, sliderB.value(), sliderH.value());
  fill(random(255), 0, 50);
  noStroke();
  
  if (accelerationX > 2) {
   scale += 0.1; 
   if (scale > 1) {
    scale = 0.1;
   }
  }

  image(capture, touchX, touchY, 320*scale, 240*scale);
}

function deviceMoved() {
  scale += 0.01
  if (scale > 1) {
    scale = 0.1;
  }
}
