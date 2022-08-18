/**
 * @param {number[]} arr
 * @return {number}
 Get the minimum number
 Build a hash
 Find the max value and see if that's enough. If yes, return 1, else add to a counter and find the next largest.
 */
var minSetSize = function(arr) {
    const minimum = Math.ceil(arr.length / 2)
    let hash = {}
    let counter = 0
    let digitsRemoved = 0
    for (let i = 0; i < arr.length; i++) {
        hash[arr[i]] = (hash[arr[i]] || 0) + 1
    }
    const freq = Object.values(hash)
    const sorted = freq.sort((a, b) => a - b)
    while (digitsRemoved < minimum) {
        digitsRemoved += sorted.pop()
        counter++
    }
    return counter
};