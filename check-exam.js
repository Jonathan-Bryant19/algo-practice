/**
 * IMOW: Take two arrays of strings that are the same length. Compare elements of the second array to the first. For every match, add 4 to a counter. For every mismatch, subtract 1 from the counter. For every blank entry in the second array, add 0. Return the counter, but return 0 if the counter < 0. 
 * TC:
 * checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
 * checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) → 7
 * checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16
 * checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]) → 0
 * PC:
 * 1. Set counter to 0
 * 2. Loop through array2
 *      a. If the index of array2 === array1, add 4 to counter
 *      b. If the index of array2 === "", add 0
 *      c. If the index of array !== array1, subtract 1 from counter
 * 3. If counter < 0, return 0, else return counter. 
 */

function checkExam(array1, array2) {
    let counter = 0
    for (let i = 0; i < array2.length; i++) {
        if (array2[i] === array1[i]) {
            counter = counter + 4
        } else if (array2[i] === "") {
            counter = counter + 0
        } else if (array2[i] !== array1[i]) {
            counter = counter - 1
        }
    }
    return counter < 0 ? 0 : counter
}

console.log(checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]))