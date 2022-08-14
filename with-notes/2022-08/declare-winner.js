/*
* Date: 8.14.22
* Rank: 7 Kyu
* Link: https://www.codewars.com/kata/577bd8d4ae2807c64b00045b/train/javascript
* In My Own Words: 
    Given two fighter objects that take turns, return the fighter who does not lose all health first. 
* Test Conditions: 
    declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Lew"), "Lew"
    declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Harry"), "Harry"
    declareWinner(new Fighter("Harald", 20, 5), new Fighter("Harry", 5, 4), "Harry"), "Harald"
* Pseudocode: 

* Notes After Attempt:

*/

function Fighter(name, health, damagePerAttack) {
    this.name = name;
    this.health = health;
    this.damagePerAttack = damagePerAttack;
    this.toString = function() { return this.name; }
}

function declareWinner(fighter1, fighter2, firstAttacker) {
    let first, second
    if (fighter1.name === firstAttacker) {
        first = fighter1
        second = fighter2
    } else {
        first = fighter2
        second = fighter1
    }

    while (fighter1.health >= 0 && fighter2.health >= 0) {
        second.health -= first.damagePerAttack
        if (second.health <= 0) return first.name
        first.health -= second.damagePerAttack
        if (first.health <= 0) return second.name
    }
}

console.log(declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Harry"))