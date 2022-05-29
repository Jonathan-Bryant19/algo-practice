/*
If less than 1, leave the same
If less than or equal to 13, minus 1
If greater than 13, minus 2
*/
function getRealFloor(n) {
    if (n < 1) return n
    if (n <= 13) return n - 1
    if (n > 13) return n -2
}

console.log(getRealFloor(15))