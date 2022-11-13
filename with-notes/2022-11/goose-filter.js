/*
* Date: 11.12.22
* Rank: 8 Kyu
* Link: https://www.codewars.com/kata/57ee4a67108d3fd9eb0000e7/train/javascript
* In My Own Words: 
    Given a list of strings, return the list of strings with all the geese removed (names of geese provided in a separate array of strings).
* Test Conditions: 
    gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]),["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
    gooseFilter(["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"]),["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"]);
    gooseFilter(["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]),[]);
  });
* Pseudocode: 

* Notes After Attempt:

*/

function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    
    for (let i = birds.length-1; i >= 0; i--) {
        if (geese.includes(birds[i])) {
            birds.splice(i, 1)
        }
    }
    return birds
}

module.exports = gooseFilter