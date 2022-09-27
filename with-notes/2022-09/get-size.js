/*
* Date: 9.26.22
* Rank: 8 Kyu
* Link: https://www.codewars.com/kata/565f5825379664a26b00007c/train/javascript
* In My Own Words: 
    Given height, width, and depth, return the area and volume in an array.
* Test Conditions: 
    getSize(4, 2, 6), [88, 48])
    getSize(10, 10, 10), [600, 1000])
    getSize(4, 2, 6)[0], 88)
* Pseudocode: 

* Notes After Attempt:

*/

function getSize(width, height, depth) {
    const area = 2*(width * height) + 2*(width * depth) + 2*(height * depth)
    const volume = width * height * depth
    return [area, volume]
}

console.log(getSize(4,2,6))