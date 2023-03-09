"use strict"; 

// 1.1 Напишите программу по согласованию отпуска в зависимости от месяца. Если месяц “July” или “August”, то программа должна показать - ‘approved’, если другие месяцы, то - “denied”.

let myMonth = 'july';
let month = myMonth.toLowerCase();

if (month == 'july' || month == 'august') {
    console.log('approved');
} else {
    console.log('denied');
}

// 1.2 Напишите простенький калькулятор (*, /, +, -). Проверьте ваш код на охват исключений для арифметических операций.
// У вас должны быть две переменные для исходных чисел и одна для оператора. В зависимости от оператора, должно происходить то или иное арифметическое действие и выводиться результат в консоль.

let num1 = 1;
let operator = "+";
let num2 = 2;

if (operator == "*") {
    let result = num1 * num2;
    console.log(result);
} else if (operator == "+") {
    let result = +(num1 + num2);
    console.log(result);
} else if (operator == "-") {
    let result = num1 - num2;
    console.log(result);
} else if (operator == "/" && num2 != 0) {
      let result = num1 / num2;
      console.log(result);
} else {    
    console.log(Infinity);
}

// 1.3 Решите задачу с помощью пройденных тем:
// «Улитка ползёт вверх по стене высотой 5 метров. Каждый день она проползает вверх на 3 метра, а каждую ночь съезжает вниз на 2 метра. За сколько дней она доползёт до вершины стены.»

let height = 5;
let up = 3;
let down = 2;

let step1 = `Высота подъема улитки за сутки: ${up - down} м.`;
let step2 = `Количество метров, которые проползет улитка за все целые последние сутки (без последнего дня): ${height - up} м.`;
let step3 = `За ${(height - up) * 1 / (up - down)} суток улитка поднимется на ${height - up} м.`;
let step4 = `Улитка достигнет верха стены (с учетом последнего дня) за ${(height - up) * 1 / (up - down) + 1} дней.`;

console.log(step1 +  step2 +  step3 +  step4);


/* let kidsTicket, adultsTicket;
let seniors, isVeterans;
let age, price;
let totalPrice, guestNum;

kidsTicket = "Hello Kitty";
adultsTicket = "Ray";
age = +prompt("How old are you?");
isVeterans = prompt("Are you veteran? Please enter yes/no answer", 'no');
guestNum = +prompt("How many tickets do you need?");
price = 100;

if (age < 18) {
  totalPrice = guestNum * (price / 2);
  console.log(`Price for ${guestNum} tickets for ${kidsTicket} movie wil be ${totalPrice} USD`);
} else if (age >= 18 && isVeterans === 'no') {
  totalPrice = guestNum * price;
  console.log(`Price for ${guestNum} tickets for ${adultsTicket} movie wil be ${totalPrice} USD`);
} else if (age >= 18 && isVeterans === 'yes') {
  totalPrice = guestNum * (price * 0.8);
  console.log(`Price for ${guestNum} tickets for ${adultsTicket} movie wil be ${totalPrice} USD`);
} */

/* let age = 100;
let amountTicket = 1;
let price = 100;
let totalPrice;

if (age < 2) {
  totalPrice = amountTicket * (price * 0.1);
  console.log(`Price for you will be ${totalPrice} USD`);
} else if (age < 18) {
  totalPrice = amountTicket * (price*0.5);
  console.log(`Price for you will be ${totalPrice} USD`);
} else if (age < 65) {
  totalPrice = amountTicket * price;
  console.log(`Price for you will be ${totalPrice} USD`);
} else {
  totalPrice = amountTicket * (price * 0.6);
  console.log(`Price for you will be ${totalPrice} USD`);
} */
