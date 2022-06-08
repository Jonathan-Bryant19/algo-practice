/*
* Date: 6.7.22
* Rank: 7 Kyu
    * Kyu: 8 Kyu (easiest) ==> 1 Kyu (hardest). Dan (master level): 1 Dan (easiest) ==> 8 Dan (hardest).
* Link: 
    https://www.codewars.com/kata/551f37452ff852b7bd000139/train/javascript
* In My Own Words: 
    Given two integers, add them and return the sum in binary as a string. 
* Test Conditions: 
    addBinary(1, 1) ==> "10"
    addBinary(9, 3) ==> "1100"
* Pseudocode: 
    1. Add the two inputs
    2. Create an empty array
    3. While loop that checks for a remainder of 0 to exit
        a. Set varialbes to follow the quotient and remainer
        b. Push remainder to array
    4. Join array and return string. 
* Notes After Attempt:
    Initally I had an empty array that I pushed to, but that would require that I reverse the array, which could make it inefficient at scale. I'm not 100% sure if using padStart() has the same time complexity that array.unshift() or array.reverse() would have, but I could have used the radix parameter of Number.toString() to greatly simplify. 
*/

function addBinary(a,b) {
    let sum = a + b
    let quotient = 1
    let binaryString = ""

    while (quotient !== 0) {
        remainder = (sum % 2).toString()
        binaryString = binaryString.padStart(binaryString.length + 1, remainder)
        quotient = Math.floor(sum / 2)
        sum = quotient
    }

    return binaryString
}

console.log(addBinary(1, 1))