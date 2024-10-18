let controlLeftY, controlRightY;
let sinValue, cosValue;
let test;
let s;
let x;
let y;

function setup() {
  let canvas = createCanvas(800, 500);
  canvas.parent("p5-canvas-container")
  s = 100;
  x = random(width);
  y = random(height);
}

// function drawCliff(x,y){
//   line(height/3,width/3,-height/3,width/3)
// }

function draw() {
  background(255);

  //cliff
  strokeWeight(6);
  stroke(120, 240, 136);
  fill(120, 240, 136);
  quad(
    -height,
    width / 3,
    height / 3,
    width / 3,
    height / 3,
    width / 2.5,
    -height,
    width * 1.5
  );
  //line(height/3,width/3,-height/3,width/3)
  //line(height/3,width/3,height/3,width/2.5)
  //line(height/3,width/2.5,-height,width*1.5)

  //water surface
  sinValue = sin(frameCount * 0.01);
  test = sin(frameCount * 0.01 + PI);
  cosValue = cos(frameCount * 0.01);
  controlLeftY = map(sinValue, -1, 1, 100, 400);
  controlRightY = map(test, -1, 1, 100, 300);
  stroke(131, 224, 252);
  fill(131, 224, 252);
  bezier(
    height / 3,
    width / 2.5,
    150,
    controlLeftY,
    250,
    controlRightY,
    height * 1.6,
    width * 0.4
  );
  quad(height / 3, width / 2.5, height * 50, width * 0.4, 500, 500, 30, 500);

  //purple fish 1 increase in size
  drawFish((-width / 2) * 0.5, (height / 2) * 0.7);

  //orange fish 2
  fill(247, 138, 101);
  noStroke();
  push();
  // x = lerp(x, mouseX, 0.05);
  // y = lerp(y, mouseY, 0.05);
  ellipse(x, y, 165, 140);
  triangle(x, y, x + 115, y - 100, x + 115, y + 100);
  //eye
  stroke(0);
  strokeWeight(4);
  fill(0);
  ellipse(x - 35, y, 17, 32);
  pop();
  // blush
  stroke(255, 105, 180);
  strokeWeight(5);
  noFill();
  line(x - 10, y + 15, x - 30, y + 35);
  line(x - 20, y + 15, x - 40, y + 35);
  line(x - 30, y + 15, x - 50, y + 35);

  function drawFish(x, y, s) {
    fill(219, 79, 208);
    noStroke();
    push();
    translate(x, y);
    s = sin(frameCount * 0.05);
    s = map(s, -1, 1, 0, 75);

    ellipse(width / 2, height / 2, s, s * 0.66);
    triangle(
      width / 2,
      height / 2,
      width / 2 - s / 2,
      height / 2 + s / 2,
      width / 2 - s / 2,
      height / 2 - s / 2
    );
    //eye
    stroke(0);
    strokeWeight(4);
    fill(0);
    ellipse(width / 2 + 5, height / 2, s * 0.1, s * 0.2);
    pop();
    
    //fishing rod metal
    
  }
}
