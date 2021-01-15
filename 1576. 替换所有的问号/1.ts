function modifyString(s: string): string {
  const [letter, len]: [string[], number] = [['a', 'b', 'c'], s.length]
  let index: number = 0
  let sss = s.replace(/\?/g, letter[`${index}`])
  console.log(sss)
  return sss;
};

modifyString('bk?jk?')