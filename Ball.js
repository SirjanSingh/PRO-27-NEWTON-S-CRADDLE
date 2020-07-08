
class Ball {
    constructor(x, y,radius) {
var options={
                'restitution':0.9,
                'friction':0.009,
                'density':0.01,
                isStatic:false
            }
      this.body = Bodies.circle(x, y, radius/2, options);
      this.radius=radius/2;
      World.add(world, this.body);
    }
    display(){
     var pos= this.body.position;
     ellipseMode(RADIUS)
ellipse(pos.x,pos.y,this.radius)
   
   
    }
  }
  
  
