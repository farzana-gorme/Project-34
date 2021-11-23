
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;

var forest_img;
var apple, appleImg, apple2, apple3, apple4, apple5;
var slingShot, angle;

function preload() {
  forest_img = loadImage("/Assets/Forest.jpg")
  appleImg = loadImage("/Assets/Apple.png")

}

function setup() {
  createCanvas(700,630);
  engine = Engine.create();
  world = engine.world;

  angleMode(DEGREES)
  angle = 15;
  

  apple = Bodies.rectangle(170, 150, 100, 100, { isStatic: true });
  World.add(world, apple);

  apple2 = Bodies.rectangle(260, 55, 100, 100, { isStatic: true });
  World.add(world, apple2);

  apple3 = Bodies.rectangle(370, 100, 100, 100, { isStatic: true });
  World.add(world, apple3);

  apple4 = Bodies.rectangle(470, 30, 100, 100, { isStatic: true });
  World.add(world, apple4);

  apple5 = Bodies.rectangle(560, 160, 100, 100, { isStatic: true });
  World.add(world, apple5);

  slingShot = new SlingShot(30, 580, 100, 50, angle);

  

 
  
}


function draw() 
{
  background(51);
  image(forest_img, 0,0,width,height);

  Engine.update(engine);

  push();
  translate(apple.position.x, apple.position.y);
  rotate(apple.angle);
  imageMode(CENTER);
  image(appleImg, 0, 0, 70, 70);
  pop();

  push();
  translate(apple2.position.x, apple2.position.y);
  rotate(apple2.angle);
  imageMode(CENTER);
  image(appleImg, 0, 0, 70, 70);
  pop();

  push();
  translate(apple3.position.x, apple3.position.y);
  rotate(apple3.angle);
  imageMode(CENTER);
  image(appleImg, 0, 0, 70, 70);
  pop();

  push();
  translate(apple4.position.x, apple4.position.y);
  rotate(apple4.angle);
  imageMode(CENTER);
  image(appleImg, 0, 0, 70, 70);
  pop();

  push();
  translate(apple5.position.x, apple5.position.y);
  rotate(apple5.angle);
  imageMode(CENTER);
  image(appleImg, 0, 0, 70, 70);
  pop();

  slingShot.display();
  

  drawSprites();
}

