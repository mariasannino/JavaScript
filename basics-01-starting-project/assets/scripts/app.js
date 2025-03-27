const defaultResult = 0;
let currentResult;
currentResult = defaultResult;

currentResult = (currentResult + 10) * 3;

/* let calculationDescription = "(0 +10)*3"; */
/* let calculationDescription = "(" + defaultResult + "+10)*3"; */
let calculationDescription = `(  ${defaultResult}  +10)*3`;

let errorMessage = "An error" + "occurred!";
outputResult(currentResult, calculationDescriptionS);
