/*
* Date: 9.27.22
* Rank: 7 Kyu
* Link: https://www.codewars.com/kata/5680781b6b7c2be860000036/train/javascript
* In My Own Words: 
    Return an array of all index positions (1-based) of vowels given a string input.
* Test Conditions: 
    Mmmm  => []
    Super => [2,4]
    Apple => [1,5]
    YoMama -> [1,2,4,6]
* Pseudocode: 

* Notes After Attempt:

*/

function vowelIndices(word){
    const vowels = ["a", "e", "i", "o", "u", "y"]
    const lowerCase = word.toLowerCase()
    const answer = []
    for (let i = 0; i < word.length; i++) {
        if (vowels.includes(lowerCase[i])) {
            answer.push(i+1)
        }
    }
    return answer
}

console.log(vowelIndices("YoMama"))