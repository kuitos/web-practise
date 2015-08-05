class Person {

  constructor(name) {
    this.name = name;
  }

  static getName() {
    return this.name;
  }

}

class Child extends Person {

  constructor(name, age) {
    super(name);
    this.age = age;
  }

  getAge() {
    return this.age;
  }

}

var child = new Child('kuitos', 20);
console.log(child, child.getAge());

export default Person;
