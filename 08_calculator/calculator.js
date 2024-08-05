const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(arr) {
	return arr.reduce((sum, item) => {return sum + item}, 0);
};

const multiply = function(arr) {
  return arr.reduce((total, item) => total * item);;
};

const power = function(a, b) {
	return a**b
};

const factorial = function(a) {
	let fact = 1;
  while (a > 1) {
    fact *= a;
    a--;
  }
  return fact;
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
