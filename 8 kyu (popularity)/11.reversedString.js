// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'

function solution(str){
  let a = str.length-1
  let b = ''
  for(i = a ; i >= 0 ; i--) {
    b += str[i]
  }
  return b
}

// option 2
// function solution(str){
//   return str.split('').reverse().join('');
// }

console.log(solution('world'), 'dlrow')
console.log(solution('hello'), 'olleh')
console.log(solution(''), '')
console.log(solution('h'), 'h')