export function removeIf<T>(arr: T[], condition: (element: T) => boolean): T[] {
  return arr.filter((element) => !condition(element));
}
