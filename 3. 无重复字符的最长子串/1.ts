function lengthOfLongestSubstring(s: string): number {
  let max = 0
  let subStr = []
  for(let i = 0; i < s.length; i ++) {
    if(subStr.indexOf(s[i]) !== -1) {
      // 在subStr中有
      subStr.splice(0, subStr.indexOf(s[i]) + 1)
    }
    subStr.push(s[i])
    max = subStr.length > max ? subStr.length : max
  }
  return max
};