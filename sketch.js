var account,gameState;
var option,sign,detail;
var h,by,g,m,firstimg;
var firstInp,firstBut,firstAns,firstmes,skull,next,change,honey;
var program,all,ans2,ho,level2,anslevel,level3img,level3inp;
var level3but,level3ans,wronglevel2,wronglevel3,winimg,click;
var rel;
function preload(){
  firstimg=loadImage("First.jpg");
  skull=loadImage("skull.jpg");
  honey=loadImage("honey.jpg");
  program=loadImage("program.jpg");
  all=loadImage("alligator.jpg");
  ho=loadImage("ho.jpg");
  level3img=loadImage("level3.jpg");
  winimg=loadImage("win.jpg");
  click=loadSound("click.mp3");
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  gameState="choose";
  g=0;
  m=0;
  
  database=firebase.database();
  option=new Option();
  account=new Account();
  sign=new Sign();
  h=0;
  by=createButton("BACK");
  by.position(50,height-69);
  by.hide();
  firstInp=createInput("ANSWER");
  firstInp.position(width/2,height/10);
  firstInp.style('height','40px');
  firstInp.style('font-size','28px');
  firstInp.hide();
  firstBut=createButton("SUBMIT");
  firstBut.position(width/2+width/4,height/4);
  firstBut.style('background-color',color(255,255,0));
  firstBut.hide();
  firstmes=createElement("h1");
  firstmes.html("Sorry.Wrong Answer!!");
  firstmes.position(width/2+width/4,height/4);
  firstmes.style('color',color(255,0,0));
  firstmes.hide();
  next=createButton("NEXT");
  next.position(width-width/8,height-height/6);
  next.style('font-size','30px');
  next.style('background',color(255,247,0));
  change=1;
  next.hide();
  ans2=createInput("ANSWER");
  ans2.position(width/2,30);
  ans2.style('height','40px');
  ans2.style('font-size','28px');
  ans2.hide();
  level2=createButton("SUMBIT");
  level2.position(width/2+width/2.6,140);
  level2.style('width','80px');
  level2.style('height','30px');
  level2.hide();
  anslevel="";
  level3inp=createInput("ANSWER");
  level3inp.position(width/2-width/15,height/2-height/4);
  level3inp.style("width","180px");
  level3inp.style("height","40px");
  level3inp.style("font-size","20px");
  level3inp.hide();
  level3but=createButton("SUMBIT");
  level3but.position(width/2+width/7,height/2-height/4);
  level3but.style("width","100px");
  level3but.style("height","40px");
  level3but.style("font-size","20px");
  level3but.hide();
  wronglevel2=createElement("h1");
  wronglevel2.html("Wrong Answer");
 wronglevel2.position(width/2+width/3,200);
  wronglevel2.style("color","red");
  wronglevel2.hide();
  wronglevel3=createElement("h1");
  wronglevel3.html("Wrong Answer");
 wronglevel3.position(width/2+width/4,180);
  wronglevel3.style("color","red");
  wronglevel3.hide();
  rel=createButton("Restart");
  rel.position(width/2,height-height/4);
  rel.style("background-color",color(255,69,0));
  rel.style("width","90px");
  rel.style("height","30px");
  rel.hide();
}

function draw() {
  background(0);
  if(gameState==="choose"){
    option.display();
    
  }
  
  if(gameState==="create"){
  account.display();
    account.button.mousePressed(()=>{
     account.username=account.user.value(); 
      account.cl();
      click.play();
    })
  }
  
  sign.display();
  if(gameState==="username"){
  sign.sumbituser.mousePressed(()=>{
  sign.clicks();
    click.play();
    })
  }
  if(gameState==="create"||gameState==="username"){
    by.show();
    if(gameState==="create"){
      by.mousePressed(()=>{
        click.play();
        m=0;
        account.sig.hide();
      account.tit.hide();
       account.text.hide();
      account.button.hide();
      account.user.hide();
      account.pass.hide();
gameState="choose";
      })
    }
    if(gameState==="username"){
      by.mousePressed(()=>{
        click.play();
       sign.user.hide();
       sign.sumbituser.hide();
       sign.pass.hide();
      sign.sumbitpass.hide();
        gameState="choose";
       h=2;
      })
    }
  }else{
    by.hide();
  }
  if(gameState==="play"){
    imageMode(CENTER);
    image(firstimg,width/2,height/2,width,height);
    firstInp.show();
    firstBut.show();
    firstBut.mousePressed(()=>{
      click.play();
    firstAns=firstInp.value();
      if(firstAns==="H"){
        gameState="play2";
      }else{
       firstmes.show(); 
      }
    })
    
  }else{
    firstInp.hide();
    firstBut.hide();
  }
  if(gameState!=="play"){
    firstmes.hide(); 
  }
  if(h===1){
    fill("red");
    textSize(20);
    textStyle(BOLD);
    text("Wrong Username Try again",width/2-130,height/2+80)
  }
  if(g===1){
    push();
    fill("red");
    textSize(20);
    text("Wrong Password.Try Again.",width/2,height-170);
    pop();
  }
  if(m===1){
    push();
    fill("red");
    textSize(20);
    text("Username Taken",width/2,height-170);
    pop();
  }
  if(detail!=="undefined"&& g===2){
    database.ref(sign.username).set({
      gameState:gameState,
      password:sign.password
    })
  }
 if(gameState==="play2"){
   if(change>5){
     change=1;
   }
   if(change===1){
     imageMode(CENTER);
   image(skull,width/2,height/2,width,height);
   }
   if(change===2){
     imageMode(CENTER);
     image(honey,width/2,height/2,width,height);
   }
   if(change===3){
     imageMode(CENTER);
     image(program,width/2,height/2,width,height);
   }
   if(change===4){
     imageMode(CENTER);
     image(all,width/2,height/2,width,height);
   }
   if(change===5){
     ans2.show();
     imageMode(CENTER);
     image(ho,width/2,height/2,width,height);
     level2.show();
     level2.mousePressed(()=>{
       click.play();
       anslevel=ans2.value();
       if(anslevel==="unga"||anslevel==="ungA"){
         gameState="play3";
       }else{
         wronglevel2.show();
       }
     })
   }else{
     ans2.hide();
     level2.hide();
     wronglevel2.hide();
   }
  next.show(); 
   next.mousePressed(()=>{
     click.play();
     change++;
   })
 }else{
   next.hide();
   ans2.hide();
   level2.hide();
   wronglevel2.hide();
 }
    if(gameState==="play3"){
      imageMode(CENTER);
      image(level3img,width/2,height/2,width,height);
      level3inp.show();
      level3but.show();
      level3but.mousePressed(()=>{
        click.play();
        level3ans=level3inp.value();
        if(level3ans==="ry"||level3ans==="RY"){
          gameState="win";
        }else{
         wronglevel3.show(); 
        }
      })
    }else{
      level3inp.hide();
      level3but.hide();
      wronglevel3.hide();
    }
  if(gameState==="win"){
    image(winimg,width/2,height/2,width,height);
    rel.show();
    rel.mousePressed(()=>{
       click.play();
      location.reload();
     
    })
  }
}
function mousePressed(){
  if(gameState==="choose"){
  option.click();
  }
}