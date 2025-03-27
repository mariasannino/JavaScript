const defaultResult = 0;
let currentResult;
currentResult = defaultResult;
/* let result; defining globally */
function add() {
  currentResult = currentResult + userInput.value;
  outputResult(currentResult, "");
  /* alert("The result is: \n" + result); */
}

addBtn.addEventListener("click", add);
/* when button click have a look at the add function and execute it for me */

/* currentResult = (currentResult + 10) * 3; */
/* currentResult = add(1, 2); */
/* let calculationDescription = "(0 +10)*3"; */
/* let calculationDescription = "(" + defaultResult + "+10)*3"; */
/* let calculationDescription = `(  ${defaultResult}  +10)*3`;

let errorMessage = "An error" + "occurred!"; */
