import capitalize from '../src/capitalize';

test('should capitalize the world hello"hello world should be Hello world', () => {
  expect(capitalize('hello')).toBe('Hello');
});

test('should capitalize the string hello world should', () => {
  expect(capitalize('hello world')).toBe('Hello world');
});

test('should maintain capitalize the first letter', () => {
  expect(capitalize('Hello')).toBe('Hello');
});