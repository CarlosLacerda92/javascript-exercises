const add = function(a, b) {
  return Number(a) + Number(b);
};

const subtract = function(a, b) {
	return Number(a) - Number(b);
};

const sum = function(arr) {
	return arr.reduce((sum, current) => sum + current, 0);
};

const multiply = function(arr) {
  return arr.reduce((product, current) => product * current, 1);
};

const power = function(of, to) {
	
  let result = of;

  for (let i = 1; i < to; i++) {
    result *= of;
  }

  return result;
};

const factorial = function(number) {
	
  let result = 1;

  if (number === 0) {
    return result;
  }

  result = number;

  for (let i = (number - 1); i >= 1; i--) {
    result *= i;
  }

  return result;
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
