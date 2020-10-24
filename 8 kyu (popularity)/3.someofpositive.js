// You get an array of numbers, return the sum of all of the positives ones.
// Example [1,-4,7,12] => 1 + 7 + 12 = 20
// Note: if there is nothing to sum, the sum is default to 0.

// Option 1
function positiveSum(arr) {
  let total = 0;
  arr.map((value) => {
    if (value > 0) {
      total += value;
    }
  });
  return total;
}

//option 2
function positiveSum2(arr2) {
  let total = 0
  for (i = 0 ; i < arr2.length ; i++) {
    if(arr2[i] > 0) {
      total += arr2[i]
    }
  }
  return total
}

// option 3
const positiveSum = (arr) => arr.reduce((sum, n) => n > 0 ? sum + n : sum, 0);

console.log(positiveSum2([1,2,3,4,5]),15);
console.log(positiveSum2([1,-2,3,4,5]),13);
console.log(positiveSum2([]),0);
console.log(positiveSum2([-1,-2,-3,-4,-5]),0);
console.log(positiveSum2([-1,2,3,4,-5]),9);

console.log(positiveSum([1,2,3,4,5]),15);
console.log(positiveSum([1,-2,3,4,5]),13);
console.log(positiveSum([]),0);
console.log(positiveSum([-1,-2,-3,-4,-5]),0);
console.log(positiveSum([-1,2,3,4,-5]),9);