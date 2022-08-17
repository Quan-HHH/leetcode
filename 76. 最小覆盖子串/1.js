/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  let map = {};
  let window = {};
  for (let letter of t) {
    map[letter] = map[letter] ? map[letter] + 1 : 1;
  }
};

minWindow("1", "1231232132");
