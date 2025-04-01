/* SETS */

const ids = new Set(["Hi", "from", "set!"]);
ids.add(2); /* in a set a value is unique */
if (ids.has("Hi")) {
  ids.delete("Hi");
}

for (const entry of ids.entries()) {
  console.log(entry[0]);
}

/* MAPS */
const person1 = { name: "Maria" };
const person2 = { name: "Ale" };

const personData2 = new Map([[person1, [{ date: "yesterday", price: 10 }]]]);

personData2.set(person2, [{ date: "two weeks ago", price: 100 }]);
console.log(personData2);
console.log(personData2.get(person1));

for (const [key, value] of personData2.entries()) {
  console.log(key, value);
}

for (const key of personData2.keys()) {
  console.log(key);
}

for (const value of personData2.values()) {
  console.log(value);
}

console.log(personData2.size);

/* WEAK SET */
let person = { name: "Maria" };
const persons2 = new WeakSet();
persons2.add(person);

//... some operations
//person = null;

console.log(persons2);

/* WEAK MAP */
const personData3 = new WeakMap();
personData3.set(person, "Extra info!");

person = null;

console.log(personData3);
