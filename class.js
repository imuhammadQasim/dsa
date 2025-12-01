class Person {
  constructor(name, gender, birthYear) {
    this.name = name;
    this.gender = gender;
    this.birthYear = birthYear;
  }
  getAge() {
    let age = new Date().getFullYear() - this.birthYear;
    console.log(`${this.name} is ${age} years old`);
  }

  get getName() {
    return this.name;
  }
  set setName(newName) {
    this.name = newName;
  }
}

Person.prototype.getGender = function () {
  console.log(`${this.name} is ${this.gender}`);
};

let p1 = new Person("Muhammad", "male", 2003);
console.log((p1.setName = "Ahmad"));
console.log(p1.getName);
