/*
* Date: 6.26.22
* Rank: 8 Kyu
* Link: https://www.codewars.com/kata/57202aefe8d6c514300001fd/train/javascript
* In My Own Words: 
    Return the total cost depending on the number of hotdogs purchased. If below 5, 100 cents per dog. If between 5 (inclusive) and 10, 95 cents per dog. If above 10 (inclusive) dog, 90 cents per dog.
* Test Conditions: 
    saleHotdogs(1),100
    saleHotdogs(4),400
    saleHotdogs(5),475
    saleHotdogs(9),855
    saleHotdogs(10),900
    saleHotdogs(100),9000
* Pseudocode: 

* Notes After Attempt:

*/

function saleHotdogs(n){
    return n < 5 ? n * 100 : n >= 5 && n < 10 ? n * 95 : n * 90
}

console.log(saleHotdogs(100))