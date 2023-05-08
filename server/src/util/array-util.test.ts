import chunk from 'lodash.chunk';
import './array-util';

test('chunkする', () => {
  expect(chunk([1, 2, 3, 4, 5, 6], 2)).toStrictEqual([
    [1, 2],
    [3, 4],
    [5, 6],
  ]);
});
