/*jshint esversion: 6 */
class Ship {

    constructor() {
        this.pos = createVector(WD_WIDTH / 2, WD_HEIGHT / 2);
        this.v = createVector(0, 0);
        this.a = 2;
        this.rt = 0;
        this.rtspeed = Math.PI * (1 / 256);
        this.size = 10;
    }

    draw() {
        fill(255, 0, 0);

        let v1 = createVector(0, this.size * 1);
        let v2 = createVector(this.size * Math.cos(7 * Math.PI / 6), this.size * Math.sin(7 * Math.PI / 6));
        let v3 = createVector(this.size * Math.cos(11 * Math.PI / 6), this.size * Math.sin(11 * Math.PI / 6));

        v1.rotate(this.rt);
        v2.rotate(this.rt);
        v3.rotate(this.rt);

        v1.add(this.pos);
        v2.add(this.pos);
        v3.add(this.pos);

        triangle(v1.x, v1.y, v2.x, v2.y, v3.x, v3.y);
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

}

class Bullet {

    constructor() {
        this.pos = createVector(WD_WIDTH / 2, WD_HEIGHT / 2);
        this.v = createVector(0, 0);
        this.a = 2;
        this.rt = 0;
        this.rtspeed = Math.PI * (1 / 256);
        this.size = 10;
    }

    draw() {
        fill(255, 0, 0);

        let v1 = createVector(0, this.size * 1);
        let v2 = createVector(this.size * Math.cos(7 * Math.PI / 6), this.size * Math.sin(7 * Math.PI / 6));
        let v3 = createVector(this.size * Math.cos(11 * Math.PI / 6), this.size * Math.sin(11 * Math.PI / 6));

        v1.rotate(this.rt);
        v2.rotate(this.rt);
        v3.rotate(this.rt);

        v1.add(this.pos);
        v2.add(this.pos);
        v3.add(this.pos);

        triangle(v1.x, v1.y, v2.x, v2.y, v3.x, v3.y);
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

}