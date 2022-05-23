function DNAStrand(dna){
    const ans = dna.map( nuc => {
        if (nuc === "A" ) nuc = "T"
        
    })
    return dna
}

console.log(DNAStrand([]))

// dnaStrand [A,T,G,C] `shouldBe` [T,A,C,G]