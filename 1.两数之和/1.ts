function twoSum(nums: number[], target: number): number[] {
  const map: Map<number, number> = new Map()
  for(let i = 0; i < nums.length; i ++) {
    let num1: number = nums[i], num2: number = target - num1
    if(map.has(num2)) {
      return [map.get(num2), i]
    } else {
      map.set(num1, i)
    }
  }
};