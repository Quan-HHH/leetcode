/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  for(let i = 0; i < nums.length; i ++) {
    if(nums[i] === 0) {
      let n = nums.splice(i, 1)
      nums.unshift(n)
    } else if(nums[i] === 2) {
      let n = nums.splice(i, 1)
      nums.push(n)
      i --
    }
  }
};