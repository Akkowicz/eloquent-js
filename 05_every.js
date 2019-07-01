function every(array, test) {
    let result = true;
    for (let element of array) {
        result = test(element) && result;
    }
    return result;
}

function everyWithSome(array, test) {
    return !array.some(element => !test(element));
}