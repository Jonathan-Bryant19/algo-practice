const Person = require('../person')

test('Logan', () => {
  const name = "Logan"
  const age = 2
  const logan = new Person(name, age)
  const expectedValue = "Logans age is 2"
  const actualValue = logan.info
  expect(actualValue).toEqual(expectedValue)
})