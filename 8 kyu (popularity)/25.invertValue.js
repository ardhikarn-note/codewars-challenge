// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []
// You can assume that all values are integers. Do not mutate the input array/list.

function invert(array) {
  // option 1
  // return array.map(val => val === 0 ? val : -val)

  // option 2 
  let myArr = []
  for ( i = 0; i < array.length; i++) {
    if(array[i] === 0) {
      myArr.push(array[i])
    } else {
      myArr.push(array[i] * -1)
    }
  }
  return myArr
}

console.log(invert([1,2,3,4,5]), [-1,-2,-3,-4,-5]);
console.log(invert([1,-2,3,-4,5]), [-1,2,-3,4,-5]);
console.log(invert([]), []);
console.log(invert([0]), [0]);