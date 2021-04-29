function countAndSay(n: number): string {
  let prev = '1'
  let reg = /(\d)\1*/g
  for(let i = 1; i < n; i ++) {
    prev = prev.replace(reg, item => `${item.length}${item[0]}`)
  }
  return prev
};

countAndSay(5)