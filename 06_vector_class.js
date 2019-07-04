class Vec {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    minus(v2) {
        return new Vec(this.x - v2.x, this.y - v2.y);
    }

    plus(v2) {
        return new Vec(this.x + v2.x, this.y + v2.y);
    }

    get length() {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }
}