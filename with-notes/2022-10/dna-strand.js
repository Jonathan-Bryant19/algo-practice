/*
* Date: 10.29.22
* Rank: 7 Kyu
* Link: https://www.codewars.com/kata/554e4a2f232cdd87d9000038/train/javascript
* In My Own Words: 
    Given a string of DNA nucleobases, return the complimentary pairs as a string. 
* Test Conditions: 
    "ATTGC" --> "TAACG"
    "GTAT" --> "CATA"
* Pseudocode: 

* Notes After Attempt:

*/

function DNAStrand(dna){
    const compliments = {
        "A": "T",
        "T": "A",
        "C": "G",
        "G": "C"
    }
    const split = dna.split("")
    for (let i = 0; i < split.length; i++) {
        split[i] = compliments[split[i]]
    }
    return split.join("")
}

module.exports = DNAStrand