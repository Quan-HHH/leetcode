/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function (nums) {
  const res = [];
  let p = 0,
    n = 1;
  for (const num of nums) {
    if (num > 0) {
      res[p] = num;
      p += 2;
    } else {
      res[n] = num;
      n += 2;
    }
  }
  return res;
};

console.log(rearrangeArray([1, 2, 3, 4, 5, -1, -2, -4, -7, -1]));
