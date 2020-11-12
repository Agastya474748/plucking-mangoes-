const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var world;
var mango1;
var girl, slingshot;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
 

    ground = new Ground(600,height,1200,20);

    mango1 = new mango(810, 350);


    girl = new Girl(100,100);

    
    slingshot = new Slingshot(girl.body,{x:200,y:100});
}

function draw(){
    Engine.update(engine);
    strokeWeight(4);

    ground.display();
    pig1.display();

    girl.display();
    
    slingshot.display();    
}
function mouseDragged(){
    Matter.Body.setPosition(girl.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    slingshot.fly()
}