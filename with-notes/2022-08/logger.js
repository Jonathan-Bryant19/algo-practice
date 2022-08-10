var Logger = function() {
    this.obj = {}
};

/** 
 * @param {number} timestamp 
 * @param {string} message
 * @return {boolean}
 */
Logger.prototype.shouldPrintMessage = function(timestamp, message) {
    if (this.obj[message]) {
        if (timestamp >= this.obj[message]) {
            this.obj[message] = timestamp + 10    
            return true
        } 
    } else {
        this.obj[message] = timestamp + 10
        return true
    }
    return false
};

let obj = new Logger()
console.log(obj.shouldPrintMessage(1,"foo")) // true
console.log(obj.shouldPrintMessage(2,"boo")) // true
console.log(obj.shouldPrintMessage(4,"foo")) // false
console.log(obj.shouldPrintMessage(6,"fun")) // true
console.log(obj.shouldPrintMessage(12,"foo")) // true
console.log(obj.shouldPrintMessage(13,"foo")) // false

/** 
 * Your Logger object will be instantiated and called as such:
 * var obj = new Logger()
 * var param_1 = obj.shouldPrintMessage(timestamp,message)
 * 
 * shouldPrintMessage(1,"foo")
 * shouldPrintMessage(2,"boo")
 * shouldPrintMessage(4,"foo")
 * shouldPrintMessage(6,"fun")
 * shouldPrintMessage(12,"foo")
 * 
 */