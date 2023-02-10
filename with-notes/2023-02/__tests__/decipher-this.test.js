const decipherThis = require('../decipher-this')

test('Have a go at this and see how you do', () => {
  const str = "72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o"
  const expectedValue = "Have a go at this and see how you do"
  const actualValue = decipherThis(str)
  expect(actualValue).toEqual(expectedValue)
})
test('Hello good day', () => {
  const str = "72olle 103doo 100ya"
  const expectedValue = "Hello good day"
  const actualValue = decipherThis(str)
  expect(actualValue).toEqual(expectedValue)
})
test('Ready set go', () => {
  const str = "82yade 115te 103o"
  const expectedValue = "Ready set go"
  const actualValue = decipherThis(str)
  expect(actualValue).toEqual(expectedValue)
})