const removeFromArray = function(array, ...targetValues) {
  let initialLength = array.length;
  for (let i = 0; i < initialLength; i++) {
    while (array.indexOf(targetValues[i]) !== -1) {
      array.splice(array.indexOf(targetValues[i]), 1);
  } 
}
  return array;
}
// Do not edit below this line
module.exports = removeFromArray;
