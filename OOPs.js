let Person = function (name, gender, brithday) {
  this.name = name;
  this.gender = gender;
  this.brithday = brithday;
};

Person.prototype.getAge = function () {
  let age = new Date().getFullYear() - this.brithday;
  console.log(`${this.name} is ${age} years old`);
};

let john = new Person("John", "male", 1990);
let merry = new Person("Merry", "Female", 1999);
let steve = new Person("steve", "male", 1980);
console.log(john);
merry.getAge();
steve.getAge();
john.getAge();

let arr = [1, 2, 3, 4, 5];
arr.push(6);
console.log(arr);
