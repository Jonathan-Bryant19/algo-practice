/*
* Date: 11.11.22
* Rank: 8 Kyu
* Link: https://www.codewars.com/kata/55a996e0e8520afab9000055/train/javascript
* In My Own Words: 
    Use a switch statement to return a string based on the input. 
* Test Conditions: 
    cookie("Ryan"), "Who ate the last cookie? It was Zach!"
    cookie(26), "Who ate the last cookie? It was Monica!"
    cookie(2.3), "Who ate the last cookie? It was Monica!"
    cookie(true), "Who ate the last cookie? It was the dog!"
* Pseudocode: 

* Notes After Attempt:

*/

function cookie(x){
    if (typeof(x) === "string") {
        return "Who ate the last cookie? It was Zach!"
    } else if (typeof(x) === "number") {
        return "Who ate the last cookie? It was Monica!"
    } else {
        return "Who ate the last cookie? It was the dog!"
    }
}

module.exports = cookie