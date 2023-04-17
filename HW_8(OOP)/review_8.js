"use strict";

//Stan P.:

let str1 = new String('hello');
let str2 = 'hello';
console.log(str1);
console.log(str2);
document.write('hello1');
// document.write('hello2');

///////////////////////////////////

let obj = {};
obj.name = 'Anna';
obj.introduce = function() {
    console.log(`Hello, I'm ${this.name}`);
}
console.log(obj);
obj.introduce();

////////////////////////////////////

let obj1 = {
    name: 'Anna',
    introduce: function() {
        console.log(`Hello, I'm ${this.name}`);
    },            
};
console.log(obj1);
obj1.introduce();

//Прототипное наследование    __proto__

let obj1 = {
    name: 'Serj',
    age: 32,
    show() {     //show: function()
        return (`Name: ${this.name}, age: ${this.age}`);
    },            
};
//console.log(obj1);

//////////////////////////////

let obj2 = {
    __proto__: obj1,
    occupation: 'Teacher',            
};
console.log(obj2);
console.log(obj2.name);

//Фукция-шаблон

function Person(name, occupation) {
    this.name = name;
    this.occupation = occupation;
    this.introduce = function() {
        console.log(`Hello, I'm ${this.name}`);
        console.log(`I'm a ${this.occupation}`);
    }
}

let person1 = new Person('Anna', 24);
let person2 = new Person('Serj', 32);
let person3 = { name: 'Serj', occupation: 32 }
console.log(person1);
console.log(person2);
//console.log(person3);
console.log(typeof person1);
console.log(person1 instanceof Person);
console.log(person3 instanceof Person);

