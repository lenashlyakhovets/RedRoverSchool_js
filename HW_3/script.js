"use strict";

/* 1. Напишите программу калькулятора со switch, обработайте возможные ошибки ввода  */

let num1 = 1;
let num2 = 0;
let operator = "/";
let result;

switch (operator) {
    case "*":
        result = num1 * num2;
        console.log(result);
        break;
    case "+":
        result = +(num1 + num2);
        console.log(result);
        break;
    case "-":
        result = num1 - num2;
        console.log(result);
        break;
    case "/":        
        result = num1 / num2;
        num2 == 0 ? console.log('Not valid num2') : console.log(result);
        break;
    default:
        console.log('Please enter a valid operator');
}

/* 2. Попробуйте внедрить в свою программу с кофе вложенный if */



/* 3. При помощи цикла for выведите чётные числа от 2 до 10 */

for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

/* 4. Задача с интервью. У вас есть массив со скобками, предположим 
[ ‘(‘, ‘)’, ‘(‘, ‘)’, ‘)’] . Количество элементов и последовательность может быть разной.
Нужно выяснить, у каждой ли скобки есть соответствующая пара (открывающая и закрывающая). */

let arr = ['(', ')', '(', ')', ')'];
let count1 = 0;
let count2 = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '(') {
        count1 += 1;
    } else if (arr[i] === ')') {
        count2 += 1;
    }
}

if (count1 % 2 == 0) {
    console.log(count1 + ' - количество левых скобок. Все по парам');
} else {
    console.log(count1 + ' - количество левых скобок. Без пары');
}

if (count2 % 2 == 0) {
    console.log(count2 + ' - количество правых скобок. Все по парам');
} else {
    console.log(count2 + ' - количество правых скобок. Без пары');
}

/* Креативное задание*:
1. Имеется зашифрованное предложение 
“Ybrobrubr brabrrbrebr brtbrhbrebr brbbrebrsbrtbr brQbrAbr brebrvbrebrrbr”
мы знаем, что оно означает “You are the best QA ever”.
Нам нужно придумать программу дешифратор. */

let text = 'Ybrobrubr brabrrbrebr brtbrhbrebr brbbrebrsbrtbr brQbrAbr brebrvbrebrrbr';
let word = text.split('');
for (let i = 0; i < word.length; i++) {
    if (word[i] === 'b' && word[i] === 'r') {
        
    }
    
}


/* 2. Задачка посложнее*. Придумайте свой собственный шифр, а также программу, которая будет шифровать и затем дешифровщик к нему */


/* Нарисовать елочку и ромб  с помощью циклов*/

const lines = 4;
let result = '';

for (let i = 0; i <= lines; i++) {
    for (let k = 0; k < lines - i; k++) {
        result += " ";
    }
    for (let k = 0; k < 2 * i + 1; k++) {
        result += "*";
    }
    result += "\n";
}
console.log(result);
