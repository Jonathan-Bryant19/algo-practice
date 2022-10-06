const gps = require('../gps')

test("Expect 20 seconds to return a speed of 41", () => {
    // arrange
    const s = 20
    const x = [0.0, 0.23, 0.46, 0.69, 0.92, 1.15, 1.38, 1.61]
    const expectedSpeed = 41

    // act
    const actualSpeed = gps(s, x)

    // assert
    expect(actualSpeed).toEqual(expectedSpeed)
})