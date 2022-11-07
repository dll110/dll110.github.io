// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Koch Curve
// A class to manage the list of line segments in the snowflake pattern

function SierpinskiTriangle(a,b) {
  var v = 
  this.start = a;   // A p5.Vector for the start
  this.end = b; // A p5.Vector for the end
  this.length = p5.Vector.sub(b, a);
  length.rotate(-PI/3);
  this.c = this.start.copy();
  this.c.add(length);
  this.triangles = [];                         // An array to keep track of all the triangles
  this.count = 0;
  
  this.nextLevel = function() {  
    // For every line that is in the arraylist
    // create 4 more lines in a new arraylist
    this.triangles = this.iterate(this.triangles);
    this.count++;
  }

  this.restart = function() { 
    this.count = 0;      // Reset count
    this.triangles = [];  // Empty the array list
    this.triangles.push(new SierpinskiTriangle(this.start,this.end));  // Add the initial line (from one end p5.Vector to the other)
  }
  this.restart();

  this.getCount = function() {
    return this.count;
  }

  // This is easy, just draw all the triangles
  this.render = function() {
    for(var i = 0; i < this.triangles.length; i++) {
      this.triangles[i].display();
    }
  }

  // This is where the **MAGIC** happens
  // Step 1: Create an empty arraylist
  // Step 2: For every triangle currently in the arraylist
  //   - calculate coordinates of inner triangle
  //   - update list of new triangles
  // Step 3: Return the new arraylist and it becomes the list of triangles for the structure

  // As we do this over and over again, each line gets broken into 4 lines, which gets broken into 4 lines, and so on. . . 
  this.iterate = function(before) {
    var now = [];    // Create emtpy list
    for(var i = 0; i < before.length; i++) {
      var l = before[i];
      // Calculate 3 inner triangle coordinates 
      var a = l.kochA();                 
      var b = l.kochB();
      var c = l.kochC();
      // Make new triangles
      now.push(new triangleFill(a,b));
      now.push(new triangleFill(b,c));
      now.push(new triangleFill (c,d));
    }
    return now;
  }
}