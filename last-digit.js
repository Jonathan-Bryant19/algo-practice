function lastDigit(a,b) {
// const number = 12345
// console.log(number.toString().charAt(number.toString().length -1))
    // let number = (as[0] ** (as[1] ** as[2]))
    let number = BigInt(Math.pow(a, b)).toString()
    let answer = number.toString().charAt(number.toString().length -1)
    return number
}

console.log(lastDigit(10,(10**10))) 