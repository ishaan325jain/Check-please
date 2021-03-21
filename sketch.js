
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var chain1,chain2,chain3,chain4,chain5,chain6;
var roof;
var ball1,ball2,ball3,ball4,ball5,ball6;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here. What has happened ?
	roof  = new Ground (460,200,150,20);
	
	ball1 = new Paper  (400,400,25);
	ball2 = new Paper  (425,400,25);
	ball3 = new Paper  (450,400,25);
	ball4 = new Paper  (475,400,25);
	ball5 = new Paper  (500,400,25);
	ball6 = new Paper  (525,400,25);

	chain1 = new Chain  ({x:400,y:200},ball1.body);
	chain2 = new Chain  ({x:425,y:200},ball2.body);
	chain3 = new Chain  ({x:450,y:200},ball3.body);
	chain4 = new Chain  ({x:475,y:200},ball4.body);
	chain5 = new Chain  ({x:500,y:200},ball5.body);
	chain6 = new Chain  ({x:525,y:200},ball6.body);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
	

	roof.display();

	ball1.display();
	ball2.display();
	ball3.display();
	ball4.display();
	ball5.display();
	ball6.display();

	chain1.display();
	chain2.display();
	chain3.display();
	chain4.display();
	chain5.display();
	chain6.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		console.log("hello");
		ball1.body.position.x = 200 ;
		ball1.body.position.y = 200 ;
	}
}

