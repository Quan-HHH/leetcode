var climbStairs = function(n) {
  let arr = new Array(20).fill(0)
  function helper(n) {
    if(n === 1) return 1
    if(n === 2) return 2
    if(arr[n] !== 0) return arr[n]
    arr[n] = helper(n - 1) + helper(n - 2)
    return arr[n]
  }
  return helper(n)
};
console.log(climbStairs(6))