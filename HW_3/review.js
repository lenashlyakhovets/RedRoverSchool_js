"use strict";

//Svetlana Gusachenko:

// ================= Нахождение чисел и их сумма =================

let arr = ['what', 6, true, 'your', 15, ['hi', 33, '='], 'name'];
//let count = 0;
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] == 'number') {
        //count += 1;
        sum += arr[i];

        //console.log(count);
        //console.log(sum);        
    }
    //console.log(count);
    //console.log(sum);    
}
//console.log(count);
console.log(sum);



// ================= Нахождение четных элементов массива =================

let arr1 = ['what', 6, true, 'your', 15, ['hi', 33, '='], 'name'];

for (let i = 0; i < arr1.length; i++) {
    if (i % 2 == 0) {
        console.log(arr1[i]);
    }
}



// ================= Соединение слов из массива в строку =================

let arr2 = ['what', 6, true, 'your', 15, ['hi', 33, '='], 'name'];
let element = '';

for (let i = 0; i < arr2.length; i++) {
    if (typeof arr2[i] == 'string') {
        element += arr2[i] + ' ';
        //console.log(element);                     
    }
    //console.log(element);           
}
console.log(element);
console.log(typeof element);



// ================= Если элемент это строка то вывести длину строки =================

let arr3 = ['what', 6, true, 'your', 15, ['hi', 33, '='], 'name'];

for (let i = 0; i < arr3.length; i++) {
    if (typeof arr3[i] == 'string') {
        console.log(arr3[i].length);
    }
}



// ================= Выводим в обратном порядке =================

let arr4 = ['what', 6, true, 'your', 15, ['hi', 33, '='], 'name'];
console.log(arr4.length + ' - длина массива');
for (let i = arr4.length - 1; i >= 0; i--) {
    console.log(arr4[i]);
}

for (let i = arr4.length - 1; i >= 0; i--) {
    if (typeof arr4[i] == 'string') {
        console.log(arr4[i]);
    }
}



//Tatiana Volk:

/* ================= У нас есть 4 сезона: 
Зима (12,1,2), Весна (3,4,5), Лето (6,7,8), Осень (9,10,11). Используя switch узнать, к какому сезону относится введенный месяц */

let month = 4;
let result;

switch (month) {
    case 1:
    case 2:
    case 12:
        result = 'Зима';
        console.log(result);
        break;
    case 3:
    case 4:
    case 5:
        result = 'Весна';
        console.log(result);
        break;
    case 6:
    case 7:
    case 8:
        result = 'Лето';
        console.log(result);
        break;
    case 9:
    case 10:
    case 11:
        result = 'Осень';
        console.log(result);
        break;
    default:
        console.log('Такого месяца не существует');
}



/* ================= Write a function that will check if two given characters are the same case. ================= 

If either of the characters is not a letter, return -1
If both characters are the same case, return 1
If both characters are letters, but not the same case, return 0
Examples
'a' and 'g' returns 1
'A' and 'C' returns 1
'b' and 'G' returns 0
'B' and 'g' returns 0
'0' and '?' returns -1 */

function sameCase(a, b) {
    if (a.toUpperCase() === a.toLowerCase() || b.toLowerCase() === b.toUpperCase()) {
        return -1;
    } else if (a === a.toLowerCase() && b === b.toLowerCase() || a === a.toUpperCase() && b === b.toUpperCase()) {
        return 1;
    } else {
        return 0;
    }
}