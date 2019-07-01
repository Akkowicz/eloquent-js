function loop(val, test, after, body) {
    while(test(val)) {
        body(val);
        val = after(val);
    }
}

loop(30, n => n > 0, n => n - 1, console.log);