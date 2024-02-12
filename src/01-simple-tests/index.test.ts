/* eslint-disable prettier/prettier */
// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    const result = simpleCalculator({ a: 10, b: 15, action: Action.Add });
    expect(result).toBe(25);
  });

  test('should subtract two numbers', () => {
    const result = simpleCalculator({ a: 10, b: 15, action: Action.Subtract });
    expect(result).toBe(-5);
  });

  test('should multiply two numbers', () => {
    const result = simpleCalculator({ a: 10, b: 15, action: Action.Multiply });
    expect(result).toBe(150);
  });

  test('should divide two numbers', () => {
    const result = simpleCalculator({ a: 10, b: 2, action: Action.Divide });
    expect(result).toBe(5);
  });

  test('should exponentiate two numbers', () => {
    const result = simpleCalculator({ a: 2, b: 2, action: Action.Exponentiate });
    expect(result).toBe(4);
  });

  test('should return null for invalid action', () => {
    const result = simpleCalculator({ a: 2, b: 2, action: $ });
    expect(result).toBeNull();
  });

  test('should return null for invalid arguments', () => {
    const result = simpleCalculator({ a: 'h', b: 10, action: Action.Multiply });
    expect(result).toBeNull();
  });
});
