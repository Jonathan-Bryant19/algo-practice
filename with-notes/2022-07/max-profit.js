/*
* Date: 7.13.22
* Rank: LeetCode (Easy)
* Link: https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/564/
* In My Own Words: 
    Given an array of numbers, return the sum of all positive changes in the array from left to right. 
* Test Conditions: 
    Input: prices = [7,1,5,3,6,4]
    Output: 7
    Input: prices = [1,2,3,4,5]
    Output: 4
    Input: prices = [7,6,4,3,1]
    Output: 0
* Pseudocode: 
    Use a sliding window to evalutate today vs tomorrow. Evaluate what to do based on whether or not the stock is currently held and whether or not it will go up or down tomorrow. Base decisions on these factors. 
* Notes After Attempt:
    I looked at part of the solution because I overthought the hell out of this. I need to go back and study the common patterns so I don't over-engineer easy solutions. My solution is still messy and could be cleaned up and shortened. Also, the logic could be more straightforward.
*/

function maxProfit(arr){
    let profit = 0
    let bought = false
    let boughtAt = 0
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < arr[i+1] && bought === false) {
        boughtAt = arr[i]
        bought = true 
      } else if (arr[i] < arr[i+1] && bought === true) {
        continue
      } else if (arr[i] > arr[i+1] && bought === false) {
        continue
      } else if (arr[i] > arr[i+1] && bought === true){
        profit = profit + (arr[i] - boughtAt)
        boughtAt = 0
        bought = false
      }
    }
    if (bought) {
      profit = profit + (arr[arr.length-1] - boughtAt)
      boughtAt = 0
      bought = false
    }
    return profit
}