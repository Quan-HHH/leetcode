function reverseWords(s: string): string {
  let words = s.split(' ')
  let newWords = words.map((item) => {
    return item.split('').reverse().join('')
  })
  return newWords.join(' ')
};