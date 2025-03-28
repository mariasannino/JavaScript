const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)

if (randomNumber >= 0.7) {
  alert("the number is bigger!");
} else {
  alert("the num is smaller");
}

numbers = [0, 1, 2, 3, 4];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

for (const num of numbers) {
  console.log(num);
}

let j = 0;
while (j < numbers.lenght) {
  console.log(numbers[j]);
  j++;
}

for (let i = numbers.length - 1; i >= 0; i--) {
  console.log(numbers[i]);
}

const randNumber2 = Math.random();
if (
  (randomNumber > 0.7 && randNumber2 > 0.7) ||
  randNumber2 <= 0.2 ||
  randomNumber <= 0.2
) {
  alert("a lot of conditions!");
}
