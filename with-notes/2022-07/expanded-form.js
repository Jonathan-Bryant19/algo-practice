/*
* Date: 7.1.22
* Rank: 6 Kyu
* Link: https://www.codewars.com/kata/5842df8ccbd22792a4000245/train/javascript
* In My Own Words: 
    Take an integer and return that integer as a string in expanded form. 
* Test Conditions: 
    (expandedForm(12), '10 + 2'
    (expandedForm(42), '40 + 2'
    (expandedForm(70304), '70000 + 300 + 4'
* Pseudocode: 
    1. Change integer to string and setup variables to hold the answer and number of digits.
    2. Iterate over the number string:
        a. If the digit is 0, reduce the number of digits and continue. 
        b. Otherwise, concat that digit to the answer.
        c. Add the number of 0's for that place and concat with +
    3. Return answer string.
* Notes After Attempt:
    I got hung up on iterating over a number. Pay attention to the return value! I don't like the nested loop and this thing got ugly quick. The Best Practices solutions are chains of methods. This one was harder than I gave it credit for. 
*/

function checkForZeros(num) {
    const arr = num.toString().split("")
    arr.shift()
    return arr.every(num => num === '0')
}

function expandedForm(num) {
    console.log(num)
    if (checkForZeros(num)) return num.toString()
    const str = num.toString()
    let digits = str.length - 1
    const arr = []
    let answer = ""
    for (let i = 0; i < str.length; i++) {
      if (str[i] == 0) { // here
        digits -= 1
        continue
      }
      answer += str[i]
      for (let j = digits; j > 0; j--) {
        answer += "0"    
      }
    //   if (i < str.length - 2) answer += " + " // here
      arr.push(answer)
      answer = ""
      digits -= 1
    }

    return arr.join(" + ")
}

console.log(expandedForm(990009))
// console.log(checkForZeros(9000))