/*
* Date: 8.12.22
* Rank: 7 Kyu
* Link: https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/javascript
* In My Own Words: 
    Given an integer, rearrange the digits and return in descending order.
* Test Conditions: 
    descendingOrder(1), 1
    descendingOrder(111), 111
    descendingOrder(15), 51
    descendingOrder(1021), 2110
    descendingOrder(123456789), 987654321
* Pseudocode: 
    
* Notes After Attempt:

*/


function descendingOrder(n){
    const string = n.toString().split("")
    return parseInt(string.sort((a, b) => b - a).join(""))
}
console.log(descendingOrder(123456789))