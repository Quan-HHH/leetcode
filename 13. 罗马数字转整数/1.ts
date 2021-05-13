function romanToInt(s: string): number {
  let num = 0
  let map = {
    'I':1,
    'IV': 4,
    'V': 5,
    'IX': 9,
    'X': 10,
    'XL': 40,
    'L': 50,
    'XC': 90,
    'C': 100,
    'CD': 400,
    'D': 500,
    'CM': 900,
    'M': 1000
  }
  let keys = Object.keys(map)
  for(let i = 0; i < s.length; i ++) {
    if(keys.includes(s[i] + s[i + 1])) {
      num += map[s[i] + s[i + 1]]
      i++
    } else {
      num += map[s[i]]
    }
  }
  return num
};