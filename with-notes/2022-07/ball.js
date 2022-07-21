/*
* Date: 7.21.22
* Rank: 8 Kyu
* Link: https://www.codewars.com/kata/53f0f358b9cb376eca001079/train/javascript
* In My Own Words: 
    Create a class that returns an input string when instantiated.
* Test Conditions: 
    new Ball().ballType, "regular"
    new Ball("super").ballType, "super"
* Pseudocode: 
    Set a default for the parameter then return this.ballType
* Notes After Attempt:
    Very simple.
*/

var Ball = function(ballType = "regular") {
    this.ballType = ballType
}