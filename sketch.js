var fixedRect, movingRect, car, wall;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  wall = createSprite(1000, 200, 20, 200);
  wall.shapeColor = "red";
  car = createSprite (200,200, 80, 40);
  car.shapeColor = "yellow";
  car.velocityX = 3;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if(isTouching(car,wall)){
    car.shapeColor = "purple";
    fill ("white");
    textSize (50);
    text("car has crashed into wall", 600, 400)
  }
  bounceOff(car,wall)
  collide(car,wall)
  
  drawSprites();
}


