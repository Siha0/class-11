var trex;
var trexAnimation;
var ground
function preload(){
  trexAnimation=loadAnimation("trex1.png","trex3.png","trex4.png")
}

function setup(){
  createCanvas(600,200)
  trex=createSprite(50,150,20,20)
  trex.addAnimation("abc",trexAnimation)
  trex.scale=0.5
  ground=createSprite(300,180,600,10)
  ground.velocityX=-5
}



function draw(){
  background(180)
  
  if(keyDown("up")){
    trex.velocityY=-10
  }
  trex.velocityY=trex.velocityY+1
  
  trex.collide(ground)
  
  drawSprites()
  
}




