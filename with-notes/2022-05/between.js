/*
* Date: 5.30.22
* Rank: 8 Kyu
    * Kyu: 8 Kyu (easiest) ==> 1 Kyu (hardest). Dan (master level): 1 Dan (easiest) ==> 8 Dan (hardest).
* Link: 
    https://www.codewars.com/kata/55ecd718f46fba02e5000029/train/javascript
* In My Own Words: 
    Given two integers where the second integer is always bigger than the first, return an array containing all integers between and including the given integers. 
* Test Conditions: 
    between(1, 4) ==> [1, 2, 3, 4]
    between(3, 19) ==> [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
* Pseudocode: 
    1. Create an empty array.
    2. Use for loop and push to empty array.
    3. Return array.
*/

function between(a, b) {
    let ans = []
    for (i = a; i <= b; i++) {
        ans.push(i)
    }
    return ans
}

console.log(between(1, 4))