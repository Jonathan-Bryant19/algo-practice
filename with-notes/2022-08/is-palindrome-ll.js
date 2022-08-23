/*
* Date: 8.22.22
* Rank: LeetCode (Easy)
* Link: https://leetcode.com/problems/palindrome-linked-list/
* In My Own Words: 
    Determine if a linked list contains a palindrome.
* Test Conditions: 
    Input: head = [1,2,2,1]
    Output: true
    Input: head = [1,2]
    Output: false
* Pseudocode: 

* Notes After Attempt:

*/
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

function SinglyLinkedList(val) {
    function constructor() {
        this.head = null
    }

    function push(val) {
        const newNode = new ListNode(val)
        if(!(this.head)) {
            this.head = newNode
        } else {
            this.next = newNode
        }
    }

    

}

let currentNode = new ListNode(1,2,2,1)
currentNode = currentNode.next
console.log(currentNode.next)
var isPalindrome = function(head) {
    const arr = []
    // while ()
    return null
};

console.log(isPalindrome([1,2,2,1]))