"use strict";

//================= Задача № 1 =================
// У вас есть массив: [3, 7, 19, 8, 205].
// Найдите сумму чисел, которые находятся в массиве.

// Var.1 (через reduce) ====================

let num = [3, 7, 19, 8, 205];
const sum = num.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum);

// Var.2 (через циклы) ====================
let num = [3, 7, 19, 8, 205];
function sumOfNumbers(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log(sumOfNumbers(num));



//================= Задача № 2 =================
// У вас есть массив: [cat, dog, elephant, wolf, fox, hare].
// В output должен быть вывден массив, который содержит только strings с 4 или больше символов.

// Var.1 (через filter) ====================
const arr = ['cat', 'dog', 'elephant', 'wolf', 'fox', 'hare'];
const result = arr.filter((str) => str.length >= 4);
console.log(result);

// Var.2 (через циклы) ====================
let arr = ['cat', 'dog', 'elephant', 'wolf', 'fox', 'hare'];
function result(str) {
    let arrNew = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i].length >= 4) {
            arrNew.push(str[i]);
        }        
    }
    return arrNew;
}
console.log(result(arr));

// Var.3 ====================
let arr = ['cat', 'dog', 'elephant', 'wolf', 'fox', 'hare'];
function result(str) {    
    return str.length >= 4;
}
console.log(arr.filter(result));



//================= Задача № 3 =================
// У вас есть массив: [2, 3, 7, 9, 4].
// В output должен быть вывден массив [4, 6, 14, 18, 8].

const arr = [2, 3, 7, 9, 4];
function mult(n) {
    return n * 2;
}
console.log(arr.map(mult));



//================= Задача № 4 =================
// У вас есть массив: [80, 90, 57, 490, 16].
// В output должен быть вывден массив [16, 490, 57, 90, 80].

const arr = [80, 90, 57, 490, 16];

console.log(arr.reverse());


//================= Задача № 5 =================
// Используя внешний и вложенный циклы for, выведите в output:
// 1
// 1
// 1
// 2
// 2
// 2
// 3
// 3
// 3

for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(i);
    } 
}

//================= Задача * =================
// Изучите функцию printArray(), которая используется при работе с массивами. Используя эту функцию, вывеите в output все элементы массива: [[2,8], [87,4], [35,11]].

let arr = [[2,8], [87,4], [35,11]];
