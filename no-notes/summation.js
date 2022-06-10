/*
Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.
TC:
summation(2) -> 3
summation(8) -> 36
PC: 
1. Set count equal to 0
2. Loop until num and add to count
*/

var summation = function (num) {
    let count = 0
    for (i = 1; i <= num; i++) {
        count = count + i
    }
    return count
}

summation(8)