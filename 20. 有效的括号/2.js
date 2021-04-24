function isValid(s) {
  let stack = []
  let map = new Map([
    [')', '('],
    [']', '['],
    ['}', '{']
  ])
  s.split('').forEach(item => {
    if(map.has(item)) { // 左括号
      stack[stack.length - 1] === map.get(item) ? stack.pop() : stack.push(item)
    } else {
      stack.push(item)
    }
    console.log(stack)
  });
  return stack.length === 0
};

console.log(isValid('{()}{)}{([])}'))

