function getSum( a,b ) {
    let sum = 0
    for (i = Math.min(a,b); i <= Math.max(a,b); i++) {
        sum = sum + i
    }
    return sum
}

console.log(getSum(0,-1))