/*
* Date: 1.23.23
* Rank: 7 Kyu
* Link: https://www.codewars.com/kata/59377c53e66267c8f6000027/train/javascript
* In My Own Words: 
  Given a string and individual character values, return a string based on the sum of those character values. 
* Test Conditions: 
  alphabetWar("z") , "Right side wins!" 
  alphabetWar("zdqmwpbs") , "Let's fight again!" 
  alphabetWar("zzzzs"), "Right side wins!" 
  alphabetWar("wwwwww"), "Left side wins!" 
* Pseudocode: 

* Notes After Attempt:

*/

function alphabetWar(fight) {
  const left = {
    w: 4,
    p: 3,
    b: 2,
    s: 1
  }
  const right = {
    m: 4,
    q: 3,
    d: 2,
    z: 1
  }
  let leftSideSum = 0
  let rightSideSum = 0

  for (let char in fight) {
    if (char === "w" || char === "p" || char === "b" || char === "s") {
      leftSideSum += left[char]
    }
    if (char === "m" || char === "q" || char === "d" || char === "z") {
      rightSideSum += right[char]
    }
  }
  console.log("leftSideSum: ", leftSideSum)
  console.log("rigtSideSum: ", rightSideSum)
  if (leftSideSum > rightSideSum) {
    return "Left side wins!"
  } else if (rightSideSum > leftSideSum) {
    return "Right side wins!"
  } else {
    return "Let's fight again!"
  }
}

module.exports = alphabetWar