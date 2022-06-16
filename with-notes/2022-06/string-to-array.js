/*
* Date: 6.15.22
* Rank: Codewars - 8 Kyu
* Link: 
    https://www.codewars.com/kata/57e76bc428d6fbc2d500036d/train/javascript
* In My Own Words: 
    Convert a string into an array of words. 
* Test Conditions: 
    "Robin Singh" ==> ["Robin", "Singh"]
    "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]   
* Pseudocode: 
    1. Array.prototype.split() should work here. 
* Notes After Attempt:
    This was very easy, but I should refresh on the different parameters for split().
*/

function stringToArray(string){

	return string.split(" ")

}

console.log(stringToArray("I love my family so very much!"))