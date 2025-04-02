class Course {
  #price;
  get price() {
    return `\$${this.#price}`;
  }

  set price(value) {
    if (value < 0) {
      throw "THE PRICE IS NOT A POSITIVE VALUE";
    } else {
      this.#price = value;
    }
  }

  constructor(title, length, price) {
    this.title = title;
    this.length = length;
    this.price = price;
  }

  lengthPrice() {
    let amount = this.length / this.#price;
    return amount;
  }

  summary() {
    let summary = `the title of the course is ${this.title}, the total hours is equal to ${this.length} and the total price is equal to ${this.price} euros. Do you want to subscribe`;
    return summary;
  }
}

const course1 = new Course("Algebra", 165, 19.99);
console.log(course1);
console.log(course1.lengthPrice());
console.log(course1.summary());

const course2 = new Course("Maths", 140, 19.99);
console.log(course2);
console.log(course2.lengthPrice());
console.log(course2.summary());

class PracticalCourse extends Course {
  constructor(title, length, price, numOfExercises) {
    super(title, length, price);
    this.numOfExercises = numOfExercises;
  }
}

class TheoreticalCourse extends Course {
  constructor(title, length, price) {
    super(title, length, price);
  }
  publish() {
    console.log(`The course ${this.title} has been published.`);
  }
}

const practicalCourse = new PracticalCourse("Fisics", 140, 20, 10);
console.log(practicalCourse);
console.log(practicalCourse.summary());
console.log(`Number of exercises: ${practicalCourse.numOfExercises}`);
console.log(`Length per price: ${practicalCourse.lengthPrice()}`);

const theoreticalCourse = new TheoreticalCourse("Bio", 100, 15.99);
console.log(theoreticalCourse);
console.log(theoreticalCourse.summary());
console.log(`Length per price: ${theoreticalCourse.lengthPrice()}`);
theoreticalCourse.publish();
