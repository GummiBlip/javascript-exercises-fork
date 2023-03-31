const leapYears = function(year) {
  // if year divisible by 4 and not divisible by 100 
  if ( (year % 4) === 0 ) {
    if (year % 100 === 0 && year % 400 !== 0) {
      return false;
    }
    return true;
  }
  return false;
};

// Do not edit below this line
module.exports = leapYears;
