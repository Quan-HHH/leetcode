/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var allPossibleFBT = function (n) {
  if (n % 2 === 0) return [];
  const build = (n) => {
    if (n === 1) {
      res.push(new TreeNode(0));
      return res;
    }
    for(let i = 1; i < n; i += 2) {
      // 左子树i个节点 右子树j个节点 j = n - i - 1
      left = build(i);
      right = build(j);
    }
  };
  return build(n);
};
