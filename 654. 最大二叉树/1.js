/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function (nums) {
  if (nums.length === 0) return null;
  let max = Math.max(nums);
  let maxInd = nums.indexOf(max);
  let tree = new TreeNode(max);
  tree.left = constructMaximumBinaryTree(nums.slice(0, maxInd));
  tree.right = constructMaximumBinaryTree(nums.slice(maxInd + 1));
  return tree;
};
