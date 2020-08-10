const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var stone,ground;

function preload() {
 
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
    world = engine.world;

  stone =new Stone(100, 200);
}

function draw() {
  background("#044787");  
  Engine.update(engine);
  //stone("#FFD800")

  stone.display();
}
//   https://us02web.zoom.us/j/84136657417 (Password: yuPH7chUSw)





