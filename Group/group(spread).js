"use strict";

//================= Задача № 1. What is your name? =================

// У вас есть массив generalWords, в котором лежат три слова: ["my", "name", "is"]. Создайте массив aboutMe, используя spread (...). Ваш output должен выглядеть таким образом:
// ["my", "name", "is", "Lena", "Shlyakhovets"]

let generalWords = ["my", "name", "is"];
let aboutMe = [...generalWords, "Lena", "Shlyakhovets"];

console.log(aboutMe);



//================= Задача № 2 =================

// У вас есть строка с вашим именем (например, "Lena Shlyakhovets"). Создайте массив из букв, которые содержатся в вашем имени, используя spread (...). Ваш output должен выглядеть таким образом:
// ["L", "e", "n", "a", " ", "S", "h", "l", "y", "a", "k", "h", "o", "v", "e", "t", "s"]

let myName = "Lena Shlyakhovets";
//let letter = [...myName];

//console.log(letter);
console.log([...myName]);



//================= Задача № 3 =================
//Вычислите сумму первых четырёх чисел массива [1, 3, 5, 7, 10, 200, 90, 59], используя spread (...).

let arr = [1, 3, 5, 7, 10, 200, 90, 59];
let newArr = [...arr.slice(0, 4)];
let sum = newArr.reduce((acc, el) => acc + el, 0);

console.log(sum);