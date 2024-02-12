/* eslint-disable prettier/prettier */
// Uncomment the code below and write your tests
import {  simpleCalculator, Action } from './index';

const addTestCases = [
  { a: 10, b: 21, action: Action.Add, expected: 31 },
  { a: 2, b: 0.1, action: Action.Add, expected: 2.1 },
  { a: 0.3, b: 0.2, action: Action.Add, expected: 0.5 },
];
const subtractTestCases = [
  { a: 1, b: -1, action: Action.Subtract, expected: 2 },
  { a: 1, b: 0, action: Action.Subtract, expected: 1 },
];
const multiplyTestCases = [
  { a: 10, b: -1, action: Action.Multiply, expected: -10 },
  { a: 20, b: 0, action: Action.Multiply, expected: 0 },
];
const divideTestCases = [
  { a: 0.3, b: 0.2, action: Action.Divide, expected: 1.5 },
  { a: 1, b: 1, action: Action.Divide, expected: 1 },
];
const exponentiateTestCases = [
  { a: 2, b: 3, action: Action.Exponentiate, expected: 8 },
  { a: 100, b: 0, action: Action.Exponentiate, expected: 1 },
];
const nullForInvalidAction = [
  { a: 1, b: -10, action: '&', expected: null },
  { a: 0, b: -1, action: 'ooops', expected: null },
];
const nullForInvalidArguments = [
  { a: 'a', b: -1, action: Action.Multiply, expected: null },
  { a: 'a', b: 'a', action: Action.Exponentiate, expected: null },
];

describe('simpleCalculator', () => {
  test.each(addTestCases)(
    'should add var1 to var2 and get result',
    ({ a, b, action, expected }) => {
      const result = simpleCalculator({ a, b, action });
      expect(result).toBeCloseTo(expected);
    },
  );

  test.each(subtractTestCases)(
    'should subtract var2 from var1 and return result',
    ({ a, b, action, expected }) => {
      const result = simpleCalculator({ a, b, action });
      expect(result).toBeCloseTo(expected);
    },
  );

  test.each(multiplyTestCases)(
    'should multiply var1 by var2 and get result',
    ({ a, b, action, expected }) => {
      const result = simpleCalculator({ a, b, action });
      expect(result).toBeCloseTo(expected);
    },
  );

  test.each(divideTestCases)(
    'should divide var1 by var2 and get result',
    ({ a, b, action, expected }) => {
      const result = simpleCalculator({ a, b, action });
      expect(result).toBeCloseTo(expected);
    },
  );

  test.each(exponentiateTestCases)(
    'should exponentiate var1 by var2 and get result',
    ({ a, b, action, expected }) => {
      const result = simpleCalculator({ a, b, action });
      expect(result).toBeCloseTo(expected);
    },
  );

  test.each(nullForInvalidAction)(
    'should return null for invalid operation',
    ({ a, b, action }) => {
      const result = simpleCalculator({ a, b, action });
      expect(result).toBeNull();
    },
  );

  test.each(nullForInvalidArguments)(
    'should return null for invalid var1 or var2',
    ({ a, b, action }) => {
      const result = simpleCalculator({ a, b, action });
      expect(result).toBeNull();
    },
  );
});