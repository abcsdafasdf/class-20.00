var monkey,monkeyimage
var lion,lionimage
var ground
function preload(){
monkeyimage = loadImage("ape.png")
lionimage = loadImage("lion.png")
}

function setup(){
  createCanvas(1450,850)
    //create a trex sprite
  ground = createSprite(750,500,1500,50)
  monkey = createSprite(200,400,500,100)
  monkey.scale = 0.5
  lion = createSprite(500,400,150,150)
  lion.scale = 0.3
  monkey.addImage(monkeyimage)
  lion.addImage(lionimage)
  
}

function draw(){
 background("green")
 ground.velocity.x = -5
 if(ground.x < 750){
  ground.x = ground.width/2
 }
 if(keyDown("space")){
   monkey.velocityY = -5
 }
 if(monkey.isTouching(lion)){
   monkey.velocityY = 0
   ground.velocityX = 0
 }
  drawSprites()
}
function spawnclouds(){
 
}
function spawnobstacles(){
  if(frameCount % 60 === 0){
    lion = createSprite(width+20,height-15)
    var rand = Math.round(random(1,6))
    switch(rand){
      case 1:lion.addImage()
      break;
      default:break;
    }
    obstacle.scale = 0.5
    
  }
}
function reset(){
  
}