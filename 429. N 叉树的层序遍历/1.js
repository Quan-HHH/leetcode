/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
 var levelOrder = function (root) {
  if (!root) return [];
  const res = [];
  let queue = [root];
  while (queue.length) {
    let rowNodes = queue.splice(0);
    let row = [];
    for (let node of rowNodes) {
      row.push(node.val);
      for (let child of node.children) {
        queue.push(child);
      }
    }
    res.push(row);
  }
  return res;
};