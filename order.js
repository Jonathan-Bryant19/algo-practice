/**
 * IMOW: Take a single string of words, each word containing a number. Reorder the string so that the words appear in numerical order. If the input is an empty string, return the input. 
 * 
 * TC:
 * "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
 * "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
 * ""  -->  ""
 * 
 * PC:
 * 1. Split the string and store in an array variable.
 * 2. Create an array with the number of positions equal to the the length of the array.
 * 3. Loop through the array
 *      a. Split the word
 *      b. Loop through each word array
 *          1. Find the index of the number
 *          2. Find the number value
 *          3. Copy that word to the empty array at the assocaited index - 1
 * 4. Return the answer array.
 * 
 */

function order(words){
    const wordArr = words.split(' ')
    const ans = Array(wordArr.length)
    for (let i = 0; i < wordArr.length; i++) {
        const singleWordArr = wordArr[i].split('')
        for (let j = 0; j < singleWordArr.length; j++) {
            if (isNaN(singleWordArr[j])) {
                null
            } else {
                ans.splice(parseInt(singleWordArr[j])-1, 1, wordArr[i])
                // console.log(wordArr[i])
                // console.log(parseInt(singleWordArr[j]))
            }
        }
    }
    return ans.join(' ')
}

console.log(order(""))