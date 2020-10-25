// Write a function called repeat_str which repeats the given string src exactly count times.

function repeatStr (n, s) {
  let a = ''
  for(i = 0 ; i < n ; i++) {
    a += s
  }
  return a;
}

// simple option 
function repeatStr (n, s) {
  return s.repeat(n); // use repeat for loop s(string) with count times n(times)
}

console.log(repeatStr(6, "I")) // "IIIIII"
console.log(repeatStr(5, "Hello")) // "HelloHelloHelloHelloHello"
console.log(repeatStr(3, "*"), "***");
console.log(repeatStr(5, "#"), "#####");
console.log(repeatStr(2, "ha "), "ha ha ");