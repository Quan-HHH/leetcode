var buildTree = function(inorder, postorder) {
  if(inorder.length === 0) {
    return null
  }
  let len = inorder.length
  let tree = new TreeNode(postorder[len - 1])
  let mid = inorder.indexOf(postorder[len- 1])
  tree.left = buildTree(inorder.slice(0 ,mid), postorder.slice(0 ,mid))
  tree.right = buildTree(inorder.slice(mid + 1 ,len), postorder.slice(mid ,len - 1))
  return tree
};