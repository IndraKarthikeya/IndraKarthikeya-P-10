var sea, seabackground;
var ship, ship_Run;

function preload() {
  seaBackground = loadImage("sea.png");
  ship_Run = loadAnimation(
    "ship-1.png",
    "ship-2.png",
    "ship-3.png",
    "ship-4.png"
  );
}

function setup() {
  createCanvas(400, 400);
  sea = createSprite(200, 200, 400, 400);
  sea.velocityX = -4;
  sea.addImage(seaBackground);
  sea.scale = 0.5;

  ship = createSprite(140, 255, 50, 50);
  ship.addAnimation("Move", ship_Run);
  ship.scale = 0.3;
}

function draw() {
  background("blue");
  if (sea.x < 0) {
    //sea.x = sea.width / 2;
    sea.x = 300;
  }

  drawSprites();
}
