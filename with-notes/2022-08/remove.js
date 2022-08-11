/*
* Date: 8.11.22
* Rank: 8 Kyu
* Link: https://www.codewars.com/kata/57faf7275c991027af000679/train/javascript
* In My Own Words: 
    Given a string an integer, remove a number of exclaimation marks equal to n from left to right.
* Test Conditions: 
    remove("Hi!",1) === "Hi"
    remove("Hi!",100) === "Hi"
    remove("Hi!!!",1) === "Hi!!"
    remove("!!!Hi !!hi!!! !hi",1) === "!!Hi !!hi!!! !hi"
* Pseudocode: 
    Use a counter and a while loop. 
* Notes After Attempt:

*/

function remove(s,n){
    let idx = 0
    let split = s.split("")
    while (n > 0 && idx < split.length) {
        if (split[idx] === "!") {
            split[idx] = split[idx].replace("!", "")
            n -= 1
        }
        idx += 1
    }
    return split.join("")
}

console.log(remove("!!!Hi !!hi!!! !hi",100))