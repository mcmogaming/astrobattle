var ship;
var TIMESTEP = 0.0167;
var WD_WIDTH = 400;
var WD_HEIGHT = 400;
var size = 10;

var objs = []; //List of all objects on screen

function setup() {
    createCanvas(400, 400);
    //Creating Player GameObject
    ship = new Ship(WD_WIDTH / 2, WD_HEIGHT / 2, 0, 0, 1, 0, 10);
    ship.setRTAdjustment(3 * Math.PI / 2);
    ship.setRotationSpeed(Math.PI / 64);
    ship.setAcceleration(4);
}

function draw() {
    background(220);
    for (let i = 0; i < objs.length; i++) {
        objs[i].physics();
        objs[i].draw();
    }
    ship.physics();
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
        ship.slowMotion();
    }
    if (keyIsDown(32)) { //Spacebar
        ship.shoot();
    }


}