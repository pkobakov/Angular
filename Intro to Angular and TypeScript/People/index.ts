abstract class Employee {
    public name: string;
    public age: number;
    public salary: number;
    public tasks: Array<string>;

    constructor(name: string, age: number) {

        this.name = name;
        this.age = age;
        this.salary = 0;
        this.tasks = [];

    }

    public work(): void {

        const currentTask = this.tasks.shift();
        this.tasks.push(currentTask);
        console.log(name+currentTask);

    }

    public collectSalary(): void {
        console.log(`${this.name} received ${this.getSalary()} this month.`);

    }

    public getSalary(): number {
        return this.salary;
    }
}

export class Junior extends Employee {
    constructor(name: string, age: number) {
        super(name, age);
        this.tasks.push(" is working on a simple tasks");
    }
}

export class Senior extends Employee {
    constructor(name: string, age: number) {
        super(name, age);
        this.tasks.push(' is working on a complicated task.');
        this.tasks.push(' is taking time off work.');
        this.tasks.push(' is supervising junior workers.');

    }
}

export class Manager extends Employee {
    public divident: number;

    constructor(name: string, age: number) {
        super(name, age);
        this.divident = 0;
        this.tasks.push(' sheduled a meeting.');
        this.tasks.push(' is preparing a quarterly meeting');
    }

    public getSalary(): number {
        return this.salary + this.divident;
    }
}

const junior = new Junior ('Dimitrichko', 43);
junior.salary = 1500;
junior.collectSalary();
junior.work();



const senior = new Senior ('Gosho', 33);
senior.salary = 3500;
senior.collectSalary();
senior.work();
senior.work();
senior.work();



const manager = new Manager ('Pesho', 50);
manager.salary = 5000;
manager.divident = 1500;
manager.collectSalary();
manager.work();
manager.work();




