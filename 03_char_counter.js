function countChar(str, char) {
    let count = 0;
    for (let c of str) {
        if (c === char) count++;
    }
    return count;
}

function countBs(str) {
    return countChar(str, 'B');
}