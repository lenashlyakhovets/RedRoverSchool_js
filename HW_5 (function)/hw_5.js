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

function showWelcomeMessage() {
    console.log('Welcome to our self-service cafe!\n');
    console.log('We have different cup sizes. Please, choose one:\n');
}


function showCupsOptions() {
    let smallCup = 'small cup';
    let mediumCup = 'medium cup';
    let bigCup = 'big cup';
    let price = 5;

    let cupsOptions = [[smallCup, price], [mediumCup, (price * 1.5)], [bigCup, (price * 2)]];

    for (let i = 0; i < cupsOptions.length; i++) {
        console.log(cupsOptions[i][0] + ' - ' + cupsOptions[i][1] + '$;');
        
        if (i == cupsOptions.length - 1) {
            console.log('');
        }
    }
}

function showCoffeeTypesAndIngredients() {
    let americano = 'Americano';
    let flatWhite = 'Flat White';
    let beansArabica = 'Arabica ground beans';
    let beansEthiopian = 'Ethiopian ground beans';
    let hotWater = 'hot water';
    let coldWater = 'cold water';

    let americanoIngredients = `${americano}:\n 1 spoon of ${beansArabica}; \n ${hotWater}; \n milk; \n`;
    let flatWhiteIngredients = `${flatWhite}:\n 1 spoon of ${beansEthiopian}; \n ${coldWater}; \n milk; \n`;

    console.log('We have following coffee types: \n');
    let menu = [americanoIngredients, flatWhiteIngredients];

    for (let i = 0; i < menu.length; i++) {
        console.log(menu[i]);
    }
}

function setWaterForCoffee(coffeeType) {
    if (coffeeType.toLowerCase() == 'Flat White') {
        return water = 'cold water';
    } else {
        return water = 'hot water';
    }
}

function getCupPrice(sizeCup) {
    let price = 5;
    if (sizeCup == 'small') {
        return price;
    } else if (sizeCup == 'medium') {
        return price *= 1.5;
    } else if (sizeCup == 'big') {
        return price *= 2;
    }
}

function showRecipeToClient(sizeCup, coffeeType, isLactoseFree, milk = 'half&half') {    
    let water = setWaterForCoffee(coffeeType);
    let price = getCupPrice(sizeCup)

    let spoonCoffee = 'one';
    let spoonSugar = 'two';

    let order = `You choosed a ${sizeCup} of ${coffeeType.toUpperCase()}.\n \nFollow the steps:`;
    let step1 = `. Take a ${sizeCup}.`;
    let step2 = `. Put ${spoonCoffee} spoon(s) of coffee in it.`;
    let step3 = `. Pour ${water} in a cup.`;
    let step4 = `. Pour ${spoonSugar} spoon(s) of sugar in it.`;
    let step5 = `. Pour ${milk} in a cup of coffee.`;
    let step6 = '. Stir coffee in a cup with a spoon.';
    let orderPrice = `The order price is ${price}$.`;
    let result = `Enjoy your coffee!`;

    // add steps to recipe
    let recipe = [step1, step2, step3, step4, step5, step6];
    let stepNum = 1;
    let clientRecipe = '';    
    for (let i = 0; i < recipe.length; i++) {
        
        if (isLactoseFree == true && recipe[i] == step5) {
            continue;
        }
        clientRecipe = clientRecipe + (stepNum ++) + recipe[i] + '\n';
    }
    console.log(order + '\n' + clientRecipe + '\n' + orderPrice + '\n' + result);    
}

showWelcomeMessage();
showCupsOptions();
showCoffeeTypesAndIngredients();

showRecipeToClient('small', 'latte', false, 'coconut milk');



//================= 2. Калькулятор =================

// Напишите функцию с калькулятором (используйте предыдущий код), в которую, в качестве параметров, передаются три переменные, две - числовые и третья отвечает за знак арифметической операции (*, /, -, +). Проверьте работу функции.
// example:  function calculate(a, b, operator){}

// Variant 1 =================

function calculate(a, b, operator) {
    if (operator == '+') {
        return a + b;
    } else if (operator == '-') {
        return a - b;
    } else if (operator == '*') {
        return a * b;
    } else if (operator == '/') {        
        if (operator == '/' && b === 0) {
            return 'Нельзя делить на ноль!';
        } else {
            return a / b;
        }
    } else {
        return 'Неверный оператор!';
    }    
}
console.log(calculate(0, 1, '-'));



// Variant 2 =================

function calculate(a, b, operator) {
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            if (b === 0) {
                return 'Нельзя делить на ноль!';
            }
            return a / b;
        default:
            return 'Неверный оператор!';
    }
}
console.log(calculate(1, 0, '/'));



// Variant 3 =================

function sum(a, b) {
    return a + b;
}
function substract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    if (b == 0) {
        return 'Division by 0 is not allowed! Enter another number'
    }
    return a / b;
}

function calc(a, b, sign) {
    let result = 0;
    if (isNaN(a) || isNaN(b)) result = 'Please, enter a number!'
    else {
        if (sign == '+') result = sum(a, b);
        else if (sign == '-') result = substract(a, b);
        else if (sign == '*') result = multiply(a, b);
        else if (sign == '/') result = divide(a, b);
        else result = 'Please, enter the right sign!'
    }
    return result;
}

console.log(calc(8, 0, '/'))



//================= 2. Приветствие =================

// Напишите функцию, которая создает и выводит в консоль кастомное приветствие с именем, которое вы передаете в функцию.

// Variant 1 =================

function showMessage(userName) {
    console.log('Hello ' + userName);
}
showMessage('Elena');



// Variant 2 =================

function showMessage(userName) {
    return userName;
}
console.log('Hello ' + showMessage('Elena'));



// Variant 3 =================

function showMessage(userName) {
    return userName = 'Elena';
}
console.log('Hello ' + showMessage());



// Variant 4 =================

function greetCustomer(name) {
    let greetings = `Hi, ${name}! \nWelcome to our self-coffee!\n`
    console.log(greetings);
}
greetCustomer('Elena');



//================= Креативное задание*: =================

// Доработайте свой код с кофе и продумайте бизнес модель для своего кода.
