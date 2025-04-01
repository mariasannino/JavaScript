/* ARRAYS STRUCTURE AND TYPES OF DATA */

const numbers = [1, 2, 3];
console.log(numbers);

const moreNumbers = new Array(5); /* an empty array of length 5 */
console.log(moreNumbers);

const moreNumbers2 = Array(5);
console.log(moreNumbers);

const yetMoreNumbers = Array.of(1, 2);
console.log(yetMoreNumbers);

const MoreNumbers3 =
  Array.from(
    "Hi!"
  ); /* it converts the string into an array and split the letters */
console.log(MoreNumbers3);

const listItems = document.querySelectorAll("li");
console.log(listItems);

const arrayListItems = Array.from(listItems);
console.log(arrayListItems);

const hobbies = ["Cooking", "Sports"];
const personalData = [22, "Maria", { moreDetail: {} }];
const analyticsData = [
  [1, 1.6],
  [-5.4, 2.1],
];

for (const data of analyticsData) {
  for (const dataPoint of data) {
    console.log(dataPoint);
  }
}

console.log(personalData[1]);

/* ARRAYS HOW TO ADD DATA */
const hobbies2 = ["Sports", "Cooking"];
hobbies2.push("Reading");
hobbies2.unshift(
  "Coding"
); /* add item by shifting all the elements to the right */
const poppedValue = hobbies2.pop(); /* remove item end of array */
hobbies2.shift(); /* shift elements to the left first item is removed */
console.log(hobbies2); /* log the array to the console */

hobbies2[1] = "Coding";
/* hobbies2[5] = "Reading"; */
console.log(hobbies2);

hobbies2.splice(
  1,
  0,
  "Good Food"
); /* start at element 2, it is not deleted and insert good food */
console.log(hobbies2);

hobbies2.splice(0, 1); /* removes first element of array */
console.log(hobbies2);

/* hobbies2.splice(0) empty array
 */

const removedElements = hobbies2.splice(
  -1,
  1
); /* goes to the last value of the array  and delete it*/
console.log(hobbies2);

const testResults = [1, 5.3, 1.5, 10.99, -5, -3];
/*const storedResults = testResults.slice();  gives you the full array */
/*const storedResults = testResults.slice(0,2);  starts first element and ends third element */
const storedResults = testResults.concat([
  3.99, 2,
]); /* concatenate, add elements at the end of the array by combining arrays */
testResults.push(5.91);
console.log(testResults, storedResults);

/* WHICH INDEX IS THE ELEMENT? */
console.log(
  testResults.indexOf(1.5)
); /* tells me the index of 1.5, if we have 2 1.5 it will return the first one */

console.log(
  testResults.lastIndexOf(1.5)
); /* same but starts searching from the end */

console.log(testResults.includes(10.99));
console.log(testResults.indexOf(10.99) !== -1);

const personData = [{ name: "Maria" }, { name: "Manuel" }];
console.log(
  personData.indexOf({ name: "Manuel" })
); /* it returns -1 that is not find because for index does not work */

const manuel = personData.find((person, index, persons) => {
  return person.name === "Manuel";
});

manuel.name = "Anna";

console.log(manuel, personData);

const maxIndex = personData.findIndex((person, index, persons) => {
  return person.name === "Maria";
});
console.log(maxIndex);

/*  SUBSTITUTE FORLOOPS */

const prices = [10.99, 5.99, 3.99, 6.59];
const tax = 0.19;
const taxAdjustedPrices = [];
/* 
for (const price of prices) {
  taxAdjustedPrices.push(price * (1 + tax));
} */
prices.forEach((price, index, prices) => {
  const priceObj = { index: index, taxAdjustedPrices: price * (1 + tax) };
  taxAdjustedPrices.push(priceObj);
});
console.log(taxAdjustedPrices);

const prices2 = [10.99, 5.99, 3.99, 6.59];
const taxAdjustedPrices2 = prices.map((price, index, prices) => {
  const priceObj = { index: index, taxAdjustedPrices: price * (1 + tax) };
  return priceObj;
});
console.log(prices2, taxAdjustedPrices2);

/*  SORTING AND RESERVING */
const sortedPrices =
  /*  prices.sort(); converts in string and sorts in string logic */
  prices.sort((a, b) => {
    if (a > b) {
      return 1;
    } else if (a === b) {
      return 0;
    } else {
      return -1;
    }
  });
console.log(prices.reverse()); /* first high number */

/* FILTER ARRAYS*/
const filteredArray = prices.filter((price, index, prices) => {
  return price > 6; /* returns prices grater than 6 */
});
console.log(filteredArray);

/* ARROWS FUNCTIONS */

const filteredArray2 = prices.filter((p) => p > 6);

console.log(filteredArray2);

/* REDUCE METHODS */
let sum = 0;
prices.forEach((price) => {
  sum += price;
});

console.log(sum);

const sum2 = prices.reduce(
  (prevValue, curValue) => prevValue + curValue,
  0
); /* prevValue is first 0 and then the return of the last iteration */
console.log(sum2);

/* ARRAYS AND STRINGS*/
const data = "new youk;10.99;2000";

const transformedData = data.split(";");
transformedData[1] = +transformedData[1];
transformedData[2] = +transformedData[2];
console.log(transformedData);

const nameFragments = ["Maria", "Sannino"];
const name = nameFragments.join(" ");
console.log(name);

/* SPREAD OPERATOR*/
const copiedNameFragments = [...nameFragments];
nameFragments.push("Ms");
console.log(nameFragments, copiedNameFragments);

console.log(Math.min(...prices));

const persons = [
  { name: "Maria", age: 22 },
  { name: "Ale", age: 53 },
];
const copiedPersons = persons.map((person) => ({
  name: person.name,
  age: person.age,
}));
persons.push({ name: "Anna", age: 53 });
persons[0].age = 23;
console.log(persons, copiedPersons);

/* ARRAY DISTRUCTURING */
const nameData = ["Maria", "Sannino", "Ms", 22];
/* const firstName = nameData[0];
const lastName = nameData[1]; */

const [firstName, lastName, ...otherInformation] = nameData;
console.log(firstName, lastName, otherInformation);
