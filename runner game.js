var path
var background
var walker
var walkeranimation

function preload(){
  //pre-load images
  path = loadImage("path.png")
  walker = loadAnimation("Runner-1.png", "Runner-2.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  background = createSprite(200,200)
  path.addImage(path)
  path.velocity = 3
  path.scale = 1.3
  boywalker = createSprite(200,270,40,45)
  boywalker.addAnimation("walkeranimation", walkanimation)
  boywalker.scale = 0.1
  

}

function draw() {
  background(0);
  
  if(path.y > 400){
    path.y = height/2
  }
  
boywalker.x = mouseX
boywalker.y = mouseY

drawsprite()


}
