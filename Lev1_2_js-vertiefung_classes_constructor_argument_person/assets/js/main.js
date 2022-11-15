console.log("test");

class Person {
  constructor(firtName, age) {
    this.firtName = firtName;
    this.age = age;
    this.description = function () {
      console.log(`${firtName} is ${age} years old`);
    };
  }
}

let person1 = new Person("Emanuela", 18);
person1.description();
