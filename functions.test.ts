const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test("random array", () => {
        expect(shuffleArray).toBe([])
    })
    test("return full count array", () => {
        expect(shuffleArray).toHaveLength(5)
    })
})