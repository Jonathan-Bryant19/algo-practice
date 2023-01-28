/*
* Date: 1.27.23
* Rank: LeetCode Medium
* Link: https://leetcode.com/problems/break-a-palindrome/
* In My Own Words: 
  Given a palindromic string, return a string that is not a palindrome and is lexicographically smaller. 
* Test Conditions: 
  "abccba" => "aaccba"
  "aa" => "ab"
  "aba" => "abb"
  "a" => ""
* Pseudocode: 
  Create an object for r
* Notes After Attempt:
  I overthought the hell out of this. The callback is unnecessary but I had the right idea. This could also be refactored so that only half the string is checked since we know the input is a valid palindrome. 
*/

function breakPalindrome(palindrome) {
  const isPalindrome = function(string) {
    let left = 0
    let right = string.length - 1
    while (left < right) {
      if (string[left] !== string[right]) return false
      left++
      right--
    }
    return true
  }

  if (palindrome.length <= 1) return ""
  let split = palindrome.split("")
  for (let i = 0; i < split.length; i++) {
      if (split[i] !== "a") {
          let temp = [...split]
          temp[i] = "a"
          if (isPalindrome(temp.join(""))) {
            continue
          } else {
            return temp.join("")
          }
      }
      if (i === split.length-1) {
          split[i] = "b"
          return split.join("")
      }
  }
}

module.exports = breakPalindrome