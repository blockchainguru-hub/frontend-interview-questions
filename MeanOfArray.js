/**
 * Implement a function `mean(array)` that returns the mean (also known as average) of the value inside `array`,
 * which is an array of numbers.
 *
 * Arguments
 *  1. `array` (Array): array of numbers
 *
 * Returns
 *  (Number): returns the mean of the values in `array`
 *
 * Examples
 *  mean([4, 2, 8, 6]); // => 5
 *  mean([1, 2, 3, 4]); // => 2.5
 *  mean([1, 2, 3]); // => 1.6666666666666667
 *
 * The function should return `NaN` if `array` is empty
 */

// Solution - 1
// const mean = (numbers) => {
//   if (numbers.length === 0) {
//     return NaN;
//   }

//   return numbers.reduce((a, b) => a + b, 0) / numbers.length;
// };

// Solution - 2
const mean = (numbers) => {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  return sum / numbers.length;
};

// console.log(mean([1, 2, 3, 4]));
console.log(mean([1, 2, 2]));
