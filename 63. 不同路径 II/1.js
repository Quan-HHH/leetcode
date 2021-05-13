var uniquePathsWithObstacles = function(obstacleGrid) {
  let n = obstacleGrid.length, m = obstacleGrid[0].length
  let dp = new Array(n).fill(0).map(() => new Array(m).fill(0))
  for(let i = 0; i < n; i ++) {
    dp[i][0] = obstacleGrid[i][0] === 1 || dp[i - 1][0] === 0 ? 0 : 1
  }
  for(let i = 0; i < m; i ++) {
    dp[0][i] = obstacleGrid[0][i] === 1 || dp[0][i - 1] === 0 ? 0 : 1
  }
  for(let i = 1; i < n; i ++) {
    for(let j = 1; j < m; j ++) {
      dp[i][j] = obstacleGrid[i][j] === 1 ? 0 : dp[i - 1][j] + dp[i][j - 1]
    }
  }
  return dp[n - 1][m - 1]
};