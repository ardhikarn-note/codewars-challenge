// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  // option 1
  // var vowelsCount = 0;
  // vowelsCount += str.match(/[aiueo]/gi) === null ? 0 : str.match(/[aiueo]/gi).length
  // return vowelsCount;

  // option 2
  let vowelsCount = 0;
  let vowels = ["a","e","i","o","u"];
  for(i = 0 ; i < str.length ; i++){
    for(j = 0 ; j < vowels.length ; j++){
      if(str[i] === vowels[j]){
        vowelsCount++;
      }
    }
  }
  return vowelsCount;
}

console.log(getCount("abracadabra"), 5)
console.log(getCount("my pyx"), 0)