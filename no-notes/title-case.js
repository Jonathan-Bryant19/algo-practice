/*
IMOW: Convert a string into a string that has the first letter of every word capitalized. The first word is always capitalized, but words supplied as a single string in a second argument should NOT be capitalized.
TC:
titleCase(''), ''
titleCase('a clash of KINGS', 'a an the of'), 'A Clash of Kings'
titleCase('THE WIND IN THE WILLOWS', 'The In'), 'The Wind in the Willows'
titleCase('the quick brown fox'), 'The Quick Brown Fox'
titleCase('meet the bryants', 'the'), 'Meet the Bryants'
PC:
1. Take the title and minorWords and split them both
2. Captialize the first letter of the first word in title
3. Loop through the title starting with index 1
    a. check to see if word is in minorWords
        1. If yes, skip
        2. If no, capitalize the first letter 
4. Join the title and return the string
*/

function titleCase(title, minorWords) {
    if (minorWords === undefined) minorWords = ""
    const titleArray = title.split(' ').map(word => word.toLowerCase())
    const minorWordsArray = minorWords.split(' ').map(word => word.toLowerCase())
    titleArray[0] = titleArray[0].charAt(0).toUpperCase() + titleArray[0].slice(1)
    for (let i = 1; i < titleArray.length; i++) {
        if (!minorWordsArray.includes(titleArray[i])) {
            titleArray[i] = titleArray[i].toLowerCase()
            titleArray[i] = titleArray[i].charAt(0).toUpperCase() + titleArray[i].slice(1)
        }
    }
    return titleArray.join(' ')
}

console.log(titleCase('meet the bryants', 'the'))