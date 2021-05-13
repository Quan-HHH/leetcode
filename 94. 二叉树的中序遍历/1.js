var inorderTraversal = function(root) {
  let res = []
  function helper(node) {
    if(!node) return;
    hepler(node.left)
    res.push(node.val)
    hepler(node.left)
  }
  helper(root)
  return res
};