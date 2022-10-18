const calculateAge = require('../calculate-age')

test('Should calculate 1 year old', () => {
    // arrange
    const born = 2012
    const current = 2013
    const expectedValue = "You are 1 year old."
    // act
    const actualValue = calculateAge(born, current)
    // assert
    expect(actualValue).toEqual(expectedValue)
})
test('Should calculate being born this year', () => {
    // arrange
    const born = 2012
    const current = 2012
    const expectedValue = "You were born this very year!"
    // act
    const actualValue = calculateAge(born, current)
    // assert
    expect(actualValue).toEqual(expectedValue)
})
test('Should calculate current age', () => {
    // arrange
    const born = 2012
    const current = 2016
    const expectedValue = "You are 4 years old."
    // act
    const actualValue = calculateAge(born, current)
    // assert
    expect(actualValue).toEqual(expectedValue)
})
test('Should calculate how long till birth', () => {
    // arrange
    const born = 2000
    const current = 1990
    const expectedValue = "You will be born in 10 years."
    // act
    const actualValue = calculateAge(born, current)
    // assert
    expect(actualValue).toEqual(expectedValue)
})