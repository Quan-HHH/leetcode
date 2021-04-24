function longestPalindrome(s: string): string {
  let maxStr = ''
  if(s.length < 2) return s
  function helper(m, n) {
    while(m >= 0 && n < s.length && s[m] === s[n]) {
      m--
      n++
    }
    if(n - m + 1 > maxStr.length) {
      maxStr = s.slice(m + 1, n)
    }
  }
  for(let i = 0; i < s.length; i ++) {
    helper(i - 1, i + 1)
    helper(i, i + 1)
  }
  return maxStr
};