class AgePerson {
  printAge() {
    console.log(this.age);
  }
}

class Person /* extends AgePerson */ {
  name = "Maria ";

  constructor() {
    /* super(); */
    this.age = 22;
    //this.greet = function () {..};
  }
  /* greet = () => {
    console.log("Hi, I a " + this.name + "and I am " + this.age + " years old");
  }; */

  greet() {
    console.log("Hi, I a " + this.name + "and I am " + this.age + " years old");
  }
}

/* function Person() {
  this.age = 22;
  this, (name = "Maria");
  //this.greet = function (){...}
}

Person.prototype.this.greet = function () {
  console.log("Hi, I a " + this.name + "and I am " + this.age + " years old");
}; */

/* Person.describe = function () {
  console.log("Creating persons...");
}; */

/* Person.prototype.printAge = function () {};
console.log(this.age); */
/* 
Person.prototype = {
  printAge() {
    console.log(this.age);
  },
}; */
/* console.dir(Person);
const p = new Person();
p.greet();
p.printAge();
console.log(p);
console.log(p.toString());
const p2 = new p.__proto__.constructor();
console.dir(Object.prototype.__proto__); */

/* const p = new Person();
const p2 = new Person();
p.greet();
console.log(p);

const button = document.getElementById("btn");
button.addEventListener("click", p.greet.bind(p)); */

const course = {
  //new object()
  title: "JavaScript - The Complete Guide",
  rating: 5,
};

/* console.log(Object.getPrototypeOf(course)); */
Object.setPrototypeOf(course, {
  //...Object.getPrototypeOf(course),
  printRating: function () {
    console.log(`${this.rating}/5`);
  },
});

const student = Object.create(
  {
    printProgress: function () {
      console.log(this.progress);
    },
  },
  {
    name: {
      configurable: true,
      enumerable: true,
      value: "Maria",
      writable: true,
    },
  }
);

/* student.name = "Maria";*/

Object.defineProperty(student, "progress", {
  configurable: true,
  enumerable: true,
  value: 0.8,
  writable: false,
});

student.printProgress();

console.log(student);

course.printRating();
