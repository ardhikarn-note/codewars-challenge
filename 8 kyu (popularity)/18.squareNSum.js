// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

function squareSum(numbers){
  // option 1
  // let total = 0
  // for (i = 0 ; i < numbers.length ; i++) {
  //   total += numbers[i] * numbers[i]
  // }
  // return total

  // option 2
  return numbers.reduce((total, currentValue) => total + currentValue * currentValue, 0) 
  // 0 tandanya total dimulai dari 0
}

console.log(squareSum([1,2]), 5)
console.log(squareSum([0, 3, 4, 5]), 50)