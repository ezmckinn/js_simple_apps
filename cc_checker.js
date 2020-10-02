// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [4, 1, 4, 7, 0, 9, 8, 6, 5, 8, 0, 4, 8, 8, 6, 3];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];


// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];


function validateCred(array) {
  // pass in the array as a test
 let testArray = array.slice(0,array.length);
 // count back from 15 by 2 (starting with the second to last digit)
  for (let i = array.length - 2; i >= 0; i-=2) {
    // if the doubled array * 2 > 9, subtract 9
     if ((testArray[i] * 2) > 9)
     {testArray[i] = (testArray[i] * 2) - 9} else
     // else, just multiply it by 2
     {testArray[i] = testArray[i] * 2
   };
  };
  // add up the sum of the array, and calculate the remainder when divided by 10
  const remainder = (testArray.reduce((a, b) => a + b));
  // return true or false depending on remainder
  return remainder % 10 === 0
};

validateCred(batch);

// function to loop through nested array

function findInvalidCards(cards) {
  const bogus = [];

  for (let i = 0; i < cards.length; i++){
  if (!validateCred(cards[i])) { // check if the validateCred function returns 'false'
    let currCard = cards[i];
    bogus.push(cards[i]);
    };
  };
  return (bogus);
};
// get results 

const results = findInvalidCards(batch);
console.log(results);

// find companies

function idInvalidCardCompanies(invalidBatch){
  const companies = []; // set up companies array
  for (let i = 0; i < invalidBatch.length; i++) { 
    switch (invalidBatch[i][0]) { //for each company in invalidBatch (i), look at the first number
      case 3: // if it's three, and Amex isn't already there, add 'Amex.'
        if (companies.indexOf('Amex') === -1) {
          companies.push('Amex');
        }
        break
      case 4: //if Visa isn't already there, push Visa
        if (companies.indexOf('Visa') === -1) {
          companies.push('Visa');
        }
        break
      case 5:
        if (companies.indexOf('Mastercard') === -1) {
          companies.push('Mastercard');
        }
        break
      case 6:
        if (companies.indexOf('Discover') === -1) {
          companies.push('Discover');
        }
        break
      default:
        console.log('Company not found');
    }
  }
  return companies;
};

// find out which companies mailed out invalid card numbers
console.log(idInvalidCardCompanies(results));











