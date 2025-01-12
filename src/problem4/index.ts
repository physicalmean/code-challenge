// Implementation A: Recursive approach
// Complexity: O(n) - Linear time complexity, but with additional overhead due to function calls
function sum_to_n_a(n: number): number {
  if (n <= 1) {
    return n;
  }
  return n + sum_to_n_a(n - 1);
}

// Implementation B: Divide-and-conquer approach
// Complexity: O(log n) - Logarithmic time complexity
function sum_to_n_b(n: number): number {
  if (n <= 1) {
    return n;
  }
  const mid = Math.floor(n / 2);
  return sum_to_n_b(mid) + sum_to_n_b(n - mid) + mid * (n - mid);
}

// Implementation C: Mathematical formula
// Complexity: O(1) - Constant time complexity
function sum_to_n_c(n: number): number {
  return (n * (n + 1)) / 2;
}
