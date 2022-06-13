/*
* Date: 6.11.22
* Rank: Leetcode - Medium
* Link: 
    https://leetcode.com/problems/longest-substring-without-repeating-characters/
* In My Own Words: 
    Given a string as input, return the longest substring that does not contain repeating characters as an integer.
* Test Conditions: 
    lengthOfLongestSubstring("abcabcbb") // 3
    lengthOfLongestSubstring("bbbbb") // 1
    lengthOfLongestSubstring("pwwkew") // 3
    lengthOfLongestSubstring("pwkbzwew") // 5
* Pseudocode:  
    1. Create an empty array called container.
    2. Create counter variable and set to 0.
    3. Create start variable to act as pointer and set to 0.
    4. Split the string and store in an array.
    5. Loop through array (break when pointer > array.length)
        a. Set temp counter
        a. Push value at start index to empty array.
        b. See if value of end index is in the container array.
            1. If not, push to array
            2. If yes, 
                a. If container.array.length > counter, set counter to container.array.length
                    1. start + counter > array.length - 1, return counter
                b. Set container to empty array
                c. Set start to start + 1
    6. Return counter
* Notes After Attempt:

*/
/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    let container = []
    let counter = 0
    let start = 0
    let stringArray = s.split("")
    while (start < stringArray.length) {
        // container.push(stringArray[start])
        if (container.includes(stringArray[start])) {
            if (container.length > counter) counter = container.length
            start = stringArray.findIndex(stringArray[start])
            if (start + counter > stringArray.length) return counter
            container = []
        } else {
            container.push(stringArray[start])
            start += 1
        }
    }
    counter = container.length
    return counter
};

console.log(lengthOfLongestSubstring("dvdf"))