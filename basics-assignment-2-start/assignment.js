const task3Element = document.getElementById("task-3");

function someAlert() {
  alert("Hey! : )");
}

function nameAlert(name) {
  alert("Hey! " + name);
}

someAlert();
nameAlert("Maria");

task3Element.addEventListener("click", someAlert);

function strings(str1, str2, str3) {
  const result = `${str1} ${str2}  ${str3} `;
  return result;
}

const result = strings("Hello", "Maria", "!");
alert(result);
