
/*
* Date: 7.9.22
* Rank: 8 Kyu
* Link: https://www.codewars.com/kata/580a094553bd9ec5d800007d/train/javascript
* In My Own Words: 
    I'm gonna copy and paste because it's simple enough. "if (x) squared is more than 1000, return 'It's hotter than the sun!!', else, return 'Help yourself to a honeycomb Yorkie for the glovebox.'."
* Test Conditions: 
    apple('50'), 'It\'s hotter than the sun!!'
    apple(4), 'Help yourself to a honeycomb Yorkie for the glovebox.'
* Pseudocode: 
    Use ternary to return string.
* Notes After Attempt:
    I have the Best Practices soltion. Gotta start making time for harder problems. 
*/

function apple(x){
    return Math.pow(x, 2) > 1000 ? "It's hotter than the sun!!" : "Help yourself to a honeycomb Yorkie for the glovebox."
}

console.log(apple("50"))