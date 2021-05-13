// "aaaabaaaabbbbaabbbaabbaababbabbaaaababaaabbbbbbaabbbabababbaaabaabaaaaaabbaabbbbaababbababaabbbaababbbba"
// "*****b*aba***babaa*bbaba***a*aaba*b*aa**a*b**ba***a*a*"
var isMatch = function(s, p) {
  let reg1 = /[\*]{1,}/g
  p = p.replace(reg1, () => '[a-z]*')
  console.log(p)
  let reg2 = /\?/g
  p = p.replace(reg2, () => '[a-z]')
  console.log(p)
  p = '^' + p + '$'
  let reg = new RegExp(p)
  return reg.test(s)
};

isMatch("abbabaaabbabbaababbabbbbbabbbabbbabaaaaababababbbabababaabbababaabbbbbbaaaabababbbaabbbbaabbbbababababbaabbaababaabbbababababbbbaaabbbbbabaaaabbababbbbaababaabbababbbbbababbbabaaaaaaaabbbbbaabaaababaaaabb",
"**aa*****ba*a*bb**aa*ab****a*aaaaaa***a*aaaa**bbabb*b*b**aaaaaaaaa*a********ba*bbb***a*ba*bb*bb**a*b*bb")