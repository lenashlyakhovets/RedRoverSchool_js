"use strict"; 

/* 1. Напишите программу калькулятора со switch, обработайте возможные ошибки ввода  */

let num1 = 1;
let operator = "/";
let num2 = 2;
let result;

switch (operator ) {
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
    case "/" :
        result = num1 / num2;
        console.log(result);
        break;
    default:
        console.log(Infinity)
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
console.log(arr.length);
if (arr[i] == '(' && arr[i] == ')') {
    console.log('true');
} else {
    console.log('false');
}


/* Креативное задание*:
1. Имеется зашифрованное предложение 
“Ybrobrubr brabrrbrebr brtbrhbrebr brbbrebrsbrtbr brQbrAbr brebrvbrebrrbr”
мы знаем, что оно означает “You are the best QA ever”.
Нам нужно придумать программу дешифратор. */



/* 2. Задачка посложнее*. Придумайте свой собственный шифр, а также программу, которая будет шифровать и затем дешифровщик к нему */

