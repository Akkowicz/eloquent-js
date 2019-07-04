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
        return this.members.includes(val);
    }

    static from(iterable) {
        const group = new Group();
        for (let el of iterable) {
            group.add(el);
        }
        return group;
    }
}