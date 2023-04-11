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
  


//Stan P.:

//== every() 

const arr = [2, 6, 3, 28, 9];
console.log(arr.every(el => el > 3));
console.log(arr.every(el => el > 0));

console.log(Array.of(2, 6, 3, 28, 9).map((el, i, arr) => arr.reduce((sum, el) => sum + el, 0) - el));

console.log(Array.of(2, 6, 3, 28, 9).map((el, _, arr) => arr.reduce((sum, el) => sum + el, 0) - el));   // если i не используется, то можно писать _

//== some() 

const arr = [2, 6, 3, 28, 9];
console.log(arr.some(el => el > 3));

//== forEach() // этот метод ничего не возвращает пока не вызовем

const arr = [2, 6, 3, 28, 9];
const newArr = [];

arr.forEach(el => el > 3 ? newArr.push(el) : '');
console.log(newArr);

//== sort()   этот метод меняетмгновенно изменения, к нему вернуться не сможем, лучше делать копию 

const arr = [2, 6, 3, 28, 9, 56, 103, 1, 1001, 3940];
arr.sort(); //сортирует элементы по алфавиту
console.log(arr);

const arr = [2, 6, 3, 28, 9, 56, 103, 1, 1001, 3940];
arr.sort((num1, num2) => num1 - num2);      // num1 - num2  диапазон
console.log(arr);

const arrNew = [
    [1, 2],
    [2, 2],
    [1, 2],
    [3, 4],
    [1, 0],
];

arrNew.sort(([a, b], [c, d]) => a - c).sort(([a, b], [c, d]) => b - d);
console.log(arrNew);

//== map()

const arr = [2, 6, 3, 28, 9, 56, 103, 1, 1001, 3940];
//let arrNew = arr.map(el => el ** 2); 
//let arrNew = arr.map(el => el % 3 == 0 ? el / 3 : el);
let arrNew = arr.map((el, i) => i % 3 ==0 ? el % 3 == 0 ? el / 3 : el : el);
console.log(arrNew);


const callback = (el, i) => {
    if (i % 3 == 0 && el % 3 == 0) {
        return el / 3;        
    } return el;    
};
let arrNew2 = arr.map(callback);
console.log(arrNew2);

//== reduce()

const arr = [2, 6, 3, 5, 9];
const result = arr.reduce((acc, el, i, arr) => acc + el, 0);
// acc = 0
// el = 2, acc = 0 + 2 = 2
// el = 6, acc = 2 + 6 = 8
// el = 3, acc = 8 + 3 = 11
console.log(result);

//== Array.from()

const arr = Array.from('JavaScript');
console.log(arr);

//== Array.of(),   Array.isArray()

const arr = Array.of(1, 'str', NaN, true, undefined);
let num = [];
console.log(Array.isArray(num));

//== padStart(length, otherStr)

const str = 'JavaScript';
const str3 = str.padStart(12, '_');
console.log(str3);

//== indexOf() 

const str = 'potato';

const arr = [];
let count = 0;
let pos = str.indexOf('o');

while (pos !== -1) {
    arr.push(pos);
    count++;
    pos = str.indexOf('o', pos + 1);
}
console.log(arr, count);

//== startsWith() 
const str = 'Potato white';
console.log(str.startsWith('white', 7));

//== endsWith() 

const str = 'Potato white';
console.log(str.endsWith('white'));

//== substring() 

const str = 'Potato white';
console.log(str.substring(0, 5));

//== replace()   
const str = 'Potato white';
console.log(str.replace('o', 'O'));
console.log(str.replace(/o/ig, 'O'));      // все буквы 'o' заменяться
console.log(str.replace(/[a-z]/g, ''));    // уберет все буквы кроме P

const str = '(123) 123-4567';
console.log(str.replace(/[0-9]/g, '*')); 

//== charCodeAt()                 // значение букв по таблице символов ASCI

const str = 'Potato white';
console.log(str.charCodeAt(0)); // значение буквы P по таблице символов ASCII

const arr = [];
for (let i = 0; i < str.length; i++) {
    arr.push(str.charCodeAt(i));
}
console.log(arr);

//== String.fromCharCode() 

let strRes = '';
for (let i = 0; i < str.length; i++) {
    strRes += String.fromCharCode(arr[i]);
}

console.log(strRes);



//================= Object =================

let obj = {};
let str = 'JavaScript';

for (let letter of str) {        // через of перебираем элементы, через in перебор по индексам
    obj[letter] = letter;
}
console.log(obj);

////////

for (let i = 0; i <= 10; i++) {
    console.log({i: i});
    //console.log({i});       // тоже самое
}



//================= Object методы =================

// Object.keys() / Object.values() / Object.entries() 

let obj = {
    name: 'Stan',
    teacher: 'Yes',
    language: 'JavaScript',
}
console.log(Object.keys(obj));          // ключи
console.log(Object.values(obj));        // значения
console.log(Object.entries(obj));       // массив, который содержит свойства

///////////////

let arr = [{ 4: 'cat' }, { 7: 'She' }, { '-2': 'Serj' }, { 5: 'for' }];
console.log(arr.sort((a, b) => Object.keys(a) - Object.keys(b)));
console.log(arr.sort((a, b) => Object.keys(a) - Object.keys(b)).map(obj => Object.values(obj).join('')));  //вернет value

/////////////// элементы

let str = 'The charCodeAt() method returns an integer between 0 abd 65535';
for (letter of str) {
    console.log(letter);
}

/////////////// индексы !!! Для перебора элементов в массиве in лучше не использовать, т.к рабоает медленно (он лучше для объектов)

let str = 'The charCodeAt() method returns an integer between 0 abd 65535';
for (letter in str) {
    console.log(letter);
    //console.log(str[letter]);    // покажет элементы
}

///////////////

let str = 'The charCodeAt() method returns an integer between 0 abd 65535';
let newStr = str.toLowerCase();
const obj = {};

for (letter of newStr) {
    if (letter in obj) {
        obj[letter]++;
    } else {
        obj[letter] = 1;
    }
}

console.log(obj);

console.log((Object.entries(obj).sort((a, b) => b[1] - a[1]).map(el => `${el[0]} - ${el[1]}`)));

Object.entries(obj).sort((a, b) => b[1] - a[1]).map(el => `${el[0]} - ${el[1]}`).forEach(el => console.log(el));

////////////////

const user = {
    firstName: 'Stan',
    lastName: 'P',
}
Object.defineProperty(user, 'SSN', {
    value: 'XXX-XX-XXXX', 
    enumerable: true, 
    configurable: true,
    writable: true,
});   
// enumerable: true отвечает за видимость
// configurable: true отвечает за возможность удаления информации
// writable: true // отвечает за возможность перезаписи
user.firstName = 'Jane';
delete user.SSN;

console.log(user);
console.log(Object.keys(user));