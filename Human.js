export class Human {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log(`My name is ${this.name}`);
  }
}
