class Account{
  constructor(){
    this.user="";
    this.pass="";
    this.button=createButton("Register");
    this.button.position(width/2+110,height/2+120);
    this.button.hide();
    this.button.style('background',color(0,239,255));
    this.img=loadImage("brain.jpg");
    this.text=createElement("h1");
    this.username=null;
    this.password=null;
    this.d=0;
    this.tit=createElement("h2");
    this.sig=createButton("Sign In");
    this.sig.position(width/2,height-100);
    this.sig.hide();
    this.sig.style('width','90px');
    this.sig.style('height','60px');
    this.sig.style('background-color',color(186,157,78));
    this.score=0;
  }
  display(){
    
    this.text.html("WELCOME TO THE MURDER SOLVING GAME");
    this.text.position(width/2-300,height/2-300);
    imageMode(CENTER);
    image(this.img,width/2,height/2,width,height);
    this.score++;
    if(this.d===0){
      if(this.score===1){
        this.user=createInput("Username");
    this.user.position(width/2,height/2);
    this.pass=createInput("Password");
    this.pass.position(width/2,height/2+60);
        this.user.show();
    this.pass.show();
      }
      this.text.show();
    this.button.show();
    
    }
    this.sig.mousePressed(()=>{
      if(this.d===1){
      gameState="username";
      this.sig.hide();
      this.tit.hide();
        click.play();
      h=0;
      }
    })
    
  }
  async cl(){
    var rat=await database.ref(this.username).once("value");
    if(rat.exists()){
      m=1;
    }else{
      m=0;
      this.sig.show();
      this.tit.position(width/2-width/5,height/2);
      this.tit.style('color',color(25,188,0));
      this.tit.html("WOW!!SUCCESFULLY CREATED ACCOUNT");
      this.tit.show();
      this.d=1;
      this.text.hide();
      this.button.hide();
      this.user.hide();
      this.pass.hide();
      //account.username=account.user.value();
      this.password=this.pass.value();
      database.ref(this.username).set({
        password:this.password,
        gameState:"play"
      })
    }
  }
}