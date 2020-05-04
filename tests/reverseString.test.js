import reverseString from '../src/reverseString';


test('reverse the string: hello world', () => {
  expect(reverseString('hello world')).toBe('dlrow olleh');
});

test('reverse the string: hello world mantaining UpperCase', () => {
  expect(reverseString('Hello world')).toBe('dlrow olleH');
});


test('reverse the world: hello world! mantaining puntuaction', () => {
  expect(reverseString('Hello world!')).toBe('!dlrow olleH');
});
