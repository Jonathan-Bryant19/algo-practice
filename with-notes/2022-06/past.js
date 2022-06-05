/*
* Date: 6.5.22
* Rank: 8 Kyu
    * Kyu: 8 Kyu (easiest) ==> 1 Kyu (hardest). Dan (master level): 1 Dan (easiest) ==> 8 Dan (hardest).
* Link: 
    https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/train/javascript
* In My Own Words: 
    Given three integers as input representing hours, minutes, seconds since midnight, return the time since midnight as an integer in milliseconds. 
* Test Conditions: 
    past(0,1,1),61000
    past(1,1,1),3661000
    past(0,0,0),0
* Pseudocode: 
    1 h = 3600000 ms; 1 m = 60000 ms; 1 s = 1000 ms
* Notes After Attempt:

*/

function past(h, m, s){
    return (h * 3600000) + (m * 60000) + (s * 1000)
}

console.log(past(1,1,1))