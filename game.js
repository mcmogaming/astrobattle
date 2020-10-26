var ship;
var TIMESTEP = 0.0167;
var WD_WIDTH = 400;
var WD_HEIGHT = 400;


function setup() {
    createCanvas(400, 400);
    ship = new Ship();
}

function draw() {
    ship.physics();
    background(220);
    ship.draw();
    controls();
}

function controls() {
    if (keyIsDown(LEFT_ARROW)) {
        ship.rotateCCW();
    } else if (keyIsDown(RIGHT_ARROW)) {
        ship.rotateCW();
    }
    if (keyIsDown(UP_ARROW)) {
        ship.accelerate();
    }
    if (keyIsDown(DOWN_ARROW)) {
        ship.deccelerate();
    }

}