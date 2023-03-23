"use strict";

//================= 1. Кофе =================

// Внедрите в свой код с Кофе, как минимум 2 функции и вызовите их в коде.

//                      Requirements for Coffee
// When user first come he should see a welcome message;
// There are three types of cup sizes;
// User should be able to see cup prices for each size before an  order;
// There are two recipes at this time, we should able to update code if added new recipe;
// Show to a user the name and the  ingredients of each type of coffee before an order;
// User should be able to make an order, by choosing cup size and coffee type;
// When a choice is made, calculate the price based on cup size. Show steps for the recipe and order price;
// If user is lactose free, remove milk step from the recipe;
// Details: price, names of coffee, ingredients, cup sizes, recipe, welcome message details or text, final message,do we have confirm option, payment method, how to calc price, business type, recipe for lactose free option, what milk choice do we have?, sugar Is or Not

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
console.log('We have different cup sizes. Please, choose one:\n');

// show cup sizes and their prices
let sizeCup = [smallCup, mediumCup, bigCup];
for (let i = 0; i < sizeCup.length; i++) {
    if (sizeCup[i] == smallCup) {
        console.log(sizeCup[i] + ' - ' + price + '$;');
    } else if (sizeCup[i] == mediumCup) {
        console.log(sizeCup[i] + ' - ' + price * 1.5 + '$;');
    } else if (sizeCup[i] == bigCup) {
        console.log(sizeCup[i] + ' - ' + price * 2 + '$;');
    } if (i == sizeCup.length - 1) {
        console.log('');
    }
}

// show coffee types with ingredients
let americanoIngredients = `${americano}:\n 1 spoon of ${beansArabica}; \n ${hotWater}; \n milk; \n`;
let flatWhiteIngredients = `${flatWhite}:\n 1 spoon of ${beansEthiopian}; \n ${coldWater}; \n milk; \n`;

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
let order = `You choosed a ${sizeCup} of ${nameCoffee}.\n \nFollow the steps:`;
let step1 = `. Take a ${sizeCup}.`;
let step2 = `. Put ${spoonCoffee} spoon(s) of coffee in it.`;
let step3 = `. Pour ${waterVolume} of ${water} in a cup.`;
let step4 = `. Pour ${spoonSugar} spoon(s) of sugar in it.`;
let step5 = `. Pour milk in a cup of coffee.`;
let step6 = '. Stir coffee in a cup with a spoon.';
let orderPrice = `The order price is ${price}$.`;
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



//================= 2. Калькулятор =================

// Напишите функцию с калькулятором (используйте предыдущий код), в которую, в качестве параметров, передаются три переменные, две - числовые и третья отвечает за знак арифметической операции (*, /, -, +). Проверьте работу функции.
// example:  function calculate(a, b, operator){}

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



//================= 2. Приветствие =================

// Напишите функцию, которая создает и выводит в консоль кастомное приветствие с именем, которое вы передаете в функцию.





//================= Креативное задание*: =================

// Доработайте свой код с кофе и продумайте бизнес модель для своего кода.
