export const lanthanidesAtomicNumbers = range(57, 71);

export const actinidesAtomicNumbers = range(89, 103);

function range(start: number, end: number): number[] {
  if (start > end) {
    [end, start] = [start, end];
  }

  return [...Array(end - start + 1)].map((_, i) => start + i);
}
