/*
IMOW: Given a string, return an object with a key for each character and a value that equals the count of that character in the string. An empty string should return {}
TC:
count("aba") => { a: 2, b: 1 }
count("") => {}
PC:
1. Create empty array
2. Split the string
3. Loop over array
    * If character is not in object, create it and set to one
    * If character is in object, add 1 to value
4. Return object
*/

function count (string) {  
    const count = {}
    const split =  string.split("")
    for (let val of split) {
        if (val in count) {
            count[val] += 1
        } else {
            count[val] = 1
        }
    }
    return count
}

console.log(count("abab"))