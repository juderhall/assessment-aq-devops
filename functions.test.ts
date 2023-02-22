const {shuffleArray} = require('./utils')
const array = [1, 2, 3, 4]

describe('shuffleArray should', () => {
    test("shuffleArry should return an array", () => {
        // let array = shuffleArray([])
        expect(Array.isArray(array)).toBe(true)
    })

    test("shuffleArray should return the same length of argument sent in", () => {
        // let array = [1, 2 , 3, 4]
        expect(shuffleArray(array).length).toEqual(array.length)
    })
})