/*
* Date: 6.28.22
* Rank: 7 Kyu
* Link: https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/train/javascript
* In My Own Words: 
    Given a string of multiple words, return a string with all words reversed with word order intact. All spaces should remain the same.
* Test Conditions: 
    "This is an example!" ==> "sihT si na !elpmaxe"
    "double  spaces"      ==> "elbuod  secaps"
* Pseudocode: 
    1. Split the string by space
    2. Loop throug array and reverse each word.
    3. Join and return the modified string.
* Notes After Attempt:
    Don't forget you need a return keyword in a map function!!! The Best Practices solution was a little more compact than my own but used the same fundamental logic. 
*/

function reverseWords(str) {
    const stringArray = str.split(" ")
    const reverseStringArray = stringArray.map((word) => {
        return word.split("").reverse().join("")
    })
    return reverseStringArray.join(' ')
}

console.log(reverseWords("double  spaces"))