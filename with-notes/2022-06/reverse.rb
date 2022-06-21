=begin
* Date: 6.17.22
* Rank: 8 Kyu (Codewars)
* Link: https://www.codewars.com/kata/57a55c8b72292d057b000594/train/ruby
* In My Own Words: 
    Take a string and reverse the words in that string. Punctuation should remain attached to the original word and the function should return and empty string if given an empty string. A single word string should return the single word. 
* Test Conditions: 
    "Hello World" --> "World Hello"
    "Hi There." --> "There. Hi"
    "Ruby is cool!" --> "cool! is Ruby"
* Pseudocode: 
    1. Handle edge cases (empty string, one word)
    1. Split the string into an array
    2. Reverse the array
    3. Join the array
    4. Return the string
* Notes After Attempt:
=end

def reverse(string)
    return string.split(" ").length == 0 | 1 ? string : string.split(" ").reverse.join(" ")
end

puts (reverse("Ruby is cool!"))