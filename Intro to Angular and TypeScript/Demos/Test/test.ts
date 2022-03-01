let isOpen: boolean;


isOpen = true;
console.log(isOpen);



enum UserRole {
  Admin,
  Client
}

interface IUserNewData {
    newName: string;
    newAge: number;
}

class Person {
    constructor(
        public name: string,
        public age: number,
        public role: UserRole) 
        { }

    setData(newData: IUserNewData) {
        this.age = newData.newAge;
        this.name = newData.newName;
    }  

    getAge() {
        this.age;
    }
}

const ivan: Person = new Person('Ivan', 30, UserRole.Admin);
const newData: IUserNewData ={ newAge: 30, newName: 'Pesho'};

ivan.setData(newData);
