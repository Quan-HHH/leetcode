function threeSum(nums: number[]): number[][] {
  let res:number[][] = []
  nums.sort((a, b) => a - b)
  for(let i = 0; i < nums.length; i++) {
    if(nums[i] > 0) break
    if(i > 0 && nums[i] === nums[i - 1]) continue
    let L = i + 1, R = nums.length - 1
    while(L < R) {
      if(nums[i] + nums[L] + nums[R] === 0) {
        res.push([nums[i], nums[L], nums[R]])
        while(nums[L] === nums[L + 1]) L ++
        while(nums[R] === nums[R - 1]) R --
        L ++
        R --
      } else if (nums[i] + nums[L] + nums[R] > 0) {
        R --
      } else {
        L ++
      }
    }
  }
  return res
};