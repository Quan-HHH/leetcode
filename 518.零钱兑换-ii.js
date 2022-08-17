/*
 * @lc app=leetcode.cn id=518 lang=javascript
 *
 * [518] 零钱兑换 II
 */

// @lc code=start
/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {
  let dp = new Array(amount + 1).fill(0);
  for (let coin of coins) {
    dp[coin] = 1;
  }
  console.log(dp);
  for (let i = 1; i <= amount; i++) {
    for (let coin of coins) {
      if (i - coin > 0) {
        dp[i] += dp[i - coin];
      }
    }
  }
  console.log(dp);
  return dp[amount];
};

change(5, [1, 2, 5]);
// @lc code=end
