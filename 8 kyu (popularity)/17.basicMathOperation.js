// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

function basicOp(operation, value1, value2) {
  // option 1 with if else if
  // if (operation === '+') {
  //   return value1 + value2 
  // } else if (operation === '-') {
  //   return value1 - value2
  // } else if (operation === '*') {
  //   return value1 * value2
  // } else if (operation === '/') {
  //   return value1 / value2
  // }

  // option 2 with switch case
  switch (operation) {
    case '+': return value2 + value1
    case '-': return value1 - value2
    case '*': return value2 * value1
    case '/': return value1 / value2
    default: return 'Operation must be one of + - * /';
  }

  // option 3 with eval, eval merubah string operator menjadi fungsi operator math.
  // return eval(value1+operation+value2) // eval is evil, eval is not recommended for real programmer

}

console.log(basicOp('+', 4, 7), 11);
console.log(basicOp('-', 15, 18), -3);
console.log(basicOp('*', 5, 5), 25);
console.log(basicOp('/', 49, 7), 7);