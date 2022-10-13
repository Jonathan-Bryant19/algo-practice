/*
* Date: 10.13.22
* Rank: 8 Kyu
* Link: https://www.codewars.com/kata/56fc55cd1f5a93d68a001d4e/train/javascript
* In My Own Words: 
  Given a years worth of integers, sum the integers and multiply by 20. Return result.  
* Test Conditions: 
 
* Pseudocode: 

* Notes After Attempt:

*/

function stairsIn20(s){
    let sum = 0
    for (let elem of s) {
        for (let i = 0; i < elem.length; i++) {
            sum += elem[i]
        }
    }
    return sum * 20
}

module.exports = stairsIn20