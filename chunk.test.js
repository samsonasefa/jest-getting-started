const chunkArray = require('./chunk');

test('chuck function exists', () => {
  expect(chunkArray).toBeDefined();
});

test('Chunk an array of 10 values with lenth of 2', () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const len = 2;
  const chuckedArr = chunkArray(numbers, len);

  expect(chuckedArr).toEqual([
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8],
    [9, 10],
  ]);
});

test('Chunk an array of 3 values with lenth of 1', () => {
  const numbers = [1, 2, 3];
  const len = 1;
  const chuckedArr = chunkArray(numbers, len);

  expect(chuckedArr).toEqual([[1], [2], [3]]);
});
