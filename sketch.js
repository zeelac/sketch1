var dW, dH;
var r, g, b;
var l, h;

function setup() {
  dW = displayWidth;
  dH = displayHeight;
  createCanvas(dW, dH);
  r = 0;
  g = 255/3;
  b = 255/3*2;
  
  l = 100;
  h = 100;
  lSpeed = 10;
  hSpeed = 10;

}

function draw() {
  
  r += 0.5;
  g += 0.5;
  b += 0.5;
  
  if (l < 0 || l > dW - 200 ) {
   lSpeed *= -1;
  } else if (h < 0 || h > dH - 200) {
   hSpeed *= -1;
  }
  
  l = touchX;
  h = touchY;
  
  //l += lSpeed;
  //h += hSpeed;
   
  background(r, g, b);
  
  //links oben
  fill(random(255), random(255), random(255), 200);
  noStroke();
  rect(100, 100, l, h);
  fill(random(255), random(255), random(255), 200);
  rect(100, 100, l*0.5, h*0.5);
  fill(random(255), random(255), random(255), 200);
  rect(100, 100, l*random(1), h*random(1));
  fill(random(255), random(255), random(255), 200);
  rect(100, 100, l*random(1), h*random(1));
  
  //rechtsunten
  push();
  fill(random(255), random(255), random(255), 200);
  noStroke();
  rect(dW-100, dH-100, -l, -h);
  fill(random(255), random(255), random(255), 200);
  rect(dW-100, dH-100, -l*0.5, -h*0.5);
  fill(random(255), random(255), random(255), 200);
  rect(dW-100, dH-100, -l*random(1), -h*random(1));
  fill(random(255), random(255), random(255), 200);
  rect(dW-100, dH-100, -l*random(1), -h*random(1));
  pop();
 
 //links oben
  fill(random(255), random(255), random(255), 200);
  noStroke();
  rect(100, dH-100, l, -h);
  fill(random(255), random(255), random(255), 200);
  rect(100, dH-100, l*0.5, -h*0.5);
  fill(random(255), random(255), random(255), 200);
  rect(100, dH-100, l*random(1), -h*random(1));
  fill(random(255), random(255), random(255), 200);
  rect(100, dH-100, l*random(1), -h*random(1));
 
 //rechtsunten
  push();
  fill(random(255), random(255), random(255), 200);
  noStroke();
  rect(dW-100, 100, -l, h);
  fill(random(255), random(255), random(255), 200);
  rect(dW-100, 100, -l*0.5, h*0.5);
  fill(random(255), random(255), random(255), 200);
  rect(dW-100, 100, -l*random(1), h*random(1));
  fill(random(255), random(255), random(255), 200);
  rect(dW-100, 100, -l*random(1), h*random(1));
  pop();
 
  if (r > 255) {
   r = random(255);
  } else if (g > 255) {
   g = random(255);
  } else if (b > 255) {
   b = random(255);
  }
  
 
}
