function mySqrt(x: number): number {
  let left = 0, right = x
  while(left <= right) {
    let mid = Math.floor((left + right) / 2)
    if(mid * mid === x) {
      return mid
    } else if(mid * mid > x) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  return right
};