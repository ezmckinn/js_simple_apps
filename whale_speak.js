// input string
let input = 'Suck It, Trebek';

const vowels = ['a','i','e','o','u'];

console.log(vowels);

// result array
let resultArray = [];

// Loop through input array to compare to vowel array

 for (let i = 0; i < input.length; i++) {
  for (let a = 0; a < vowels.length; a++) {
    if(input[i] === vowels[a]) {
      resultArray.push(input[i])
    }
  };

  // double each E
  if(input[i] === 'e'){resultArray.push('e')};

  // double each Y
  if(input[i] === 'y'){resultArray.push('y')}
  };
  
// make array into legible string
whale = resultArray.join(' ').toUpperCase();
console.log(whale);

