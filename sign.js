class Sign{
  constructor(){
    this.m=loadImage("user.jpg");
    this.p=loadImage("pass.png");
    this.user=createInput("Username");
    this.user.position(width/2-70,height/2);
    //this.user.style('background-color',color(34,255,254));
    this.user.hide();
    this.pass=createInput("Password");
    this.pass.position(width/2,height/2);
    this.pass.hide();
    this.sumbituser=createButton("Sumbit");
   this.sumbituser.position(width/2,height/2+100);
    this.sumbituser.hide();
    this.sumbitpass=createButton("Sumbit");
   this.sumbitpass.position(width/2+100,height/2+100);
    this.sumbitpass.hide();
    this.username="";
    this.password="";
  }
  display(){
  if(gameState==="username"){
    imageMode(CENTER);
    image(this.m,width/2,height/2,width,height);
    this.user.show();
    this.sumbituser.show();
     }else{
       this.user.hide();
       this.sumbituser.hide();
     }
    if(gameState==="password"){
      imageMode(CENTER);
      image(this.p,width/2,height/2,width,height);
      this.pass.show();
      this.sumbitpass.show();
    h=2;
       this.sumbitpass.mousePressed(()=>{
         this.password=this.pass.value();
         click.play();
         if(this.password===detail.password){
           console.log("right pass");
           gameState=detail.gameState;
           g=2;
         }else{
        g=1;
         }
       })
    }else{
      this.pass.hide();
      this.sumbitpass.hide();
    }
  }
  async clicks(){
    this.username=this.user.value();
      var d=await database.ref(this.username).once("value");
    if(d.exists()){
      detail=d.val();
      gameState="password";
    }else{
      h=1;
    }
   
    
  }
}