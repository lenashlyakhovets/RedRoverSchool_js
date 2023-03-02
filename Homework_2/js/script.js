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

let num1 = 8;
let num2 = 4;
let operator = "-";

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

let height = 5;        // 0+3-2=1  1+3-2=2  2+3-2=3   3+3-2=4  4+3-2=5       
let dayUp = 3;          // let x = x + 1        
let nightDown = 2;      //     
let day = 1;
let step = dayUp - nightDown;

if ( ) {

}
    day = day + step;
    console.log('done');
else {
    console.log('not finish');
}


// Креативное задание:
// 2.1 Напишите следующую программу:
// - У клиента должен быть выбор из двух(или трех) видов кофе ( на ваш выбор).
// - Дайте названия вашим видам кофе.
// - Установите цену на кофе в зависимости от величины стаканчика( small, medium, big).
// - Выведите на экран название, затем рецепт выбранного кофе (используйте переменные для изменения рецепта и названия) и его стоимость (в зависимости от размера стаканчика). 
// - Компоненты кофе не влияют на стоимость.
// - Используйте подходящую комбинацию условий if, (else if), else для решения задачи.
// 2.2 Нарисуйте блок-схему вашей программы (так проще будет написать саму программу).
// Можете использовать следующий сайт https://miro.com/app/board или от руки



// // 4_Креативное задание

// // data (данные для кофе):                               

// let cup = 'one';
// let coffee = 'two';
// let water = 'hot water';
// let sugar = 'one';

// // task (задачи):                               

// const step1 = `1. Take ${cup} cup.`;
// const step2 = `2. Put ${coffee} spoon(s) of coffee.`;
// const step3 = `3. Pour some ${water}.`;
// const step4 = `4. Put ${sugar} spoon(s) of sugar.`;
// const result = `Enjoy delicious coffee!`;
 
// document.write(step1, '<br>', step2, '<br>', step3, '<br>', step4, '<br>', result);