/*
IMOW: Given a one-word string, return the string with a space between the words if the string is in camel case. Otherwise return the string as is.
TC:
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
"iLoveMyFamily" => "i Love My Family"
PC:
1. Find index of each uppercase letter
2. Split at those points
3. Concat a space, then join the arrays
*/

function solution(string) {
    const splitString = string.split('')
    for (let i = splitString.length -1; i > 0; i--) {
        if (splitString[i] === splitString[i].toUpperCase()) {
            splitString.splice(i, 0, " ")
        }
    }
    return splitString.join('')
}

console.log(solution("iLoveMyFamily"))