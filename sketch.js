const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var ground;

//namespacing

var engine,world;
var ball;
function setup() {
  createCanvas(windowWidth,windowHeight);
 engine = Engine.create();
 
 world = engine.world;

 var options = {
   isStatic:true
  
 }

 var ball_options = {
   restitution: 1.4
 }
 
 ground = Bodies.rectangle(width/2,height,width,5,options)
 World.add(world,ground);

 ball = Bodies.circle(200,100,50,ball_options);
 World.add(world,ball);
  
 console.log(ball.position.x,ball.position.y);
 
}

function draw() {
  background(0);  
  Engine.update(engine);
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,width,5)
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,50,50)
}