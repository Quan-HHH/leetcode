/*
 * @lc app=leetcode.cn id=31 lang=javascript
 *
 * [31] 下一个排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  let i = nums.length - 2;
  while (i >= 0 && nums[i] > nums[i + 1]) {
    i--;
  }
  if (i > -1) {
    // 不是递减的
    let j = nums.length - 1;
    while (nums[j] <= nums[i] && j > i) {
      j--;
    }
    [nums[j], nums[i]] = [nums[i], nums[j]];
  }
  
};
// @lc code=end
