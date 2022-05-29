function printerError(s) {
    return `${s.length - (s.match(/[a-m]/g) || s.match(/[A-M]/)).length}/${s.length}`
}

console.log(printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"))