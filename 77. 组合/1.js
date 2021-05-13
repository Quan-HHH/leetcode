var combine = function(n, k) {
  let nums = new Array().fill(null).map((_, i) => i + 1)
  let res = []
  function helper(path, start) {
    if(path.length === k) {
      res.push(path.slice(0))
      return
    }
    for(let i = start; i < n; i ++) {
      path.push(i)
      helper(path, nums)
      path.pop()
    }
  }
  helper([], 0)
  return res
};