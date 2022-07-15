/*
* Date: 7.15.22
* Rank: 6 Kyu
* Link: https://www.codewars.com/kata/564057bc348c7200bd0000ff/train/javascript
* In My Own Words: 
    Repeat the given divisibility rule until the output is static.
* Test Conditions: 
    thirt(8529), 79
    thirt(85299258), 31
    thirt(5634), 57
    thirt(1111111111), 71
    thirt(987654321), 30
* Pseudocode: 
    1. Setup empty array to store remainders of powers of 10 mod 13. 
    2. Fill the array based on the length of the input.
    3. Reverse the array
    4. Loop through and multiply the value in each index by the corresponding value at the same index in the other array.
    5. Add these numbers together and return results.
* Notes After Attempt:

*/

function thirt(n) {
    function cycle(n, thisTotal = 0) {
        const powers = []
        for (let i = 0; i < n.toString().length; i++) {
            powers.push(Math.pow(10, i) % 13)
        }
        const reversed = Array.from(String(n), Number).reverse()
        for (let i = 0; i <= reversed.length -1; i++) {
            thisTotal = thisTotal + (powers[i] * reversed[i])
        }
        return thisTotal
    }
    let firstRun = cycle(n)
    let isSame = false
    while (!isSame) {
        let secondRun = cycle(firstRun)
        if (firstRun === secondRun) {
            total = firstRun
            isSame = true 
        } else {
            firstRun = secondRun
        }
    }
    return total
}

console.log(thirt(1111111111)) // 