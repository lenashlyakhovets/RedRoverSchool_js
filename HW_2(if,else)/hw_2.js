"use strict"; 

/* ================= 1.1 Напишите программу по согласованию отпуска в зависимости от месяца. ================= 
Если месяц “July” или “August”, то программа должна показать - ‘approved’, если другие месяцы, то - “denied”. */

let myMonth = 'july';
let month = myMonth.toLowerCase();

if (month == 'july' || month == 'august') {
    console.log('approved');
} else {
    console.log('denied');
}



/* ================= 1.2 Напишите простенький калькулятор (*, /, +, -). ================= 
Проверьте ваш код на охват исключений для арифметических операций.
У вас должны быть две переменные для исходных чисел и одна для оператора. В зависимости от оператора, должно происходить то или иное арифметическое действие и выводиться результат в консоль. */

let num1 = 1;
let operator = "/";
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



/* ================= 1.3 Решите задачу с помощью пройденных тем: ================= 
«Улитка ползёт вверх по стене высотой 5 метров. Каждый день она проползает вверх на 3 метра, а каждую ночь съезжает вниз на 2 метра. За сколько дней она доползёт до вершины стены.» */

let dayDistance = 3;
let nightDown = -2;
let distance = 0;
let days = 0;
let wall = 5;

//1
if ((distance += dayDistance) <= wall) {
  days++;
  console.log(` - Current distance at the end of the day for day ${days} is ${distance} meter(s)`);
  if (distance == wall) {
    console.log('Ok');
  } else {
    console.log('Go forward!');
  }
  distance += nightDown;
} 

//2
if ((distance += dayDistance) <= wall) {
  days++;
  console.log(` - Current distance at the end of the day for day ${days} is ${distance} meter(s)`);
  if (distance == wall) {
    console.log('Ok');
  }
  distance += nightDown; 
}

//3
if ((distance += dayDistance) <= wall) {
  days++;
  console.log(` - Current distance at the end of the day for day ${days} is ${distance} meter(s)`);
  if (distance == wall) {
    console.log('Ok');
  }
  distance += nightDown;
}

//4
if ((distance += dayDistance) <= wall) {
  days++;
  console.log(` - Current distance at the end of the day for day ${days} is ${distance} meter(s)`);
  distance += nightDown;
} 


/* let height = 5;
let up = 3;
let down = 2;

let step1 = `Высота подъема улитки за сутки: ${up - down} м.`;
let step2 = `Количество метров, которые проползет улитка за все целые последние сутки (без последнего дня): ${height - up} м.`;
let step3 = `За ${(height - up) * 1 / (up - down)} суток улитка поднимется на ${height - up} м.`;
let step4 = `Улитка достигнет верха стены (с учетом последнего дня) за ${(height - up) * 1 / (up - down) + 1} дней.`;

console.log(step1 +  step2 +  step3 +  step4); */
