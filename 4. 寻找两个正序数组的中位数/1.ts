function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  let nums:Array<number> = nums1.concat(nums2).sort((a,b) => a - b)
  const length = nums.length
  return nums.length % 2 === 1 ? nums[Math.floor(length / 2)] : (nums[length / 2] + nums[length / 2 - 1]) / 2
};

console.log(findMedianSortedArrays([1,2], [4,2,7,4]))