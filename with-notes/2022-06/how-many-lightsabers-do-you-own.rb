=begin
* Date: 6.23.22
* Rank: 8 Kyu
* Link: https://www.codewars.com/kata/51f9d93b4095e0a7200001b8/train/ruby
* In My Own Words: 
    Given an input of a string, return 18 if the string matches "Zach", else return 0.
* Test Conditions: 
    how_many_light_sabers_do_you_own(), 0 
    how_many_light_sabers_do_you_own("Adam"), 0 
    how_many_light_sabers_do_you_own("Zach"), 18 
* Pseudocode: 
    Use ternary.
* Notes After Attempt:
=end

def how_many_light_sabers_do_you_own(name="")
    return name == "Zach" ? 18 : 0
end

puts (how_many_light_sabers_do_you_own("Zach"))