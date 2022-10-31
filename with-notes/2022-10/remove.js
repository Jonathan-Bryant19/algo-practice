/*
* Date: 10.31.22
* Rank: 8 Kyu
* Link: https://www.codewars.com/kata/57faf12b21c84b5ba30001b0/train/javascript
* In My Own Words: 
    Remove all exclamation points from a string except the final point.  
* Test Conditions: 
    remove("Hi!") === "Hi!"
    remove("Hi!!!") === "Hi!"
    remove("!Hi") === "Hi!"
    remove("!Hi!") === "Hi!
* Pseudocode: 

* Notes After Attempt:

*/

function remove (string) {
    const split = string.split("")
    let s = ""
    for (let i = 0; i < split.length; i++) {
        if (split[i] !== "!") {
            s += split[i]
        }
    }
    return s + "!"
}

module.exports = remove