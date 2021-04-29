var isSymmetric = function(root) {
  function helper(leftNode, rightNode) {
    if(leftNode && !rightNode || !leftNode && rightNode) {
      return false
    } else if(leftNode && rightNode) {
      return leftNode.val === rightNode.val && helper(leftNode.left, rightNode.right) && helper(leftNode.right, rightNode.left)
    }else {
      return true
    }
  }
  return helper(root.left, root.right)
};