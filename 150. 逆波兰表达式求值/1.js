/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const stack = [];
  const operatorMap = {
    "+": (num1, num2) => {
      return num2 + num1;
    },
    "-": (num1, num2) => {
      return num2 - num1;
    },
    "*": (num1, num2) => {
      return num1 * num2;
    },
    "/": (num1, num2) => {
      return parseInt(num2 / num1);
    },
  };
  for (let i = 0; i < tokens.length; i++) {
    if (operatorMap[tokens[i]]) {
      const num1 = parseInt(stack.pop());
      const num2 = parseInt(stack.pop());
      stack.push(operatorMap[tokens[i]](num1, num2));
    } else stack.push(tokens[i]);
    console.log(stack);
  }

  return stack[0];
};

console.log(
  evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"])
);
