/*
* Date: 7.1.22
* Rank: 7 Kyu
* Link: https://www.codewars.com/kata/577bd8d4ae2807c64b00045b/train/javascript
* In My Own Words: 
    Return an interpolated string with the input name formatted correctly.
* Test Conditions: 
    * With `name` = "john"  => return "Hello, John!"
    * With `name` = "aliCE" => return "Hello, Alice!"
    * With `name` not given or `name` = "" => return "Hello, World!"       
* Pseudocode: 
    1. Format the name and return the string.
* Notes After Attempt:

*/

function hello(name) {
    if (name === undefined) return "Hello, World!"
    name = name.toLowerCase()
    return name == "" ? "Hello, World!" : `Hello, ${name.charAt(0).toUpperCase() + name.slice(1)}!`
}

console.log(hello(undefined))