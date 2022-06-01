/*
* Date: 6.1.22
* Rank: 8 Kyu
    * Kyu: 8 Kyu (easiest) ==> 1 Kyu (hardest). Dan (master level): 1 Dan (easiest) ==> 8 Dan (hardest).
* Link: 
    https://www.codewars.com/kata/56676e8fabd2d1ff3000000c/train/javascript
* In My Own Words: 
    Given an array of strings, find the string that matches "needle" and return the index formatted in the string "found the needle at position x".
* Test Conditions: 
    findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk']) ==> "found the needle at position 5"
* Pseudocode: 
    1. Use findIndexOf() to get the index position then return the interpolated string.
* Notes After Attempt:
    Very easy problem. Could have been a bit shorter by just concatenating using "+".
*/

function findNeedle(haystack) {
    return haystack.indexOf("needle") === -1 ? "Your function didn't return anything." : `found the needle at position ${haystack.indexOf("needle")}`
}

console.log(findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'randomJunk']))