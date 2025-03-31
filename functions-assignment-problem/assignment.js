const sayHello = (name) => {
  console.log("Hi " + name);
};

/* const sayHello = name => console.log("Hi" + name) */

sayHello("Maria");

const sayHello2 = (hello, name) => {
  console.log(hello + name);
};

sayHello2("HI ", "MARIA");

const sayHello3 = () => {
  const hello = "Hello ";
  const name = "Maria!";
  console.log(hello + name);
};

sayHello3();

const sayHello4 = (name) => "Hola " + name;

console.log(sayHello4("Maria"));

const DEFAULT_VALUE = "Mari";
const sayHello5 = (name = DEFAULT_VALUE) => {
  console.log("Hi " + name);
};

sayHello5();
sayHello5("Marins");

const checkInput = (resultHandler, ...strings) => {
  const validateString = (str) => {
    return !str ? "something " : str;
  };
  let sum = "So ";
  for (const string of strings) {
    sum += validateString(string);
  }
  resultHandler(sum);
};
const showResult = (result) => {
  console.log(result);
};
checkInput(showResult, "hi ", "my ", "name ", "is ", "maria ");
checkInput(showResult, "hi ", 0, "name ", "is ", "maria ");
