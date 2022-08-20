import { chunkArray } from './chunkArray';

describe('chunkArray', () => {
  it('should split array in chunks', () => {
    const array = ['a', 'b', 'c', 'd', 'e'];
    const newArray = chunkArray(array, 2);

    expect(newArray).toStrictEqual(
      [
        ['a', 'b'],
        ['c', 'd'],
        ['e'],
      ],
    );
  });

  it('should return empty array when chunkSize is less than 1', () => {
    const array = ['a', 'b', 'c', 'd', 'e'];
    const newArray = chunkArray(array, 0);

    expect(newArray).toStrictEqual([]);
  });

  it('should create sub-array correctly when chunkSize is larger than array length', () => {
    const array = ['a', 'b', 'c', 'd', 'e'];
    const newArray = chunkArray(array, 10);

    expect(newArray).toStrictEqual([array]);
  });
});
