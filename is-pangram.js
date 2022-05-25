/*
IMOW: Given a string, check to see if it's a pangram (contains every letter of the alphabet). Ignore numbers and punctuation.
TC:
isPangram("The quick brown fox jumps over the lazy dog.") => true
isPangram("This is not a pangram.") => false
PC:
        1. Create an object that has every letter of the alphabet as a key and set the value to 0.
        2. Make the string lowercase then split it.
3. Loop through array
    a. If the character is in the alphabet object, add 1 to that key's value then increment i
    b. If the character is NOT in the alphabet object, increment i
4. Get Object.values() and see if there are any that equal 0 (some()?)
    a. If a 0 exists, return false, else return true
*/

function isPangram(string){
    const alphabet = {
        "a": 0, "b": 0, "c": 0, "d": 0, "e": 0, "f": 0, "g": 0, "h": 0, "i": 0, "j": 0, "k": 0, "l": 0, "m": 0, "n": 0, "o": 0, "p": 0, "q": 0, "r": 0, "s": 0, "t": 0, "u": 0, "v": 0, "w": 0, "x": 0, "y": 0, "z": 0
    }
    const stringArray = string.toLowerCase().split('')
    const alphabetKeys = Object.keys(alphabet)

    for (let i = 0; i < stringArray.length; i++) {
        if (alphabetKeys.some(char => char === stringArray[i])) alphabet[stringArray[i]] = alphabet[stringArray[i]] + 1
    }
    
    return Object.values(alphabet).every(value => value > 0)

}

console.log(isPangram("The quick brown fox jumps over the lazy dog."))