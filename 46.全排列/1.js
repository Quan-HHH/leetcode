var permute = function(nums) {
  let res = []
  function helper(path, nums) {
    if(path.length === 3) {
      res.push(path)
      return
    }
    for(let n of nums) {
      if(path.includes(n)) continue
      path.push(n)
      helper(path, nums)
      path.pop()
    }
  }
  helper([], nums)
};