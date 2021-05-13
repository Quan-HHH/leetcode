var myPow = function(x, n) {
  if(n === 0) return 1
  if(n === 1) return num
  if(n < 0) {
    return 1 / myPow(x, -n)
  }
  if(n % 2 === 0) return myPow(x * x, n / 2)
  if(n % 2 !== 0) return myPow(x * x, n - 1)
};