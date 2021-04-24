function removeElement(nums: number[], val: number): number {
  let i = 0
  nums.forEach((item) => {
    if(item !== val) {
      nums[i] = item
      i ++
    }
  })
  return i
};

removeElement([1,2,2,2,3], 2)

