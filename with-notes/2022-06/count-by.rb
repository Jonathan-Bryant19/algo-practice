=begin
* Date: 6.19.22
* Rank: 8 Kyu
* Link: https://www.codewars.com/kata/5513795bd3fafb56c200049e/train/ruby
* In My Own Words: 
    Given two integers, return all multiples of the first integer up to the second integer. 
* Test Conditions: 
    count_by(1,10) -> [1,2,3,4,5,6,7,8,9,10]
    count_by(2,5) -> [2,4,6,8,10]
* Pseudocode: 
    1. Loop and push to array.
* Notes After Attempt:
    Best Practices defined the range as (1..n) and chained a map function of that to build that array. Much shorter and easy to read. Remember that you don't have to store a variable because Ruby will return automatically. 
=end

def count_by(x, n)
    answer = []
    i = 1
    while i <= n do 
        answer.push(x * i)
        i += 1
    end
    answer
end

puts (count_by(2, 5))