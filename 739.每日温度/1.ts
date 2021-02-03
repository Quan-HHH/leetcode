function dailyTemperatures(T: number[]): number[] {
  let arr: number[] = [];
  for (let i = 0; i < T.length; i++) {
    for (let j = i + 1; j < T.length; j++) {
      if (T[j] > T[i]) {
        arr.push(j - i);
        break;
      }
      if (j === T.length - 1 && T[j] <= T[i]) {
        arr.push(0);
      }
    }
  }
  arr.push(0)
  return arr;
}

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]))
