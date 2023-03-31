const convertToCelsius = function(fahrenheitTemperature) {
  let celsiusTemperature = ( (fahrenheitTemperature - 32) * (5/9) );
  if (Number.isInteger(celsiusTemperature)) return celsiusTemperature;
  return +celsiusTemperature.toFixed(1);
};

const convertToFahrenheit = function(celsiusTemperature) {
  let fahrenheitTemperature = ( (celsiusTemperature * (9/5)) + 32 );
  if (Number.isInteger(fahrenheitTemperature)) return fahrenheitTemperature;
  return +fahrenheitTemperature.toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
