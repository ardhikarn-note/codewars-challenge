// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.
// If the input array is empty or null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

function countPositivesSumNegatives(input) {
  if (input === null || input.length === 0) {
    return [];
  }
  
  let positive = 0;
  let negative = 0;
  
  for (i = 0 ; i < input.length ; ++i) {
    if (input[i] > 0)
      positive += 1; // +1 karena count, bukan sum
    else
      negative += input[i];
  }
  
  return [positive, negative];
}

var testData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
var actual = countPositivesSumNegatives(testData);
var expected = [10, -65];
console.log(actual[0] == expected[0] && actual[1] == expected[1], "Wrong return value.");
console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]), "Wrong return value.");


testData = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14];
actual = countPositivesSumNegatives(testData);
expected = [8, -50];
console.log(actual[0] == expected[0] && actual[1] == expected[1], "Wrong return value.");