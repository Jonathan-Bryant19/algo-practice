/*
IMOW: Take a string and return the string with each letter duplicated.
TC:
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "
PC:
1. Split the string
2. Create empty array
3. Map through split string and push double results to array
4. Join array and return string
*/

function doubleChar(str) {
    const split = str.split('')
    const ans = []
    
    split.map(letter => {
        ans.push(letter)
        ans.push(letter)
    })

    return ans.join('')
}
  
doubleChar("String")