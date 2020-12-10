var fixedRect;
var movingRect;
var car;
var wall;

function setup() {
  createCanvas(1000,400);
  fixedRect=createSprite(400, 200, 50, 50);
  fixedRect.shapeColor="blue";
  movingRect=createSprite(200,300,50,50);
  movingRect.shapeColor="blue";
  car=createSprite(500,50,50,50);
  car.shapeColor="yellow";
  car.velocityX=4;
  wall=createSprite(900,50,50,50);
  wall.shapeColor="orange";
}

function draw() {
  background(255,255,255);  

movingRect.y=mouseY;
movingRect.x=mouseX;


console.log(movingRect.x-fixedRect.x)

if(isTouching(car,wall)){
  car.shapeColor="lightgreen";
  wall.shapeColor="lightgreen";
}
else {
  car.shapeColor="yellow";
  wall.shapeColor="orange";
}

bounceOff(car,wall)


  
  drawSprites();
}

function isTouching(object1,object2){
   if (object1.x - object2.x < object2.width/2 + object1.width/2 
    && object2.x - object1.x < object2.width/2 +object1.width/2 
    && object1.y - object2.y <object2.height/2 + object1.height/2 
    && object2.y -object1.y < object2.height/2 +object1.height/2) {
   return true 
  } 
   else { 
     return false 
    } 
  } 
function bounceOff(object1,object2){ 
  if (object1.x - object2.x < object2.width/2 + object1.width/2 
    && object2.x - object1.x < object2.width/2 +object1.width/2){ 
     object1.velocityX=object1.velocityX*(-1); 
     object2.velocityX=object2.velocityX*(-1); } 
     if( object1.y - object2.y <object2.height/2 + object1.height/2 
     && object2.y -object1.y < object2.height/2 +object1.height/2) {
    object1.velocityY=object1.velocityY*(-1); 
    object2.velocityY=object2.velocityY*(-1); 
       } 
       }


