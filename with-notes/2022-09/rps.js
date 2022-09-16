/*
* Date: 9.15.22
* Rank: 8 Kyu
* Link: https://www.codewars.com/kata/5672a98bdbdd995fad00000f/train/javascript
* In My Own Words: 
    Return the winner of a rock, paper, scissors game.
* Test Conditions: 
    "scissors", "paper" --> "Player 1 won!"
    "scissors", "rock" --> "Player 2 won!"
    "paper", "paper" --> "Draw!"
* Pseudocode: 

* Notes After Attempt:

*/

const rps = (p1, p2) => {
    if (p1 === p2) return "Draw!"
    if (p1 === "rock") {
        if (p2 === "paper") return "Player 2 won!"
        if (p2 === "scissors") return "Player 1 won!"
    }
    if (p1 === "paper") {
        if (p2 === "rock") return "Player 1 won!"
        if (p2 === "scissors") return "Player 2 won!"
    }  
    if (p1 === "scissors") {
        if (p2 === "paper") return "Player 1 won!"
        if (p2 === "rock") return "Player 2 won!"
    }
};

console.log(rps("rock", "paper"))