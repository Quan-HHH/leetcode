var permuteUnique = function(nums) {
  let used = new Array(nums.length)
  nums.sort((a, b) => a - b)
  let res = []
  function helper(path, nums) {
    if(path.length === nums.length) {
      res.push(path.slice(0))
      return
    }
    for(let i = 0; i < nums.length; i ++) {
      if(used[i]) continue
      if(i > 0 && num[i] === nums[i - 1] && !used[i - 1]) continue
      path.push(i)
      used[i] = true
      helper(path, nums.slice(0).splice(i, 1))
      path.pop()
      used[i] = false
    }
  }
  helper([], nums)
};
