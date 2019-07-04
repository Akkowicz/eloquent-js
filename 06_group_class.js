class Group {
    constructor() {
    }

    add(val) {
        this[val] = val;
    }

    delete(val) {
        delete this[val];
    }

    has(val) {
        return Object.prototype.hasOwnProperty.call(this, val);
    }

    static from(iterable) {
        const group = new Group();
        for (let el of iterable) {
            group.add(el);
        }
        return group;
    }
}