const grabDoll = require('../grab-doll')

test('one element', () => {
  const dolls = ["Mickey Mouse","Hello Kitty","Snow white"]
  const expectedValue = ["Hello Kitty"]
  const actualValue = grabDoll(dolls)
  expect(actualValue).toEqual(expectedValue)
})
test('two elements', () => {
  const dolls = ["Mickey Mouse","Hello Kitty","Hello Kitty","Snow white"]
  const expectedValue = ["Hello Kitty","Hello Kitty"]
  const actualValue = grabDoll(dolls)
  expect(actualValue).toEqual(expectedValue)
})
test('three elements', () => {
  const dolls = ["Mickey Mouse","Hello Kitty","Hello Kitty","Barbie doll","Snow white"]
  const expectedValue = ["Hello Kitty","Hello Kitty","Barbie doll"]
  const actualValue = grabDoll(dolls)
  expect(actualValue).toEqual(expectedValue)
})
test('more than 3 elements', () => {
  const dolls = ["Mickey Mouse","Barbie doll","Hello Kitty","Hello Kitty","Hello Kitty","Snow white"]
  const expectedValue = ["Barbie doll","Hello Kitty","Hello Kitty"]
  const actualValue = grabDoll(dolls)
  expect(actualValue).toEqual(expectedValue)
})