function communicationScores(title, similar) {
    const tempArray = []
    for (let i = 0; i < scoreData.length; i++) {
      console.log(similar.includes(scoreData[i][4]))
      if (scoreData[i][3] === title && similar.includes(scoreData[i][4])) {
        tempArray.push(scoreData[i][1])
      }
    }
    console.log(tempArray)
}

console.log(communicationScores("Engineer", ["1", "2", "3", "4"]))