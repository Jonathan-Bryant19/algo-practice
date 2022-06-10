/* 
IMOW: Given a string, return the middle character of the word if the length of the word is odd, otherwise, return the middle two characters.
TC: 
Kata.getMiddle("test") should return "es"
Kata.getMiddle("testing") should return "t"
Kata.getMiddle("middle") should return "dd"
Kata.getMiddle("A") should return "A"
Kata.getMiddle("Logan") should return "g"
Kata.getMiddle("Desiree") should return "i"
Kata.getMiddle("Link") should return "in"
PC:
1. Check length of string
2. Return middle if odd
3. Return middle two if even
*/

function getMiddle(s) {
    console.log(s.length %2 === 0 ? s.substr(s.length/2-1,2) : s.substr(Math.floor(s.length/2),1))
}

getMiddle("test")