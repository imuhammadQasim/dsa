let Person = function (name, gender, brithday) {
  this.name = name;
  this.gender = gender;
  this.brithday = brithday;
};

Person.prototype.getAge = function () {
  let age = new Date().getFullYear() - this.brithday;
  console.log(`${this.name} is ${age} years old`);
};

let p = new Person("John", "male", 1990);
Person.describe = function () {
  console.log("This is a Person class to create person objects");
};

Person.describe();
