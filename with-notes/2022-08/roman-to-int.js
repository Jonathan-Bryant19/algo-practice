/*
* Date: 8.14.22
* Rank: LeetCode (Easy)
* Link: https://leetcode.com/problems/roman-to-integer/
* In My Own Words: 
    Convert a roman numeral to integer.
* Test Conditions: 
    Input: s = "III"
    Output: 3
    Input: s = "LVIII"
    Output: 58
    Input: s = "MCMXCIV"
    Output: 1994
* Pseudocode: 
    Symbol       Value
    I             1
    V             5
    X             10
    L             50
    C             100
    D             500
    M             1000
    I can be placed before V (5) and X (10) to make 4 and 9. 
    X can be placed before L (50) and C (100) to make 40 and 90. 
    C can be placed before D (500) and M (1000) to make 400 and 900.
    * Loop through and add to counter but if I, X, or C check for next letter.
* Notes After Attempt:

*/

var romanToInt = function(s) {
    let total = 0
    const roman = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "I" || s[i] === "X" || s[i] === "C") {
            if (s[i] === "I" && (s[i+1] === "V" || s[i+1] === "X")) {
                s[i+1] === "V" ? total += 4 : total += 9
                i++
                continue
            } else if (s[i] === "X" && (s[i+1] === "L" || s[i+1] === "C")) {
                s[i+1] === "L" ? total += 40 : total += 90
                i++
                continue
            } else if (s[i] === "C" && (s[i+1] === "D" || s[i+1] === "M")) {
                s[i+1] === "D" ? total += 400 : total += 900
                i++
                continue
            }
        }
        total += roman[s[i]]
    }
    return total
}

console.log(romanToInt("MCMXCIV"))
