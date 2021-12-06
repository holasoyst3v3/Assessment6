const {shuffleArray} = require('./utils')

// describe('shuffleArray should', () => {
//     test("random array", () => {
//         expect(shuffleArray()).toBe([])
//     })
//     test("return full count array", () => {
//         expect(shuffleArray).toHaveLength(5)
//     })
// })

describe('shuffleArray should', () => {
    test("return array", () => {
        expect(shuffleArray([1,2,3])).toContain(1)
        expect(shuffleArray([1,2,3])).toContain(2)
        expect(shuffleArray([1,2,3])).toContain(3)
    })
    test("check returned array for same length as argument ", () => {
        expect(shuffleArray).toHaveLength(5)
    })
})