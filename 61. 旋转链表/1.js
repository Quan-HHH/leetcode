/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
  let fast = head, slow = head
  while(k--) {
    fast = fast.next
  }
  while(fast.next) {
    slow = slow.next
    fast = fast.next
  }
  fast.next = head
  let node = slow.next
  slow.next = null
  return node
};