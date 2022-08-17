/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
var isNStraightHand = function (hand, groupSize) {
  // 先找到里面的最小值 然后按groupSize将连续的值移除
  // if(hand.length % groupSize !== 0) return false;
  while (hand.length !== 0) {
    let min = Math.min(...hand);
    for (let i = 0; i < groupSize; i++) {
      let idx = hand.indexOf(min);
      if (idx < 0) return false;
      else {
        hand.splice(idx, 1);
        min++;
      }
    }
  }
  return true
};

console.log(isNStraightHand([1,2,3,6,2,3,4,7,8], 3))
