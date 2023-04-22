const billboard = require('../billboard')

test('Jeong-Ho Aristotelis = 600', () => {
  const name = "Jeong-Ho Aristotelis"
  const expectedValue = 600
  const actualValue = billboard(name)
  expect(actualValue).toEqual(expectedValue)
})
test('Abishai Charalampos = 570', () => {
  const name = "Abishai Charalampos"
  const expectedValue = 570
  const actualValue = billboard(name)
  expect(actualValue).toEqual(expectedValue)
})
test('Hadufuns John, 20 = 260', () => {
  const name = "Hadufuns John"
  const price = 20
  const expectedValue = 260
  const actualValue = billboard(name, price)
  expect(actualValue).toEqual(expectedValue)
})