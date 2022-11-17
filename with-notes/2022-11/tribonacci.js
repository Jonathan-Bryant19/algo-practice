/*
* Date: 11.17.22
* Rank: 6 Kyu
* Link: https://www.codewars.com/kata/556deca17c58da83c00002db/train/javascript
* In My Own Words: 
  Given a signature (aka starting array) and a count as an integer, return the first n number of the fibonacci sequence by adding 3 elements instead of 2.
* Test Conditions: 
  [ [1,1,1], 10], [1,1,1,3,5,9,17,31,57,105]   
  [ [0,0,1], 10], [0,0,1,1,2,4,7,13,24,44]     
  [ [0,1,1], 10], [0,1,1,2,4,7,13,24,44,81]    
  [ [1,0,0], 10], [1,0,0,1,1,2,4,7,13,24]      
  [ [0,0,0], 10], [0,0,0,0,0,0,0,0,0,0]        
  [ [1,2,3], 10], [1,2,3,6,11,20,37,68,125,230]
  [ [3,2,1], 10], [3,2,1,6,9,16,31,56,103,190] 
  [ [1,1,1],  1], [1] 
  [ [300,200,100], 0], [] 
* Pseudocode: 

* Notes After Attempt:

*/

function tribonacci(signature,n){
  if (n <= 0) return []
  const answer = []
  let index = 0
  let signatureIndex = 0
  while (answer.length < n) {
    if (signatureIndex <= signature.length-1) {
      answer.push(signature[index])
      index++
      signatureIndex++
    } 
    if (signatureIndex === signature.length) {
      let currentElement = answer[index-1] + answer[index-2] + answer[index-3]
      answer.push(currentElement)
      index++
    }
  }
  return answer
}

module.exports = tribonacci