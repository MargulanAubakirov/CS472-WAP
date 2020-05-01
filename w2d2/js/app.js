//basic objects

const person = {
    name: "",
    dateOfBirth: "",
    getName: function(){
        return this.name;
    },
    setName: function(newName) {
        this.name = newName;
    },
    toString: function(){
        return `{name; ${this.name}, dateOfBirth: ${this.dateOfBirth}}`;
    }
}
// inheritance using Object.create(...)
//Prototypal Inheritance

//Object literal

const john = Object.create(person);
john.setName("John");
john.dateOfBirth = new Date("1998-12-10");

console.log(`The Person's name is ${john.getName()}`);
console.log(`${john.name} was born on ${john.dateOfBirth}`);

//using Costruction function

// const Person = function(name, dateOfBirth){

// }

function Person(name, dateOfBirth){
    this.name = name;
    this.dateOfBirth = dateOfBirth

}
const ana = new Person("Ana", new Date("1985-11-10"));
Person.prototype.toString = function(){
    return `{name; ${this.name}, dateOfBirth: ${this.dateOfBirth}}`;
}
console.log(ana.toString());

//Array.prototype.*
const nums = [1,2,3];
console.log(typeof nums);
Array.prototype.sayHello = function(name){
    console.log(`Hello, ${name}`);
}
console.log(nums.sayHello("Ana"));

//prototype chain

class Person2{
    constructor(name, dateOfBirth){
        this.name = name;
        this.dateOfBirth = dateOfBirth;
    }
    toString(){
        return `{name; ${this.name}, dateOfBirth: ${this.dateOfBirth}}`;
    }
}
let peter = new Person2("Peter", new Date("2011-4-29"));
console.log(peter.toString())

class Emplpyee extends Person{
    constructor(name ,dateOfBirth, salary){
        super(name, dateOfBirth);
        this.salary=salary;
    }
    toString(){
        return `{name; ${this.name}, dateOfBirth: ${this.dateOfBirth}, salary,$(this.salary)}`;
    }
}

const emp1 = new Emplpyee("Jim", new Date("2002-10-4"), 20000);
console.log(emp1);

//Module

