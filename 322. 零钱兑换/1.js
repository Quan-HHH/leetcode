var coinChange = function (coins, amount) {
  const dp = new Array(amount + 1).fill(Infinity);
  for (let coin of coins) {
    dp[coin] = 1;
  }
  for (let i = 2; i <= amount; i++) {
    for (let coin of coins) {
      if (i - coin > 0) {
        dp[i] = Math.min(dp[i - coin] + 1, dp[i]);
      }
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
};

console.log(coinChange([1, 2, 5], 11));
