
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bwall, lwall, rwall, twall;
var tcL, tcB, tcR;
var trash;
var trashIMG;

var Power = 20

//function preload()
//{
	
//}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	
	
	bwall = new Wall(400, 667, 800, 30)
	lwall = new Wall(0, 350, 30, 700)
	rwall = new Wall(800, 350, 30, 700)
	twall = new Wall(400, 0, 800, 30)
	tcL = new TrashCan(595, 600, 10, 120)
	tcR = new TrashCan(705, 600, 10, 120)
	tcB = new TrashCan(650, 650, 100, 20)
	trash = new Trash(50, 640, 10)
	trashIMG = new TrashIMG(650, 600, 50, 50)


trashIMG.scale=140
  
}


function draw() {
  background(255);


Engine.update(engine)

//bwall.display()

tcL.display()
tcB.display()
tcR.display()
trash.display()
trashIMG.display()

/*
if(keyCode === DOWN_ARROW){
	
	Power = Power-0.3
	
	}

	if(keyCode === UP_ARROW){
	
		Power = Power+0.3
		
		}

*/
}



function keyPressed(){

	if (keyCode === RIGHT_ARROW){
	Body.applyForce(trash.ball, trash.ball.position,{x: Power, y:-Power});
	}
	
	if (keyCode === LEFT_ARROW){
		Body.applyForce(trash.ball, trash.ball.position,{x: -Power, y:-Power});
	}	

}