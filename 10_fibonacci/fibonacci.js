const fibonacci = function(x) {
    if (x < 0) return "OOPS";

    const fib = [1, 1];

    for (let i = 2; i < x; i++) {
        let next = fib[i - 1] + fib[i - 2];
        fib.push(next);
    }
    return fib[x - 1];
};

// Do not edit below this line
module.exports = fibonacci;
