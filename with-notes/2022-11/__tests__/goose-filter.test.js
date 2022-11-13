const gooseFilter = require('../goose-filter')

test('Filter a mixed array', () => {
    const birds = ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
    const expectedValue = ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
    const actualValue = gooseFilter(birds)
    expect(actualValue).toEqual(expectedValue)
})
test('No geese', () => {
    const birds = ["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"]
    const expectedValue = ["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"]
    const actualValue = gooseFilter(birds)
    expect(actualValue).toEqual(expectedValue)
})
test('All geese', () => {
    const birds = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
    const expectedValue = []
    const actualValue = gooseFilter(birds)
    expect(actualValue).toEqual(expectedValue)
})