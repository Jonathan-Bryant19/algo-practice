/*
* Date: 11.16.22
* Rank: 8 Kyu
* Link: https://www.codewars.com/kata/5a360620f28b82a711000047/train/javascript
* In My Own Words: 
  Given a suit as a symbol, return the suit as a string. 
* Test Conditions: 
  defineSuit('Q♠'), 'spades'
  defineSuit('9♦'), 'diamonds'
  defineSuit('J♥'), 'hearts'
* Pseudocode: 

* Notes After Attempt:

*/

function defineSuit(card) {
  const split = card.split("")
  switch (split[split.length-1]) {
    case '♣': return 'clubs'
    case '♦': return 'diamonds'
    case '♥': return 'hearts'
    case '♠': return 'spades'
  }
}

module.exports = defineSuit