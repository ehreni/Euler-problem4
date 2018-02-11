function palindromic() {
  var max = 0;
  for(var a = 999; a > 99; a--) {
    for(var b = 999; b > 99; b--) {
      var n = a * b;
      var s = '' + n;
      if (s === s.split("").reverse().join("") && n > max) {
        max = n;
      }
    }
  }
  return max;
}
module.exports = palindromic();
