"use strict";

//================= 1. Задача =================

// Создайте объект,
// где будет храниться информация по сэндвичу и выведите ее в консоль( начинка, цена, хлеб, сыр …). Подумайте, возможно ли хранить данные на все виды сэндвичей в одном объекте или в разных, что более удобно в дальнейшем использовании.
// Проверьте оба файла; 
// с кофе и сэндвичем на наличие в обоих файлах функций. Они нам понадобятся для следующего урока

//variant 1
const turkeySandwich = {
    name: 'sandwich with turkey',
    bread: 'black',
    cheese: 'swiss',
    topping: 'turkey',
}
const pepperoniSandwich = {
    name: 'sandwich with pepperoni',
    bread: 'white',
    cheese: 'mozarella',
    topping: 'pepperoni',
}
const salmonSandwich = {
    name: 'sandwich with salmon',
    bread: 'whole weat',
    cheese: 'cheddar',
    topping: 'salmon',
}

const sandwichNames = {
    salmon : 'sandwich with salmon',
    turkey : 'sandwich with turkey',
    pepperoni : 'sandwich with pepperoni',
}

function showSandwichIngridients(topping) {
    console.log(`Ingredients for you ${sandwichNames[topping]}\n`)
    if (topping == 'salmon') {
        for (let el in salmonSandwich) {
            if (el == 'name') continue;
            console.log(el + ' : ' + salmonSandwich[el])
        }
    } else if (topping == 'pepperoni') {
        for (let el in pepperoniSandwich) {
            if (el == 'name') continue;
            console.log(el + ' : ' + pepperoniSandwich[el])
        }
    } else if (topping == 'turkey') {
        for (let el in turkeySandwich) {
            if (el == 'name') continue;
            console.log(el + ' : ' + turkeySandwich[el])
        }
    }
}




//================= 2. Задача =================

// Проверьте оба файла; 
// с кофе и сэндвичем на наличие в обоих файлах функций. Они нам понадобятся для следующего урока




