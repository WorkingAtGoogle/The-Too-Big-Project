var ship, ship2;
var endScreen, restartBtn;
var sky, meteor, bg;
var shipImg, shipImg2, endScreenImg, restartBtnImg, skyImg, meteorImg, bgImg;
var gameState = "play"
var score = 0;
function preload() {
shipImg = loadImage("mainShip.png");
shipImg2 = loadImage("mainShip2.png");
endScreenImg = loadImage("endScreen.png");
restartBtnImg = loadImage("restartBtn.png");
skyImg = loadImage("sky.png");
meteorImg = loadImage("meteor.png")

}

function setup() {
createCanvas(600, 600);
bg = createSprite(300, 300);
bg.addImage("bgImage", bgImg);
bg.velocityY = 1;

ship = createSprite(200, 200, 50, 50);
ship.scale = 0.3
ship.addImage("shipImage", shipImg)

}

function draw() {
    background(255);

    if (gameState === "play") {
    
        if(keyDown("left") || keyDown("a")){
         ship.x -=5
        }
        if(keyDown("right") || keyDown("d")){
         ship.x +=5
          
        }
        if(keyDown("space")){
      
         ship.velocityY =-10
          
        }
      
      ship.velocityY = ship.velocityY + 0.8;
      
       
        if (bg.y > 400){
          bg.y = 300
        }
    
      
      //if (climbersGroup.isTouching(ship)){
        //ship.velocityY = 0
      
    
      //if (climbersGroup.isTouching(ship) || ship.y > 600){
       //gameState = "end"
       //ship.destroy()
      
    
    drawSprites();
    }
  }