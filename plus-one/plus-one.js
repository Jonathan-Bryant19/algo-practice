/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    const num = BigInt(digits.join("")) + BigInt(1)
    return num.toString().split("").map(n => parseInt(n))
}