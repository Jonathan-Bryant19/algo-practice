/* 
IMOW: Remove every other element in an array, starting with the second. 
TC:
["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]
PC:
1. Loop through and delete even indexes
*/


function removeEveryOther(arr){
    for (let i = arr.length; i > 0; i--) {
        if (i %2 != 0) {
            arr.splice(i,1)
        }
    }
    return arr
}

removeEveryOther(["Keep", "Remove", "Keep", "Remove", "Keep", "Remove", "Keep", "Remove"])