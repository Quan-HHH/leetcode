var isBalanced = function (root) {
    if (!root) return
    arr.push(root.val)
    isBalanced(root.left)
    isBalanced(root.right)
};
var arr = [];
let root = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 3
        },
        right: {
            val: 4,
            left: {
                val: 5
            }
        }
    },
    right: {
        val: 6
    }
}
isBalanced(root);
console.log(arr)