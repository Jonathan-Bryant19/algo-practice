/*
* Date: 2.28.23
* Rank: None - Made up problem.
* Link: None - Made up problem.
* In My Own Words: 
  Write a function that proves joint probability of consecutive coin flips by accepting three arguments. The first argument is the number of coin flips per sample. The second argument is the number of samples to be run. The third argument is "head" or "tails". Return the expected probabiity along with the actual outcome and deviation.
* Test Conditions: 
  coinToss(4, 10, "tails") -> "Expected Probability: 6.25%, Actual Distribution: X, Deviation: X"
  coinToss(2, 20, "heads") -> "Expected Probability: 25.00%, Actual Distribution: X, Deviation: X"
  coinToss(10, 50000, "tails") -> "Expected Probability: 0.10%, Actual Distribution: X, Deviation: X"
* Pseudocode: 
  Helper function to flip coins and track results. Calculate expectation. Return difference.
* Notes After Attempt:

*/

// flips = number of flips per sample
// samples = number of samples
// probabilityArray = 
// If I flip a coin `flips` number of times, what are the odds that every flip is the same `side`?

function coinToss(flips, side, samples) {
  const expectedProbability = parseFloat((Math.pow(0.5, flips) * 100).toFixed(2))
  let success = 0
  let failure = 0
  const flipLog = []
  
  const flip = function() {
    const result = Math.round( ) === 0 ? "heads" : "tails"
    flipLog.push(result)
    return result
  }

  for (let i = 0; i < samples; i++) {
    
    for (let j = 0; j < flips; j++) {
      const flipOutcome = flip()

      if (flipOutcome === side) {
        if (j === flips - 1) {
          success++
        }
        // console.log("match!")
        continue
      } else {
        // console.log("failure!")
        failure++
        break
      }
    }
  }
  
  const sampleProbability = ((success / samples) * 100).toFixed(2)

  return `Success: ${success}, Failure: ${failure}. Across ${samples} samples, ${success} had instances where ${side} was the result of a coin toss across ${flips} consecutive flips (${sampleProbability}%). The expected probability was ${expectedProbability}%.`
  
}

// module.exports = coinToss
console.log(coinToss(4, "tails", 10000000))