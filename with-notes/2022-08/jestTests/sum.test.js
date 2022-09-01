const sum = require('./sum').default

test('adds 1 + 2 = 3', () => {
    expect(sum(1, 2)).toBe(3)
})