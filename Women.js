import { Human } from "./Human.js";

class Woman extends Human {
  constructor(name, age) {
    super(name, age);
    this.gender = "female";
  }
}

const woman = new Woman("Hanako", 20);
