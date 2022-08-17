/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const m = matrix.length,
    n = matrix[0].length;
  let res = [],
    // t = 0, l = 0, b = m - 1, r = n - 1,
    i = 0,
    j = 0;
  while (res.length < m * n) {
    while (j < n && matrix[i][j] !== "") {
      res.push(matrix[i][j]);
      matrix[i][j++] = "";
      console.log(res);
    }
    j--;
    i++;
    while (i < m && matrix[i][j] !== "") {
      res.push(matrix[i][j]);
      matrix[i++][j] = "";
      console.log(res);
    }
    i--;
    j--;
    while (j >= 0 && matrix[i][j] !== "") {
      res.push(matrix[i][j]);
      matrix[i][j--] = "";
      console.log(res);
    }
    j++;
    i--;
    while (i >= 0 && matrix[i][j] !== "") {
      res.push(matrix[i][j]);
      matrix[i--][j] = "";
      console.log(res);
    }
    i++;
    j++;
  }
};
spiralOrder([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
]);
