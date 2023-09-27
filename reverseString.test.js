const reverseString = require('./reverseString');

test('reverseString function exists', () => {
  expect(reverseString).toBeDefined();
});

test('String reverse test hello to olleh', () => {
  expect(reverseString('hello')).toBe('olleh');
});

test('String reverse with affecting by case Hello to olleH', () => {
  expect(reverseString('hello')).toBe('olleh');
});
