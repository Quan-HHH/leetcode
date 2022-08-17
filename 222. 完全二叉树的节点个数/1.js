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
var countNodes = function (root) {
  let leftH = 0,
    rightH = 0,
    l = root,
    r = root;
  while (l) {
    l = l.left;
    leftH++;
  }
  while (r) {
    r = r.right;
    rightH++;
  }
  if (leftH === rightH) return Math.pow(2, leftH) - 1;
  return countNodes(root.left) + countNodes(root.right) + 1;
};
