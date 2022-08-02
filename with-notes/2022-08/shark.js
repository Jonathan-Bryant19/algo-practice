/*
* Date: 8.2.22
* Rank: 8 Kyu
* Link: https://www.codewars.com/kata/57e921d8b36340f1fd000059/train/javascript
* In My Own Words: 
    Given the distance/speed of a shark and distance/speed of a swimmer, determine if the swimmer can react the destination before the shark reaches the the swimmer. The presence of a dolphin (boolean) halves the speed of the shark. Return "Alive!" if swimmer is faster and "Shark Bait!" if shark is faster.
* Test Conditions: 
    shark(12, 50, 4, 8, true), "Alive!"
    shark(24, 0, 4, 8, true), "Shark Bait!"
* Pseudocode: 
    
* Notes After Attempt:
    I could have done this in fewer lines but I think it reads well this way. 
*/

function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
    dolphin ? sharkSpeed *= 0.5 : null
    const toBoat = pontoonDistance / youSpeed
    const toShark = sharkDistance / sharkSpeed
    return toBoat < toShark ? "Alive!" : "Shark Bait!"
}

console.log(shark(24, 0, 4, 8, true))