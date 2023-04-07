const fibonacci = function(memberNumber) {
  if (memberNumber < 1) {
    return "OOPS";
  }
  if (memberNumber == 1 | memberNumber == 2) {
    return 1;
  }
  return fibonacci(memberNumber - 1) + fibonacci(memberNumber - 2);
};

// Do not edit below this line
module.exports = fibonacci;
