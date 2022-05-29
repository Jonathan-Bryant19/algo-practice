function arraySizeCompare(arr1, arr2) {
    return arr1.length - arr2.length
}

function sortByLength (array) {
    return array.sort(arraySizeCompare)
}

console.log(sortByLength(["Beg", "Life", "I", "To"]))