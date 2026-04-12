class User {
  constructor(name, age, sal, profession) {
    this.name = name;
    this.age = age;
    this.salary = sal;
    this.profession = profession;
  }
}

User.prototype.greet = function greet() {
  return `New user creat with name ${this.name}`;
};

User.prototype.calcAnualSal = function calcAnualSal() {
  return this.salary * 12;
};

let a = new User("Muhammad", 20, 100, "Developer");
let b = new User("Nadi", 20, 100, "My House Wife");
let c = new User("My Baby", 20, 10, "Student");

console.log(a.calcAnualSal());
