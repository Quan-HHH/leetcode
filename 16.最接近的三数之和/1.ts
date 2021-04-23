function threeSumClosest(nums: number[], target: number): number {
  let res: number = nums[0] + nums[1] + nums[2]
  const len = nums.length
  nums.sort((a, b) => a - b)
  for(let i = 0; i < len; i ++) {
    let L = i + 1, R = len - 1
    while(L < R) {
      let sum = nums[i] + nums[L] + nums[R]
      if(Math.abs(target - sum) < Math.abs(target - res)) {
        res = sum
      }
      if(sum > target) {
        R --
      } else if(sum < target) {
        L ++
      } else {
        return res
      }
    }
  }
  return res
};