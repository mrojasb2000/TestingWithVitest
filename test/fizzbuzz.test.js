import { expect, it, describe } from 'vitest';

/*
Escribir una función que al pasarle un número
  - Muestra "fizz" si es multiplo de 3
  - Muestra "buzz" si es multiplo de 5
  - Muestra "fizzbuzz" si es multiplo de 3 y 5
  - Muestra el número si no es multiplo de de los anteriores
*/

const fizzbuzz = (number) => {
    if (typeof number != 'number') throw new Error('parameter provided must be a number')
    if (Number.isNaN(number)) throw new Error('parameter provided must be a number')
    return number;
}

describe('fizzbuzz', () => {
  it('should be a function', () => {
    expect(typeof fizzbuzz).toBe('function')
  });

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

  it('should return 2 if number provided is 2', () => {
    expect(fizzbuzz(2)).toBe(2)
  });
});