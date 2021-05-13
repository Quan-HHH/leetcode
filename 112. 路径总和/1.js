var hasPathSum = function(root, targetSum) {
  if(!root) {
    return false
  }
  if(!root.left && !root.right) {
    return root.val === targetSum
  }
  targetSum -= root.val
  return hasPathSum(root.left, targetSum) || hasPathSum(root.right, targetSum)
};