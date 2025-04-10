/* console.log("Hello world!");

const userName = "Maria";
console.log(`Hi ${userName}!`);
 */
const fs = require("fs");

fs.readFile("user-data.txt", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data.toString());
});

fs.writeFile("user-data.txt", "username=Maria", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Wrote to file!");
  }
});
