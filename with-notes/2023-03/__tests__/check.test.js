const check = require('../check')

test('[66, 101], 66), true', () => {
  const a = [66, 101]
  const x = 66
  const expectedValue = true
  const actualValue = check(a, x)
  expect(actualValue).toEqual(expectedValue)
})
test('[80, 117, 115, 104, 45, 85, 112, 115], 45', () => {
  const a = [80, 117, 115, 104, 45, 85, 112, 115]
  const x = 45
  const expectedValue = true
  const actualValue = check(a, x)
  expect(actualValue).toEqual(expectedValue)
})
test("['t', 'e', 's', 't'], 'e'", () => {
  const a = ['t', 'e', 's', 't']
  const x = 'e'
  const expectedValue = true
  const actualValue = check(a, x)
  expect(actualValue).toEqual(expectedValue)
})
test("['what', 'a', 'great', 'kata'], 'kat'", () => {
  const a = ['what', 'a', 'great', 'kata']
  const x = 'kat'
  const expectedValue = false
  const actualValue = check(a, x)
  expect(actualValue).toEqual(expectedValue)
})
