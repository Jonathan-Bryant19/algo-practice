const kebabize = require('../kebabize')

test('myCamelCasedString => my-camel-cased-string', () => {
  const str = 'myCamelCasedString'
  const expectedValue = 'my-camel-cased-string'
  const actualValue = kebabize(str)
  expect(actualValue).toEqual(expectedValue)
})
test('Numbers should be ignored', () => {
  const str = 'myCamelHas3Humps'
  const expectedValue = 'my-camel-has-humps'
  const actualValue = kebabize(str)
  expect(actualValue).toEqual(expectedValue)
})