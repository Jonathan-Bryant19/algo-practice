const leo = require('../leo')

test('88 returns Leo finally won the oscar! Leo is happy', () => {
  const oscar = 88
  const expectedValue = "Leo finally won the oscar! Leo is happy"
  const actualValue = leo(oscar)
  expect(actualValue).toEqual(expectedValue)
})
test('86 returns Not even for Wolf of wallstreet?!', () => {
  const oscar = 86
  const expectedValue = "Not even for Wolf of wallstreet?!"
  const actualValue = leo(oscar)
  expect(actualValue).toEqual(expectedValue)
})
test('Over 88 returns Leo got one already!', () => {
  const oscar = 89
  const expectedValue = "Leo got one already!"
  const actualValue = leo(oscar)
  expect(actualValue).toEqual(expectedValue)
})
test('Default return value is When will you give Leo an Oscar?', () => {
  const oscar = 1
  const expectedValue = "When will you give Leo an Oscar?"
  const actualValue = leo(oscar)
  expect(actualValue).toEqual(expectedValue)
})