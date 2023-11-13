const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
  return x - y;
};

const sum = function(numbers) {
	return Number(numbers.reduce((acc, current) => acc + current, 0));
};

const multiply = function(numbers) {
  return Number(numbers.reduce((acc, current) => acc * current));
};

const power = function(x, y) {
	return Number(x ** y);
};

const factorial = function(x) {
  if (x === 0 || x === 1) return 1;

  for (let i = x - 1; i >= 1; i--) {
    x *= i;
  }
  return x;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
