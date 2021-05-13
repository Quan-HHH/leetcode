var letterCombinations = function(digits) {
  if(digits.length === 0) return []
  let map = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz',
  }
  let res = []
  function helper(path, start) {
    if(start > digits.length - 1) {
      res.push(path)
      return
    }
    let letter = map[digits[start]]
    for(let i of letter) {
      helper(path + i, start + 1)
    }
  }
  helper('', 0)
};