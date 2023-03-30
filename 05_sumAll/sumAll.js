const sumAll = function(firstNumber, secondNumber) {
  // get inclusive range, iterate over every number in the range while adding them to the sum, return sum
  if (validateNumbers(firstNumber, secondNumber)) {
    let sortedNumbers = sortNumbers(firstNumber, secondNumber);
    let lowerNumber = sortedNumbers[0];
    let higherNumber = sortedNumbers[1];
    let numberRange = getInclusiveRange(lowerNumber, higherNumber);
    let sum = 0;
    for (number of numberRange) {
    sum += number;
    }
  return sum;
  } else return "ERROR";
};

function getInclusiveRange(start, stop) {
  return Array.from({length: (stop - start + 1)}, (value, index) => start + index);
}

function validateNumbers(...numbers) {
  for (number of numbers) {
    if (Number.isFinite(number) == false) return false;
    if (number < 0) return false;
  }
  return true;
}
function sortNumbers(firstNumber,secondNumber) {
  if (secondNumber > firstNumber) return [firstNumber, secondNumber];
  else return [secondNumber, firstNumber];
}

// Do not edit below this line
module.exports = sumAll;
