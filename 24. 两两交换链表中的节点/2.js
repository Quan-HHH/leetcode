var swapPairs = function(head) {
  let dummyHead = new ListNode(0)
  dummyHead.next = head
  let temp = dummyHead
  while(temp.next && temp.next.next) {
    const node1 = temp.next
    const node2 = temp.next.next
    node1.next = node2.next
    node2.next = node1
    temp = node1
  }
  return dummyHead.next
};