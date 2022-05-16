

function wave(str){
    str = str.toLowerCase().split('')
    const wave = []
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].toUpperCase()
        wave.push(str.join(''))
        str[i] = str[i].toLowerCase()
    }
    return wave
}

console.log(wave("hello")) // => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]