const calc = require('../calc')

test('abcdef returns 6', () => {
  const x = 'abcdef'
  const expectedValue = 6
  const actualValue = calc(x) 
  expect(actualValue).toEqual(expectedValue)
})
test('ifkhchlhfd returns 6', () => {
  const x = 'ifkhchlhfd'
  const expectedValue = 6
  const actualValue = calc(x) 
  expect(actualValue).toEqual(expectedValue)
})
test('aaaaaddddr returns 30', () => {
  const x = 'aaaaaddddr'
  const expectedValue = 30
  const actualValue = calc(x) 
  expect(actualValue).toEqual(expectedValue)
})
test('jfmgklf8hglbe returns 6', () => {
  const x = 'jfmgklf8hglbe'
  const expectedValue = 6
  const actualValue = calc(x) 
  expect(actualValue).toEqual(expectedValue)
})
test('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ returns 96', () => {
  const x = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const expectedValue = 96
  const actualValue = calc(x) 
  expect(actualValue).toEqual(expectedValue)
})