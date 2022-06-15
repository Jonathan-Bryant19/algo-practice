/*
* Date: 6.14.22
* Rank: 8 Kyu
* Link: 
    https://www.codewars.com/kata/57a083a57cb1f31db7000028/train/javascript
* In My Own Words: 
    Given a positive integer (n), return (in an array) all the results from 0 to n as 2 to the power of n.
* Test Conditions: 
    n = 0  ==> [1] 
    n = 1  ==> [1, 2]
    n = 2  ==> [1, 2, 4]
* Pseudocode: 
    1. Create empty array.
    2. for loop to go from 0 to n
        a. Take each number and square it. 
        b. Push to array.
    3. Return array.
* Notes After Attempt:

*/

function powersOfTwo(n){
    const squaredArray = []
    let counter = 0
    while (counter <= n) {
        squaredArray.push(2 ** counter)
        counter += 1
    }
    return squaredArray
}

console.log(powersOfTwo(3))