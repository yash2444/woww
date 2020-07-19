
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	base = new Ground(400,680,700,15);
	paper = new Player(200,600,15,15);
	dustbin1 = new Dustbin(590,650,10,40);
	dustbin2 = new Dustbin(640,665,100,10);
	dustbin3 = new Dustbin(690,630,10,80);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");
  
base.display();
paper.display();
dustbin1.display();
dustbin2.display();
dustbin3.display();
if (keyCode === UP_ARROW){
	keypressed();

}
}

function keypressed(){
	
Matter.Body.applyForce(paper.body,paper.body.position,{x:0.5,y:-0.6})
}