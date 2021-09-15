var jaxon, jaxon_running;
var path, pathImg, rightinvisibleGround, leftinvisbleGround, edges;

function preload(){
  //pre-load images
    jaxon_running= loadAnimation("Runner-1.png", "Runner-2.png")

    pathImg= loadImage("path.png")
  }

function setup(){
  createCanvas(400,400);
  //Moving background
  path=createSprite(200, 200);
  path.addImage(pathImg);
  path.velocityY=4;
  path.scale=1.2;

  //create sprites here
  jaxon= createSprite(200, 350,20,50); 
  jaxon.addAnimation("running", jaxon_running);
  jaxon.scale=0.08

  //creating invisble grounds
  rightinvisibleGround=createSprite(1,200, 10, 400);
  rightinvisibleGround.visible=false;

  leftinvisibleGround=createSprite(200,200, 10, 400);
  leftinvisibleGround.visible=false; 

  edges=createEdgeSprites();
}

function draw() {
  background(0);

  path.velocityY=4;
  // make jaxon move with the mouse.
  jaxon.x=World.mouseX;
  
  //code to reset the background
   if(path.y>400){
    path.y=height/2;
  }
  jaxon.collide(edges[3]);
  jaxon.collide(rightinvisibleGround);
  jaxon.collide(leftinvisibleGround);

  drawSprites();
}
