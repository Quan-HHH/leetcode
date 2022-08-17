/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function (num) {
  let sum = 0,
    k = 1;
  while (k < num) {
    if (num % k === 0) sum += k;
    k++;
  }
  return sum === num;
};

console.log(checkPerfectNumber(2));
