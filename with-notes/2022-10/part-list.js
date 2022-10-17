/*
* Date: 10.17.22
* Rank: 7 Kyu
* Link: https://www.codewars.com/kata/56f3a1e899b386da78000732/train/javascript
* In My Own Words: 
    Given a list of strings, return a nested list of all combinations of strings.
* Test Conditions: 
    partlist(["I", "wish", "I", "hadn't", "come"]) => [["I", "wish I hadn't come"], ["I wish", "I hadn't come"], ["I wish I", "hadn't come"], ["I wish I hadn't", "come"]])
* Pseudocode: 

* Notes After Attempt:

*/

function partlist(arr) {
    const answer = []
    for (let i = 0; i+1 < arr.length; i++) {
        const firstPart = arr.slice(0, i+1).join(" ")
        const secondPart = arr.slice(i+1).join(" ")
        answer.push([firstPart, secondPart])
    }
    return answer
}

module.exports = partlist