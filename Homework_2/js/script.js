"use strict"; 

// 1.1 Напишите программу по согласованию отпуска в зависимости от месяца. Если месяц “July” или “August”, то программа должна показать - ‘approved’, если другие месяцы, то - “denied”.

let month = 'May';

if (month == 'July' || month == 'August') {
    console.log('approved');
} else {
    console.log('denied');
}

// 1.2 Напишите простенький калькулятор (*, /, +, -). Проверьте ваш код на охват исключений для арифметических операций.
// У вас должны быть две переменные для исходных чисел и одна для оператора. В зависимости от оператора, должно происходить то или иное арифметическое действие и выводиться результат в консоль.

let num1 = +prompt("Введите первое число");
let operator = prompt("Введите оператор");
let num2 = +prompt("Введите второе число");

if (operator == "/" && num2 != 0) {
    let result = num1 / num2;
    console.log(result);
} else if (operator == "*") {
    let result = num1 * num2;
    console.log(result);
} else if (operator == "+") {
    let result = +(num1 + num2);
    console.log(result);
} else if (operator == "-") {
    let result = num1 - num2;
    console.log(result);
} else if (operator == "/" && num2 == 0) {    
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

// Креативное задание:
// 2.1 Напишите следующую программу:
// - У клиента должен быть выбор из двух(или трех) видов кофе ( на ваш выбор).
// - Дайте названия вашим видам кофе.
// - Установите цену на кофе в зависимости от величины стаканчика( small, medium, big).
// - Выведите на экран название, затем рецепт выбранного кофе (используйте переменные для изменения рецепта и названия) и его стоимость (в зависимости от размера стаканчика). 
// - Компоненты кофе не влияют на стоимость.
// - Используйте подходящую комбинацию условий if, (else if), else для решения задачи.

let cup = 'small';
let coffee = 'two';
let water = 'hot water';
let sugar = 'one';

let nameCoffee = prompt("Какое кофе Вы хотите?");
const step1 = `1. Take ${cup} cup of ${nameCoffee}.`;
if (cup == 'small') {
    console.log('Стоимость кофе 2 рубля.');
} else if (cup == 'medium') {
    console.log('Стоимость кофе 4 рубля.');
} else if (cup == 'big') {
    console.log('Стоимость кофе 6 рубля.');
}





const step2 = `2. Put ${coffee} spoon(s) of coffee.`;
const step3 = `3. Pour some ${water}.`;
const step4 = `4. Put ${sugar} spoon(s) of sugar.`;
const result = `Enjoy delicious coffee!`;
 
document.write(step1, '<br>', step2, '<br>', step3, '<br>', step4, '<br>', result);