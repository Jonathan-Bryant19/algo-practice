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
45296
*/

function humanReadable(seconds) {
    let hours = "00"
    let minutes = "00"
    let ticks
    if (seconds/3600 >= 1) {
        hours = Math.floor(seconds/3600) < 10 ? "0" + Math.floor(seconds/3600) : Math.floor(seconds/3600)
        minutes = Math.floor(((seconds/3600) - hours) * 60) < 10 ? "0" + Math.floor(((seconds/3600) - hours) * 60) : Math.floor(((seconds/3600) - hours) * 60)
        ticks = Math.round(((((seconds/3600) - hours) * 60) - minutes) * 60) < 10 ? "0" + Math.round(((((seconds/3600) - hours) * 60) - minutes) * 60) : Math.round(((((seconds/3600) - hours) * 60) - minutes) * 60)
    } else if (seconds/60 >= 1) {
        minutes = Math.floor(seconds/60) < 10 ? "0" + Math.floor(seconds/60) : Math.floor(seconds/60)
        ticks = Math.floor(((seconds/60) - minutes) * 60) < 10 ? "0" + Math.floor(((seconds/60) - minutes) * 60) : Math.floor(((seconds/60) - minutes) * 60)
    } else {
        if (seconds === 60) {
          minutes = "01"
          ticks = "00"
        }  else if (seconds < 10) {
          ticks = "0" + seconds
        } else {
          ticks = seconds
        }
    }
    return `${hours}:${minutes}:${ticks}`;
}

console.log(humanReadable(0))