/*
* Date: 8.7.22
* Rank: 8 Kyu
* Link: https://www.codewars.com/kata/559ac78160f0be07c200005a/train/javascript
* In My Own Words: 
    Return a reversed string.
* Test Conditions: 
    nameShuffler('john McClane'),'McClane john'
* Pseudocode: 
    Split and reverse.
* Notes After Attempt:

*/

function nameShuffler(str){
    return str.split(" ").reverse().join(" ")
}

console.log(nameShuffler('john McClane'))