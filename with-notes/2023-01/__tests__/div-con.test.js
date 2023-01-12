const divCon = require('../div-con')

test('Mixed array returns 2', () => {
  const x = [9, 3, '7', '3']
  const expectedValue = 2
  const actualValue = divCon(x)
  expect(actualValue).toEqual(expectedValue)
})
test('Mixed array returns 14', () => {
  const x = ['5', '0', 9, 3, 2, 1, '9', 6, 7]
  const expectedValue = 14
  const actualValue = divCon(x)
  expect(actualValue).toEqual(expectedValue)
})
test('Mixed array returns 13', () => {
  const x = ['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']
  const expectedValue = 13
  const actualValue = divCon(x)
  expect(actualValue).toEqual(expectedValue)
})