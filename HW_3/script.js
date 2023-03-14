"use strict";

/* ================= 1. Напишите программу калькулятора со switch, обработайте возможные ошибки ввода ================= */

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



/* ================= 2. Попробуйте внедрить в свою программу с кофе вложенный if ================= */



/* ================= 3. При помощи цикла for выведите чётные числа от 2 до 10 ================= */

for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}



/* ================= 4. Задача с интервью. ================= 
У вас есть массив со скобками, предположим 
[ ‘(‘, ‘)’, ‘(‘, ‘)’, ‘)’] . Количество элементов и последовательность может быть разной.
Нужно выяснить, у каждой ли скобки есть соответствующая пара (открывающая и закрывающая). ================= */

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

console.log('opening = ' + count1, ', closing = ' + count2);

if (count1 == count2) {
    console.log('equal');
} else {
    console.log('not equal');
}

/* if (count1 % 2 == 0) {
    console.log(count1 + ' - количество левых скобок. Все по парам');
} else {
    console.log(count1 + ' - количество левых скобок. Без пары');
}

if (count2 % 2 == 0) {
    console.log(count2 + ' - количество правых скобок. Все по парам');
} else {
    console.log(count2 + ' - количество правых скобок. Без пары');
} */



/* ================= Креативное задание* =================:
1. Имеется зашифрованное предложение 
“Ybrobrubr brabrrbrebr brtbrhbrebr brbbrebrsbrtbr brQbrAbr brebrvbrebrrbr”
мы знаем, что оно означает “You are the best QA ever”.
Нам нужно придумать программу дешифратор. */

//coder
let text = 'You are the best QA ever';
let encriptedText = '';
let count = 0;
for (let i = 0; i < text.length; i++) {
    if (count % 2 == 0) {
        encriptedText = encriptedText + text[i] +'br'
    }
    count += 2;        
}
console.log(encriptedText);

//decoder
let decoderResult = '';
for (let i = 0; i < encriptedText.length; i+=3) {
    decoderResult = decoderResult + encriptedText[i];
}
console.log(decoderResult);



/* ================= 2. Задачка посложнее* =================. 
Придумайте свой собственный шифр, а также программу, которая будет шифровать и затем дешифровщик к нему */

let message = 'Work smarter, not harder! Be on time';
let keyWord = 'Today will be a good day!';

let encriptedMessage = '';
for (let i = 0; i < message.length; i++) {
    for (let e = 0; e < keyWord.length; e++) {
        if (i == e) {
            encriptedMessage = encriptedMessage + message[i] + keyWord[e];
            keyWord += keyWord[e]
        }
    }
}
console.log('Keyword = ' + keyWord);
console.log('============');
console.log('Encrypted message = ' + encriptedMessage);
console.log('============');

let decriptedMessage = '';
for (let i = 0; i < encriptedMessage.length; i+=2) {
    decriptedMessage = decriptedMessage + encriptedMessage[i];
}
console.log('The message = ' + decriptedMessage);



/* ================= Нарисовать елочку и ромб  с помощью циклов ================= */

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
