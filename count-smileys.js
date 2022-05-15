/*
IMOW: Given an array of string emojis, count the number of valid smileys. 
    MUST have eyes: ":" or ";"
    MAY have nose: "-" or "~"
    MUST have mouth: ")" or "D"
TC:
countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;
countSMileys([':)', ';)', ':-D', ':~D']);      // should return 4;
PC:
1. Set counter to 0
2. Map through array
    a. Split the string
    b. If length is 3:
        Check for each possible combo in order, then add to counter
    c. If length is 2:
        Check for each possible combo in order, then add to counter
    d. Else skip
*/
function countSmileys(arr) {
    let counter = 0
    arr.map(smiley => {
        const smileyArr = smiley.split('')
        if (smileyArr.length === 3) {
            if ((smileyArr[0] === ":" || smileyArr[0] === ";") && (smileyArr[1] === "-" || smileyArr[1] === "~") && (smileyArr[2] === ")" || smileyArr[2] === "D")) {
                counter += 1
            }
        } else if (smileyArr.length === 2) {
            if ((smileyArr[0] === ":" || smileyArr[0] === ";") && (smileyArr[1] === ")" || smileyArr[1] === "D")) {
                counter += 1
            }
        }
    })
    return counter
}

console.log(countSmileys([':)', ';)', ':-D', ':~D']))
