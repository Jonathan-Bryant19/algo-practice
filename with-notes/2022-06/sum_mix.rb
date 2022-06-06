=begin
* Date: 6.4.22
* Rank: 8 Kyu
    * Kyu: 8 Kyu (easiest) ==> 1 Kyu (hardest). Dan (master level): 1 Dan (easiest) ==> 8 Dan (hardest).
* Link: 
    https://www.codewars.com/kata/57eaeb9578748ff92a000009/train/ruby
* In My Own Words: 
    Sum up an array of integers and numbers as strings. Return an integer.
* Test Conditions: 
    sum_mix([9, 3, '7', '3']), 22
    sum_mix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42
* Pseudocode: 
    1. Loop through array and convert string to integer.
    2. Use reduce to sum.
* Notes After Attempt:
    The Best Practice solutin uses procs so I'll need to study that. 
=end

def sum_mix (x) 
    i = 0
    answer = 0
    while i < x.length do
        answer += x[i].to_i
        i += 1
    end
    puts answer   
end

sum_mix(['5', '0', 9, 3, 2, 1, '9', 6, 7])