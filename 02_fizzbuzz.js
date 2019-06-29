for (let n = 1; n < 101; n++) {
    let result = '';
    if (n % 3 === 0) result += 'Fizz';
    if (n % 5 === 0) result += 'Buzz';
    console.log(result || n);
}