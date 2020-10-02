
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var player, playerImg;
var backdrop;
var obstaclesGroup;
var score = 0;

function preload()
{
	playerImg = loadImage("helicopter.png");
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	//backdrop = createSprite(500, 350, 1000, 700);
	//backdrop.shapeColor = "black";
	//backdrop.x = width/2;

	player = createSprite(200, 200, 10, 10);
	player.addImage(playerImg);
	player.scale = 0.7; 
	player.velocityY = player.velocityY + 10.9;

	obstaclesGroup = new Group();

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  //backdrop.velocityX = -(6+3*score/100);

  if(keyCode === 38){
     player.velocityY = -8;
  }

  if(keyCode === 40){
     player.velocityY = 8;
  }

  spawnObstaclesUp();
  spawnObstaclesDown();

  score = score + Math.round(getFrameRate()/60);
  fill("white");
  text("Score: "+score, 900, 30);

  player.collide(obstaclesGroup);
  if(obstaclesGroup.isTouching(player)){
	  player.velocityY=0;
      obstaclesGroup.setVelocityXEach(0);
  }

  createEdgeSprites();
  //player.collide(bottomEdge);
  drawSprites();
 
}

function spawnObstaclesUp(){
	if(frameCount % 40 === 0){
		var obstacle1 = createSprite(1000, 690, 240, random(200, 500));
		obstacle1.shapeColor = "green";
		obstacle1.velocityX = -(6+3*score/100);

		obstaclesGroup.add(obstacle1);
	}
}

function spawnObstaclesDown(){
	if(frameCount % 40 === 0){
		var obstacle2 = createSprite(1000, 10, 240, random(200, 500));
		obstacle2.shapeColor = "green";
		obstacle2.velocityX = -(6+3*score/100);

		obstaclesGroup.add(obstacle2);
	}
}