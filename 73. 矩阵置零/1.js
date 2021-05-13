/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  let row = [], column = []
  for(let i = 0; i < matrix.length; i ++) {
    for(let j = 0; j < matrix[0].length; j ++) {
      if(matrix[i][j] === 0) {
        row.push(i)
        column.push(j)
      }
    }
  }
  for(let i = 0; i < matrix.length; i ++) {
    for(let j = 0; j < matrix[0].length; j ++) {
      if(row.indexOf(i) > -1 || column.indexOf(j) > -1) {
        matrix[i][j] = 0
      }
    }
  }
  console.log(matrix)
  return matrix
};

setZeroes([[0,1,2,0],[3,4,5,2],[1,3,1,5]])