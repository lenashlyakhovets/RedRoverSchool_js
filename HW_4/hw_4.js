"use strict";

//================= 1. Нарисуйте ромб =================

//          1
//         121
//        12321
//       1234321
//      123454321
//     12345654321
//    1234567654321
//   123456787654321
//  12345678987654321
// 1234567890987654321
//  12345678987654321
//   123456787654321
//    1234567654321
//     12345654321
//      123454321
//       1234321
//        12321
//         121
//          1

const size = 10; // размер ромба

// Рисуем верхнюю половину ромба
for (let i = 1; i <= size; i++) {
    let row = '';
    // Добавляем пробелы перед числами
    for (let j = 1; j <= size - i; j++) {
        row += ' ';
    }
    // Добавляем числа в порядке возрастания
    for (let j = 1; j <= i; j++) {
        if (j == 10) {
            row += 0;
        } else {
            row += j;
        }        
    }
    // Добавляем числа в порядке убывания, кроме последнего
    for (let j = i - 1; j >= 1; j--) {
        row += j;
    }
    console.log(row);
}

// Рисуем нижнюю половину ромба
for (let i = size - 1; i >= 1; i--) {
    let row = '';
    // Добавляем пробелы перед числами
    for (let j = 1; j <= size - i; j++) {
        row += ' ';
    }
    // Добавляем числа в порядке возрастания
    for (let j = 1; j <= i; j++) {
        row += j;
    }
    // Добавляем числа в порядке убывания, кроме последнего
    for (let j = i - 1; j >= 1; j--) {
        row += j;
    }
    console.log(row);
}



//================= 2. Нарисуйте елочку =================

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



//================= 3. Нарисуйте треугольник =================

// 1 
// 2 6 
// 3 7 10 
// 4 8 11 13 
// 5 9 12 14 15

// Variant 1 =================

let str = '';
let space = ' ';
let x = 5;
for (let i = 1; i <= x; i++) {
    let num = i;
    for (let j = 1; j <= i; j++) {
        str += num + space;
        num = num + (x - j);
    }
    str += '\n';
}
console.log(str);

// Variant 2 =================

const numRows = 5; // количество строк в таблице
const table = []; // пустой массив для хранения значений таблицы

// заполнение массива table значениями таблицы
for (let i = 0; i < numRows; i++) {
    table[i] = [];
    for (let j = 0; j <= i; j++) {
        table[i][j] = (i + 1) + (j * numRows) - ((j * (j + 1)) / 2);
    }
}

// вывод значений таблицы в консоль
for (let i = 0; i < numRows; i++) {
    console.log(table[i].join(' '));
}



//================= 4. Усовершенствуйте решение задачи про улитку с помощью  наиболее подходящего цикла =================

let dayDistance = 3;
let nightDown = -2;
let distance = 0;
let days = 0;
let wall = 5;

while ((distance += dayDistance) <= wall) {
    days++;
    console.log(` - Current distance at the end of the day for day ${days} is ${distance} meter(s)`);
    if (distance == wall) {
        console.log('Ok');
    } else {
        console.log('Go forward!');
    }
    distance += nightDown;
}



//================= 5. Задача с интервью* =================

/* У вас есть массив с тремя видами скобок, предположим
[ ‘{‘, ‘)’, ‘(‘, ‘)’, ‘)’, ‘}, ‘[‘, ‘]’, ‘)’] . Количество элементов и последовательность может быть разной.
Нужно выяснить, все ли скобки являются парными  в правильной последовательности (открывающая и затем закрывающая). Также, скобки могут быть вложенными, но тем не менее, если последовательность соблюдена, то они считаются парными.

 Пример:
[ ‘)’, ‘{‘, ‘(’, ‘(‘, ‘)’, ‘)’, ‘}, ‘[‘, ‘]’, ‘(‘ ] - у двух нет пары (нарушена последовательность)
[ ‘{‘, ‘(’, ‘(‘, ‘)’, ‘)’, ‘}, ‘[‘, ‘]’ ] - у всех есть пара
[ ‘{‘, ‘(’, ‘(‘, ‘)’, ‘)’, ‘}, ‘[‘, ‘[’, ‘)’ ] - у трех нет пары*/


let arr = ['{', '(', '(', ')', ')', '}', '[', ']', '(', ')', '{'];
let result1 = 0;
let result2 = 0;
let result3 = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '(') {
        result1++;
    } else if (arr[i] === ')') {
        result1--;
    }

    if (arr[i] === '{') {
        result2++;
    } else if (arr[i] === '}') {
        result2--;
    }

    if (arr[i] === '[') {
        result3++;
    } else if (arr[i] === ']') {
        result3--;
    }

    if (result1 < 0 || result2 < 0 || result3 < 0) {
        console.log('Wrong sequance');
        break;
    }
    console.log(result1, result2, result3);
}

if (result1 == 0 && result2 == 0 && result3 == 0) {
    console.log('All equal');
} else if (result1 > 0 || result2 > 0 || result3 > 0) {
    console.log('Not equal');
}



//================= Креативное задание*: =================

//1. Внедрите в свой код про кофе цикл, там, где это может понадобиться. Добавьте комментарии в код с пояснениями изменений, зачем они нужны.

/* 2. Продумайте на будущее план развития своего кода с кофе, где в реальной жизни он мог бы быть использован. Начните создавать мини-документацию к своему проекту. Пропишите требования так, как вы хотели бы их видеть на своем проекте и чтобы посторонний человек мог в них разобраться. Скорее всего, что-то придется добавить или изменить позже.*/

//                      Requirements for Coffee
// When user first come he should see a welcome message
// There are three types of cup sizes
// User should be able to see cup prices for each size before an  order
// There are two recipes at this time, we should able to update code if added new recipe
// Show to a user the name and the  ingredients of each type of coffee before an order
// User should be able to make an order, by choosing cup size and coffee type
// When a choice is made, calculate the price based on cup size. Show steps for the recipe and order price.
// If user is lactose free, remove milk step from the recipe

// declare all variables
let nameCoffee;
let americano = 'Americano';
let flatWhite = 'Flat White';
let beansArabica = 'Arabica ground beans';
let beansEthiopian = 'Ethiopian ground beans';
let smallCup = 'small cup';
let mediumCup = 'medium cup';
let bigCup = 'big cup';
let water;
let hotWater = 'hot water';
let coldWater = 'cold water';
let waterVolume;
let price = 5;

// welcome message
console.log('Welcome to our self-service cafe!\n');
console.log('We have different cup sizes. Please, choose one:');

// show cup sizes and their prices
let sizeCup = [smallCup, mediumCup, bigCup];
for (let i = 0; i < sizeCup.length; i++) {
    if (sizeCup[i] == smallCup) {
        console.log(sizeCup[i] + ' - ' + price + '$');
    } else if (sizeCup[i] == mediumCup) {
        console.log(sizeCup[i] + ' - ' + price * 1.5 + '$');
    } else if (sizeCup[i] == bigCup) {
        console.log(sizeCup[i] + ' - ' + price * 2 + '$');
    } if (i == sizeCup.length - 1) {
        console.log('\n');
    }
}

// show coffee types with ingredients
let americanoIngredients = `${americano}:\n 1 spoon of ${beansArabica} \n ${hotWater} \n milk \n`;
let flatWhiteIngredients = `${flatWhite}:\n 1 spoon of ${beansEthiopian} \n ${coldWater} \n milk \n`;

console.log('We have following coffee types: \n');
let menu = [americanoIngredients, flatWhiteIngredients];

for (let i = 0; i < menu.length; i++) {
    console.log(menu[i]);
}

// make a choice
nameCoffee = flatWhite;
sizeCup = mediumCup;
let spoonCoffee = 'one';
let spoonSugar = 'two';

if (nameCoffee == americano) {
    water = hotWater;
} else {
    water = coldWater;
}

if (sizeCup == smallCup) {
    waterVolume = '150 ml';
    price *= 1;
} else if (sizeCup == mediumCup) {
    waterVolume = '200 ml';
    price *= 1.5;
} else if (sizeCup == bigCup) {
    waterVolume = '300 ml';
    price *= 2;
}

// output for client
let order = `You choosed a ${sizeCup} of ${nameCoffee}.\nFollow the steps:`;
let step1 = ` Take a ${sizeCup}.`;
let step2 = ` Put ${spoonCoffee} spoon(s) of coffee in it.`;
let step3 = ` Pour ${waterVolume} of ${water} in a cup.`;
let step4 = ` Pour ${spoonSugar} spoon(s) of sugar in it.`;
let step5 = ` Pour milk in a cup of coffee.`;
let step6 = ' Stir coffee in a cup with a spoon.';
let orderPrice = `The order price is ${price}$`;
let result = `Enjoy your coffee!`;

// add steps to recipe
let recipe = [step1, step2, step3, step4, step5, step6];
let clientRecipe = '';
let isLactoseFree = false;
for (let i = 0; i < recipe.length; i++) {
    if (isLactoseFree == true && recipe[i] == step5) {
        continue;
    }
    clientRecipe = clientRecipe + (i + 1) + recipe[i] + '\n';
}
console.log(order + '\n' + clientRecipe + '\n' + orderPrice + '\n' + result);
