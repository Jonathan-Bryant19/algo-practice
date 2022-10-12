const _if = require('../if')

test('True invokes function1', () => {
    // arrange
    const function1 = function(){console.log("True")}
    const function2 = function(){console.log("False")}
    const expectedValue = function1()
    // act
    const actualValue = _if(true, function1, function2)
    // assert
    expect(actualValue).toEqual(expectedValue)
})