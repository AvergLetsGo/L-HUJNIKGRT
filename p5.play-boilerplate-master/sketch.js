function preload(){
BG = loadImage("space.jpg")
UFO = loadImage("ufo.png")
joemama = loadSound("joemamar.mp3")
asteroidi = loadImage("asteroid.png")
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  BGI = createSprite(0, 0, width, height);
  BGI.addImage("star", BG)
  BGI.scale = 2
  ufo = createSprite(400, 200, 100, 100)
  ufo.addImage("ufoi", UFO)
  ufo.scale = 0.1;
  Edges = createEdgeSprites()
  ufo.bounceOff(Edges)
  ufo.setCollider("rectangle", 0, 90, 2200, 1300)
  deathGroup = new Group()
  score = 0;
}

function draw() {
  background(255,255,255); 
  ufo.bounceOff(Edges)
  if(keyDown(RIGHT_ARROW)){
    ufo.x = ufo.x + 10
  }
  if(keyDown(LEFT_ARROW)){
    ufo.x = ufo.x - 10
  }
  if(keyDown(UP_ARROW)){
    ufo.y = ufo.y - 10
  }
  if(keyDown(DOWN_ARROW)){
    ufo.y = ufo.y + 10
  }
  SpawnDeath();
  drawSprites();
  fill("Black")
  textSize(101)
  text("Score  = " + score, windowWidth/2 + 700, windowHeight/2 - 525)
  if(ufo.isTouching(deathGroup)){
    joemama.play();
    score = 0;
    deathGroup.destroyEach();
  }
}


function SpawnDeath(){
if(frameCount % 10 === 0){
  var death = createSprite(random(0, windowWidth), random(0, windowHeight), 25, 25)
  death.addImage("asteroid", asteroidi)
 death.shapeColor = "red"
 death.scale = 0.1
death.bounceOff(Edges);
death.velocityX = (random(-3,3))
death.velocityY = (random(-3,3))
tint(death, 122)
setTimeout(tint(death, 255),4000);
setTimeout(deathGroup.add(death),4000);
//deathGroup.add(death)
death.bounceOff(deathGroup);
score = score + 10;
}




}
