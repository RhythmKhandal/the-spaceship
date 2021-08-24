var space;
var spaceship,spaceshipImg;
var alien1,alien2,alien3,alien4,alien5,alien6,alien7,alien8,alien9,alienImg;
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var score = 0;

function preload(){

  space = loadImage("combined space.png");
  spaceshipImg = loadImage("spaceship.png");
  alienImg = loadImage("obstacle.png");
  gameOverImg = loadImage("gameover.png");
  sound = loadSound("gameover sound.mp3")
}


function setup() {
  createCanvas(700,650);

//creating spaceship
  spaceship = createSprite(350, 550, 50, 50);
  spaceship.addImage(spaceshipImg);
  spaceship.scale = 0.1;
  
//creating aliens
   alien1 = createSprite(random(50,200),100,20,20);
   alien1.addImage(alienImg);
   alien1.scale = 0.05;

   alien2 = createSprite(random(320,420),-150,20,20);
   alien2.addImage(alienImg);
   alien2.scale = 0.05;

   alien3 = createSprite(random(500,600),-450,20,20);
   alien3.addImage(alienImg);
   alien3.scale = 0.05;

   alien4 = createSprite(random(200,300),-650,20,20);
   alien4.addImage(alienImg);
   alien4.scale = 0.05;

   alien5 = createSprite(random(670,770),-850,20,20);
   alien5.addImage(alienImg);
   alien5.scale = 0.05;

   alien6 = createSprite(random(100,200),-1050,20,20);
   alien6.addImage(alienImg);
   alien6.scale = 0.05;

   alien7 = createSprite(random(620,720),-3050,20);
   alien7.addImage(alienImg);
   alien7.scale = 0.05;

   alien8 = createSprite(random(500,600),-5050,20);
   alien8.addImage(alienImg);
   alien8.scale = 0.05;

   alien9 = createSprite(random(200,300),-7050,20,20);
   alien9.addImage(alienImg);
   alien9.scale = 0.05;


}

function draw() {
  background("black");

//giving an image of space above the background
  image(space,0,-displayHeight*4,displayWidth,displayHeight*20)
 
  textSize(20);
  fill("white");
  text("Score: "+ score, 50,50);


if(gameState===PLAY){

 if(spaceship.y = spaceship.y-3){
   score = score+1;
 }

//moving the camera along witch tha spaceship
  camera.position.x = spaceship.x;
  camera.position.y = spaceship.y;

//moving the space ship with the help of up,right & left arrow keys
  // if(keyDown(UP_ARROW)){
  //   spaceship.y = spaceship.y-5;
  // }

  if(keyDown(RIGHT_ARROW)){
    spaceship.x = spaceship.x+5;
  }

  if(keyDown(LEFT_ARROW)){
    spaceship.x = spaceship.x-5;
  }

  if(spaceship.isTouching(alien3)){
    // textSize(50);
    // fill("white");
    // stroke("white");
    // text("Game Over!",220,325);
    // camera.position.x = 350;
    // camera.position.y = 325;
    // spaceship.x = alien3.x;
    // spaceship.y = alien3.y;
    gameState = END;

  }

  if(spaceship.isTouching(alien1)){
    // textSize(50);
    // fill("white");
    // stroke("white");
    // text("Game Over!",220,325);
    // camera.position.x = 350;
    // camera.position.y = 325;
    // spaceship.x = alien1.x;
    // spaceship.y = alien1.y;
    gameState = END;
    sound.play();
  }

  if(spaceship.isTouching(alien2)){
    // textSize(50);
    // fill("white");
    // stroke("white");
    // text("Game Over!",220,325);
    // camera.position.x = 350;
    // camera.position.y = 325;
    // spaceship.x = alien2.x;
    // spaceship.y = alien2.y;
    gameState = END;
    sound.play();
  }

  if(spaceship.isTouching(alien3)){
    // textSize(50);
    // fill("white");
    // stroke("white");
    // text("Game Over!",220,325);
    // camera.position.x = 350;
    // camera.position.y = 325;
    // spaceship.x = alien3.x;
    // spaceship.y = alien3.y;
    gameState = END;
    sound.play();
  }

  if(spaceship.isTouching(alien4)){
    // textSize(50);
    // fill("white");
    // stroke("white");
    // text("Game Over!",220,325);
    // camera.position.x = 350;
    // camera.position.y = 325;
    // spaceship.x = alien4.x;
    // spaceship.y = alien4.y;
    gameState = END;
    sound.play();
  }

  if(spaceship.isTouching(alien5)){
    // textSize(50);
    // fill("white");
    // stroke("white");
    // text("Game Over!",220,325);
    // camera.position.x = 350;
    // camera.position.y = 325;
    // spaceship.x = alien5.x;
    // spaceship.y = alien5.y;
    gameState = END;
    sound.play();
  }

  if(spaceship.isTouching(alien6)){
    // textSize(50);
    // fill("white");
    // stroke("white");
    // text("Game Over!",220,325);
    // camera.position.x = 350;
    // camera.position.y = 325;
    // spaceship.x = alien6.x;
    // spaceship.y = alien6.y;
    gameState = END;
    sound.play();
  }}

if(gameState===END){
  spaceship.addImage(gameOverImg);
  spaceship.scale = 1;
  spaceship.x = 350;
  spaceship.y = 325;
  camera.position.x = 350;
  camera.position.y = 325;
  alien1.visible = false;
  // text("Press space to restart",260,450)

  // if(keyDown(32)){
  //   reset();
  // }
}






//drawing sprites 
   drawSprites();
}
// function reset(){
//   gameState = PLAY;
//   gameOver.visible = false;
//   //restart.visible = false;
  
 
  
//   spaceship.addImage(spaceshipImg);
  
  
  
//   score = 0;
  
// }
 