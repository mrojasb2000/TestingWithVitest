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
});