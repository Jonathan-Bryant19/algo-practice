/*
* Date: 8.3.22
* Rank: 8 Kyu
* Link: codewars.com/kata/58dbdccee5ee8fa2f9000058/train/javascript
* In My Own Words: 
    Return true if the string passed has the characters "english" that appear consecultively. Otherwise, return false. 
* Test Conditions: 
    spEng("english"), true
    spEng("egnlish"), false
* Pseudocode: 
    Make lower case
    Use string.includes()
* Notes After Attempt:

*/

function spEng(sentence){
    return sentence.toLowerCase().includes("english")
}

console.log(spEng("english"))