export class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  static introduce() {
    console.log(`My name is ${this.name}`);
  }
}
