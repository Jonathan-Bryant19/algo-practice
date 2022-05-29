function isPalindrome(x) {
    const arr1 = x.split('').toLowerCase()
    return arr1.join('') === [...arr1].reverse().join('')
}

console.log(isPalindrome("aba"))