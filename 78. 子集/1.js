var subsets = function(nums) {
  let res = []
  function helper(start, path) {
    res.push(path.slice())
    for(let i = start; i <= nums.length; i ++) {
      path.push(i)
      helper(i + 1, path)
      path.pop()
    }
  }
  helper(start, [])
  return res
};