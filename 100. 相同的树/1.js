var isSameTree = function(p, q) {
  if(!p && !p) {
    return true
  } else if(p && q) {
    return p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
  } else {
    return false
  }
};