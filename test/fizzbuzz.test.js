import { expect, it, describe } from 'vitest';
import { fizzbuzz } from '../src/fizzbuzz.js';

describe('fizzbuzz', () => {
  // Remove redundant test
  // it('should be a function', () => {
  //   expect(typeof fizzbuzz).toBe('function')
  // });

  it('should throw if not number is provided as parameters', () => {
    expect(() => fizzbuzz()).toThrow()
  });

  it('should throw a specific error message if not number is provided as parameters', () => {
    expect(() => fizzbuzz()).toThrow(/number/)
  });

  it('should throw a specific error message not number is provided', () => {
    expect(() => fizzbuzz(NaN)).toThrow(/number/)
  });

  it('should return 1 if number provided is 1', () => {
    expect(fizzbuzz(1)).toBe(1)
  });

  // Remove redundant test
  // it('should return 2 if number provided is 2', () => {
  //   expect(fizzbuzz(2)).toBe(2)
  // });

  it('should return "fizz" if number provided is 3', () => {
    expect(fizzbuzz(3)).toBe('fizz')
    expect(fizzbuzz(6)).toBe('fizz')
    expect(fizzbuzz(9)).toBe('fizz')
  });

  // Remove redundant test
  // it('should return 4 if number provided is 4', () => {
  //   expect(fizzbuzz(4)).toBe(4)
  // });

  it('should return "buzz if number provided is multiple of 5', () => {
    expect(fizzbuzz(5)).toBe('buzz')
    expect(fizzbuzz(10)).toBe('buzz')
  });

  it('should return "buzz if number provided is multiple of 3 and multiple 5', () => {
    expect(fizzbuzz(15)).toBe('fizzbuzz')
    expect(fizzbuzz(30)).toBe('fizzbuzz')
    expect(fizzbuzz(60)).toBe('fizzbuzz')
    expect(fizzbuzz(90)).toBe('fizzbuzz')
  });
});