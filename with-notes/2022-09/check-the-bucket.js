/*
* Date: 9.16.22
* Rank: 8 Kyu
* Link: https://www.codewars.com/kata/59bd5dc270a3b7350c00008b/train/javascript
* In My Own Words: 
    Check to see if an array contains the word "gold".
* Test Conditions: 
    checkTheBucket(["stone", "stone", "stone", "stone", "stone"]), false);
    checkTheBucket(["stone", "stone", "stone", "stone", "gold"]), true);
* Pseudocode: 

* Notes After Attempt:

*/

function checkTheBucket(bucket){
    return bucket.includes("gold") ? true : false
}

console.log(checkTheBucket(["stone", "stone", "stone", "stone", "gold"]))