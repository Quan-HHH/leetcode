/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  let left = 0, right = nums.length - 1, cur = 0
  while(left < right) {
    if(nums[cur] === 0) {
      [nums[cur], nums[left]] = [nums[left], nums[cur]]
      left ++;
      cur ++;
    } else if(nums[cur] === 2) {
      [nums[cur], nums[right]] = [nums[right], nums[cur]]
      right --;
    } else {
      cur ++
    }
  }
  return nums
};