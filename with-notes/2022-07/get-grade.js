/*
* Date: 7.26.22
* Rank: 8 Kyu
* Link: https://www.codewars.com/kata/55cbd4ba903825f7970000f5/train/javascript
* In My Own Words: 
    Give three integers, return a grade based on the average of those integers (A-F based on provided score ranges).
* Test Conditions: 
    getGrade(95,90,93), 'A'
    getGrade(82,85,87), 'B'
    getGrade(48,55,52), 'F'
* Pseudocode: 
    Get the average and use a switch statement.
* Notes After Attempt:
    A series of one line if/else if statements could have looked cleaner. 
*/

function getGrade (s1, s2, s3) {
    const average = (s1 + s2 + s3) / 3
    if (average >= 90) return "A"
    if (average >= 80 && average < 90) return "B"
    if (average >= 70 && average < 80) return "C"
    if (average >= 60 && average < 70) return "D"
    if (average >= 0 && average < 60) return "F"
}

console.log(getGrade(95, 90, 93))