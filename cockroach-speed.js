/*
KM/h to cm/s
*/

function cockroachSpeed(s) {
    return Math.floor(((((s / 60) / 60) * 1000) * 100))
}

console.log(cockroachSpeed(1.08))