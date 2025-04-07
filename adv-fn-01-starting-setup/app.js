//CLOSURES AND SCOPES

//pure function no change of values
function add(num1, num2) {
  return num1 + num2;
}

console.log(add(1, 5));
console.log(add(12, 15));

//impure function
function addRandom(num1) {
  return num1 + Math.random();
}
console.log(addRandom(5));

//not pure because we introduce hte variable of outside that may change
let previousResult = 0;
function addMoreNumbers(num1, num2) {
  const sum = num1 + num2;
  previousResult = sum;
  return sum;
}
console.log(addMoreNumbers(1, 5));

const hobbies = ["Sports", "Cooking"];
function printHobbies(h) {
  h.push("New hobby");
  console.log(h);
}

printHobbies(hobbies);

let multiplier = 1.1;

function createTaxCalculator(tax) {
  function calculateTax(amount) {
    console.log(multiplier);
    return amount * tax * multiplier;
  }
  return calculateTax;
}

const calculateVatAmount = createTaxCalculator(0.19);
const calculateIncomeTaxAmount = createTaxCalculator(0.25);

console.log(calculateVatAmount(100));
console.log(calculateIncomeTaxAmount(200));

let userName = "Maria";
function greetUser() {
  let name = "Anna";
  console.log("Hi " + name);
}
let name = "Marta";
userName = "Mariana";
greetUser();

//RECURSSION
/* function powerOf(x, n) {
  let result = 1;
  for (let i = 0; i < n; i++) {
    result *= x;
  }
  return result;
} */
function powerOf(x, n) {
  /* if (n === 1) {
    return x;
  }
  return x * powerOf(x, n - 1); */
  return n === 1 ? x : x * powerOf(x, n - 1);
}
console.log(powerOf(2, 3)); //2*2*2

const myself = {
  name: "Maria",
  friends: [
    {
      name: "Mariana",
      friends: [{ name: "Cristina" }],
    },
    {
      name: "Julia",
    },
  ],
};

function getFriendName(person) {
  /*  for (const friends of personalbar.friends){
    for(const friendsFriends of friends.friends){
      for()
    }
  } */
  const collectedNames = [];
  if (!person.friends) {
    return [];
  }
  for (const friend of person.friends) {
    collectedNames.push(friend.name);
    collectedNames.push(...getFriendName(friend));
  }
  return collectedNames;
}

console.log(getFriendName(myself));
