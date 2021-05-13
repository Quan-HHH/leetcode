/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  let l = 0, r = n - 1, t = 0, b = n - 1, i = 0, j = 0
  let m = n * n, k = 1
  let arr = new Array(n).fill(0).map(() => new Array(n).fill(0))
  while(k <= m) {
    arr[i][j] = k
    if(j < r && i === t) {
      j ++
      if(j === r) {
        t ++
      }
    } else if(j === r && i < b) {
      i ++
      if(i === b) {
        r --
      }
    } else if(i === b && j > l) {
      j --
      if(j === l) {
        b --
      }
    } else{
      i --
      if(i === t) {
        l ++
      }
    }
    k ++
  }
  console.log(arr)
};

generateMatrix(6)