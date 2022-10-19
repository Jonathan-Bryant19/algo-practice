const duckDuckGoose = require('../duck-duck-goose')

class Player {
    constructor(name) {
        this.name = name;
    }
}
  
let ex_names = ["a", "b", "c", "d", "c", "e", "f", "g", "h", "z"];
let players = ex_names.map((n) => new Player(n));

test('Index 1 should return "a"', () => {
    // arrange
    const index = 1
    const expectedResult = "a"
    // act
    const actualResult = duckDuckGoose(players, index)
    // assert
    expect(actualResult).toEqual(expectedResult)
})
test('Index 3 should return "c"', () => {
    // arrange
    const index = 3
    const expectedResult = "c"
    // act
    const actualResult = duckDuckGoose(players, index)
    // assert
    expect(actualResult).toEqual(expectedResult)
})
test('Index 10 should return "z"', () => {
    // arrange
    const index = 10
    const expectedResult = "z"
    // act
    const actualResult = duckDuckGoose(players, index)
    // assert
    expect(actualResult).toEqual(expectedResult)
})