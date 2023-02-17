const isBipartite = require('../is-bipartite')

test('[[1,2,3],[0,2],[0,1,3],[0,2]] => false', () => {
  const graph = [[1,2,3],[0,2],[0,1,3],[0,2]]
  const expectedValue = false
  const actualValue = isBipartite(graph)
  expect(actualValue).toEqual(expectedValue)
})
test('[[1,3],[0,2],[1,3],[0,2]] => true', () => {
  const graph = [[1,3],[0,2],[1,3],[0,2]]
  const expectedValue = true
  const actualValue = isBipartite(graph)
  expect(actualValue).toEqual(expectedValue)
})