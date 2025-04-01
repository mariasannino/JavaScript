const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const filteredArray = numbers.filter((num) => num > 5);
console.log(filteredArray);

const map = numbers.map((val) => ({ num: val }));
console.log(map);

let mult = 1;
for (let i = 0; i < numbers.length; i++) {
  mult *= numbers[i];
}
console.log(mult);

const multiplication = numbers.reduce(
  (curResult, curValue) => curResult * curValue,
  1
);
console.log(multiplication);

const findMax = () => {
  console.log(Math.max(...numbers));
};

findMax();

function findMax2(...nums) {
  let curMax = nums[0];
  for (const num of nums) {
    if (num > curMax) {
      curMax = num;
    }
  }
  return curMax;
}
console.log(findMax2(...numbers));

const findMinMax = () => {
  console.log([Math.min(...numbers), Math.max(...numbers)]);
};
findMinMax();

function findMinMax2(...nums) {
  let curMax = nums[0];
  let curMin = nums[0];
  for (const num of nums) {
    if (num > curMax) {
      curMax = num;
    }
    if (num < curMin) {
      curMin = num;
    }
  }
  return [curMin, curMax];
}
console.log(findMinMax2(...numbers));

const [min, max] = findMinMax2(...numbers);
console.log(min, max);

const userIds = new Set();
userIds.add(10);
userIds.add(-5);
userIds.add(-5);
console.log(userIds);
