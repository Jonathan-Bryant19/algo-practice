/*
* Date: 7.20.22
* Rank: 7 Kyu
* Link: https://www.codewars.com/kata/5663f5305102699bad000056/train/javascript
* In My Own Words: 
    Given two arrays of strings, find the longest in each and return the difference between them as an integer. 
* Test Conditions: 
    var s1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"];
    var s2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"];
    mxdiflg(s1, s2), 13
* Pseudocode: 
    Find the longest string in each array and store in a variable.
    Return the difference between the two.
* Notes After Attempt:
    I could have used map() to create two arrays containing string lengths, but my solution has O(1) space complexity. Using an array makes space complexity O(n).
*/

function mxdiflg(a1, a2) {
    if (a1[0] === undefined || a2[0] === undefined) return -1
    let a1Max = 0
    let a1Min = Infinity
    let a2Max = 0
    let a2Min = Infinity
    for (let i = 0; i < a1.length; i++) {
        if (a1[i].length > a1Max) a1Max = a1[i].length
        if (a1[i].length < a1Min) a1Min = a1[i].length
    }
    for (let j = 0; j < a2.length; j++) {
        if (a2[j].length > a2Max) a2Max = a2[j].length
        if (a2[j].length < a2Min) a2Min = a2[j].length
    }
    return Math.max(Math.abs(a1Max - a2Min), Math.abs(a2Max - a1Min))
}

var s1 = [];
var s2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"];
console.log(mxdiflg(s1, s2))