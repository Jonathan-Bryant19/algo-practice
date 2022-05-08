/* 
setAlarm(true, true) -> false
setAlarm(false, true) -> false
setAlarm(false, false) -> false
setAlarm(true, false) -> true
*/

function setAlarm(employed, vacation){
    console.log(employed ? vacation ? false : true : false)
}

setAlarm(true, false)