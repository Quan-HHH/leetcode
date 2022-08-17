/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let left = 0,
    sum = 0,
    len = nums.length,
    res = Infinity;
  for (let right = 0; right < len; right++) {
    sum += nums[right];
    while (left <= right && sum >= target) {
      res = Math.min(res, right - left + 1);
      sum -= nums[left++];
    }
  }
  return res === Infinity ? -1 : res;
};

console.log(minSubArrayLen(4, [1, 1]));
