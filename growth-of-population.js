/*
IMOW: Given a base population, an annual population percentage growth rate, and a fixed number of residents coming/going each year, determine the number of years required to reach a target population.
TC: 
nbYear(1500, 5, 100, 5000) => 15
nbYear(1500000, 2.5, 10000, 2000000) => 10
nbYear(1500000, 0.25, 1000, 2000000) => 94
PC:
1. While loop
2. Check if population is over p
1. Take base population and multiply by percent.
2. Add aug to that.
3. Increase counter
*/


function nbYear(p0, percent, aug, p) {
    let counter = 0
    while (p0 < p) {
        p0 += Math.floor(p0 * (percent/100) + aug)
        counter++
    }
    return counter
}

console.log(nbYear(1000, 2, 50, 1214))