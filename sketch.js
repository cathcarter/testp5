var ding;
var canvas;

//function preload() {
//  ding = loadSound("ding.mp3");
//}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style("z-index", "-1");
   background(255);
}

function draw() {
 // if (mouseIsPressed) {
 //   drawCircle(mouseX, mouseY);
}
  
function mousePressed() {
  fill(random(255), random(255), random(255), random(255));
  //noStroke();
  var diameter = random(100);
  circle(mouseX, mouseY, diameter);
  // if (diameter < 35) {
  //   ding.setVolume(0.3);
  // } else if (diameter > 35 && diameter < 70) {
  //   ding.setVolume(0.7);
  // } else if (diameter >= 70) {
  //     ding.setVolume(1.0);
  // }
  // ding.play();
}
  


