const age = [30, 29, 54];

age.push(60);

age.unshift(10);

const myAge = age[1];

//----------------------------

const namePopularity = [
  { userName: "mari", usages: 7 },
  { userName: "martu", usage: 5 },
];

const mariUsages = namePopularity.find(
  (pers) => pers.userName === "mari"
).usage;

const nameMap = {
  mari: 7,
  martu: 5,
};

const mariUsages2 = nameMap["mari"];
