var Visualization = function (size, locX, locY) {
  this.size = size;
  this.speed = random(0.2, 2);
  this.velocity = 0;
  this.x = locX;
  this.y = locY;
  this.c = color(random(40,255), 45, random(80,200), 100);
  
  this.create = function() {                          //creates rectangle shape
    rect(this.x, this.y, this.size*16, this.size*15);
  };
  
  this.vertMotion = function(factor) {             //vertical velocity of objects is determined by factor being passed to function
    this.velocity += factor;
    this.velocity *= random(-2,2);
  };
  
  this.update = function() {                          //updates vertical velocity by making the object move back and forth
    this.y += random(-this.velocity, this.velocity);
  };
  
  this.horizMotion = function() {               //determines the horizontal speed of the objects
    this.x += this.speed;
  };
  
  this.group = function(locX1, locY1) {     //creates effect of all objects moving towards each other
    this.x1 = locX1;
    this.y1 = locY1;
    
    
      if (this.x1 < this.x && this.y1 < this.y) {       //objects will move towards the point that is passed to the function.
        this.x += -this.speed;                          //the direction in which the objects will move is relative to their
        this.y += -this.speed;                          //current position in the canvas.
      } else if (this.x1 > this.x && this.y1 < this.y) {
        this.x += this.speed;
        this.y += -this.speed;
      } else if (this.x1 < this.x && this.y1 > this.y) {
        this.x += -this.speed;
        this.y += this.speed;
      } else if (this.x1 > this.x && this.y1 > this.y) {
        this.x += this.speed;
        this.y += this.speed;
      }
  }
  
  this.edges = function() {       //makes sure all objects remain within the canvas
    if (this.x > width){
      this.x = width;
      this.x *= -1;
    }
    else if (this.x < 0) {
      this.x *= -1;
      this.x = 0;
    }
    if (this.y > height) {
      this.y *= -1;
      this.y = height;
    }
  };
  
};