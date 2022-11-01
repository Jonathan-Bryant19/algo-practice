const adjacentElementsProduct = require('../adjacent-elements-product')

test('[5, 8]), 40', () => {
    // arrange
    const array = [5, 8]
    const expectedValue = 40
    // act
    const actualValue = adjacentElementsProduct(array)
    // assert
    expect(actualValue).toEqual(expectedValue)
})
test('[1, 2, 3]), 6', () => {
    // arrange
    const array = [1, 2, 3]
    const expectedValue = 6
    // act
    const actualValue = adjacentElementsProduct(array)
    // assert
    expect(actualValue).toEqual(expectedValue)
})
test('[1, 5, 10, 9]), 90', () => {
    // arrange
    const array = [1, 5, 10, 9]
    const expectedValue = 90
    // act
    const actualValue = adjacentElementsProduct(array)
    // assert
    expect(actualValue).toEqual(expectedValue)
})