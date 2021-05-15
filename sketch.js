var fixedRect,movingRect
var gameObject1, gameObject2
function setup() {
  createCanvas(1000,800);
  fixedRect=createSprite(600, 400, 50, 80);
  fixedRect.shapeColor='red'
  movingRect=createSprite(400, 200, 80, 30);
  movingRect.shapeColor='red'
  gameObject1=createSprite(100,100,50,50);
  gameObject2=createSprite(800,100,50,50);
  gameObject1.velocityX=+5
  gameObject1.shapeColor= 'green'
  gameObject2.shapeColor= 'green'
}

function draw() {
  background(0);
  movingRect.x=World.mouseX
  movingRect.y=World.mouseY

 if( isTouching (gameObject1,gameObject2)){
  gameObject2.shapeColor='blue'
  gameObject1.shapeColor='blue'
 }
 else{
  gameObject2.shapeColor='red'
  gameObject1.shapeColor='red'
 } 
  
  
  
  drawSprites();
}
