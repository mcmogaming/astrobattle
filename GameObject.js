/*jshint esversion: 6 */

class GameObject {

    constructor(x, y, vx, vy, a, rt, size) {
        this.pos = createVector(x, y);
        this.v = createVector(vx, vy);
        this.a = a;
        this.rt = rt;
        this.rtspeed = Math.PI * (1 / 256);
        this.size = size;

        this.shapes = [];

    }

    draw() {
        for (let i = 0; i < this.shapes.length; i++) {
            let s = this.shapes[i];
            s.setPos(this.pos);
            s.setRotation(this.rt);
            s.draw();
        }
    }

    rotateCW() {
        this.rt += this.rtspeed;
        //this.check_rotation();
    }

    rotateCCW() {
        this.rt += -this.rtspeed;
        //this.check_rotation();
    }

    rotate(rt) {
        this.rt += this.rtspeed;
        //this.check_rotation();
    }

    check_rotation() {
        if (this.rt > 2 * Math.PI) {
            this.rt = this.rt - Math.PI;
        }

        if (this.rt < 0) {
            this.rt = Math.PI + this.rt;
        }
    }

    accelerate() {
        this.v.add(createVector(this.a * Math.cos(this.rt), this.a * Math.sin(this.rt)));
    }

    deccelerate() {
        this.v.add(createVector(-this.a * Math.cos(this.rt), -this.a * Math.sin(this.rt)));
    }

    physics() {
        this.pos.add(createVector(this.v.x * TIMESTEP, this.v.y * TIMESTEP));
        this.checkwallbounds();
    }

    checkwallbounds() {
        if (this.pos.x > WD_WIDTH) {
            this.pos.x = WD_WIDTH;
            this.v.x = -this.v.x;
        }

        if (this.pos.y > WD_HEIGHT) {
            this.pos.y = WD_HEIGHT;
            this.v.y = -this.v.y;
        }

        if (this.pos.x < 0) {
            this.pos.x = 0;
            this.v.x = -this.v.x;
        }

        if (this.pos.y < 0) {
            this.pos.y = 0;
            this.v.y = -this.v.y;
        }
    }

    addShape(shape) {
        this.shapes.push(shape);
    }

}

class GameShape {

    constructor(points, r, g, b, a) {
        this.points = points;
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;

        this.x = 0;
        this.y = 0;

        this.rt = 0;

        this.bolVisible = false;
    }

    draw() {
        beginShape();
        for (let i = 0; i < this.points.length; i++) {
            let p = createVector(this.points[i].x, this.points[i].y);
            p.rotate(this.rt);
            vertex(p.x + this.x, p.y + this.y);
        }
        endShape(CLOSE);
    }

    setVisibility(state) {
        this.bolVisible = state;
    }

    setPos(vecPos) {
        this.x = vecPos.x;
        this.y = vecPos.y;
    }

    setRotation(rt) {
        this.rt = rt;
    }

}

class BOJO {

    constructor() {
        this.a = 1;
    }

}