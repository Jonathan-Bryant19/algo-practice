/*
IMOW: Given priuncipal, annual interest, tax, and a desired total, calculate the number of years necessary to reach the desired total. Only annual interest is taxed.
TC:
calculateYears(1000, 0.05, 0.18, 1100) => 3
calculateYears(1000, 0.01625, 0.18, 1200) => 14
calculateYears(1000, 0.05, 0.18, 1000) => 0
PC:
1. While principal is less than desired
    taxable = principal * interest
    profit = taxable * (1 - tax)
    newBalance = principal + profit
*/


function calculateYears(principal, interest, tax, desired) {
    let years = 0
    while (principal < desired) {
        principal = ((principal * interest) * (1 - tax)) + principal
        years++
    }
    return years
}

console.log(calculateYears(1000, 0.05, 0.18, 1000))