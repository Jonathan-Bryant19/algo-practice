/*
IMOW: Take an array tha represents the number of customers and the amount of time they take to checkout. Also take a single integer representing the number of checkout stands. Return the amount of time it would take for all customers to checkout.
TC:
queueTime([5,3,4], 1) => 12
queueTime([10,2,3,3], 2) => 10
queueTime([2,3,10], 2) => 12
queueTime([3,6,9,7,4], 3) => 10
PC:
1. Declare a counter variable.
2. Look at the first n integers (use if statement and check for array.length > n) in the array and determine which is the lowest.
3. Remove the lowest and repeat until array is empty.
4. Return the counter variable.
*/

function queueTime(customers, n) {
    var w = new Array(n).fill(0);
    for (let t of customers) {
        let idx = w.indexOf(Math.min(...w));
        w[idx] += t;
    }
    return Math.max(...w)
}

console.log(queueTime([3,6,9,7,4], 3))
// [10, 10, 9]

/*

let minutes = 0
    while (customers.length >= n) {
        let checkout = []
        for (let i = 0; i < n; i++) {
            checkout.push(customers[i])
        }
        // console.log(checkout)
        minutes = minutes + Math.min(...checkout)
        customers.splice(customers.indexOf(Math.min(...checkout)), 1)
        console.log(customers)
    }

    return minutes


while (customers.length > 0) {
    if (customers.length === 1) {
        let minimum = customers[0]
        minutes += minimum
        customers.splice(customers.indexOf(minimum), 1)
    } else if (customers.length >= 3) {
        let minimum = Math.min(...[customers[0]],...[customers[1]],...[customers[2]])
        minutes += minimum
        console.log("minimum: ", minimum, "customers: ", customers, "indexOf: ", customers.indexOf(minimum))
        customers.splice(customers.indexOf(minimum), 1)
    } else if (customers.length === 2) {
        let minimum = Math.min(...[customers[0]],...[customers[1]])
        minutes += minimum
        customers.splice(customers.indexOf(minimum), 1)
}
*/