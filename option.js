class Option{
  constructor(){
    this.img1=loadImage("account.png");
    this.img2=loadImage("signin.png");
    this.i=loadImage("img.png");
    this.img1x=width/2-210;
    this.img1y=height/2-height/3;
    this.img1width=200;
    this.img1height=200;
    this.img2x=width/2+100;
    this.img2y=height/2-height/3;
    this.img2width=200;
    this.img2height=200;
    
  }
  display(){
    imageMode(CENTER);
    push();
    image(this.i,width/2,height/2,width,height);
    pop();
    push();
    imageMode(CENTER);
    image(this.img1,this.img1x,this.img1y,this.img1width,this.img1height);
    pop();
    push();
    imageMode(CENTER);
 image(this.img2,this.img2x,this.img2y,this.img2width,this.img2height);  
    pop();
  }
  click(){
     if(this.img1x-mouseX<=this.img1width/2&&
        mouseX-this.img1x<=this.img1width/2&&
       this.img1y-mouseY<=this.img1height/2-80&&
       mouseY-this.img1y<=this.img1height/2-80){
     gameState="create";
       account.d=0;
       account.score=0;
       m=0;
    }
    if(this.img2x-mouseX<=this.img2width/2&&
        mouseX-this.img2x<=this.img2width/2&&
       this.img2y-mouseY<=this.img2height/2-80&&
       mouseY-this.img2y<=this.img2height/2-80){
      gameState="username";
      h=0;
    }
  }
}