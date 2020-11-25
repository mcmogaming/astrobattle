/*jshint esversion: 6 */
class Ship extends GameObject {

    constructor(x, y, vx, vy, a, rt, size) {
        super(x, y, vx, vy, a, rt, size);
        this.pos = createVector(WD_WIDTH / 2, WD_HEIGHT / 2);
        this.setupGameShapes();
        this.fireRate = 15;

    }

    setupGameShapes() {
        //Creating shapes that makeup GameObject
        let v1 = createVector(0, size * 2);
        let v2 = createVector(size * Math.cos(7 * Math.PI / 6), size * Math.sin(7 * Math.PI / 6));
        let v3 = createVector(size * Math.cos(11 * Math.PI / 6), size * Math.sin(11 * Math.PI / 6));

        let points = [v1, v2, v3];

        this.addShape(new GameShape(points, 255, 255, 255, 0));
    }

    shoot() {
        console.log("test");
        if (frameCount % this.fireRate == 0) {
            objs.push(new Bullet(this.pos.x, this.pos.y, 200 * Math.cos(this.rt), 200 * Math.sin(this.rt)));
        }
    }



}

class Bullet {

    constructor(x, y, vx, vy) {
        this.pos = createVector(x, y);
        this.v = createVector(vx, vy);
        this.a = 2;
        this.rt = 0;
        this.rtspeed = Math.PI * (1 / 256);
        this.size = 10;
    }

    draw() {
        fill(255, 0, 0);
        circle(this.pos.x, this.pos.y, this.size);
    }

    rotateCW() {
        this.rt += this.rtspeed;
        //this.check_rotation();
    }

    rotateCCW() {
        this.rt += -this.rtspeed;
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
            this.removeObject();
            this.pos.x = WD_WIDTH;
            this.v.x = -this.v.x;

        }

        if (this.pos.y > WD_HEIGHT) {
            this.removeObject();
            this.pos.y = WD_HEIGHT;
            this.v.y = -this.v.y;
        }

        if (this.pos.x < 0) {
            this.removeObject();
            this.pos.x = 0;
            this.v.x = -this.v.x;
        }

        if (this.pos.y < 0) {
            this.removeObject();
            this.pos.y = 0;
            this.v.y = -this.v.y;
        }
    }

    removeObject() {
        objs = _.remove(objs, function(n) {
            return __.isEqual(n.pos, this.pos);
        });
    }

}