var removeNthFromEnd = function(head, n) {
  let pre = head, cur = head
  for(let i = 0; i < n; i ++) {
    pre = pre.next
  }
  while(pre) {
    console.log(pre.val)
    pre = pre.next
    cur = cur.next
  }
  cur.next = cur.next.next
  return head
};