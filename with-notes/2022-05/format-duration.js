/*
* Date: 5.30.22
* Rank: 4 Kyu
    * Kyu: 8 Kyu (easiest) ==> 1 Kyu (hardest). Dan (master level): 1 Dan (easiest) ==> 8 Dan (hardest).
* Link: 
https://www.codewars.com/kata/52742f58faf5485cae000b9a/train/javascript
* In My Own Words: 
Given an integer, return the time as a string in terms of YEARS, DAYS, HOURS, MINUTES and SECONDS. Do not return any times that are 0. Units of time must be plural if greater than 1. Components must be separated by ", " except the last two elements, which should be " and ". 
* Test Conditions: 
    formatDuration(1), "1 second"
    formatDuration(62), "1 minute and 2 seconds"
    formatDuration(120), "2 minutes"
    formatDuration(3600), "1 hour"
    formatDuration(3662), "1 hour, 1 minute and 2 seconds"
    formatDuration(1919), "31 minutes and 59 seconds"
* Pseudocode: 
    * If seconds < 60, return seconds formatted to string
    * Divide seconds by 60 to get MINUTES
        * If answer is > 60, divide by 60 to get HOURS, else return minutes and seconds
            * If answer is > 24, divide by 24 to get DAYS, else return hours, minutes and seconds
                * If the answer is > 365, divide by 365 to get YEARS, else return days, hours, minutes and seconds
                    * Return years, days, hours, minutes, and seconds
    * Check for years in seconds, then work your way backwards
* Notes After Attempt:
     My solution works, but the Best Practices solution loops through an object that holds the time cutoff info and builds the return string using regex. I need to get more comfortable with regex.
*/

function formatDuration (seconds) {
    let [years, days, hours, minutes] = Array(4).fill(0)
    const timeFrames = [years, days, hours, minutes, seconds]
    const answer = []
    if (seconds < 60) {
        if (seconds === 1) {
            return `1 second`
        } else if (seconds === 0) {
            return "now"
        }
        return `${seconds} seconds` 
    }

    if (seconds >= 31536000) {
        years = Math.floor(seconds/31536000)
        years > 1 ? answer.push(`${years} years`) : answer.push(`${years} year`)
        seconds = seconds % 31536000
    }
    if (seconds >= 86400) {
        days = Math.floor(seconds/86400)
        days > 1 ? answer.push(`${days} days`) : answer.push(`${days} day`)
        seconds = seconds % 86400
    }
    if (seconds >= 3600) {
        hours = Math.floor(seconds/3600)
        hours > 1 ? answer.push(`${hours} hours`) : answer.push(`${hours} hour`)
        seconds = seconds % 3600
    }
    if (seconds >= 60) {
        minutes = Math.floor(seconds/60)
        minutes > 1 ? answer.push(`${minutes} minutes`) : answer.push(`${minutes} minute`)
        seconds = seconds % 60
    }
    if (seconds < 60 && seconds !== 0) {
        seconds > 1 ? answer.push(`${seconds} seconds`) : answer.push(`${seconds} second`)
    }
    
    if (answer.length === 1) {
        return answer.join()
    } else if (answer.length === 2) {
        return `${answer[0]} and ${answer[1]}`
    } else if (answer.length === 3) {
        return `${answer[0]}, ${answer[1]} and ${answer[2]}`
    } else if (answer.length === 4) {
        return `${answer[0]}, ${answer[1]}, ${answer[2]} and ${answer[3]}`
    } else if (answer.length === 5) {
        return `${answer[0]}, ${answer[1]}, ${answer[2]}, ${answer[3]} and ${answer[4]}`
    }
}
 
console.log(formatDuration(0))