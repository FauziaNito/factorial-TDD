
// Terry Kayondo
// Nakacwa Fauzia
import { assert } from 'chai';
import { factorialLoop, factorialRecursive } from '../factorial.js';

const factorial = factorialRecursive;

describe('Testing Factorial', () => {
  it('should return factorial of 0 as 1', () => {
    const result = factorial(0);
    assert.equal(result, 1);
  });
  it('should return factorial of 1 as 1', () => {
    const result = factorial(1);
    assert.equal(result, 1);
  });
  it('should return factorial of 2 as 2', () => {
    const result = factorial(2);
    assert.equal(result, 2);
  });
  it('should return factorial of 3 as 6', () => {
    const result = factorial(3);
    assert.equal(result, 6);
  });
  it('should return factorial of 5 as 120', () => {
    const result = factorial(5);
    assert.equal(result, 120);
  });
  it('should return factorial of 9 as 362880', () => {
    const result = factorial(9);
    assert.equal(result, 362880);
  });
  it('should throw an error for factorial of -1 ', () => {
    assert.throws(() => factorial(-1), 'Argument cannot be a negative Number');
  });
});
