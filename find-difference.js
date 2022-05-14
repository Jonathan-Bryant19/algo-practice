function findDifference(a, b) {
    return Math.abs((a[0] * a[1] * a[2]) - (b[0] * b[1] * b[2]))
}

console.log(findDifference([3, 2, 5], [1, 4, 4]))