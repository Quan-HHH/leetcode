var merge = function (nums1, m, nums2, n) {
  let i = m - 1,
    j = n - 1,
    k = m + n - 1,
    cur;
  while (i >= 0 || j >= 0) {
    if (i < 0) {
      cur = nums2[j--];
    } else if (j < 0) {
      break;
    } else if (nums1[i] >= nums2[j]) {
      cur = nums1[i--];
    } else {
      cur = nums2[j--];
    }
    nums1[k--] = cur;
  }
};
