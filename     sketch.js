var jake, jake_running, path;
function preload(){
jake_running = loadAnimation("Jake1.png","Jake2.png","jake3.png","jake4.PNG","jake5.png");
roadImage = loadImage("path.png")
}

function setup(){
  createCanvas(400,400);
//creating jake
jake = createSprite(200,200,50,40);
jake.addAnimaton(jake_running);
edges = createEdgeSprites()
}

function draw() {
 //set background color 
 background("blue");
path=createSprite(200,200);
path.addImage(path.png);
path.velocityY = 4;
path.scale=1.2;

}
drawSprites();

