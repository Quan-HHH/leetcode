/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  intervals = intervals.sort((a, b) => a[0] - b[0])
  let len = intervals.length
  let prev = intervals[0]
  let res = []
  for(let i = 1; i < len; i ++) {
    let cur = intervals[i]
    if(prev[1] >= cur[0]) { // 有重合
      prev = [prev[0], Math.max(prev[1], cur[1])]
    } else {
      res.push(prev)
      prev = cur
    }
  }
  res.push(prev)
  return res
};