const arrays = [[1, 2, 3], [4, 5], [6]];

const newArr = arrays.reduce((previous, current) => {
    return previous.concat(current);
});