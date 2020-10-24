// Create a function (or write a script in Shell) that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

// option 1
function even_or_odd(number) {
  return number % 2 ? "Odd" : "Even"
}

// option 2 
function even_or_odd(number) {
  if (number%2 == 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

// option 3
  function even_or_odd(number) {
    return number % 2 === 0 ? 'Even' : 'Odd';
 }

//  option 4
const even_or_odd = n => (n % 2) ? 'Odd' : 'Even';