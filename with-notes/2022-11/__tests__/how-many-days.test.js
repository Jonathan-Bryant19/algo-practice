const howManydays = require('../how-many-days')

test('1 should return 31', () => {
    const month = 1
    const expectedValue = 31
    const actualValue = howManydays(month)
    expect(actualValue).toEqual(expectedValue)
})
test('2 should return 28', () => {
    const month = 2
    const expectedValue = 28
    const actualValue = howManydays(month)
    expect(actualValue).toEqual(expectedValue)
})
test('9 should return 30', () => {
    const month = 9
    const expectedValue = 30
    const actualValue = howManydays(month)
    expect(actualValue).toEqual(expectedValue)
})