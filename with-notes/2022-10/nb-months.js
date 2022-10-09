/*
* Date: 10.8.22
* Rank: 6 Kyu
* Link: https://www.codewars.com/kata/554a44516729e4d80b000012/train/javascript
* In My Own Words: 
    Given an old car price, new car price, savings per month, and percent loss every month, return how many months to save for new car based on current values of both cars. Also return the amount of money left over. Every two months, the percent loss per month increases by 0.5.
* Test Conditions: 
    nbMonths(2000, 8000, 1000, 1.5), [6, 766])
    nbMonths(12000, 8000, 1000, 1.5) ,[0, 4000])
* Pseudocode: 

* Notes After Attempt:

*/

function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth){
    if (startPriceNew <= startPriceOld) return [0, startPriceOld-startPriceNew]
    let months = 0
    let savings = 0
    let currentPriceOld = startPriceOld
    let currentPriceNew = startPriceNew
    let currentFunds = currentPriceOld
    while (currentFunds < currentPriceNew) {
        months++
        savings += savingperMonth
        currentPriceOld -= Math.ceil(currentPriceOld * (percentLossByMonth/100))
        currentPriceNew -= Math.ceil(currentPriceNew * (percentLossByMonth/100))
        currentFunds = savings + currentPriceOld
        if (months % 2 !== 0) percentLossByMonth += 0.5
    }
    return [months, currentFunds-currentPriceNew]
}

nbMonths(2000, 8000, 1000, 1.5)

module.exports = nbMonths