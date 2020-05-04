import caesarCipher from '../src/caesarCipher';

describe('test function with different scenarios', () => {
  test('test function with shift 5, should respect spaces', () => {
    expect(caesarCipher('attack at dawn', 5)).toBe('fyyfhp fy ifbs');
  });

  test('test function with shift 19 and uppercase', () => {
    expect(caesarCipher('HELLO world?', 19)).toBe('AXEEH phkew?');
  });
});