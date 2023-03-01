//
const {getSum} = require('./1.js')
const {arithmetic} = require('./2.js')
const {checkNumber} = require('./3.js')

describe('Sum of array elements', ()=>{
test('All elements should be summed', () =>{
    expect(getSum([1, 2, 3])).toBe(6)
    expect(getSum([1, 2, 3])).toEqual(6)
    expect(getSum([1, 2, 3])).not.toBe(10)
    expect(getSum([1, 2, 3])).not.toBeFalsy
    expect(getSum([1, 2, 3])).not.toBeUndefined
})
})

describe('result of arithmetic , ()=>{
test('Elements should be summed, divided or multiplied according to sign', () =>{
        expect(arithmetic(3, 1, "add")).toBe(4)
        expect(arithmetic(3, 1, "subtract")).toEqual(2)
        expect(arithmetic(3, 1, "multiply")).toBe(3)
        expect(arithmetic(3, 1, "divide")).toEqual(3)
        expect(arithmetic(3, 1, "")).toBe("No such result")
    })
})

describe('Number check', ()=>{
    test('Number should be able to be divided by 2', () =>{
        expect(checkNumber(2)).toBeTruthy
        expect(checkNumber(3)).toBeFalsy
        expect(checkNumber(7)).not.toBeTruthy
        expect(checkNumber(4)).not.toBeFalsy
        expect(checkNumber(10)).toBe(true)
        expect(checkNumber(9)).toBe(false)
    })
    })