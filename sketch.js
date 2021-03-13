
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var plinkos= []
var divisions= []
var particles= []

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;
    ground=new Ground(400, 800, 800, 20)
    for(var k=0; k<= 800; k=k+80){
        division=new Division(k, 650, 10, 300)
        divisions.push(division)
    }
    for(var k=75; k<= 800; k=k+50){
        plinko=new Plinko(k, 75, 10)
        plinkos.push(plinko)
    }
    for(var k=50; k<= 790; k=k+50){
        plinko=new Plinko(k, 175, 10)
        plinkos.push(plinko)
    }  
    for(var k=75; k<= 800; k=k+50){
        plinko=new Plinko(k, 275, 10)
        plinkos.push(plinko)
    } 
    for(var k=50; k<= 790; k=k+50){
        plinko=new Plinko(k, 375, 10)
        plinkos.push(plinko)
    }
}


function draw() {
    background("black");
    Engine.update(engine)
    ground.display()
    for(var i in divisions){
    divisions[i].display()
    }
    for(var i in plinkos){
        plinkos[i].display()
    }
    if(frameCount%60 === 0){
        particle=new Particle(random(100, 700), 0, 10)
        particles.push(particle)
    }
    for(var i in particles){
        particles[i].display()
        }
}

