function setup() {
  createCanvas(600, 600);
  background("white");
}

function draw() {
  
  stroke("blue");
  fill("red");
  // conole.log(mouseIPressed);
  
  if(mouseIsPressed) {
    rect(mouseX, mouseY, 20, 35);  
 }
}