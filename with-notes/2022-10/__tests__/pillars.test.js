const pillars = require('../pillars')

test('Testing for number of pillars: 1, distance: 10 m and width: 10 cm', () => {
    // arrange
    const numPill = 1
    const dist = 10
    const width = 10
    const expectedValue = 0
    // act
    const actualValue = pillars(numPill, dist, width)
    // assert
    expect(actualValue).toEqual(expectedValue)
})
test('Testing for number of pillars: 2, distance: 20 m and width: 25 cm', () => {
    // arrange
    const numPill = 2
    const dist = 20
    const width = 25
    const expectedValue = 2000
    // act
    const actualValue = pillars(numPill, dist, width)
    // assert
    expect(actualValue).toEqual(expectedValue)
})