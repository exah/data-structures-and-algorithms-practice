function rle (str) {
  if (typeof str !== 'string') {
    throw new TypeError('First argument should be a string')
  }

  const length = str.length
  let result = ''
  let index = 0
  let charCount = 1
  while (index !== length) {
    const char = str[index]
    if (char === str[(index + 1)]) {
      charCount++
    } else {
      result += charCount === 1 ? char : char + charCount
      charCount = 1
    }
    index++
  }

  return result
}

module.exports = rle
