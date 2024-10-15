// Exercise 1 - initialise these variables

const FUTURE_YEAR = 2045; // don't change this
let firstName;
let birthYear;

// write your code here :


// Work out your age in 2045.
let futureAge;
// write your code here :


// Exercise 2 - Initialise the 'type' variables to show their type

let firstNameType;
let birthYearType;
let futureAgeType;
let firstNameBirthYear = firstName + birthYear;
let firstNameBirthYearType;

// write your code here :



// Exercise 3

let numbersFirst;
let stringFirst;

// write your code here :

numbersFirst;
stringFirst;

// Exercise 4 - you'll need to add a const and initialise these variables
// From now on add the initialisation on the same line as the declaration of variables

let fiveDays;
let thirtyDays;
let oneYear;
let fiveYears;

// Exercise 5 - you'll need another const

let fiveDaysCost; 
let thirtyDaysCost;
let oneYearCost;
let fiveYearCost;

// Exercise 6 - you'll need another CONST

let fiveYearCostInflation;

// Excercise 7
/* 
Remember "textContent" from the lecture?
Edit the html file to add what you need, then write JS below to target that element 
*/

// write your code here :



// Exercise 8
/* 
No help on this one. Write the html element you need in the html file and the JS to target it 
*/

// write your code here :



/* *********************************************************************************** */
/* DO NOT TOUCH ANYTHING BELOW HERE */
/* *********************************************************************************** */

// Excercise 1
document.querySelector('h1').textContent = "Variables by " + firstName;
document.getElementById('first-name').textContent = firstName;
document.getElementById('birth-year').textContent = birthYear;
document.getElementById('future-age').textContent = futureAge;

// Exercise 2
document.getElementById('first-name-type').textContent = firstNameType;
document.getElementById('birth-year-type').textContent = birthYearType;
document.getElementById('future-age-type').textContent = futureAgeType;
document.getElementById('name-birth-year-type').textContent = firstNameBirthYearType;

// Exercise 3
document.getElementById('numbers-first').textContent = numbersFirst;
document.getElementById('string-first').textContent = stringFirst;

// Exercise 4
document.getElementById('five-days').textContent = fiveDays;
document.getElementById('thirty-days').textContent = thirtyDays;
document.getElementById('one-year').textContent = oneYear;
document.getElementById('five-years').textContent = fiveYears;

// Exercise 5
document.getElementById('five-days-cost').textContent = fiveDaysCost;
document.getElementById('thirty-days-cost').textContent = thirtyDaysCost;
document.getElementById('one-year-cost').textContent = oneYearCost;
document.getElementById('five-year-cost').textContent = fiveYearCost;

// Exercise 6
document.getElementById('five-year-cost-inflation').textContent = fiveYearCostInflation;