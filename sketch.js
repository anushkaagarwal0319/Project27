
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Bob(150, 500, 50);
	bob2 = new Bob(250, 500, 50);
	bob3 = new Bob(350, 500, 50);
	bob4 = new Bob(450, 500, 50);
	bob5 = new Bob(550, 500, 50);

	roof = new roof(370, 50, 600, 50)

	rope1 = new Rope(bob1.body, roof.body, -215, 0)
	rope2 = new Rope(bob2.body, roof.body, -115, 0)
	rope3 = new Rope(bob3.body, roof.body, -15, 0)
	rope4 = new Rope(bob4.body, roof.body, +85, 0)
	rope5 = new Rope(bob5.body, roof.body, +185, 0)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof.display();


 
}




