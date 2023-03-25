const repeatString = function(string, repetitions) {
  if (repetitions < 0) return "ERROR";
  let returnString = "";
  for (let i = 0; i < repetitions; i++) {
    returnString += string;
  }
  return returnString;
};

// Do not edit below this line
module.exports = repeatString;
