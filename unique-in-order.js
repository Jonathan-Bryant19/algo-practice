var uniqueInOrder=function(iterable){
    console.log(iterable)
    if (iterable === undefined || []) {
      return []
    }
    let unique = []
    let iterableArray = iterable.split('')
    unique.push(iterableArray[0])
    for (let i = 1; i < iterableArray.length; i++) {
        if (iterableArray[i] !== unique[unique.length -1]) {
            unique.push(iterableArray[i])
        }
    }
    return unique
}

console.log(uniqueInOrder(['A'])) // ['A', 'B', 'C', 'D', 'A', 'B']