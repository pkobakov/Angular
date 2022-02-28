let isOpen: boolean;


isOpen = true;
console.log(isOpen);



enum UserRole {

}

interface IUserNewData {
    newName: string;
    newAge: number;
}

class Person {
    constructor(
        public name: string,
        public age: number) 
        { }

    setData(newData: IUserNewData) {
        this.age = newData.newAge;
        this.name = newData.newName;
    }  

    getAge() {
        this.age;
    }
}

const ivan: Person = new Person('Ivan', 30);
const newData: IUserNewData ={ newAge: 30, newName: 'Pesho'};

ivan.setData(newData);
