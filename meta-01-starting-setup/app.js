//library land
const uid = Symbol("uid");
/* console.log(uid); */

const user = {
  /* id: "p1" */ [uid]: "p1",
  name: "Maria",
  age: 22,
  [Symbol.toStringTag]: "User",
};

//app land => using the library
UserActivation.id = "p2"; //should not be possible

/* console.log(user);
console.log(user[Symbol("uid")]);
console.log(Symbol("uid") === Symbol("uid"));
console.log(user.toString()); */

const company = {
  /*  curEmployee: 0, */
  employees: ["Maria", "Sara", "Roger"],
  /* next() {
    if (this.curEmployee >= this.employees.length) {
      return {
        value: this.curEmployee,
        done: true,
      };
    }
    const returnValue = {
      value: this.employees[this.curEmployee],
      done: false,
    };
    this.curEmployee++;
    return returnValue;
  }, */
  [Symbol.iterator]: function* employeeGenerator() {
    /* let employee = company.next();

    while (!employee.done) {
      yield employee.value;
      employee = company.next();
    } */
    let currentEmployee = 0;
    while (currentEmployee < this.employees.length) {
      yield this.employees[currentEmployee]; //yield is like a return
      currentEmployee++;
    }
  },
};

/* let employee = company.next();
while (!employee.done) {
  console.log(employee.value);
  employee = company.next();
}
 */

for (const employee of company) {
  console.log(employee);
}

console.log([...company]);

/* const it = company.getEmployee();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next()); */

const persons = ["Maria", "Martu"];
console.log(persons);

/* REFLECT API */
const course = {
  title: "JavaScript - The Complete Guide",
};

Reflect.setPrototypeOf(course, {
  toString() {
    return this.title;
  },
});
/* Reflect.defineProperty(course, "price", {}); */
/* Reflect.deleteProperty(course, "title"); */
console.log(course.toString());

const courseHandler = {
  get(obj, propertyName) {
    console.log(propertyName);
    if (propertyName === "length") {
      return 0;
    }

    return obj[propertyName] || "NOT FOUND";
  },
  set(obj, propertyName, newValue) {
    console.log("Sending data...");
    if (propertyName === "rating") {
      return;
    }
    obj[propertyName] = newValue;
  },
};

const pCourse = new Proxy(course, courseHandler);
console.log(pCourse.title);
console.log(course, pCourse);
pCourse.rating = 5;
console.log(pCourse.title, pCourse.length, pCourse.rating);
