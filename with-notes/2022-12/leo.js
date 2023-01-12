/*
* Date: 12.26.22
* Rank: 8 Kyu
* Link: https://www.codewars.com/kata/56d49587df52101de70011e4/train/javascript
* In My Own Words: 
  Return a string based on an integer input.
* Test Conditions: 
  leo(89),"Leo got one already!")
  leo(88),"Leo finally won the oscar! Leo is happy");
  leo(87),"When will you give Leo an Oscar?")
  leo(86),"Not even for Wolf of wallstreet?!")
* Pseudocode: 

* Notes After Attempt:

*/

function leo(oscar){
  if (oscar === 88) {
    return 'Leo finally won the oscar! Leo is happy'
  } else if (oscar === 86) {
    return 'Not even for Wolf of wallstreet?!'
  } else if (oscar < 88) {
    return 'When will you give Leo an Oscar?'
  } else {
    return 'Leo got one already!'
  }
}

module.exports = leo