/**
 * Link: https://www.codewars.com/kata/5865918c6b569962950002a1/train/javascript
 * In My Own Words: Take two strings, the second being a single character. Count how many times the second string appears in the first. 
 * Test Conditions: 
 * ("Hello", "o")  ==>  1
 * ("Hello", "l")  ==>  2
 * ("", "z")       ==>  0
 * Pseudocode:
 * 1. Split string.
 * 2. Set counter to 0.
 * 3. Loop over array
 *      a. If i === letter, add 1 to counter.
 * 4. Return counter.
 */
function strCount(str, letter){  
    const characterArray = str.split('')
    let counter = 0
    for (let char of characterArray) {
        if (char === letter) counter++
    }
    return counter
}

console.log(strCount("", "z"))