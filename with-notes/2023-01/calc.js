/*
* Date: 1.18.23
* Rank: 7 Kyu
* Link: https://www.codewars.com/kata/57f75cc397d62fc93d000059/train/javascript
* In My Own Words: 
  Given a string, take the character code of the string joined into a single string. Save that number, then replace any incidence of 7 with 1 and save that second number. Return the difference between the first and second number.
* Test Conditions: 
  calc('abcdef'), 6
  calc('ifkhchlhfd'), 6 
  calc('aaaaaddddr'), 30 
  calc('jfmgklf8hglbe'), 6  
  calc('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'), 96
* Pseudocode: 

* Notes After Attempt:
  I didn't read the instructions properly and screwed up my approach. I definitely should have used the reduce method. 
*/

function calc(x){
  let total1 = ''
  let total2 = ''
  for (let i = 0; i < x.length; i++) {
    let temp = x.charCodeAt(i)
    total1 += temp
  }
  for (let i = 0; i < total1.length; i++) {
    if (total1[i] == 7) {
      total2 += 1
    } else {
      total2 += total1[i]
    }
  }
  let sum1 = 0
  let sum2 = 0
  for (let i = 0; i < total1.length; i++) {
    sum1 += parseInt(total1[i])
    sum2 += parseInt(total2[i])
  }
  return sum1 - sum2
}

module.exports = calc