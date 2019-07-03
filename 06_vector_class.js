// Your code here.

class Vec {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    minus(v2) {
        return new Vec((this.x - v2._x), (this.y - v2._y));
    }

    plus(v2) {
        return new Vec((this.x + v2._x), (this.y + v2._y));
    }

    get _x() {
        return this.x;
    }

    get _y() {
        return this.y;
    }

    get length() {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }

    set _x(x) {
        this._x = x;
    }

    set _y(y) {
        this._y = y;
    }
}