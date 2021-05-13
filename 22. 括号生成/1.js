var generateParenthesis = function(n) {
  let res = []
  function helper(l, r, path) {
    if(path.length === n * 2) {
      res.push(path)
      return
    }
    if(l > 0) { // 左括号剩了
      helper(l - 1, r, path + '(')
    }
    if(r > l) {
      helper(l, r - 1, path + ')')
    }
  }
  helper(n, n, '')
  return res
};