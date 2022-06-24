=begin
* Date: 6.23.22
* Rank: 7 Kyu
* Link: https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9/train/ruby
* In My Own Words: 
    Given an array of strings, return the array of strings with each string prepended with the index position + 1.
* Test Conditions: 
    [] --> []
    ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]
    ["Jonathan", "loves", "coding"] --> ["1: Jonathan", "2: loves", "3: coding"]
* Pseudocode: 
    1. Set line = 0
    1. Loop through array
        a. Prepend each string with "line: "
        b. Add on 1 to n
* Notes After Attempt:

=end

def number lines
    line = 0
    while line < lines.length
        lines[line].prepend("#{line+1}: ")
        line += 1
    end
    lines
end

puts (number("Hello, world"))

