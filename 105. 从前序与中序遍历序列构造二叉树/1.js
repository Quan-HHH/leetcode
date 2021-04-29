var buildTree = function(preorder, inorder) {
  if(preorder.length === 0) {
    return null
  }
  let tree = new TreeNode(preorder[0])
  let mid = inorder.indexOf(preorder[0])
  tree.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid))
  tree.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1))
  return tree
};