/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  // 剩的右括号必须小于等于左括号
  let res = [];
  function helper(l, r, path) {
    if (path.length === n * 2) {
      res.push(path);
      return;
    }
    if (l > 0) {
      helper(l - 1, r, path + "(");
    }
    if (r > l) {
      helper(l, r - 1, path + ")");
    }
  }
  helper(n, n, "");
  return res;
};
