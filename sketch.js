
var fighter  , JetImage;
var planes,planesImage;
var missile, missileImage;
var blast;
var backgroundImage;
var missileGroup,planesGroup;  
var gameState, PLAY=1,END=0;     
var gameState=PLAY ;
var score=0;

function preload(){
  JetImage=loadImage("./images/Fighter Jet.png");
  planesImage=loadImage("./images/enemyPlane.jpg");
  missileImage=loadImage("./images/Missile.png");
backgroundImage=loadImage("./images/BackgroundImage.jpg");
blast=loadImage("./images/blast.jpg");
explosion=loadSound("./images/explosion.mp3");
}

function setup(){
createCanvas(800,400);

fighter=createSprite(400,380);
fighter.addImage(JetImage);


missileGroup=new Group();
planesGroup=new Group();




}

function draw(){
 

if(gameState===PLAY){

  background(backgroundImage);

if (keyDown("space")) {
  createMissile();
 }
if(keyDown("left_Arrow")){
 fighter.x=fighter.x-10;
}


if(keyDown("right_Arrow")){
 fighter.x=fighter.x+10;


}
if(missileGroup.isTouching(planesGroup)){
explosion.play();
   planes.destroy();
  missile.addImage(blast);
  //missileGroup.destroyEach();
 missileGroup.setVelocityEach(0,0);
   
   score=score+1

}
if(fighter.isTouching(planesGroup)){
fighter.destroy();
planesGroup.destroyEach();
gameState=END;

}





enemyPlanes();


drawSprites();
textSize(24);
text("Score:"+score,680,50);


}
else if(gameState===END){
  background(0);
   //stroke("yellow");
   fill("yellow");
   textSize(30);
   text("Game Over", 340,200)
  

}


}

function createMissile(){
  missile=createSprite(400,300);
  missile.addImage(missileImage);
  missile.setCollider("rectangle",0,0,300,200);
 // missile.debug=true;
  missile.x=fighter.x;
  missile.velocityY=-3;
  missile.scale=0.2;
missile.lifetime=100
missileGroup.add(missile);
}

function enemyPlanes(){
  if (frameCount%100===0){
  
  
  planes=createSprite(400,20);
  planes.velocityY=4
  planes.addImage(planesImage); 
  planes.scale=0.3
  planes.x=Math.round(random(100,650))
  planes.lifetime=100;
  planesGroup.add(planes);
  fighter.depth=planes.depth+1
  
  }
}


