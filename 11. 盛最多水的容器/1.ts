function maxArea(height: number[]): number {
  let max: number = 0
  for(let i = 0, j = height.length - 1; i < j; ) {
    max = Math.max(Math.min(height[i], height[j]) * (j - i), max);
    height[i] > height[j] ? j -- : i ++
  }
  return max
};