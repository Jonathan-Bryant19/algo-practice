/*
* Date: 11.4.22
* Rank: 8 Kyu
* Link: https://www.codewars.com/kata/572059afc2f4612825000d8a/train/javascript
* In My Own Words: 
    Use a switch statement to return the number of days in a given month. 
* Test Conditions: 
    
* Pseudocode: 

* Notes After Attempt:

*/

function howManydays(month){
    var days
    switch (month){
        case 1: 
            days = 31
            break
        case 2: 
            days = 28
            break
        case 3: 
            days = 31
            break
        case 4:
            days = 30
            break
        case 5:
            days = 31
            break
        case 6:
            days = 30
            break
        case 7:
            days = 31
            break
        case 8:
            days = 31
            break
        case 9:
            days = 30
            break
        case 10:
            days = 31
            break
        case 11:
            days = 30
            break
        case 12:
            days = 31
            break
    }
    return days;
} 

module.exports = howManydays