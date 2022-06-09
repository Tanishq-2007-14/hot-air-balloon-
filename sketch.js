var balloon,bg,obstacle1,obstacle2,obstacle3,obstacle4,restartButton,score,obstacleTop,obstacleGround;

/* balloon
ground
bg
obstacles
*/
function preload(){

balloonImg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png")
bgImg = loadImage("assets/bg2.jpg");
obstacle1 = loadImage("assets/obsBottom1.png");
obstacle2 = loadImage("assets/obsBottom2.png");
obstacle3 = loadImage("assets/obsBottom3.png");
obstacle4 = loadImage("assets/obsTop1.png");
obstacle5 = loadImage("assets/obsTop2.png");
restartImg = loadImage("assets/restart.png");
bg2Img = loadImage("assets/Game Over.jpg");

}
function setup(){
createCanvas(windowWidth,windowHeight)
bg = createSprite(windowWidth/2-100,windowHeight/2);
bg.addImage(bgImg);
bg.scale = 3;
bg.velocityX = -5;
// scale = 1 is equal to actual image

// creating the ground
ground = createSprite(windowWidth/2,windowHeight-10,windowWidth,40);
ground.visible = false;

balloon = createSprite(100,200);
balloon.addAnimation("balloon",balloonImg);
balloon.scale = 0.4;
score = 0;

}
function draw(){
    score = score + Math.round(frameCount/100);
    fill("blue");
    textSize(50);
    text("Score: "+ score,windowWidth/2-90,windowHeight/2,);
    

    if (bg.x < 150){
        bg.x = ground.width/2;
      }
if(keyDown("space")){
    balloon.velocityY = -5;
    var audio = new Audio("assets/jump.mp3");
    audio.play();

}
// adding the gravity
balloon.velocityY = balloon.velocityY + 0.5;

if(balloon.collide(ground)){
    gameState = END
    
};
// PENDING
if(gameState === END){
    //background(bg2Img);
    obstacleTop.hide();
    obstacleGround.hide();
    balloon.hide();
}


drawSprites();
spawnObstaclesTop();
spawnObstaclesGround();

}

function spawnObstaclesTop(){
if(frameCount % 170 === 0){
    obstacleTop = createSprite(windowWidth-10,50,40,50);
    obstacleTop.scale = 0.2;
    obstacleTop.velocityX = -5;
    obstacleTop.y = Math.round(random(50,250));

    var rand = Math.round(random(1,2))
    switch (rand){
        case 1: obstacleTop.addImage(obstacle4);
        break;
        case 2: obstacleTop.addImage(obstacle5);
        break;
        default: break;
    }
 obstacleTop.lifetime = windowWidth;
 //PENDING
 //if(score < 50){
  //  obstacleTop.velocityX = -100;
//}    
}

}
function spawnObstaclesGround(){
if(frameCount % 150 ===0){
    obstacleGround = createSprite(windowWidth-10,windowHeight-60,40,50);
    obstacleGround.scale = 0.2;
    obstacleGround.velocityX = -5;
    obstacleGround.y = ground.y-200

    var rand = Math.round(random(1,2,3))
    switch (rand){
        case 1: obstacleGround.addImage(obstacle1);
        break;
        case 2: obstacleGround.addImage(obstacle2);
        break;
        case 3: obstacleGround.addImage(obstacle3);
        break;
        default: break;
    }
 obstacleGround.lifetime = windowWidth;  
    

}




}



