/**
 * @param {string} n
 * @param {number} x
 * @return {string}
 */
var maxValue = function (n, x) {
  let flag = n[0] === "-";
  let index;
  for (let i = 0; i < n.length; i++) {
    if (n[i] === "-") continue;
    if ((flag && n[i] > x) || (!flag && n[i] < x)) {
      index = i;
      break;
    }
  }
  return index == undefined ? n.slice(0, index) + x + n.slice(index) : n + x;
};

console.log(maxValue("123", 1));
