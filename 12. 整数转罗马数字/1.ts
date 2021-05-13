function intToRoman(num: number): string {
  let keys = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let values = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  let res = ''
  keys.forEach((item, index) => {
    while(num >= item) {
      num -= item;
      res += values[index]
    }
  })
  return res
};
