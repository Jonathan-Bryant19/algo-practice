/*
if x > y: 3 points
if x < y: 0 point
if x = y: 1 point
*/

function points(games) {
    let points = 0
    games.map(game => {
        if (parseInt(game.split('')[0]) > parseInt(game.split('')[2])) {
            points += 3
        } else if (parseInt(game.split('')[0]) === parseInt(game.split('')[2])) {
            points += 1
        }
    })
    return points
}

console.log(points(['1:0','2:0','3:0','4:0','2:1','3:1','4:1','3:2','4:2','4:3']))