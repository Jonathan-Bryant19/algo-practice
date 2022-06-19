=begin
* Date: 6.19.22
* Rank: 7 Kyu
* Link: https://www.codewars.com/kata/5506b230a11c0aeab3000c1f/train/ruby
* In My Own Words: 
    Given an interger, a percentage (as in integer), and a "threshold" integer, calculate the number of times the percentage can be removed from the interger before it drop below the threshold. 
* Test Conditions: 
    evaporator(10, 10, 10), 22
* Pseudocode: 
    1. Write a loop to calculate the remainder and use threshold as base condition.
* Notes After Attempt:
    My code is simple and easy to read and I don't think the runtime can be decreased. The Best Practices solutions use the same logic with less code, but is a little less readable. I'm ok with my solution here, but shortening the code could be cleaner. 
=end

def evaporator(content, evap_per_day, threshold)
    days = 0
    threshold = content * (threshold.to_f / 100)
    while content > threshold do
        content = content * (1 - (evap_per_day.to_f / 100))
        days += 1
    end
    days
end

puts evaporator(10, 10, 5)