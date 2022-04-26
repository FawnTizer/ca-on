class Bala {
    constructor(x, y ) {
      this.x = x;
      this.y = y;
     var options = {
         isStatic = true

     };
      this.r=30;
      this.body = Bodies.circle(x,y,this.r,options): /// este es PUNTO Y COMA 
      this.image=loadImage ("./assets/cannonball.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.options;
      push();
    imageMode(CENTER);
    image(this.image,pos.x,pos.y,this.r,this.r);
    pop();
    
    
    }
  }
  
