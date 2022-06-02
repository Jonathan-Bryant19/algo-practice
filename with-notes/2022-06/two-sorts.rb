=begin
* Date: 6.2.22
* Rank: 8 Kyu
    * Kyu: 8 Kyu (easiest) ==> 1 Kyu (hardest). Dan (master level): 1 Dan (easiest) ==> 8 Dan (hardest).
* Link: 
    https://www.codewars.com/kata/57cfdf34902f6ba3d300001e/train/ruby
* In My Own Words: 
    Sort an array of strings alphabetically, and return the first string formatted with a "***" between each letter. 
* Test Conditions: 
    two_sort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]), 'b***i***t***c***o***i***n'
    two_sort(["i", "want", "to", "travel", "the", "world", "writing", "code", "one", "day"]), 'c***o***d***e'
* Pseudocode: 
    1. Sort the array. 
    2. Pull the first value and return using concatenation. 
* Notes After Attempt:
    The Best Practices solution used s.min.chars.join("***"). I hadn't thought to use min with strings and need to remember that. 
=end

def two_sort(s)
    sort = s.sort()
    split = sort[0].split("")
    answer = split.map { |c| c + "***"}
    answer.join().chomp("***")
end

# Refactored version of my answer:

def two_sort2(s)
    s.sort()[0].split("").map { |c| c + "***"}.join().chomp("***")
end

puts two_sort2(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"])