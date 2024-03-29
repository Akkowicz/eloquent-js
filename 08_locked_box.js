const box = {
    locked: true,
    unlock() { this.locked = false; },
    lock() { this.locked = true;  },
    _content: [],
    get content() {
        if (this.locked) throw new Error('Locked!');
        return this._content;
    }
};
  
function withBoxUnlocked(body) {
    const status = box.locked;
    box.unlock();
    try {
        return body();
    } finally {
        if (status) box.lock();
    }
}