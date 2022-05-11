/*
IMOW: Take an integer that represents seconds and return the time in "HH:MM:SS". 
TC:
humanReadable(0) => '00:00:00'
strictEqual(humanReadable(90) => '00:01:30'
humanReadable(86399) => '23:59:59'
PC:
1. Test for hours and calculate
2. Test for minutes and calculate
3. Test for seconds and calculate
*/



function humanReadable(seconds) {
    let hours = "00"
    let minutes = "00"
    let ticks = `${seconds}`
    if (seconds/3600 >= 1) {
        // If less than 10 return "0" + hours/minutes/ticks
        hours = Math.floor(seconds/3600)
        minutes = Math.floor(((seconds/3600) - hours) * 60)
        ticks = Math.ceil(((((seconds/3600) - hours) * 60) - minutes) * 60)
    } else if (seconds/60 >= 1) {
        minutes = Math.floor(seconds/60)
        ticks = Math.floor(((seconds/60) - minutes) * 60)
    } 
    return `${hours}:${minutes}:${ticks}`;
}

console.log(humanReadable(3600))