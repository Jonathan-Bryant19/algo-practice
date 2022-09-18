/*
* Date: 9.18.22
* Rank: 7 Kyu
* Link: https://www.codewars.com/kata/539de388a540db7fec000642/train/javascript
* In My Own Words: 
    Check if if date occurs after another.
* Test Conditions: 
    checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
    checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false
* Pseudocode: 

* Notes After Attempt:

*/

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    const current = Date.parse(currentDate)
    const expiration = Date.parse(expirationDate)
    if (enteredCode === correctCode && current <= expiration) return true
    return false
}

console.log(checkCoupon("123", "123", "July 9, 2015", "July 2, 2015"))