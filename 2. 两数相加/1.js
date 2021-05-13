var addTwoNumbers = function(l1, l2) {
  let head = new ListNode('head')
  let sum = head
  let flag = 0 // 是否要进位
  while(l1 || l2) {
    let val1 = l1 ? l1.val : 0
    let val2 = l2 ? l2.val : 0
    sum.next = new ListNode((val1 + val2 + flag) % 10)
    sum = sum.next
    flag = val1 + val2 >= 10 ? 1 : 0
    l1 = l1.next
    l2 = l2.next
  }
  if(flag === 1) {
    sum.next = new ListNode(1)
  }
  return head.next
};