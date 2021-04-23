function fourSum(nums: number[], target: number): number[][] {
  let res = []
  const len = nums.length
  nums.sort((a, b) => a - b)
  console.log(nums)
  for(let i = 0; i < len - 3; i ++) {
    if(nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) break
    if(i > 0 && nums[i] === nums[i - 1]) continue
    for(let j = i + 1; j < len - 2; j ++) {
      if(j > i + 1 && nums[j] === nums[j - 1]) continue
      let L = j + 1, R = len - 1
      while(L < R) {
        let sum = nums[i] + nums[j] + nums[L] + nums[R]
        if(sum === target) {
          res.push([nums[i], nums[j], nums[L], nums[R]])
          while(L < R && nums[L] === nums[L + 1]) L ++
          while(L < R && nums[R] === nums[R - 1]) R --
          L ++; R --
        } else if(sum < target) {
          L ++
        } else {
          R --
        }
      }
    }
  }
  return res
};

console.log(fourSum([1,-2,-5,-4,-3,3,3,5], -11))