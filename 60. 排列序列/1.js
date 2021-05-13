/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
  let arr = new Array(n).fill(0).map((_, i) => i + 1)
  let res = []
  function helper(path) {
    console.log(path)
    if(path.length === n) {
      res.push(path)
      return
    }
    for(let i = 0; i < n; i ++) {
      if(path.indexOf(arr[i] + '') > -1) continue
      helper(path + arr[i])
    }
  }
  helper('')
  return res[k - 1]
};
getPermutation(4, 9)