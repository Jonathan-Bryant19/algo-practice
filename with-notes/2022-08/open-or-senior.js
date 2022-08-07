/*
* Date: 8.6.22
* Rank: 7 Kyu
* Link: https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa/train/javascript
* In My Own Words: 
    Given an age and handicap, return Senior or Open based on provided criterion. 
* Test Conditions: 
    openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]),['Open', 'Senior', 'Open', 'Senior']
    openOrSenior([[3, 12],[55,1],[91, -2],[53, 23]]),['Open', 'Open', 'Open', 'Open']
    openOrSenior([[59, 12],[55,-1],[12, -2],[12, 12]]),['Senior', 'Open', 'Open', 'Open']
* Pseudocode: 
    Map through
* Notes After Attempt:

*/

function openOrSenior(data) {
    let myAns = data.map(data => {
      return (data[0] > 54 && data[1] > 7) ? 'Senior' : 'Open'
    })
    return myAns
}