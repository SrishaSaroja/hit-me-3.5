class Aim extends BaseClass {
  constructor(x, y){
    super(x,y,20,40);
    this.image = loadImage("sprites/wood1.png");
    this.visibility=255;
  }
 
  display(){
    if (this.body.speed<7.5){
      super.display();
    }
    else{
     World.remove(world,this.body);
     push();
     this.visibility=this.visibility-5;
     tint(255,this.visibility);
     image(this.image,this.body.position.x,this.body.position.y,20,40);
     pop();
    }
  }
};
