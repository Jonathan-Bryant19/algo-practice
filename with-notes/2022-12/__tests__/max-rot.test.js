const maxRot = require('../max-rot')

test('38458215 returns 85821534', () => {
  const n = 38458215
  const expectedValue = 85821534
  const actualValue = maxRot(n)
  expect(actualValue).toEqual(expectedValue)
})
test('195881031 returns 988103115', () => {
  const n = 195881031
  const expectedValue = 988103115
  const actualValue = maxRot(n)
  expect(actualValue).toEqual(expectedValue)
})
test('896219342 returns 962193428', () => {
  const n = 896219342
  const expectedValue = 962193428
  const actualValue = maxRot(n)
  expect(actualValue).toEqual(expectedValue)
})
test('69418307 returns 94183076', () => {
  const n = 69418307
  const expectedValue = 94183076
  const actualValue = maxRot(n)
  expect(actualValue).toEqual(expectedValue)
})