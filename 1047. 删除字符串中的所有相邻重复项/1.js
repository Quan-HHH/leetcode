const foo = (str) => {
  const reg = /([a-z])\1/g;
  while(reg.test(str)) {
    str = str.replace(reg, "");
  }
  console.log(str)
}

foo("abbaca")