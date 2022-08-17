/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxValue = function (grid) {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      const top = i === 0 ? 0 : grid[i - 1][j];
      const left = j === 0 ? 0 : grid[i][j - 1];
      grid[i][j] += Math.max(top, left);
    }
  }
  return grid[grid.length - 1][grid[0].length - 1];
};

console.log(
  maxValue([
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1],
  ])
);
