var ship;
var TIMESTEP = 0.0167;
var WD_WIDTH = 400;
var WD_HEIGHT = 400;
var size = 10;

function setup() {
    createCanvas(400, 400);
    //Creating Player GameObject
    ship = new GameObject(WD_WIDTH / 2, WD_HEIGHT / 2, 0, 0, 1, 1, 10);

    //Creating shapes that makeup GameObject
    let v1 = createVector(0, size * 1);
    let v2 = createVector(size * Math.cos(7 * Math.PI / 6), size * Math.sin(7 * Math.PI / 6));
    let v3 = createVector(size * Math.cos(11 * Math.PI / 6), size * Math.sin(11 * Math.PI / 6));

    let points = [v1, v2, v3];

    let mainBody = new GameShape(points, 255, 255, 255, 1);

    //Add shape to the gameObject

    ship.addShape(mainBody);

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