"use strict";

//Svetlana Gusachenko:

//================= 1. Задача =================

// Variant 1
let str = 'Hello world, how are you?';
for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
}

// Variant 2
let str = 'Hello world, how are you?';
for (let i in str ) {
    console.log(str[i]);
}

// Variant 3
let arr = ['Sam', 56, true, false, 2, 'Hello'];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// Variant 4
let arr = ['Sam', 56, true, false, 2, 'Hello'];
for (let i in arr ) {
    console.log(arr[i]);
}

// Variant 5
let person = {
    name: 'Anna',
    lastName: 'Smith',
    age: 20,
};

for (let key in person) {          //можно key, а можно другие переменные!!!
    //console.log(key);            //выводит ключи
    console.log(person[key]);      //выводит значение
    //console.log(person);         //выводит объект столько раз сколько ключей 
}

// Variant 6
let str = 'Hello world, how are you?';  // {1: 'H', 2: 'e', ...}
let newObject = {};
for (let i = 0; i < str.length; i++) {
    //let key = [i + 1];
    //newObject[key] = str.split('')[i];    
    newObject[i + 1] = str[i];
}
console.log(newObject);

// Variant 7
let str = 'Hello world , how are you?';  // {1: 'H', 2: 'e', ...}
let newObject = {};
for (let i = 0; i < str.length; i++) {
    //let key = [i + 1];
    //newObject[key] = str.split('')[i];    
    newObject[i + 1] = str[i];
}
console.log(newObject);
console.log(Object.keys(newObject));      // вывод ключей!!!!!!!!!
console.log(Object.values(newObject));    // вывод значений!!!!!!!!!


//================= 2. Задача =================

function getCount(str) {
    let vowels = 'aeiou';  
    //return str.split('').filter(el => vowels.includes(el)).length
    //return str.split('').filter(el => vowels.includes(el))
    return str.split('').filter(el => 'aeiou'.includes(el)).length
}

console.log(getCount('abracadabra'));
  


//Tatiana Volk:

//================= 1. Задача =================







//Stan P.:

