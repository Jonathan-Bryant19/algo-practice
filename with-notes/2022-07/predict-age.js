/*
* Date: 7.31.22
* Rank: 7 Kyu
* Link: https://www.codewars.com/kata/5aff237c578a14752d0035ae/train/javascript
* In My Own Words: 
    Given a list of integers, square each integer, sum them all, take the square root of the result, divide by two and return the answer. 
* Test Conditions: 
    predictAge(65,60,75,55,60,63,64,45), 86
* Pseudocode: 
    Map through and square
    Sum by using reduce()
    Take square root, divide by 2 and return
* Notes After Attempt:
    My solution matches best practices, but could have been written in fewer lines with the same logic.
*/

function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
    const squared = [age1,age2,age3,age4,age5,age6,age7,age8].map(age => {
        return age = age * age
    })
    const reduced = squared.reduce((a, b) => a + b)
    return Math.floor((Math.sqrt(reduced)) / 2)
}

console.log(predictAge(65,60,75,55,60,63,64,45))