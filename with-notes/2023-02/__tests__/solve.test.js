const solve = require('../solve')

test('blank string', () => {
  const s = ""
  const expectedValue = [0,0,0,0]
  const actualValue = solve(s)
  expect(expectedValue).toEqual(actualValue)
})
test('aAbBcC', () => {
  const s = "aAbBcC"
  const expectedValue = [3,3,0,0]
  const actualValue = solve(s)
  expect(expectedValue).toEqual(actualValue)
})
test('Codewars@codewars123.com', () => {
  const s = "Codewars@codewars123.com"
  const expectedValue = [1,18,3,2]
  const actualValue = solve(s)
  expect(expectedValue).toEqual(actualValue)
})
test('bgA5<1d-tOwUZTS8yQ', () => {
  const s = "bgA5<1d-tOwUZTS8yQ"
  const expectedValue = [7,6,3,2]
  const actualValue = solve(s)
  expect(expectedValue).toEqual(actualValue)
})
test('bgA5<1d-P*K4%>mQUDaG$h=cx2?.Czt7!Zn16p@5H', () => {
  const s = "bgA5<1d-P*K4%>mQUDaG$h=cx2?.Czt7!Zn16p@5H"
  const expectedValue = [9,9,6,9]
  const actualValue = solve(s)
  expect(expectedValue).toEqual(actualValue)
})