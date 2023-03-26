"use strict";

//Svetlana Gusachenko:

//================= 1. Задача =================

let arr = ['Tom', 'green', 55, 'apple', 43, 88, 'pear', 'red', 1];
let arrNew = [];
for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] == 'number') {
        arrNew.push(arr[i]);
    }
}
console.log(arrNew);



//================= 2. Задача =================

let arr = ['Tom', 'green', 55, 'apple', 43, 88, 'pear', 'red', 1];
let fruits = ['apple', 'grape', 9, 7, 'pear'];

function createArrayOfNumbers(list) {
    let arrNew = [];
    for (let i = 0; i < list.length; i++) {
        if (typeof list[i] == 'number') {
            arrNew.push(list[i]);
        }
    }
    return arrNew;
}
console.log(createArrayOfNumbers(arr));
console.log(createArrayOfNumbers(fruits));



//================= 3. Задача =================

let arr = ['Tom', 'green', 55, 'apple', 43, 88, 'pear', 'red', 1];
let fruits = ['apple', 'grape', 9, 7, 'pear'];

function showMessage() {
    console.log('Hello');
}

function createArrayOfNumbers(list) {
    let arrNew = [];
    for (let i = 0; i < list.length; i++) {
        if (typeof list[i] == 'number') {
            if (list[i] == 88) {
                continue;
                //break;
            }
            arrNew.push(list[i]);
        }
    }
    showMessage();
    return arrNew;
}
console.log(createArrayOfNumbers(arr));
console.log(createArrayOfNumbers(fruits));



//================= 4. Задача =================

let arr = ['Tom', 'green', 55, 'apple', 43, 88, 'pear', 'red', 1];
let fruits = ['apple', 'grape', 9, 7, 'pear'];

let greeting = function showMessage() {
    console.log('Hello');
}

function createArrayOfNumbers(list) {
    let arrNew = [];
    for (let i = 0; i < list.length; i++) {
        if (typeof list[i] == 'number') {
            if (list[i] == 88) {
                continue;
                //break;
            }
            arrNew.push(list[i]);
        }
    }
    greeting();
    return arrNew;
}
console.log(createArrayOfNumbers(arr));
console.log(createArrayOfNumbers(fruits));



//================= 5. Задача =================

// Variant 1
function sumNumber(a, b = 1, c = 0) {       
    return a + b + c;    
}
console.log(sumNumber(2));

// Variant 2
let addNum = function sumNumber(a, b = 1, c = 0) {       
    return a + b + c;    
}
console.log(addNum(2));



//================= Стрелочные функции =================
//================= 6. Задача =================

let sumNum = (number1, number2, number3) => number1 + number2 + number3;
let result = sumNum(3, 10, 2);
console.log(sumNum(3, 10, 2));
console.log(result);



//================= 7. Задача =================

let arr = ['Tom', 'green', 55, 'apple', 43, 88, 'pear', 'red', 1];

function indexOfElement(array, num) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === num) {
            return i;
        } 
    }
    return -1;
}
console.log(indexOfElement(arr, 88));
console.log(arr.indexOf(88));

//Tatiana Volk:

//================= 1. Задача =================

// Variant 1
let bmi = (height, weight) => {
    return +(weight / height ** 2).toFixed(2);
}
console.log(bmi(1.7, 70));

// Variant 2
let bmi = (height, weight) => +(weight / height ** 2).toFixed(2);
console.log(bmi(1.7, 70));



//================= 2. Задача =================

let celsius = f => ((f - 32) * 5 / 9).toFixed(1);
console.log(celsius(100));



//Stan P.:

//================= 1. Задача =================


