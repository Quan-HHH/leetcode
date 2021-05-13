/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  let num = x
  if(x < 0) return false
  let y = 0
  while(x !== 0) {
    y = y * 10 + x % 10
    x = Math.floor(x / 10)
  }
  console.log(y)
  return num === y
};


isPalindrome(121)