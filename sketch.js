var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;




var score;


function preload(){
  trex_running = loadAnimation("trex1-mine.png","trex2-mine.png","trex3-mine.png");
  trex_collided = loadImage("collided trex-mine.png");
  
  groundImage = loadImage("ground2.png");
  cloudImage = loadImage("cloud.png")
 
  
}

function setup() {

  createCanvas(600,200)
  
  //create a trex sprite
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.1;
  
  //create a ground sprite
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  //creating invisible ground
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  //generate random numbers
  var rand =  Math.round(random(1,100))
  console.log(rand)

}



function draw() {
  //set background color
  background(251);
  
  console.log(trex.y)
  //jump when the space button is pressed
  if (keyDown("space") && trex.y>=160) {
    trex.velocityY = -10;
  }
  trex.velocityY = trex.velocityY + 0.8



  if (ground.x < 5) {
    ground.x = ground.width / 2;
  }
  
  //stop trex from falling down
  trex.collide(invisibleGround);
  
  //Spawn Clouds
  spawnClouds()
  
  drawSprites();
}

//function to spawn the clouds
function spawnClouds(){
 // write your code here 

if (frameCount%60===0){
  var cloud=createSprite(600,100,40,10)
  cloud.velocityX=-3
  cloud.addImage(cloudImage)

  cloud.y = Math.round(random(10,75))
  cloud.scale = 0.7
  
  cloud.depth = 12
  trex.depth = 40


  console.log(trex.depth)
  console.log(cloud.depth)


}


}



