var sortedArrayToBST = function(nums) {
  if(nums.length === 0) {
    return null
  }
  let mid = (nums.length + 1) / 2
  let val = nums[Math.floor(mid)]
  let tree = new TreeNode(val)
  tree.left = sortedArrayToBST(nums.slice(0, mid))
  tree.right = sortedArrayToBST(nums.slice(mid + 1, nums.length))
  return tree
};