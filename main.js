let pursuer;
let target;
let target2;

function setup() {
  createCanvas(800, 400);
  pursuer = new Vehicle(250, 250);
  target = new Target(100, 100);

}


function draw() {
  background(50);

  let steering = pursuer.wander();
  pursuer.applyForce(steering);

  pursuer.update();
  pursuer.edges();
  pursuer.show();  


}