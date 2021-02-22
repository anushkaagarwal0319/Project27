class Bob {
    constructor(x, y, r) {
      var options = {
          isStatic: false,
          'density': 1,
          'friction':0,
          'restitution': 0.3,
      }
      this.body = Bodies.circle(x, y, r, options);
      this.radius = r;
      
      World.add(world, this.body);
      
    
    }
    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        strokeWeight(3);
        stroke("white");
        fill("blue");
        ellipse(0, 0, this.radius, this.radius);
        pop();
    }
  };
  