=begin
* Date: 6.17.22
* Rank: 8 Kyu
* Link: https://www.codewars.com/kata/57ec8bd8f670e9a47a000f89/train/ruby
* In My Own Words: 
    If the string input equals "alligator", return "small". Any other inputs returns "wide". 
* Test Conditions: 
    mouth_size("toucan"),"wide"
    mouth_size("ant bear"),"wide"
    mouth_size("alligator"),"small"
* Pseudocode: 
    Downcase the input and check for "alligator"
* Notes After Attempt:
=end

def mouth_size(animal)
    return animal.downcase == "alligator" ? "small" : "wide"
end

puts(mouth_size("as;dlkfj"))