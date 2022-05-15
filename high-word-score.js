/*
IMOW: Take a sing string containing a variable number of words. The total points for each word is equal to the sum of each letter's position in the alphabet (a =1, z = 26). Return the word with the highest score. If two words tie, return the first word.
TC:
high('man i need a taxi up to ubud'), 'taxi'
high('what time are we climbing up the volcano'), 'volcano'
high('aa b'), 'aa'
high('aaa d'), 'd'
PC:
1. Split the string so you can work with an array
2. Set a wordLeader variable equal to an object with keys of high score word and value
3. Map through the array so you can look at each word
    a. Split the word so you can work with an array of letters
    b. Set a counter to 0
    c. Find index of letter in alphabet +1 and add to counter
4. If the counter is greater than  the wordLeader.highScore, update the word and high score
    a. If it's a tie, do not update.
5. Return the objects word.
*/

function high(x){
    const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    const wordArray = x.split(' ')
    const wordLeader = {
        highScore: 0,
        word: ""
    }
    wordArray.map(word => {
        const letterArray = word.split('')
        let score = 0
        letterArray.map(letter => {
            score += alphabet.indexOf(letter) + 1
        })
        if (score > wordLeader.highScore) {
            wordLeader.highScore = score
            wordLeader.word = word
        }
    })
    return wordLeader.word
}

console.log(high('aaa d'))