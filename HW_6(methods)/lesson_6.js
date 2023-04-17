"use strict";

//Nalya Shakirova:

// --- compare with strings

//can change

let string = "abcde";
console.log(string[2]);

let array =['a', 'b', 'c', 'd', 'e'];
console.log(array[2]);

string[2] = 'l';      // cann't change the element
console.log(string);


array[2] = 'M'     // can change
console.log(array);


// =========String methods :  split(); join(); ========

//=== split(); делит строку по указанному разделителю, возвращает массив
// split("");  => возвращает массив _всех_ символов

let string = "Hello World: QA JS !";
//console.log(string);

// console.log(string.split());  //вся строка в массив попадет
// console.log(string.split(""));//each char
// console.log(string.split(" "));//each word
console.log(string.split("o"));//each о

console.log(string.split("o", 2));//each о, ограничивает количество вывода символов
//  console.log(string)
let stringNew = string.split(":")// each :
console.log(stringNew);

let newArrayFromString = string.split("")
console.log(newArrayFromString);

////////
function createSteps(n) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(' '.repeat(i) + 'I');        
    }
    return arr;
}

console.log(createSteps(5).join('\n'));


// === join(); конвертирует массив в строку, по умолчанию
// разделяет символы запятой , but do not change it

let array = ['a', 'b', 'c', 1, 2, 3];
console.log(array);

console.log(array.join());
console.log(array);

let newStringFromArray = array.join("")
console.log(newStringFromArray)



// ========== Методы arrays: pop/push, shift/unshift ======

// push  ->  добавляет элемент(ы) в конец.
// pop   ->  удаляет последний элемент (и возвращает этот элемент!)

let letters = ['a', 'b', 'c', 'd', 'e'];
console.log(letters);
letters.push('f', 's');
letters.push( 1, 5)
letters.push(88)
let c = letters.push('g', 'k');  //return quantity of elements
console.log(letters);
console.log(c);



let a5 = letters.pop();                // returns deleted element 
let t = []
letters[1] = "B"
console.log(letters.join());
console.log(a5);

t.push(a5)
console.log(t)

a = letters.pop();                     // returns deleted element

console.log(letters);
console.log(a);

t.push(a)
console.log(t)



// unshift -> Добавляет элемент(ы) в начало массива
// shift   -> Удаляет элемент в начале, сдвигая очередь, так
// что второй элемент становится первым (и возвращает этот элемент!)

const bigLetters = ['A', 'B', 'C', 'D', 'E'];

bigLetters.unshift('Z');
let d = bigLetters.unshift([1,2, 3], 'Y','88', "KH");   //return quantity of elements
console.log(bigLetters);
console.log(d)                    //возвращается количество элементов, которые удаляются

bigLetters.shift();
let z = bigLetters.shift();
console.log(bigLetters);
console.log(z)                    //возвращается удаленный элемент


// ------- объединение массивов
// concatenation - не используется!
// use .concat() method or..

letters = ['a', 'b', 'c', 'd', 'e'];
const bigLetters = ['A', 'B', 'C', 'D', 'E'];
let v = letters + " " + bigLetters
console.log(letters + " " + bigLetters);   // строка!!!
console.log(typeof v)


//======= concat()
let girls = ["Cecilie", "Lone"];
let boys = ["Emil", "Tobias", "Linus"];
let freinds = ["Olya", 'Oleg']
const myChildren = girls.concat(boys, freinds);

console.log(girls)
console.log(myChildren)



//============ push() + spread operator ...

//arr1.push(...arr2);   // (...arr2) ==> ('a', 'b', 'c')
//console.log(arr1);

//через третий массив
let arr1 = [5, 6, 7]
let arr2 = ["A", "B"]
let arr = []
let w = 'K'

//console.log(...arr1)
const arr3 = [...arr1]//[...arr1, ...arr2];
const arr4 = [1, 2, 3, 'a', 'b', 'c']
console.log(arr)
console.log(arr.push(...arr2));
console.log(arr)


// ======== spread operator (...)

const numbers = [4, 8, 99, 9, 7, 777, 54];
console.log(numbers);
console.log(...numbers);

console.log(Math.max(4, 8, 99, 9));

console.log(Math.max(numbers));
console.log(Math.min(...numbers));
console.log(Math.max(...numbers))

let fruits = ["Banana", "Orange", "Apple", "Mango"]
console.log(fruits)
console.log(fruits.toString())
let f = fruits.toString()
console.log(typeof f)

console.log(f.split(','))


//===================String methods===========
// ===.length

let txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
console.log(txt.length)


// === .slice()
//Slice out a portion of a string from position 7 to position 13(13 not included)

let str = "Apple, .Banana, Kiwi";
//let part = str.slice();        // делает копию, если не указаны другие параметры 
//console.log(part)
let part = str.slice(7, 9);
console.log(part, "=", str)


// === .splice()

const arr = ['t', 'e', 's', 't'];
console.log(arr.splice(0, 1, 'T'));  // с 0 стартует и удаляет 1 элемент и заменяет на T (тут конкретно покажет удаляемый элемент)
arr.splice(0, 1, 'T');
console.log(arr);         // тут покажет новый массив


//=== replace()
//The replace() method replaces a specified value with another value in a string:

let message = "Please 5 visit 5 Microsoft!";
//console.log(message)
let newText = message.replace(/microsoft/i, "Apple");
console.log(newText);


// == charAt()
//Get the first character in a string:

let text = "HELLO WORLD";
let letter = text.charAt(0);
console.log(letter, text[0])


//== repeat()
//Create copies of a text:
let q = "Helo!"  //012
console.log(q.slice(1, 3).repeat(4))

//Create copies of a text:

let text = "Hello world!";
let result = text.repeat(2);
console.log(result)


// == trim()
//Remove spaces with trim():

let text = "   Hello World!   .";
let result = text.trim();
//console.log(text.toUpperCase())
console.log(text)
console.log(result)


console.log(String(7));                    // converts to string
let num = String(7)
let num2 = 5
console.log(num + num2)

let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.length)
delete fruits[1];
console.log(typeof fruits[1]);
console.log(fruits.length)


// == reverse()

let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.reverse())


//== indexOf()  

// var.1
let arr = "Hello World: QA JS !".split('');
console.log(arr.indexOf('l'));                  // идет слева направо и показывает индекс элемента ближайший слева

// var.2
const arr = "Hello World: QA JS !".split('');
let idx = arr.indexOf('l');
while (idx != -1) {
    console.log(idx);
    idx = arr.indexOf('l', idx + 1)
}


//== lastIndexOf()

// var.1
let arr1 = "Hello World: QA JS !".split('');
console.log(arr1.lastIndexOf('l'));             // идет слева направо и показывает индекс элемента ближайший справа

// var.2 Проверка уникальности буквы
const arr = "Hello World: QA JS !".split('');
if (arr.indexOf('H') === arr.lastIndexOf('H')) {
    console.log('Unique');    
}


//== find()       // нахождение первого элемента

const arr = [2, 6, 2, 29, 39, 45];
const isOdd = (element) => {
    return element % 2 === 1;
};
console.log(arr.find(isOdd));


//== findIndex()                    // нахождение первого индекса

const arr = [2, 6, 2, 29, 39, 45];
const isOdd = (element) => {
    return element % 2 === 1;
};
console.log(arr.findIndex(isOdd));


//== filter()                 // нахождение всех элементов

//var. 1
const arr = [2, 6, 2, 29, 39, 45];
const isOdd = (element) => {
    return element % 2 === 1;
};
console.log(arr.filter(isOdd));

//var.2
let arr = [2, 6, 2, 29, 39, 45];
let num = 2;

function abc(arr1, div) {
    arrNew = [];
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] % div === 1) {
            arrNew.push(arr1[i]);
        }
    }   
    return arrNew;
}
console.log(abc(arr, num));


//== map()    

const arr = [2, 6, 2, 29, 39, 45];
function squire(n) {
    return n * n;
}
console.log(arr.map(squire));
console.log(arr.map((n) => n * n));
console.log(arr.map(n => n * n));



