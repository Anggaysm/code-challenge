function squareSum(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i] * numbers[i];
  }
  return total;
}
console.log(squareSum([1, 2]));
