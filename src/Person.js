class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `私の名前は${this.name}です。${this.age}歳です。`;
    }
}

export default Person
