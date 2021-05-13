var inorderTraversal = function(root) {
  let res = []
  let stack = []
  while(root || stack.length) {
    while(root) {
      stack.push(root)
      root = root.left
    }
    root = stack.pop()
    res.push(root.val)
    root = root.right
  }
  return res
};