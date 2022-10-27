/*
* Date: 10.27.22
* Rank: 7 Kyu
* Link: https://www.codewars.com/kata/59d9ff9f7905dfeed50000b0/train/javascript
* In My Own Words: 
    Given an array of strings, return an array of integers that show the number of letters for each word that have letters in the same position as the alphabet (1-indexed).
* Test Conditions: 
    solve(["abode","ABc","xyzD"]),[4,3,1]
    solve(["abide","ABc","xyz"]),[4,3,0]
    solve(["IAMDEFANDJKL","thedefgh","xyzDEFghijabc"]),[6, 5, 7]
    solve(["encode","abc","xyzD","ABmD"]),[1, 3, 1, 3]
* Pseudocode: 
    * Make an object for reference
    * Make it lowercase
    * Split each word
* Notes After Attempt:

*/

function solve(arr){  
    const alpha = {
        1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "f", 7: "g", 8: "h", 9: "i", 10: "j", 11: "k", 12: "l", 13: "m", 14: "n", 15: "o", 16: "p", 17: "q", 18: "r", 19: "s", 20: "t", 21: "u", 22: "v", 23: "w", 24: "x", 25: "y", 26: "z"
    }
    const answer = []
    arr.forEach(word => {
        word = word.toLowerCase()
        let split = word.split("")
        let count = 0
        for (let i = 0; i < split.length; i++) {
            if (split[i] == alpha[i+1]) count++
        }
        answer.push(count)
    })
    return answer
}

module.exports = solve