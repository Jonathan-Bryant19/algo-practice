/*
* Date: 2.14.23
* Rank: LeetCode Medium
* Link: https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/
* In My Own Words: 
  Given an array of numbers, return the sum of the increase from one number to the next. 
* Test Conditions: 
  Input: prices = [7,1,5,3,6,4]
  Output: 7
  Input: prices = [1,2,3,4,5]
  Output: 4
  Input: prices = [7,6,4,3,1]
  Output: 0
* Pseudocode: 

* Notes After Attempt:

*/

function maxProfit(prices) {
  let profit = 0
  for (let i = 0; i < prices.length - 1; i++) {
    if (prices[i] < prices[i + 1]) {
      profit += prices[i + 1] - prices[i]
    }
  }
  return profit
}

module.exports = maxProfit