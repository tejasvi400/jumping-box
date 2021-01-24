var canvas;
var music;
var box1;
var box2;
var box3;
var box4;
var box5;
var ball; 
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(600,500);
    createEdgeSprites();
    
    box1=createSprite(550,480,100,20);
    box1.shapeColor="red";

    box2=createSprite(440,480,100,20);
    box2.shapeColor="pink";

    box3=createSprite(320,480,100,20);
    box3.shapeColor="purple";

    box4=createSprite(200,480,100,20);
    box4.shapeColor="yellow";

    box5=createSprite(80,480,100,20);
    box5.shapeColor="orange";

    ball=createSprite(200,300,20,20);
    ball.shapeColor="white";
    ball.velocityX=-5;
    ball.velocityY=-7;
    
   
}

function draw() {
    background("black");
    //create edgeSprite
    
   edges = createEdgeSprites(edges);

    
   isTouching();
    drawSprites();
    ball.bounceOff(edges);

    //add condition to check if box touching surface and make it box
}
 function isTouching(){

    if(box1.isTouching(ball) && ball.bounceOff(box1) ){
        ball.shapeColor=("red");
    }

    if(box2.isTouching(ball) && ball.bounceOff(box2) ){
        ball.shapeColor=("pink");
    }
    if(box3.isTouching(ball) && ball.bounceOff(box3) ){
        ball.shapeColor=("purple");
    }
    if(box4.isTouching(ball) && ball.bounceOff(box4) ){
        ball.shapeColor=("yellow");
    }
    if(box5.isTouching(ball) && ball.bounceOff(box5) ){
        ball.shapeColor=("orange");
    }


 }
