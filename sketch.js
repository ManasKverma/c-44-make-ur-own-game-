var bg,bgImg;
var player, shooterImg, shooter_shooting;
var players = []
var playerA , playerB


function preload(){
  
  shooterImg = loadImage("assets/noice.png")
  shooter_shooting = loadImage("assets/shooter_3.png")

  bgImg = loadImage("assets/Capture.JPG")

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image   3
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 1
  
var x = displayWidth/3;
var y = 0;

for(var i = 0; i<10 ; i++){
  y = y+displayHeight / 6;
  if( y === displayHeight){
    y = displayHeight / 6
    x =  2*x
  }
  player = createSprite(x,y-45, 50, 50);
  player.addImage(shooterImg)
    player.scale = 0.1 
    player.debug = true
    player.setCollider("rectangle",0,0,300,300)
    players.push(player)
}
}

function draw() {
  background(0); 
  for(var index in players) {
     if(mousePressedOver(players[index]))
      { console.log(players[index].x+", "+players[index].y);
     } 
    }



  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}


//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
 
  player.addImage(shooter_shooting)
 
}

//player goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("space")){
  player.addImage(shooterImg)
}

drawSprites();

}
