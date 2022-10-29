const DNAStrand = require('../dna-strand')

test('"ATTGC" --> "TAACG"', () => {
    // arrange
    const dna = "ATTGC"
    const expectedValue = "TAACG"
    // act
    const actualValue = DNAStrand(dna)
    // assert
    expect(actualValue).toEqual(expectedValue)
})
test('"GTAT" --> "CATA"', () => {
    // arrange
    const dna = "GTAT"
    const expectedValue = "CATA"
    // act
    const actualValue = DNAStrand(dna)
    // assert
    expect(actualValue).toEqual(expectedValue)
})