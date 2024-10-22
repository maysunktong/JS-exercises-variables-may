// Exercise 1 - initialise these variables

const FUTURE_YEAR = 2045; // don't change this
let firstName;
let birthYear;

// write your code here :
firstName = "May";
birthYear = 1992;

// Work out your age in 2045.
let futureAge;
// write your code here :
futureAge = FUTURE_YEAR - birthYear;
// Exercise 2 - Initialise the 'type' variables to show their type

let firstNameType;
let birthYearType;
let futureAgeType;
let firstNameBirthYear = firstName + birthYear;
let firstNameBirthYearType;

// write your code here :
firstNameType = typeof firstName;
birthYearType = typeof birthYear;
futureAgeType = typeof futureAge;
firstNameBirthYearType = typeof firstNameBirthYear;

// Exercise 3

let numbersFirst;
let stringFirst;

// write your code here :
numbersFirst = birthYear + FUTURE_YEAR + firstName;
stringFirst = firstName + birthYear + FUTURE_YEAR;

// Exercise 4 - you'll need to add a const and initialise these variables
// From now on add the initialisation on the same line as the declaration of variables
const oneDayAmount = 3;
let fiveDays = 5 * oneDayAmount;
let thirtyDays = fiveDays * 6;
let oneYear = thirtyDays * 12;
let fiveYears = 5 * oneYear;

// Exercise 5 - you'll need another const
const oneCupCost = 42;
let fiveDaysCost = fiveDays * oneCupCost;
let thirtyDaysCost = thirtyDays * oneCupCost;
let oneYearCost = oneYear * oneCupCost;
let fiveYearCost = fiveYears * oneCupCost;

// Exercise 6 - you'll need another CONST
let twoYearCost = 2 * oneYearCost;

const oneCupCostInflation = 52;
let oneYearCostInflation = oneYear * oneCupCostInflation;
let threeYearCostInflation = 3 * oneYearCostInflation;
let fiveYearCostInflation = twoYearCost + threeYearCostInflation;

// Excercise 7
/* 
Remember "textContent" from the lecture?
Edit the html file to add what you need, then write JS below to target that element 
*/

// write your code here :
const currentYear = new Date().getFullYear();
const yearDifference = FUTURE_YEAR - currentYear;
const dayDifference = yearDifference * 365;
const totalAmountofCoffee = dayDifference * oneDayAmount;
const printTotalCoffee = `I will drink ${totalAmountofCoffee} cups in 2045`;

document.getElementById("total-coffee-2045").textContent = printTotalCoffee;
console.log("yearDifference:", yearDifference);
// Exercise 8
/* 
No help on this one. Write the html element you need in the html file and the JS to target it 
*/

// write your code here :
const restOfTheYears = yearDifference - 2;
const restOfTheYearsTotalInflationCost = restOfTheYears * oneYearCostInflation;
const totalCostCalculation = twoYearCost + restOfTheYearsTotalInflationCost;
const printTotalCostCalculation = `Total of ${yearDifference} years, the coffee cost will be ${totalCostCalculation}`;
document.getElementById("total-cost").textContent = printTotalCostCalculation;
console.log("rest of the years:", restOfTheYears);
console.log("The first two years's cost is ", twoYearCost);
console.log(
  "After two years onwards, each coffee will cost 52, it is ",
  restOfTheYearsTotalInflationCost
);

/* *********************************************************************************** */
/* DO NOT TOUCH ANYTHING BELOW HERE */
/* *********************************************************************************** */

// Excercise 1
document.querySelector("h1").textContent = "Variables by " + firstName;
document.getElementById("first-name").textContent = firstName;
document.getElementById("birth-year").textContent = birthYear;
document.getElementById("future-age").textContent = futureAge;

// Exercise 2
document.getElementById("first-name-type").textContent = firstNameType;
document.getElementById("birth-year-type").textContent = birthYearType;
document.getElementById("future-age-type").textContent = futureAgeType;
document.getElementById("name-birth-year-type").textContent =
  firstNameBirthYearType;

// Exercise 3
document.getElementById("numbers-first").textContent = numbersFirst;
document.getElementById("string-first").textContent = stringFirst;

// Exercise 4
document.getElementById("five-days").textContent = fiveDays;
document.getElementById("thirty-days").textContent = thirtyDays;
document.getElementById("one-year").textContent = oneYear;
document.getElementById("five-years").textContent = fiveYears;

// Exercise 5
document.getElementById("five-days-cost").textContent = fiveDaysCost;
document.getElementById("thirty-days-cost").textContent = thirtyDaysCost;
document.getElementById("one-year-cost").textContent = oneYearCost;
document.getElementById("five-year-cost").textContent = fiveYearCost;

// Exercise 6
document.getElementById("five-year-cost-inflation").textContent =
  fiveYearCostInflation;
