class Girl extends BaseClass {
    constructor(x,y){
      super(x,y,50,50);
      this.image = loadImage("boy.png");
    }
  
    display() {
      //this.body.position.x = mouseX;
      //this.body.position.y = mouseY;
      super.display();
    }
  }