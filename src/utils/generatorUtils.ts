export function getArrayFromGenerator<T, R>(
  generator: Generator<R, any, T>,
  length: number,
  argument: T
) {
  let arr: R[] = [];
  let done: boolean | undefined = false;
  for (let i = 0; i < length && !done; i++) {
    const result = generator.next(argument);
    done = result.done;
    arr.push(result.value);
  }
  return arr;
}
