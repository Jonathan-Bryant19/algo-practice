# * Date: 6.17.22
# * Rank: 8 Kyu
# * Link: 
#     https://www.codewars.com/kata/5547929140907378f9000039/train/ruby
# * In My Own Words: 
#     Given a string, return the string with all lowercase vowels removed. Uppercase vowels should be ignored. 
# * Test Conditions: 
#     "hello"     -->  "hll"
#     "codewars"  -->  "cdwrs"
#     "goodbye"   -->  "gdby"
#     "HELLO"     -->  "HELLO"
#     "LogAn" --> "LgAn"
# * Pseudocode: 
#     1. Set array of lowercase vowels.
#     1. Loop through string.
#         a. If character is in vowel array, slice! it.
# * Notes After Attempt:
#   string.delete would have been a lot easier. Don't even need regex.

def shortcut(s)
    lowerCaseVowels = ["a", "e", "i", "o", "u"]
    i = s.length - 1
    while i > 0 do
        if lowerCaseVowels.include?(s[i])
            s.slice!(s[i])
        end
        i -= 1
    end
    s
end

puts(shortcut("LogAn"))