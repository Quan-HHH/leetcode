function searchInsert(nums: number[], target: number): number {
  let left = 0, right = nums.length - 1
  while(left <= right) {
    let mid = Math.floor((left + right) / 2)
    if(target < nums[mid]) {
      right = mid - 1
    } else if(target > nums[mid]) {
      left = mid + 1
    } else {
      return mid
    }
  }
  return left
};

console.log(searchInsert([1,2,2,2,2,3,5,6], 6))