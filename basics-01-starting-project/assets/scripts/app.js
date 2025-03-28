const defaultResult = 0;
let currentResult;
currentResult = defaultResult;
let logEntries = [];
/* let result; defining globally */

function getUserNumberInput() {
  return parseInt(userInput.value);
}
function createAndWriteOutput(operator, resultBefore, calcNum) {
  const calcDescription = `${resultBefore}  ${operator}  ${calcNum}`;
  outputResult(currentResult, calcDescription);
}
function writeTolog(operationId, prevResult, operationNum, newResult) {
  const logEntry = {
    operation: operationId,
    prevResult: prevResult,
    number: operationNum,
    result: newResult,
  }; /* create an object */
  logEntries.push(logEntry);
  console.log(logEntries);
}

function calculateResult(calculationType) {
  const enteredNum = getUserNumberInput();
  if (
    (calculationType !== "ADD" &&
      calculationType != "SUBSTRACT" &&
      calculationType != "MULTIPLY" &&
      calculationType != "DIVIDE") ||
    !enteredNum /* enteredNum === 0  */
  ) {
    return;
  } /*all have to be true*/

  /* if (
    calculationType === "ADD" ||
    calculationType === "SUBSTRACT" ||
    calculationType === "MULTIPLY" ||
    calculationType === "DIVIDE"
  ) {
    return;
  } */

  const initialResult = currentResult;
  let mathOperator;
  if (calculationType === "ADD") {
    currentResult += enteredNum;
    mathOperator = "+";
  } else if (calculationType === "SUBSTRACT") {
    currentResult -= enteredNum;
    mathOperator = "-";
  } else if (calculationType === "MULTIPLY") {
    currentResult *= enteredNum;
    mathOperator = "*";
  } else if (calculationType === "DIVIDE") {
    currentResult /= enteredNum;
    mathOperator = "/";
  }

  createAndWriteOutput(mathOperator, initialResult, enteredNum);
  writeTolog(calculationType, initialResult, enteredNum, currentResult);
}
function add() {
  calculateResult("ADD");
  /*   const enteredNum = parseInt(userInput.value);
  const initialResult = currentResult;
  currentResult += enteredNum; */
  /* also with + +userInput.value */
  /* .tostring() */
  /* createAndWriteOutput("+", initialResult, enteredNum); */
  /* alert("The result is: \n" + result); */
  /*  logEntries.push(logEntry);  push new element add new element aray 
  console.log(logEntry.operation);  will return only the operation 
  console.log(logEntries);*/
  /* writeTolog("ADD", initialResult, enteredNum, currentResult); */
}

function subtract() {
  calculateResult("SUBSTRACT");
  /* const enteredNum = parseInt(userInput.value);
  const initialResult = currentResult;
  currentResult -= enteredNum; */
  //currentResult++ adds one --, ** if we put it before the variable we will get the updated value if not the before value
  /* createAndWriteOutput("-", initialResult, enteredNum);
  writeTolog("SUBSTRACT", initialResult, enteredNum, currentResult); */
}

function multiply() {
  calculateResult("MULTIPLY");
  /* const enteredNum = parseInt(userInput.value);
  const initialResult = currentResult;
  currentResult *= enteredNum;
  createAndWriteOutput("*", initialResult, enteredNum);
  writeTolog("MULTIPLY", initialResult, enteredNum, currentResult); */
}

function divide() {
  calculateResult("DIVIDE");
  /*  const enteredNum = parseInt(userInput.value);
  const initialResult = currentResult;
  currentResult /= enteredNum;
  createAndWriteOutput("/", initialResult, enteredNum);
  writeTolog("DIVIDE", initialResult, enteredNum, currentResult); */
}
addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
/* when button click have a look at the add function and execute it for me */

/* currentResult = (currentResult + 10) * 3; */
/* currentResult = add(1, 2); */
/* let calculationDescription = "(0 +10)*3"; */
/* let calculationDescription = "(" + defaultResult + "+10)*3"; */
/* let calculationDescription = `(  ${defaultResult}  +10)*3`;

let errorMessage = "An error" + "occurred!"; */
