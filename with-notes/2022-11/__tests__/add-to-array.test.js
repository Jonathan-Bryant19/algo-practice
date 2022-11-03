const push = require('../add-to-array')

test('Array should not be empty', () => {
    const websites = []
    const expectedValue = ["codewars"]
    const actualValue = push(websites)
    expect(actualValue).toEqual(expectedValue)
})
test('Array should contain the item "codewars"', () => {
    const websites = []
    const expectedValue = ["codewars"]
    const actualValue = push(websites)
    expect(actualValue).toEqual(expectedValue)
})
test('Array should have a length of one', () => {
    const websites = []
    const expectedValue = 1
    const actualValue = push(websites).length
    expect(actualValue).toEqual(expectedValue)
})