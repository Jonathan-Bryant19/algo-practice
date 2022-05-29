function sumTwoSmallestNumbers(numbers) {  
    const num1 = numbers.splice(numbers.indexOf(Math.min(...numbers)),1)
    const num2 = numbers.splice(numbers.indexOf(Math.min(...numbers)),1)
    return num1[0] + num2[0]
}

console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]))