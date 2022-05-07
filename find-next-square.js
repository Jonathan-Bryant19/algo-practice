/* 
IMOW: Given an integery, first determine if the number is a perfect square. If not, return -1. If it is, return the next highest perfect square. 
TC: 
121 --> 144
625 --> 676
114 --> -1 since 114 is not a perfect square
9 --> 16
PC:
1. Check to see if the number a perfect square
2. Add one to the square root of the argument, then square and return that number
*/

function findNextSquare(sq) {
    return Math.sqrt(sq) %1 === 0 ? Math.pow((Math.sqrt(sq) + 1), 2) : -1
}

console.log(findNextSquare(114))