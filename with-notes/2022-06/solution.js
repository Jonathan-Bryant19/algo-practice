/*
* Date: 6.16.22
* Rank: 7 Kyu
* Link: 
    https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d/train/javascript
* In My Own Words: 
    Write a function that accepts two string arguments. Return true if the first argument ends with the second argument. Otherwise, return false. 
* Test Conditions: 
    solution('abc', 'bc') // returns true
    solution('abc', 'd') // returns false
    solution('Logan', 'an') // returns true
    solution('Hunter', 'tur') // returns false
* Pseudocode: 
    1. If ending is > str, return false. 
    2. Set variable equal to the length of ending
    3. Slice using negative index as the first argument, and the length of ending as the second
    4. Check to see if slice value and ending are equal
* Notes After Attempt:
    I really need to memorize string methods. I could have just used str.endsWith(ending)
*/

function solution(str, ending){
    if (ending.length > str.length) return false
    const endingLength = ending.length
    const strEnding = str.slice(-(endingLength))
    return strEnding === ending
}

console.log(solution('Hunter', 'tur'))