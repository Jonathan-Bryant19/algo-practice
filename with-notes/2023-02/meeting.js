/*
* Date: 2.21.23
* Rank: 6 Kyu
* Link: https://www.codewars.com/kata/59df2f8f08c6cec835000012/train/javascript
* In My Own Words: 
  Given a string in one format, change the format of the string and sort by last name.
* Test Conditions: 
  "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill", "(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"
  "Alexis:Wahl;John:Bell;Victoria:Schwarz;Abba:Dorny;Grace:Meta;Ann:Arno;Madison:STAN;Alex:Cornwell;Lewis:Kern;Megan:Stan;Alex:Korn", "(ARNO, ANN)(BELL, JOHN)(CORNWELL, ALEX)(DORNY, ABBA)(KERN, LEWIS)(KORN, ALEX)(META, GRACE)(SCHWARZ, VICTORIA)(STAN, MADISON)(STAN, MEGAN)(WAHL, ALEXIS)"
  "John:Gates;Michael:Wahl;Megan:Bell;Paul:Dorries;James:Dorny;Lewis:Steve;Alex:Meta;Elizabeth:Russel;Anna:Korn;Ann:Kern;Amber:Cornwell", "(BELL, MEGAN)(CORNWELL, AMBER)(DORNY, JAMES)(DORRIES, PAUL)(GATES, JOHN)(KERN, ANN)(KORN, ANNA)(META, ALEX)(RUSSEL, ELIZABETH)(STEVE, LEWIS)(WAHL, MICHAEL)"
  "Alex:Arno;Alissa:Cornwell;Sarah:Bell;Andrew:Dorries;Ann:Kern;Haley:Arno;Paul:Dorny;Madison:Kern", "(ARNO, ALEX)(ARNO, HALEY)(BELL, SARAH)(CORNWELL, ALISSA)(DORNY, PAUL)(DORRIES, ANDREW)(KERN, ANN)(KERN, MADISON)"
* Pseudocode: 

* Notes After Attempt:
  This required multiple iterations and I'm not sold on the solutions I saw after submitting. I think this can be refactored into fewer iterations of the input. 
*/

function meeting(s) {
  let answer = ""
  const colonArray = s.split(";")
  const nameArray = colonArray.map((name) => {
    let separatedName = name.split(":")
    separatedName[0] = separatedName[0].toUpperCase()
    separatedName[1] = separatedName[1].toUpperCase()
    let temp = separatedName[0]
    separatedName[0] = separatedName[1]
    separatedName[1] = temp
    return separatedName
  })
  nameArray.sort((a, b) => {
    if (a[0] < b[0]) {
      return -1
    } else if (a[0] > b[0]) {
      return 1
    } else {
      if (a[1] < b[1]) {
        return -1
      } else if (a[1] > b[1]) {
        return 1
      } else {
        return 0
      }
    }
  })
  for (let fullName of nameArray) {
    answer += "(" + fullName[0] + ", " + fullName[1] + ")"
  }
  return answer
}

module.exports = meeting
// console.log(meeting("Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill"))