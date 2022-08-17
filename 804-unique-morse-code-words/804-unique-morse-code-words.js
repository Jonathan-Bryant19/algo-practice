/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    const codes = []
    const unique = []
    const morse = {
        "a": ".-", "b": "-...", "c": "-.-.", "d": "-..", "e": ".", "f": "..-.", "g": "--.", "h": "....", "i": "..", "j": ".---", "k": "-.-", "l": ".-..", "m": "--", "n": "-.", "o": "---", "p": ".--.", "q": "--.-", "r": ".-.", "s": "...", "t": "-", "u": "..-", "v": "...-", "w": ".--", "x": "-..-", "y": "-.--", "z": "--.."
    }
    for (let i = 0; i < words.length; i++) {
        let transformation = ""
        const split = words[i].split("")
        for (let letter of split) {
            transformation += morse[letter]
        }
        codes.push(transformation)
    }
    for (let i = 0; i < codes.length; i++) {
        if (!unique.includes(codes[i])) unique.push(codes[i])
    }
    return unique.length
};
    