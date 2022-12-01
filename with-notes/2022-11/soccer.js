/*
* Date: 11.30.22
* Rank: 8 Kyu
* Link: https://www.codewars.com/kata/57613fb1033d766171000d60/train/javascript
* In My Own Words: 
  Given an input of soccer teams and scores, return a string about the outcome of the match.
* Test Conditions: 
  uefaEuro2016(['Germany', 'Ukraine'], [2, 0]), "At match Germany - Ukraine, Germany won!");
  uefaEuro2016(['Belgium', 'Italy'], [0, 2]), "At match Belgium - Italy, Italy won!");
  uefaEuro2016(['Portugal', 'Iceland'], [1, 1]), "At match Portugal - Iceland, teams played draw.");
* Pseudocode: 

* Notes After Attempt:

*/

function uefaEuro2016(teams, scores){
  if (scores[0] > scores[1]) {
    return `At match ${teams[0]} - ${teams[1]}, ${teams[0]} won!`
  } else if (scores[0] < scores[1]) {
    return `At match ${teams[0]} - ${teams[1]}, ${teams[1]} won!`
  } else {
    return `At match ${teams[0]} - ${teams[1]}, teams played draw.`
  }
}