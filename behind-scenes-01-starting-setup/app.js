/* SECTION 5 112/117 */

/* let name = "Maria";
let hobbies;

{
  let test = 5;
  console.log(test); /only used inside the brackets 
}
if (name === "Maria") {
  hobbies = ["Art", "Cooking"];
  console.log(
    hobbies
  );  as it is not a function var (hobbies is like a global variable now. If we use let or const we get an error. In modern java we use only let and const
}

function greet() {
  var age = 22;
  var name = "Mariana";
  console.log(name, age, hobbies);
}

console.log(name, hobbies);
greet(); */

/* console.log(userName);
var userName =
  "Maria"; you will get an undifined variable but not an error. Wit let or const you will get an error. */

/* "use strict";
const userName = "Maria";
var undefined = 5;
console.log(userName);
 */

/* SECTION 5 118 */
function getName() {
  return prompt("your Name", "");
}
function greet() {
  const userName = getName();
  console.log("hello " + userName);
}

greet();
