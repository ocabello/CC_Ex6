var Visualization = function (m, locX, locY) {
  this.mass = m;
  this.speed = random(0.2, 2);
  this.velocity = 0;
  this.acceleration = 0;
  this.x = locX;
  this.y = locY;
  this.c = color(random(40,255), 45, random(80,200), 100);
  this.angle = 200;
  this.scaling = 500;
  this.decrease;
  
  this.create = function() {
    rect(this.x, this.y, this.mass*16, this.mass*15);
  };
  
  this.vertMotion = function(force) {
    this.velocity += force;
    this.velocity *= random(-2,2);
  };
  
  this.update = function() {
    this.y += random(-this.velocity, this.velocity);
  };
  
  this.horizMotion = function(factor) {
    this.x += this.speed;
  };
  
  this.group = function(locX1, locY1) {
    this.x1 = locX1;
    this.y1 = locY1;
    
    
      if (this.x1 < this.x && this.y1 < this.y) {       //move the current circleGroup object in the opposite direction
        this.x += -this.speed;                      //at a speed of 1
        this.y += -this.speed;
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
  
  this.edges = function() {
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