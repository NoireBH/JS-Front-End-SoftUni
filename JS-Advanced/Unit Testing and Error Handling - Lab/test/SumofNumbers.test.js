const {expect}  = require('chai');
const testSuite = require('../04. Sum of Numbers');

var array = [1,2,3];

var expected = 6;

describe('Testing Summing Function', () => {

    it('return NaN if one element of array is not a number', () => {
        expect(isNaN(testSuite.sum([1, 'a']))).to.equal(true)
    })

    it('calculates 1 element array', () => {
        expect(testSuite.sum([1])).to.equal(1)
    })
    
    it('calculates 2 element array', () => {
        expect(testSuite.sum([1, 1])).to.equal(2)
    })
})
