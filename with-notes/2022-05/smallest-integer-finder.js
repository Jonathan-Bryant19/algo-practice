/*
* Date: 5.31.22
* Rank: 8 Kyu
    * Kyu: 8 Kyu (easiest) ==> 1 Kyu (hardest). Dan (master level): 1 Dan (easiest) ==> 8 Dan (hardest).
* Link: 
    https://www.codewars.com/kata/55a2d7ebe362935a210000b2/train/javascript
* In My Own Words: 
    Return the smallest integer in an array.
* Test Conditions: 
    SmallestIntegerFinder([34, 15, 88, 2]) ==> 2
    SmallestIntegerFinder([34, -345, -1, 100]) ==> -345
    SmallestIntegerFinder([1, 2, 3, 4, 5]) ==> 1
* Pseudocode: 
1. Set variable to first element in array.
2. Loop through array
    a. If i < variable, set variable to i
3. Return i
* Notes After Attempt:
    I could have just used the spread operator and Math.min(). I need to remember that the spread operator breaks down an iterator into component parts, so passing the array into Math.min() without the square brackets (e.g., Math.min(...array)) will pass each individual element instead of the whole array.
*/

function findSmallestInt(args) {
    let lowest = args[0]
    for (const elem of args) {
        elem < lowest ? lowest = elem : null
    }
    return lowest
}   

console.log(findSmallestInt([1, 2, 3, 4, 5]))