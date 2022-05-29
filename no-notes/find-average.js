function find_average(array) {
    return array.length === 0 ? 0 : array.reduce((a, b) => a + b) / array.length
}

console.log(find_average([]))