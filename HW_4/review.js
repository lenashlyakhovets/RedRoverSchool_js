"use strict";

//Svetlana Gusachenko:

//================= 1. Задача =================

let arr = ['a', 'Anna', 'Johno', 'Peter', 'Robert', 'b', ['o', 'dom', 'hello', 'piece', 40, 8]];
let result = [];

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        if (arr[i][j] === 'o') {
            result.push(arr[i]);
        }
    }
}
console.log(result);



//================= 2. Задача =================

let arr = ['a', 'Anna', 'Johno', 'Peter', 'Robert', 'b', 12, ['o', 'dom', 'hello', 'piece', 40, 8]];
let result = [];

for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
        result.push(arr[i]);
    } else {
        for (let j = 0; j < arr[i].length; j++) {
            if (typeof arr[i][j] === 'number') {
                result.push(arr[i][j]);
            }
        }
    }
}
console.log(result);



//================= 3. Задача =================

let arr = ['a', 'Anna', 'Johno', 'Peter', 'Robert', 'b', 12, ['o', 'dom', 'hello', 'piece', 40, 8], 225, 12, 'ok'];
let result = [];

for (let i = arr.length-1; i >= 0; i--) {
    if (typeof arr[i] === 'number') {
        result.push(arr[i]);
    } else {
        for (let j = 0; j < arr[i].length; j++) {
            if (typeof arr[i][j] === 'number') {
                result.push(arr[i][j]);
            }
        }
    }
}
console.log(result);



//Stan P.:

//================= Сортировка массива =================

const arr = [45, 12, 4564, 456];
console.log(arr);
for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++ ) {
        if (arr[i] > arr[j]) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}
console.log(arr);