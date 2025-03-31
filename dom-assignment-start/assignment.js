const task1El1 = document.getElementById("task-1");
const task1El2 = document.querySelector("li");

task1El1.style.color = "white";
task1El1.style.backgroundColor = "black";

const docTitle = document.querySelector("title");
docTitle.textContent = "Assignment - Solved!";

const docHead = document.head;
const docTitle2 = document.head.querySelector("title");
docTitle2.textContent = "Assignment - Solved 2!";

/* const h1 = document.querySelector("h1"); 
h1.textContent = "Assignment-solved!";*/
const h1 = document.getElementsByTagName("h1");

h1[0].textContent = "Assignment - Solved!";
