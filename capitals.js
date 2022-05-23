// capitals('CodEWaRs') => [0,3,4,6]

var capitals = function (word) {
    const answer = []
    for (let i = 0; i < word.length; i++) {
        if (word[i] === word[i].toUpperCase()) {
            answer.push(i)
        }
    }
    return answer
}

console.log(capitals('CodEWaRs'))