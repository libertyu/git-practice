import { Human } from "./Human";

class Woman extends Human {
  constructor(name, age) {
    super(name, age);
    this.gender = "female";
  }
}

const woman = new Woman("Taro", 20);
