/*
* Date: 2.26.23
* Rank: 6 Kyu
* Link: https://www.codewars.com/kata/53697be005f803751e0015aa/train/javascript
* In My Own Words: 
  Write two functions. The first should replace all lowercase vowels in a string with numbers. The second should take an output from the first function and replace the numbers with vowels. 
* Test Conditions: 
  encode('hello'), 'h2ll4'
  encode('How are you today?'), 'H4w 1r2 y45 t4d1y?'
  encode('This is an encoding test.'), 'Th3s 3s 1n 2nc4d3ng t2st.'
  decode('h2ll4'), 'hello'
* Pseudocode: 

* Notes After Attempt:
  I could have mapped.
*/

function encode(string) {
  const vowels = {
    a: 1,
    e: 2, 
    i: 3,
    o: 4,
    u: 5
  }

  const stringArray = string.split("")

  for (let i = 0; i < stringArray.length; i++) {
    if (stringArray[i] === "a" || stringArray[i] === "e" || stringArray[i] === "i" || stringArray[i] === "o" || stringArray[i] === "u") {
      stringArray.splice(i, 1, vowels[stringArray[i]])
    }
  }

  return stringArray.join("")
}

function decode(string) {
  const vowels = {
    1: "a",
    2: "e",
    3: "i",
    4: "o", 
    5: "u"
  }

  const stringArray = string.split("")

  for (let i = 0; i < stringArray.length; i++) {
    if (/[1-5]/.test(stringArray[i])) {
      stringArray.splice(i, 1, vowels[stringArray[i]])
    }
  }

  return stringArray.join("")
}

module.exports = { encode, decode }

