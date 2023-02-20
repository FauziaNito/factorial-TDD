export function factorialRecursive(n) {
  if (n < 0) {
    throw new Error('Argument cannot be a negative Number');
  }
  if (n === 0) {
    return 1;
  }
  return n * factorialRecursive(n - 1);
}

export function factorialLoop(n) {
  if (n < 0) {
    throw new Error('Argument cannot be a negative Number');
  }
  let result = 1;
  for (let i = n; i > 0; i -= 1) {
    result *= n;
  }
  return result;
}
