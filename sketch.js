const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, aim1;
var backgroundImg,platform;
var bird, slingShot;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform1 = new Ground(150, 305, 300, 170);
    platform2 = new Ground(1000,170,270,10);
    bird = new Bird(200,50);
    aim1 = new Aim (900,150,20,40);
    aim2 = new Aim (920,150,20,40);
    aim3 = new Aim (940,150,20,40);
    aim4 = new Aim (960,150,20,40);
    aim5 = new Aim (980,150,20,40);
    aim6 = new Aim (1000,150,20,40);
    aim7 = new Aim(915,110,20,40);
    aim8 = new Aim(935,110,20,40);
    aim9 = new Aim(955,110,20,40);
    aim10 = new Aim(975,110,20,40);
    aim11 = new Aim(935,70,20,40);
    aim12 = new Aim(955,70,20,40);
    aim13 = new Aim(945,30,20,40);
    aim14 = new Aim (600,360,20,40);
    aim15= new Aim (620,360,20,40);
    aim16 = new Aim (640,360,20,40);
    aim17= new Aim (660,360,20,40);
    aim18 = new Aim (680,360,20,40);
    aim19= new Aim (700,360,20,40);
    aim20= new Aim(615,310,20,40);
    aim21 = new Aim(635,310,20,40);
    aim22= new Aim(655,310,20,40);
    aim23 = new Aim(675,310,20,40);
    aim24 = new Aim(635,170,20,40);
    aim25 = new Aim(655,170,20,40);
    aim26 = new Aim(645,130,20,40);

    bird = new Bird(200,50);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    
    ground.display();
    bird.display();
    platform1.display();
    platform2.display();
    slingshot.display(); 
    aim1.display ();
    aim2.display();
    aim3.display();
    aim4.display();
    aim5.display();
    aim6.display();
    aim7.display();
    aim8.display();
    aim9.display();
    aim10.display();
    aim11.display();
    aim12.display();
    aim13.display();
    aim14.display();
    aim15.display();
    aim16.display();
    aim17.display();
    aim18.display();
    aim19.display();
    aim20.display();
    aim21.display();
    aim22.display();
    aim23.display();
    aim24.display();
    aim25.display();
    aim26.display();

   
   
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if (keyCode===32){
        slingshot.attach(bird.body);
    }
}