//creating constant bodies
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//let engine and world
let engine;
let world;
//creating variabes
var con;
var con2;
var ground;
var top_wall;
var ball;
var ball2;
var btn2;

function setup() {
  createCanvas(400,400);
//creating engine and world
  engine = Engine.create();
  world = engine.world;
  //creating properties of ball
   var ball_options = {
    restitution: 0.95,
  }
   
  //creating a button
  btn2 = createImg('up.png');
  btn2.position(20,30);
  btn2.size(50,50);
  btn2.mouseClicked(vForce);
  
   //creating a ground
  ground =new Ground(200,390,400,20);

//creating a ball
  ball = Bodies.circle(100,200,20,ball_options);
  World.add(world,ball);
  //creating ball 2
  ball2 = Bodies.circle(350,10,12,ball_options);
  World.add(world,ball2);
  
  
  //creating a constraint
con=Matter.Constraint.create({
  pointA:{x:200,y:20},
  bodyB:ball,
  pointB:{x:0,y:0},
  length:100,
  stiffness:0.1
});


//adding to the world
World.add(world,con);

//creating a constraint2
con2=Matter.Constraint.create({
  bodyA:ball,
  pointA:{x:0,y:0},
  bodyB:ball2,
  pointB:{x:0,y:0},
  length:100,
  stiffness:0.1
});


//adding to the world
World.add(world,con2);



  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  

  ellipse(ball.position.x,ball.position.y,20);
  ellipse(ball2.position.x,ball2.position.y,22);
  ground.show();
  //display
  strokeWeight(5);
  stroke("green");
  fill ("red");
  line (con.pointA.x,con.pointA.y,ball.position.x,ball.position.y);
  line (ball.position.x,ball.position.y,ball2.position.x,ball2.position.y);
  Engine.update(engine);
}


function vForce()
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
}
  


