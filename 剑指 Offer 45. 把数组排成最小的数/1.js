/**
 * @param {number[]} nums
 * @return {string}
 */
var minNumber = function (nums) {
  return nums.sort((a, b) => String(a) + b - (String(b) + a)).join("");
};

console.log(minNumber([3, 30, 34, 5, 9]));
