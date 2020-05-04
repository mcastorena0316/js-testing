import Calculator from '../src/calculator';


const calculator = Calculator();

describe('testing calculator', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(calculator.sum(1, 2)).toBe(3);
  });

  test('substract 3 - 1  to equal 2', () => {
    expect(calculator.rest(3, 1)).toBe(2);
  });

  test('divition 6/2  to equal 3', () => {
    expect(calculator.divide(6, 2)).toBe(3);
  });

  test('divition 6/5  to give a float number ', () => {
    expect(calculator.divide(6, 5)).toBe(1.2);
  });

  test('multiply 5 * 2  to equal 10 ', () => {
    expect(calculator.multiply(5, 2)).toBe(10);
  });
});