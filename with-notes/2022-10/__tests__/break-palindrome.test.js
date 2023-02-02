const breakPalindrome = require('../break-palindrome')

test('"abccba" => "aaccba"', () => {
  const palindrome = "abccba"
  const expectedValue = "aaccba"
  const actualValue = breakPalindrome(palindrome)
  expect(actualValue).toEqual(expectedValue)
})
test('"aa" => "ab"', () => {
  const palindrome = "aa"
  const expectedValue = "ab"
  const actualValue = breakPalindrome(palindrome)
  expect(actualValue).toEqual(expectedValue)
})
test('"aba" => "abb"', () => {
  const palindrome = "aba"
  const expectedValue = "abb"
  const actualValue = breakPalindrome(palindrome)
  expect(actualValue).toEqual(expectedValue)
})
test('"a" => ""', () => {
  const palindrome = "a"
  const expectedValue = ""
  const actualValue = breakPalindrome(palindrome)
  expect(actualValue).toEqual(expectedValue)
})