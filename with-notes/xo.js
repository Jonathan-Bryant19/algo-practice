/*
* Date: 5.29.22
* Rank: 7 Kyu
    * Kyu: 8 Kyu (easiest) ==> 1 Kyu (hardest). Dan (master level): 1 Dan (easiest) ==> 8 Dan (hardest).
* Link: https://www.codewars.com/kata/55908aad6620c066bc00002a/train/javascript
* In My Own Words: Given a single string as input, check to see if the string contains the same frequency of "x" and "o". Case doesn't matter and the string can contain any character. Return a boolean.
* Test Conditions: 
    * XO("ooxXm") => true
    * XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
    * XO("zzoo") => false
* Pseudocode: 
    1. Set a counter for "x" and "o".
    2. Make string lowercase, then loop through:
        a. For each character, check to see if "x" or "o":
            If either, increment correct counter.
    3. return x === o
*/

function XO(str) {
    let x = 0
    let o = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === "x") x++
        if (str[i].toLowerCase() === "o") o++
    }
    return x === o
}

console.log(XO("zzoo"))