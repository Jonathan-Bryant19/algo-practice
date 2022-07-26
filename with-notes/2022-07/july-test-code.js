function calculator(a,b,sign){
    const operators = ["+", "-", "/", "*"]
    if (!operators.includes(sign) || !Number.isInteger(a) || !Number.isInteger(b)) return "unknown value"
    const calc = {
      "+": function (a, b) {return a + b},
      "-": function (a, b) {return a - b},
      "/": function (a, b) {return a / b},
      "*": function (a, b) {return a * b}
    }
    return calc[sign](a, b)
}

console.log(calculator(3, "h", "+"))