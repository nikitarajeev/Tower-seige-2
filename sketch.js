const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var ground,ground2;

function preload (){
  hex = loadImage("hexagonimg.jpg");
}


function setup() {
  createCanvas(1200,1200);

  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  lowerGround= new Ground(550,450,400,25)
  upperGround = new Ground(1000,300,330,25)
  biggr = new Ground(600,900,1200,30)

 // The lower block line 6 
  lowergr1Block1 = new Box1(400,412,30,50)
  lowergr1Block2 = new Box1(430,412,30,50)
  lowergr1Block3 = new Box1(460,412,30,50)
  lowergr1Block4 = new Box1(490,412,30,50)
  lowergr1Block5 = new Box1(520,412,30,50)
  lowergr1Block6 = new Box1(550,412,30,50)
  lowergr1Block7 = new Box1(580,412,30,50)
  lowergr1Block8 = new Box1(610,412,30,50)
  lowergr1Block9 = new Box1(640,412,30,50)
  lowergr1Block10 = new Box1(670,412,30,50)
  lowergr1Block11 = new Box1(700,412,30,50)

  // The lower block line 5 
  lowergr2Block1 = new Box2(430,362,30,50)
  lowergr2Block2 = new Box2(460,362,30,50)
  lowergr2Block3 = new Box2(490,362,30,50)
  lowergr2Block4 = new Box2(520,362,30,50)
  lowergr2Block5 = new Box2(550,362,30,50)
  lowergr2Block6 = new Box2(580,362,30,50)
  lowergr2Block7 = new Box2(610,362,30,50)
  lowergr2Block8 = new Box2(640,362,30,50)
  lowergr2Block9 = new Box2(670,362,30,50)

   // The lower block line 4
   lowergr3Block1 = new Box3(460,312,30,50)
   lowergr3Block2 = new Box3(490,312,30,50)
   lowergr3Block3 = new Box3(520,312,30,50)
   lowergr3Block4 = new Box3(550,312,30,50)
   lowergr3Block5 = new Box3(580,312,30,50)
   lowergr3Block6 = new Box3(610,312,30,50)
   lowergr3Block7 = new Box3(640,312,30,50)

   // The lower block line 3 
  lowergr4Block1 = new Box(490,263,30,50)
  lowergr4Block2 = new Box(520,263,30,50)
  lowergr4Block3 = new Box(550,263,30,50)
  lowergr4Block4 = new Box(580,263,30,50)
  lowergr4Block5 = new Box(610,263,30,50)
 
  // The lower block line 2 
  lowergr5Block1 = new Box4(520,212,30,50)
  lowergr5Block2 = new Box4(550,212,30,50)
  lowergr5Block3 = new Box4(580,212,30,50)
 
  // The lower block line 1
  lowergr6Block2 = new Box5(550,161,30,50)




  // The upper block line 1 
  uppergr1Block1 = new Box1(870,263,30,50)
  uppergr1Block2 = new Box1(900,263,30,50)
  uppergr1Block3 = new Box1(930,263,30,50)
  uppergr1Block4 = new Box1(960,263,30,50)
  uppergr1Block5 = new Box1(990,263,30,50)
  uppergr1Block6 = new Box1(1020,263,30,50)
  uppergr1Block7 = new Box1(1050,263,30,50)
  uppergr1Block8 = new Box1(1080,263,30,50)
  uppergr1Block9 = new Box1(1110,263,30,50)
  uppergr1Block10 = new Box1(1140,263,30,50)


   // The upper block line 2 
   
   uppergr2Block1 = new Box2(900,213,30,50)
   uppergr2Block2 = new Box2(930,213,30,50)
   uppergr2Block3 = new Box2(960,213,30,50)
   uppergr2Block4 = new Box2(990,213,30,50)
   uppergr2Block5 = new Box2(1020,213,30,50)
   uppergr2Block6 = new Box2(1050,213,30,50)
   uppergr2Block7 = new Box2(1080,213,30,50)
   uppergr2Block8 = new Box2(1110,213,30,50)

   // The upper block line 3   
   uppergr3Block1 = new Box3(930,163,30,50)
   uppergr3Block2 = new Box3(960,163,30,50)
   uppergr3Block3 = new Box3(990,163,30,50)
   uppergr3Block4 = new Box3(1020,163,30,50)
   uppergr3Block5 = new Box3(1050,163,30,50)
   uppergr3Block6 = new Box3(1080,163,30,50)


   // The upper block line 4 
   uppergr4Block1 = new Box4(960,113,30,50)
   uppergr4Block2 = new Box4(990,113,30,50)
   uppergr4Block3 = new Box4(1020,113,30,50)
   uppergr4Block4 = new Box4(1050,113,30,50)

  // The upper block line 5
   uppergr5Block1 = new Box5(990,63,30,50)
   uppergr5Block2 = new Box5(1020,63,30,50)

  // The upper block line 5
   uppergr6Block1 = new Box(1005,13,30,50)


  polygon = Bodies.circle(50,200,40);
  World.add(world,polygon);

  slingshot = new SlingShot(this.polygon,{x:100,y:200});
  
  
 
 





 

 


  

}

function draw() {
  background("lightgreen"); 

  Engine.update(engine);


  upperGround.display();  
  lowerGround.display();
  biggr.display();

  lowergr1Block1.display();
  lowergr1Block2.display();
  lowergr1Block3.display();
  lowergr1Block4.display();
  lowergr1Block5.display();
  lowergr1Block6.display();
  lowergr1Block7.display();
  lowergr1Block8.display();
  lowergr1Block9.display();
  lowergr1Block10.display();
  lowergr1Block11.display();

  lowergr2Block1.display();
  lowergr2Block2.display();
  lowergr2Block3.display();
  lowergr2Block4.display();
  lowergr2Block5.display();
  lowergr2Block6.display();
  lowergr2Block7.display();
  lowergr2Block8.display();
  lowergr2Block9.display();

   
  lowergr3Block1.display();
  lowergr3Block2.display();
  lowergr3Block3.display();
  lowergr3Block4.display();
  lowergr3Block5.display();
  lowergr3Block6.display();
  lowergr3Block7.display();
 
 
  lowergr4Block1.display();
  lowergr4Block2.display();
  lowergr4Block3.display();
  lowergr4Block4.display();
  lowergr4Block5.display();
 
  lowergr5Block1.display();
  lowergr5Block2.display();
  lowergr5Block3.display();
 
  lowergr6Block2.display();



  uppergr1Block1.display();
  uppergr1Block2.display();
  uppergr1Block3.display();
  uppergr1Block4.display();
  uppergr1Block5.display();
  uppergr1Block6.display();
  uppergr1Block7.display();
  uppergr1Block8.display();
  uppergr1Block9.display();
  uppergr1Block10.display();

  uppergr2Block1.display();
  uppergr2Block2.display();
  uppergr2Block3.display();
  uppergr2Block4.display();
  uppergr2Block5.display();
  uppergr2Block6.display();
  uppergr2Block7.display();
  uppergr2Block8.display();

  uppergr3Block1.display();
  uppergr3Block2.display();
  uppergr3Block3.display();
  uppergr3Block4.display();
  uppergr3Block5.display();
  uppergr3Block6.display();

  uppergr4Block1.display();
  uppergr4Block2.display();
  uppergr4Block3.display();
  uppergr4Block4.display();

  uppergr5Block1.display();
  uppergr5Block2.display();

  uppergr6Block1.display();

  //ellipse(polygon.position.x,polygon.position.y,20,20)
  imageMode (CENTER)
  image(hex,polygon.position.x,polygon.position.y,40,40)

 

  




  drawSprites();
}


function mouseDragged(){
  Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}