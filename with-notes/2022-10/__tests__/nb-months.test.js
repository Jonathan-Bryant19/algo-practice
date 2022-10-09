const nbMonths = require('../nb-months')

test('2000, 8000, 1000, 1.5 should return [6, 766]', () => {
    // arrange
    const startPriceOld = 2000
    const startPriceNew = 8000
    const savingperMonth = 1000
    const percentLossByMonth = 1.5
    const expectedResult = [6, 766]

    // act
    const actualResult = nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth)

    // assert
    expect(actualResult).toEqual(expectedResult)
})
test('0 months should return if the value works out immediately', () => {
    // arrange
    const startPriceOld = 12000
    const startPriceNew = 8000
    const savingperMonth = 1000
    const percentLossByMonth = 1.5
    const expectedResult = [0, 4000]

    // act
    const actualResult = nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth)

    // assert
    expect(actualResult).toEqual(expectedResult)
})
