/*
* Date: 11.14.22
* Rank: 6 Kyy
* Link: https://www.codewars.com/kata/55e2adece53b4cdcb900006c/train/javascript
* In My Own Words: 
  Given two speeds and a lead, return the time it takes for the second speed to reach the first speed after the first speed has a lead.
* Test Conditions: 
  race(720, 850, 70), [0, 32, 18]
  race(80, 91, 37), [3, 21, 49]
  race(80, 100, 40), [2, 0, 0]
  race(720, 850, 37), [0, 17, 4]
* Pseudocode: 
  Have a while loop count the number of seconds, then do math for h:m:s.
* Notes After Attempt:

*/

function race(v1, v2, g) {
  if (v1 >= v2) return null

  let v1Distance = 0
  let v2Distance = g
  let seconds = 0
  let remainder = 0
  const v1FeetPerSecond = v1 / 3600
  const v2FeedPerSecond = v2 / 3600
  const time = [0, 0, 0]

  while (v1Distance <= v2Distance) {
    v1Distance += v1FeetPerSecond
    v2Distance += v2FeedPerSecond
    seconds++
  }

  if (seconds >= 3600) {
    time[0] += Math.floor(seconds/3600)
    remainder = seconds % 3600
    seconds = remainder
    time[1] += Math.floor(seconds/60)
    time[2] += Math.round(seconds % 60)
  } else if (seconds >= 60) {
    time[1] += Math.floor(seconds/60)
    time[2] += Math.round(seconds % 60)
  } else {
    time[2] += seconds
  }
}

module.exports = race