/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  let i = nums.length - 2;
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--;
  }
  if (i >= 0) {
    // 不是递减的
    let j = nums.length - 1;
    while (j > i && nums[j] <= nums[i]) {
      j--;
    }
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }
  let r = nums.length - 1,
    l = i + 1;
  while (l < r) {
    [nums[l], nums[r]] = [nums[r], nums[l]];
    l--;
    r--;
  }
};
