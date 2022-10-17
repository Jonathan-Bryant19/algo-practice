const partlist = require('../part-list')

test('A set of 5 strings should yeild a nested array of 4', () => {
    // arrange
    const s = ["az", "toto", "picaro", "zone", "kiwi"]
    const expectedValue = [["az", "toto picaro zone kiwi"], ["az toto", "picaro zone kiwi"], ["az toto picaro", "zone kiwi"], ["az toto picaro zone", "kiwi"]]
    // act
    const actualValue = partlist(s)
    // assert
    expect(actualValue).toEqual(expectedValue)
})