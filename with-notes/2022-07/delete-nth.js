/*
* Date: 7.16.22
* Rank: 6 Kyu
* Link: https://www.codewars.com/kata/554ca54ffa7d91b236000023/train/javascript
* In My Own Words: 
    Given an array of numbers and a single integer as input, return the array of numbers with duplicates that have a frequency above the integer input removed. 
* Test Conditions: 
    deleteNth([20,37,20,21], 1), [20,37,21]
    deleteNth([1,1,3,3,7,2,2,2,2], 3), [1, 1, 3, 3, 7, 2, 2, 2]
* Pseudocode: 
    1. Create an empty object and empty array.
    2. Loop through array
        a. For each number
            i. Check to see if the number exists as a key
                1. If yes, check if the value of the key is > 3
                    * If yes, continue
                    * If no, push number to answer array add 1 to value in object
                2. If no, create key and set value to 1
    3. Return answer array.
* Notes After Attempt:
    It looks like I was right to use the object as a reference. However, I could have avoided building the answer array by running filter against the input array. Filter is a powerful method I seem to keep forgetting about. I should practice with it!
*/

function deleteNth(arr,n){
    const counterObj = {}
    const answerArr = []

    for (let i = 0; i < arr.length; i++) {
        if (counterObj[arr[i]] !== undefined) {
            if (counterObj[arr[i]] >= n) {
                continue
            } else {
                answerArr.push(arr[i])
                counterObj[arr[i]] = counterObj[arr[i]] + 1
            }
        } else {
            answerArr.push(arr[i])
            counterObj[arr[i]] = 1
        }
    }
    console.log("counterObj: ", counterObj)
    return answerArr
}

console.log(deleteNth([1,1,3,3,7,2,2,2,2], 3)) // [20,37,21]