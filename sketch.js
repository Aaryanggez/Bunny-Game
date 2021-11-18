var player;
 var target;
 var B1;
 var B2;
 var B3;
 var B4;
 var B5,edges;
function preload() {
  //load game assets
}


function setup() {
  createCanvas(600,600);
  edges=createEdgeSprites();
 player = createSprite(40,550,30,30)
//  BricksGroup= new Group();
 target= createSprite(550,40,30,30)
 B1 = createSprite(50,200,80,20)
 B2 = createSprite(200,200,80,20)
 B3 = createSprite(350,200,80,20)
 B4 = createSprite(500,200,80,20)
 
}

function draw() {
  background("green"); 
 player.bounceOff(edges[0]);
 player.bounceOff(edges[1]);
 player.bounceOff(edges[2]);
player.bounceOff(edges[3]);

if(keyDown("up")){
  player.y=player.y-3;
}
if(keyDown("down")){
  player.y=player.y+3;
}
if(keyDown("left")){
  player.x=player.x-3;
}
if(keyDown("right")){
  player.x=player.x+3;
}
if(player.isTouching(target)){
  fill("Red")
  textSize(50)
  text("YOU WIN",200,100)
}
if(player.isTouching(B1) || player.isTouching(B2) || player.isTouching(B3) || player.isTouching(B4)){
  fill("Red")
  textSize(50)
  text("YOU LOST",200,100)
}


generateWorms()
drawSprites()
} 
function generateWorms(){
  if(frameCount %30==0){
    
  
var snake = createSprite(random(100,550),random(320,380),40,5);
snake.shapeColor="yellow"
  }
}