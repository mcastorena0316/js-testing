import analyze from '../src/analyze';

describe('test analyze function', () => {
  test('it should return average 4', () => {
    expect(analyze([1, 8, 3, 4, 2, 6])).toMatchObject({ average: 4 });
  });

  test('it should return min 1', () => {
    expect(analyze([1, 8, 3, 4, 2, 6])).toMatchObject({ min: 1 });
  });

  test('it should return max 8', () => {
    expect(analyze([1, 8, 3, 4, 2, 6])).toMatchObject({ max: 8 });
  });

  test('it should return length 6', () => {
    expect(analyze([1, 8, 3, 4, 2, 6])).toMatchObject({ length: 6 });
  });

  test('it should return an object with the properties average, min, max and length', () => {
    expect(analyze([1, 8, 3, 4, 2, 6])).toEqual({
      average: 4, min: 1, max: 8, length: 6,
    });
  });
});
