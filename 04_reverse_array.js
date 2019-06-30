function reverseArray(arr) {
    const newArr = [];
    for (let val of arr) {
        newArr.unshift(val);
    }
    return newArr;
}

function reverseArrayInPlace(arr) {
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
        [arr[i], arr[arr.length - i - 1]] = [arr[arr.length - i - 1], arr[i]]; 
    }
    return arr;
}
