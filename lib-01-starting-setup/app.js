//generate a rand num
function random() {}

Math.random();

//compare and find the difference
const customers = ["Mari", "Martu", "Ale"];
const activeCustomers = ["Mari", "Anna"];
let inactiveCustomers = _.difference([2, 1], [2, 3]);
inactiveCustomers = _.difference(customers, activeCustomers);
console.log(inactiveCustomers);
