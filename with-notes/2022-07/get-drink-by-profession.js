/*
* Date: 7.20.22
* Rank: 8 Kyu
* Link: https://www.codewars.com/kata/568dc014440f03b13900001d/train/javascript
* In My Own Words: 
    Given a string input, return a string output based on provided values. 
* Test Conditions: 
    getDrinkByProfession("jabrOni"), "Patron Tequila"
    getDrinkByProfession("scHOOl counselor"), "Anything with Alcohol"
    getDrinkByProfession("prOgramMer"), "Hipster Craft Beer"
    getDrinkByProfession("bike ganG member"), "Moonshine"
* Pseudocode: 
    Use switch statement. 
* Notes After Attempt:

*/

function getDrinkByProfession(param) {
    switch (param.toLowerCase()) {
        case 'jabroni':
            return "Patron Tequila"
        case 'school counselor':
            return "Anything with Alcohol"
        case 'programmer':
            return 'Hipster Craft Beer'
        case 'bike gang member':
            return 'Moonshine'
        case 'politician':
            return 'Your tax dollars'
        case 'rapper':
            return 'Cristal'
        default:
            return 'Beer'
    }
}

console.log(getDrinkByProfession("jabrOni"))