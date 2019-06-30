// let list = {
//     value: 1,
//     rest: {
//       value: 2,
//       rest: {
//         value: 3,
//         rest: null
//       }
//     }
//   };

function arrayToList(arr, list = {value: null, rest: null}) {
    list.value = arr.shift();
    if (arr.length > 0) {
        list.rest = arrayToList(arr);
    }
    return list;
}

function listToArray(list, arr = []) {
    arr.push(list.value);
    if (list.rest) {
        listToArray(list.rest, arr);
    }
    return arr;
}

function prepend(el, list = {value: null, rest: null}) {
    list = {value: el, rest: list};
    return list;
}

function nth(list, depth) {
    let result = 0;
    if (depth > 0) {
        if (list.rest) {
            result = nth(list.rest, depth - 1);
        } else {
            return undefined;
        }
    } else {
        return list.value;
    }
    return result;
}