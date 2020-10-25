
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var mango1, mango2, mango3, mango4, mango5, mango6;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,650, 800,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  if(collision(mango1,rock)){
	Matter.Body.setStatic(mango1.body,false);
  }
  drawSprites();
 
}
function collision(object1, object2){
	if(object1.x - object2.x < object2.width/2 + object1.width/2 &&
	 object2.x - object1.x < object2.width / 2 + object1.width / 2 &&
	  object1.y - object2.y < object2.height/2 + object1.height / 2 && 
	  object2.y - object2.y < object2.height/2 + object1.height/2){
		
	  return true;
	  }
	  else{
		  return false;
	  }
}



