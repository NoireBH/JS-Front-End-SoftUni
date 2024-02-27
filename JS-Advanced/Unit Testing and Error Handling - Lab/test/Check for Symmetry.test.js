const {expect}  = require('chai');
const testSuite = require('../05. Check for Symmetry');

var number = 1;

var array = [1,2,3];

var array2 = ['1',2,3];

var array3 = [1,2,1];

describe('Testing Symmetry Function', () => {

    it('returns false if its not an array', () => {
        expect(Array.isArray(number)).to.equal(false);
    })

    it('returns true is array is symmetric', () => {
        expect(testSuite.isSymmetric(array3)).to.equal(true);
    })

    it('returns false is array is not symmetric', () => {
        expect(testSuite.isSymmetric(array)).to.equal(false);
    })
})