function isValid(s: string): Boolean {
  // 一直删除最小的括号对
  let reg = /(\(\))|(\{\})|(\[\])/g
  while(reg.test(s)) {
    s = s.replace(reg, '')
  }
  return s === '' ? true : false
};

isValid('{()}')