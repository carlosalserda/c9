var Box;
function setup() {
  createCanvas(400,400);
  Box=createSprite(200,200,50,50)
}

function draw() 
{
  background(30);
if (keyIsDown(RIGHT_ARROW)){
  Box.position.x=Box.position.x + 5
}
if (keyIsDown(LEFT_ARROW)){
  Box.position.x=Box.position.x - 5
}
if(keyIsDown(UP_ARROW)){
  Box.position.y=Box.position.y - 5
}
if(keyIsDown(DOWN_ARROW)){
  Box.position.y=Box.position.y + 5
}

drawSprites()
}




