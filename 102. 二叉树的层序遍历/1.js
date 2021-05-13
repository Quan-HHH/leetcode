var levelOrder = function(root) {
  if(!root) return []
  let res = []
  let queue = [root]
  while(queue.length) {
    let rowNodes = queue.splice(0)
    let cell = []
    for(let node of rowNode) {
      cell.push(node.val)
      if(node.left) queue.push(node.left)
      if(node.right) queue.push(node.right)
    }
    res.push(cell)
  }
  return res
};