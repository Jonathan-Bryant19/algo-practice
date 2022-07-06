/*
* Date: 7.6.22
* Rank: 6 Kyu
* Link: https://www.codewars.com/kata/5503013e34137eeeaa001648/train/javascript
* In My Own Words: 
    Given an integer, return a diamond made of "*" with the widest point being equal to the integer supplied. Return null if integer is negative or even. 
* Test Conditions: 
    diamond(3) 
     *
    ***
     *
* Pseudocode: 
    1. Return null if n is even or negative.
    2. Levels before and after middle = Math.floor(n/2) 
    3. The number of space starts with Levels and decreases by 1 until the middle
    4. The number of stars starts with 1 and increases by 2 until middle, then reverses
* Notes After Attempt:
    Best Practices had it done in a single loop using Math.abs. That allows you to loop but ignore negative numbers as you start moving down. 
*/

function diamond(n){
    if (n % 2 === 0 || n < 1) return null
    const levels = Math.floor(n/2)
    let diamond = ""
    let space = " "
    let stars = "*"
    let starCount = 1
    for (let i = 0; i < levels; i++) {
        diamond = diamond + space.repeat(levels - i)
        diamond = diamond + stars.repeat(starCount)
        diamond = diamond + '\n'
        starCount += 2
    }
    starCount = n
    for (let i = levels; i >= 0; i--) {
        diamond = diamond + space.repeat(levels - i)
        diamond = diamond + stars.repeat(starCount)
        starCount -= 2
        if (starCount > 0) diamond = diamond + '\n'
    }
    return diamond
}

console.log(diamond(3))