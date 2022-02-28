let isOpen: boolean;


isOpen = true;
console.log(isOpen);

class Person {

    constructor(public name: string, public age: number) {
        this.name = name;
        this.age = age;
    }
}

let ivan: Person;
ivan = new Person('Ivan', 30);
console.log(ivan.name);
