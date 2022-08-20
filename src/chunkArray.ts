/**
 * Splits a given array in chunks.
 * @param array the array to split.
 * @param chunkSize the size of each chunk.
 * @returns a new array consisting of sub-arrays (chunks) of size `chunkSize`.
 */
export function chunkArray<T>(array: T[], chunkSize: number): T[][] {
  if (chunkSize < 1) {
    return [];
  }

  const result: T[][] = [];

  for (let i = 0; i < array.length; i += chunkSize) {
    const chunk = array.slice(i, i + chunkSize);
    result.push(chunk);
  }

  return result;
}
