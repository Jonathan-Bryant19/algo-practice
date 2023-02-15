/*
* Date: 2.14.23
* Rank: 7 Kyu
* Link: https://www.codewars.com/kata/57eba158e8ca2c8aba0002a0/train/javascript
* In My Own Words: 
  Given a string of words, return an array of those words in alphabetical order by last letter. If two words have the same last letter, the word that appears first in the string goes first. 
* Test Conditions: 
  last('man i need a taxi up to ubud'), ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']
  last('what time are we climbing up the volcano'), ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what'] 
  last('take me to semynak'), ['take', 'me', 'semynak', 'to']  
* Pseudocode: 

* Notes After Attempt:
  I've never written the callback like this before but was following the docs. Since the function was so simple I could have just passed it directly in as the argument for the sort method. 
*/

function last(x){
  let arrayOfWords = x.split(" ")
  const compareWords = function(a, b) {
    return a.charCodeAt(a.length-1) - b.charCodeAt(b.length-1)
  }
  return arrayOfWords.sort(compareWords)
}

module.exports = last
// console.log(last('take me to semynak'))