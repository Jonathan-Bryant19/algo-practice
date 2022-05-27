/**
 * IMOW: Take a string and determine if there are any duplicate letters. An empty string is true and we ignore case ("I" !== "i"). 
 * TC:
 * "Dermatoglyphics" --> true
 * "aba" --> false
 * "moOse" --> false (ignore letter case)
 * PC:
 * 1. Create empty array
 * 2. Loop from the end of the string
 * 3. If the empty array includes i, return false
 * 4. Else splice the letter and push it into the new array.
 * 5. If we loop through the array, return true.
 * 
 */
function isIsogram(str) {
    let singles = []
    const strArr = str.toLowerCase().split('')
    for (let i = strArr.length - 1; i > -1; i--) {
        if (singles.includes(strArr[i])) {
            return false
        } else {
            const temp = strArr.splice(i, 1)
            singles.push(temp)
            singles = singles.flat()
        }
    }
    return true
}

console.log(isIsogram("moOse"))