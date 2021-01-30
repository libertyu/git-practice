import { Human } from "./Human.js";

class Man extends Human {
  constructor(name, age) {
    super(name, age);
    this.gender = "male";
  }
}

const man = new Man("Taro", 20);
man.introduce();
