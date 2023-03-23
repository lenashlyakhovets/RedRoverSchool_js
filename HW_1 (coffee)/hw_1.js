"use strict"; 

/* ================= Креативное задание: =================
2.1 Напишите следующую программу:
- У клиента должен быть выбор из двух(или трех) видов кофе ( на ваш выбор).
- Дайте названия вашим видам кофе.
- Установите цену на кофе в зависимости от величины стаканчика( small, medium, big).
- Выведите на экран название, затем рецепт выбранного кофе (используйте переменные для изменения рецепта и названия) и его стоимость (в зависимости от размера стаканчика). 
- Компоненты кофе не влияют на стоимость.
- Используйте подходящую комбинацию условий if, (else if), else для решения задачи. */

// declare all variables
let nameCoffee;
let americano = 'Americano';
let flatWhite = 'Flat White';
let sizeCup;
let smallCup = 'small cup';
let mediumCup = 'medium cup';
let bigCup = 'big cup';
let water;
let hotWater = 'hot water';
let hotMilk = '20 ml hot milk';
let waterVolume;
let price = 5;

// make a choice
nameCoffee = flatWhite;
sizeCup = mediumCup;
let spoonCoffee = 'one';
let spoonSugar = 'two';

// set recipe ingredients
if (nameCoffee == americano) {
  water = hotWater;
} else {
  water = hotWater + ' and ' + hotMilk;
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

// steps for coffee recipe
let order = `You choosed a ${sizeCup} of ${nameCoffee}.\nFollow the steps:\n`;
let step1 = `1. Take a ${sizeCup}.\n`;
let step2 = `2. Put ${spoonCoffee} spoon(s) of coffee in it.\n`;
let step3 = `3. Pour ${waterVolume} of ${water} in a cup.\n`;
let step4 = `4. Pour ${spoonSugar} spoon(s) of sugar in it.\n`;
let step5 = '5. Stir coffee in a cup with a spoon.\n';
let orderPrice = `The order price is ${price}$\n`;
let result = order + step1 + step2 + step3 + step4 + step5 + orderPrice;

console.log(result + `Enjoy delicious ${nameCoffee}!`);