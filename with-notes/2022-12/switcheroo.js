/*
* Date: 12.23.22
* Rank: 7 Kyu
* Link: codewars.com/kata/57f759bb664021a30300007d/train/javascript
* In My Own Words: 
  Given a string consisting of 'a', 'b', and 'c', return a string with 'a' and 'b' switched.
* Test Conditions: 
  switcheroo('abc'), 'bac');
  switcheroo('aaabcccbaaa'), 'bbbacccabbb'); 
  switcheroo('ccccc'), 'ccccc');    
* Pseudocode: 

* Notes After Attempt:

*/

function switcheroo(x){
  const stringArray = x.split('')
  for (let i = 0; i< stringArray.length; i++) {
    if (stringArray[i] === 'a') {
      stringArray[i] = 'b'
    } else if (stringArray[i] === 'b') {
      stringArray[i] = 'a'
    }
  }
  return stringArray.join('')
}

module.exports = switcheroo