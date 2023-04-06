const palindromes = function (string) {
  let punctuationRegex = /(\s+|,+|\.+|!+|\?+)/g;
  let sanitized = string.replace(punctuationRegex, '').toLowerCase()
  let reversed = sanitized.split('').reverse().join('')
  if (reversed === sanitized) {
    return true;
  }
  return false;
}
// Do not edit below this line
module.exports = palindromes;
