const { encode, decode } = require('../coder')

test("'hello', 'h2ll4'", () => {
  const string = "hello"
  const expectedValue = "h2ll4"
  const actualValue = encode(string)
  expect(actualValue).toEqual(expectedValue)
})
test("How are you today?', 'H4w 1r2 y45 t4d1y?", () => {
  const string = "How are you today?"
  const expectedValue = "H4w 1r2 y45 t4d1y?"
  const actualValue = encode(string)
  expect(actualValue).toEqual(expectedValue)
})
test("This is an encoding test.', 'Th3s 3s 1n 2nc4d3ng t2st.", () => {
  const string = "This is an encoding test."
  const expectedValue = "Th3s 3s 1n 2nc4d3ng t2st."
  const actualValue = encode(string)
  expect(actualValue).toEqual(expectedValue)
})
test("h2ll4', 'hello", () => {
  const string = "h2ll4"
  const expectedValue = "hello"
  const actualValue = decode(string)
  expect(actualValue).toEqual(expectedValue)
})