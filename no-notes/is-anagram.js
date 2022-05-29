/*
isAnagram("foefet", "toffee"), true
isAnagram("Buckethead", "DeathCubeK"), true
isAnagram("dumble", "bumble"), false
isAnagram("ound", "round"), false
PC:
1. Make object out of strings
    a. Each letter is a key
        b. Check for letter in object
            1. If in object, add 1
            2. If not in object, create and set value to 1
2. Loop through keys in first object
    a. If key is in second object, check values of both
        1. If value is the same, move to next key in first object
        2. If value is not the same, return false
    b. if key is NOT in second object, return false
3. If loop completed without returning false, return true
*/

var isAnagram = function(test, original) {
    test = test.toLowerCase()
    original = original.toLowerCase()
    const testObject = {}
    const originalObject = {}
    for (let i = 0; i < test.length; i++) {
        if (Object.keys(testObject).includes(test[i])) {
            testObject[test[i]] = testObject[test[i]] + 1
        } else {
            testObject[test[i]] = 1
        }
    }
    for (let i = 0; i < original.length; i++) {
        if (Object.keys(originalObject).includes(original[i])) {
            originalObject[original[i]] = originalObject[original[i]] + 1
        } else {
            originalObject[original[i]] = 1
        }
    }
    const keys1 = Object.keys(testObject)
    const keys2 = Object.keys(originalObject)
    if (keys1.length !== keys2.length) return false
    for (let key of keys1) {
        if (testObject[key] !== originalObject[key]) {
            return false
        }
    }
    
    return true
    
}

console.log(isAnagram("ound", "round")) // => true