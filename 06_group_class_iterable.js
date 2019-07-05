class Group {
    constructor() {
        this.members = [];
    }

    add(val) {
        if (!this.has(val)) {
            this.members.push(val);
        }
    }

    delete(val) {
        this.members = this.members.filter(v => v !== val);
    }

    has(val) {
        this.members.includes(val);
    }

    static from(iterable) {
        const group = new Group();
        for (let el of iterable) {
            group.add(el);
        }
        return group;
    }

    [Symbol.iterator]() {
        return new GroupIterator(this);
    }
}

class GroupIterator {
    constructor(group) {
        this.i = 0;
        this.group = group;
    }
  
    next() {
        if (this.i >= this.group.members.length) return {done: true};
        const value = this.group.members[this.i++];
        return {value, done: false};
    }
}