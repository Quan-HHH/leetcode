/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function (words) {
  const firstHash = new Array(26).fill(0);
  const a = "a".charCodeAt();
  let res = "";
  for (let i = 0; i < words[0].length; i++) {
    // arr[0][words[0][i] - ]
    // console.log(words[0][i].charCodeAt() - 'a'.charCodeAt())
    firstHash[words[0][i].charCodeAt() - a]++;
  }

  for (let i = 1; i < words.length; i++) {
    const otherHash = new Array(26).fill(0);
    for (let j = 0; j < words[i].length; j++) {
      otherHash[words[i][j].charCodeAt() - a]++;
    }
    console.log(firstHash, otherHash);

    for (let i = 0; i < 26; i++) {
      firstHash[i] = Math.min(otherHash[i], firstHash[i]);
    }
  }

  for (let i = 0; i < 26; i++) {
    res += String.fromCharCode(i + a).repeat(firstHash[i]);
  }
  return res.split('')
};

console.log(commonChars(["belly", "bell"]));
// charCodeAt(), fromCharCode()

