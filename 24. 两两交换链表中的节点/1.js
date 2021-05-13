var swapPairs = function(head) {
  if(!head || !head.next) {
    return head
  }
  const newHead = head.next
  head.next = swapPairs(head.next.next)
  newHead.next = head
  return newHead
};