var minPathSum = function(grid) {
  let n = grid.length, m = grid[0].length
  let dp = new Array(n).fill(0).map(() => new Array(m))
  dp[0][0] = grid[0][0]
  for(let i = 1; i < n; i ++) {
    dp[i][0] = dp[i - 1][0] + grid[i][0]
  }
  for(let i = 1; i < m; i ++) {
    dp[0][i] = dp[0][i - 1] + grid[0][i]
  }
  for(let i = 1; i < n; i ++) {
    for(let j = 1; j < m; j ++) {
      dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j]
    }
  }
  console.log(dp)
  return dp[n - 1][m - 1]
};

minPathSum(
  [[1,3,1],[1,5,1],[4,2,1]])