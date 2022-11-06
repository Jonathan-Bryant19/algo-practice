const xor = require('../xor')

test('Both false returns false', () => {
    const a = false
    const b = false
    const expectedValue = false
    const actualValue = xor(a, b)
    expect(actualValue).toEqual(expectedValue)
})
test('True and false returns true', () => {
    const a = true
    const b = false
    const expectedValue = true
    const actualValue = xor(a, b)
    expect(actualValue).toEqual(expectedValue)
})
test('Both true returns false', () => {
    const a = true
    const b = true
    const expectedValue = false
    const actualValue = xor(a, b)
    expect(actualValue).toEqual(expectedValue)
})