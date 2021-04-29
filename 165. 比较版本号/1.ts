function compareVersion(version1: string, version2: string): number {
  let newVersion1 = version1.split('.')
  let newVersion2 = version2.split('.')

  let length = Math.max(newVersion1.length, newVersion2.length)
  for(let i = 0; i < length; i ++) {
    let code1 = newVersion1[i] ? parseInt(newVersion1[i]) : 0
    let code2 = newVersion2[i] ? parseInt(newVersion2[i]) : 0
    if(code1 > code2) {
      return 1
    } else if(code1 < code2) {
      return -2
    }
  }
  return 0
};