/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  const res = [];
  candidates.sort((a, b) => a - b);
  const helper = (path, start, target) => {
    // if (target < 0) return;
    if (target === 0) {
      res.push(path.slice(0));
      return;
    }
    for (let i = start; i < candidates.length; i++) {
      if (candidates[i] > target) break;
      if (candidates[i] == candidates[i - 1] && i > start) continue;
      if (candidates) path.push(candidates[i]);
      helper(path, i + 1, target - candidates[i]);
      path.pop();
    }
  };
  helper([], 0, target);
  return res;
};

console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));
