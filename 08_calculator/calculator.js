const add = function(augend, addend) {
  return augend + addend;
};

const subtract = function(subtrahend, minuend) {
  return subtrahend - minuend;
};

const sum = function(numberArray) {
  let total = 0;
  for (number of numberArray) {
    total += number;
  }
  return total;
};

const multiply = function(factorArray) {
  let product = factorArray[0];
  for (let i = 0; i < factorArray.length - 1; i++) {
    product *= factorArray[i + 1];
  }
  return product;
}
const power = function(base, exponent) {
	return base ** exponent;
};

const factorial = function(number) {
	let factorial = 1;
  if (number === 0) return factorial;
  for (let i = 1; i <= number; i++) {
    factorial *= i;
  }
  return factorial;
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
