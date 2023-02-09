const add = require('../add')

test('"1", 1 => true', () => {
  const a = "1"
  const b = 1
  const expectedValue = true
  const actualValue = add(a, b)
  expect(actualValue).toEqual(expectedValue)
})
test('1, "1" => true', () => {
  const a = 1
  const b = "1"
  const expectedValue = true
  const actualValue = add(a, b)
  expect(actualValue).toEqual(expectedValue)
})
test('1, "0" => false', () => {
  const a = 1
  const b = "0"
  const expectedValue = false
  const actualValue = add(a, b)
  expect(actualValue).toEqual(expectedValue)
})
test('"11", 11 => true', () => {
  const a = "11"
  const b = 11
  const expectedValue = true
  const actualValue = add(a, b)
  expect(actualValue).toEqual(expectedValue)
})
test('12, 12 => true', () => {
  const a = 12
  const b = 12
  const expectedValue = true
  const actualValue = add(a, b)
  expect(actualValue).toEqual(expectedValue)
})
test('120, "021" => false', () => {
  const a = 120
  const b = "021"
  const expectedValue = false
  const actualValue = add(a, b)
  expect(actualValue).toEqual(expectedValue)
})