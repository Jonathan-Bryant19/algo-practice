const sumPairs = require('../sum-pairs')

test('Basic test should return 1 and 7', () => {
    // arrange
    const arr = [1, 4, 8, 7, 3, 15]
    const target = 8
    const expectedPair = [1, 7]

    // act
    const actulPair = sumPairs(arr, target)

    // assert
    expect(actulPair).toEqual(expectedPair)
})
test("Negatives: [1, -2, 3, 0, -6, 1] should return [0, -6] for sum = -6", () => {
    // arrange
    const arr = [1, -2, 3, 0, -6, 1]
    const target = -6
    const expectedPair = [0, -6]

    // act
    const actulPair = sumPairs(arr, target)

    // assert
    expect(actulPair).toEqual(expectedPair)
})
test("No Match: [20, -13, 40] should return undefined for sum = -7", () => {
    // arrange
    const arr = [20, -13, 40]
    const target = -7
    const expectedPair = undefined

    // act
    const actulPair = sumPairs(arr, target)

    // assert
    expect(actulPair).toEqual(expectedPair)
})
test("First Match From Left: [1, 2, 3, 4, 1, 0] should return [1, 1] for sum = 2", () => {
    // arrange
    const arr = [1, 2, 3, 4, 1, 0]
    const target = 2
    const expectedPair = [1, 1]

    // act
    const actulPair = sumPairs(arr, target)

    // assert
    expect(actulPair).toEqual(expectedPair)
})
test("Duplicates: [4, -2, 3, 3, 4] should return [4, 4] for sum = 8", () => {
    // arrange
    const arr = [4, -2, 3, 3, 4]
    const target = 8
    const expectedPair = [4, 4]

    // act
    const actulPair = sumPairs(arr, target)

    // assert
    expect(actulPair).toEqual(expectedPair)
})
test("Zeroes: [0, 2, 0] should return [0, 0] for sum = 0", () => {
    // arrange
    const arr = [0, 2, 0]
    const target = 0
    const expectedPair = [0, 0]

    // act
    const actulPair = sumPairs(arr, target)

    // assert
    expect(actulPair).toEqual(expectedPair)
})
test("Subtraction: [5, 9, 13, -3] should return [13, -3] for sum = 10", () => {
    // arrange
    const arr = [5, 9, 13, -3]
    const target = 10
    const expectedPair = [13, -3]

    // act
    const actulPair = sumPairs(arr, target)

    // assert
    expect(actulPair).toEqual(expectedPair)
})
test("First Match From Left REDUX!: [10, 5, 2, 3, 7, 5] should return [3, 7] for sum = 10", () => {
    // arrange
    const arr = [10, 5, 2, 3, 7, 5]
    const target = 10
    const expectedPair = [3, 7]

    // act
    const actulPair = sumPairs(arr, target)

    // assert
    expect(actulPair).toEqual(expectedPair)
})