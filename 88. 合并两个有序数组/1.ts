function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let i = m - 1, j = n - 1, k = m + n - 1, cur
  while(i >= 0 || j >= 0) {
    if(i < 0) {
      cur = nums2[j--]
      j --
    } else if(j < 0) {
      cur = nums1[i--]
    } else if(nums1[i] >= nums2[j]) {
      cur = nums1[i--]
    } else {
      cur = nums2[j--]
    }
    nums1[k--] = cur
  }
};