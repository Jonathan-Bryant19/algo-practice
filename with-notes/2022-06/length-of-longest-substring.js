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
* Pseudocode:  
    1. Create an empty array called container.
    2. Create counter variable and set to 0.
    2. Create start variable to act as pointer and set to 0.
    3. Split the string and store in an array.
    4. Loop through array (break when pointer > array.length)
        a. Set temp counter
        a. Push value at start index to empty array.
        b. See if value of end index is in the container array.
            1. If not, push to array
            2. If yes, 
                a. If temp counter > counter, git Set counter to array.length
                b. Set container to empty array
                c. Set start to start + 1
    5. Return counter
* Notes After Attempt:

*/
/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {

    
};