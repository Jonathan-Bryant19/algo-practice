/*
* Date: 9.10.22
* Rank: 7 Kyu
* Link: https://www.codewars.com/kata/534d0a229345375d520006a0/train/javascript
* In My Own Words: 
    Check if a number is a power of two.
* Test Conditions: 
    isPowerOfTwo(1024) // -> true
    isPowerOfTwo(4096) // -> true
    isPowerOfTwo(333)  // -> false
* Pseudocode: 

* Notes After Attempt:

*/

function isPowerOfTwo(n){
    if (n === 2 || n === 1) return true
    let num = 2
    while (num <= n) {
        if (num === n) return true
        num *= 2
    }
    return false
}

console.log(isPowerOfTwo(1024))