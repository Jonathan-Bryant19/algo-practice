=begin
* Date: 6.18.22
* Rank: 7 Kyu
* Link: https://www.codewars.com/kata/59cfc000aeb2844d16000075/train/ruby
* In My Own Words: 
    Given a string, capitalize every other letter. Return one string where all even indexes are caplitized and return a second string where all the odd idexes are caplitalzed. 
* Test Conditions: 
    capitalize("abcdef"),['AbCdEf', 'aBcDeF']
    capitalize("codewarriors"),['CoDeWaRrIoRs', 'cOdEwArRiOrS']
    capitalize("codingisafunactivity"),['CoDiNgIsAfUnAcTiViTy', 'cOdInGiSaFuNaCtIvItY']
    capitalize("i love my family"), ['I LoVe mY FaMiLy', 'i lOvE My fAmIlY']
* Pseudocode: 
    1. Loop through the string push the character to two separate arrays.
    2. Join and return the arrays.
* Notes After Attempt:
    The swapcase string method would have made it a lot more concise. 
=end

def capitalize(s)
    i = 0
    evenLower = []
    oddLower = []
    while i < s.length do 
        if i.even?
            evenLower.push(s[i])
            oddLower.push(s[i].upcase)
        else
            evenLower.push(s[i].upcase)
            oddLower.push(s[i])
        end
        i += 1
    end
    
    return oddLower.join(), (evenLower.join())

end

puts capitalize("codewarriors")