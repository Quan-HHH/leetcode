function isBalanced(root) {
    if(!root) return true
    // 求左右子树的高度
    if(Math.abs(getHeight(root.right) - getHeight(root.left)) > 1) return false
    return isBalanced(root.left) && isBalanced(root.right)

    function getHeight(root) {
        if(!root) return 0
        return Math.max(getHeight(root.left), getHeight(root.right)) + 1
    }
};