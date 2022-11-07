// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com
// Koch Curve

// Renders a simple fractal, the Koch snowflake
// Each recursive level drawn in sequence

var k;

function setup() {
  createCanvas(640,640);
  background(255);
  frameRate(1);  // Animate slowly
  a = createVector(100,height-200);
  b = createVector(width-100,height-200);
  var v = p5.Vector.sub(b, a);
  v.rotate(-PI/3);
  c = a.copy();
  c.add(v);
  k = new KochFractal(a,c);
  k2 = new KochFractal(c,b);
  k3 = new KochFractal(b,a);

}

function draw() {
  background(51);
  // Draws the snowflake!
  k.render();
  k2.render();
  k3.render();
  // Iterate
  k.nextLevel();
  k2.nextLevel();
  k3.nextLevel();
  // Let's not do it more than 5 times. . .
  if (k.getCount() > 5) {
    k.restart();
    k2.restart();
    k3.restart(); 
  }
}