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

class SinglyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(val) {
        const newNode = new ListNode(val)
        if(!this.head) {
            this.head = newNode
            this.tail = this.head
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }
}

const list = new SinglyLinkedList()
list.push(1)
list.push(2)
list.push(2)
list.push(1)
// console.log(list.tail)

var isPalindrome = function(list) {
    let reverse = [...list].reverse()
    let j = list.length - 1
    for (let i = 0; i < j; i++) {
        if (list[i] !== reverse[j]) return false
        j -= 1
    }
    return true
};

console.log(isPalindrome(list))