/*
* Date: 8.20.22
* Rank: 7 Kyu
* Link: https://www.codewars.com/kata/57cc981a58da9e302a000214/train/javascript
* In My Own Words: 
    Given an array of integers and a limit integer, return boolean of whether or not all items in the array are less than or equal to the limit.
* Test Conditions: 
    smallEnough([66, 101], 200), true
    smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100), false
* Pseudocode: 

* Notes After Attempt:
    Took me way too long to remember array.every()
*/

function smallEnough(a, limit){
    return a.every(int => int <= limit)
}

console.log(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100))