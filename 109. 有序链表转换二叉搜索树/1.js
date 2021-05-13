var sortedListToBST = function(head) {
  let nodeArr = []
  while(head) {
    nodeArr.push(head)
    head = head.next
  }
  function helper(start, end) {
    if(start > end) return null
    let mid = Math.floor((start + end) / 2)
    let root = new TreeNode(nodeArr[mid].val)
    root.left = helper(0, mid - 1)
    root.right = helper(mid + 1, end)
    return root
  }
  return helper(0, nodeArr.length - 1)
};