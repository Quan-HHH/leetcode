/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var sumNumbers = function (root) {
  let sum = 0
  if (!root) return 0;
  const helper = (node, currentNum) => {
      currentNum = currentNum * 10 + node.val;
      if (!node.right && !node.left) {
          sum += currentNum;
          return;
      }
      if (node.left) helper(node.left, currentNum);
      if (node.right) helper(node.right, currentNum);
  };
  helper(root, 0);
  return sum;
};