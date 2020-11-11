
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var circle,ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 580);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=createSprite(400,550,800,20);
	
	circle=createSprite(50,50,200,200);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  
  drawSprites();
 
}



