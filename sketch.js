const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body= Matter.Body;

var world;
var engine;
var particles=[];
var plinkos=[]
var divisions=[];
 var divisionHeight=300;



function setup() {
  createCanvas(800,600);
  engine = Engine.create();
  world = engine.world;
 
  ground= new Ground(400,890,800,20);

  for(var i=0;i<=width; i=i+80){
    divisions.push(new Divisions(i,height-divisionHeight/2,10,divisionHeight))
  }

  for(var j=75;j<=width; j=j+50){
    plinkos.push(new Plinko(j,75))

  }

  for(var j=50;j<=width; j=j+50){
    plinkos.push(new Plinko(j,175))

  }

  for(var j=75;j<=width; j=j+50){
    plinkos.push(new Plinko(j,275))

  }

  for(var j=50;j<=width; j=j+50){
    plinkos.push(new Plinko(j,375))

  }
  
  
}

function draw() {
  background("black");  
  drawSprites();


  
  for (var n=0;n<divisions.length;n++){
    divisions[n].display();
  }

  if (frameCount%60===0){
    particles.push(new Particle(random(width/2-30,width/2+30),10,10));

  }
for (var h=0;h<divisions.length;h++){
    divisions[h].display();
  }
  for (var j=0;j<divisions.length;j++){
    divisions[j].display();
  }










}

