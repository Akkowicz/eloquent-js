function range(start, end, step = start < end ? 1 : -1) {
    const result = [];
    if (step >= 0) {
        for (let i = start; i <= end; i += step) {
            result.push(i);
        }
    } else {
        for (let i = start; i >= end; i += step) {
            result.push(i);
        }
    }
    return result;
}

function sum(arr) {
    let result = 0;
    for (let val of arr) {
        result += val;
    }
    return result;
}