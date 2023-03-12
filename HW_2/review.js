"use strict";

//Svetlana Gusachenko:

//Продажа билетов на фильм для разных категорий людей

let kidsTicket, adultsTicket;
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
}

//Tatiana Volk:

/* Напишите программу для расчета стоимости билетов. Для пассажиров старше 18 лет- полная цена, для младенцев младше 2 лет - 10% стоимости, для детей от 2-х до 18ти лет - 50 % стоимости, для пенсионеров старше 65 лет - 60% стоимости */

let passenger;
let passengerInfants = 'Infants';
let passengerKids = 'Kids';
let passengerAdults = 'Adults';
let passengerPensioners = 'Pensioners';
let totalPrice;

let age = 1;
let amountTicket = 1;
let price = 100;

if (age < 2) {
  passenger = passengerInfants;
  totalPrice = amountTicket * (price * 0.1);   
} else if (age < 18) {
  passenger = passengerKids;
  totalPrice = amountTicket * (price*0.5);  
} else if (age < 65) {
  passenger = passengerAdults;
  totalPrice = amountTicket * price;  
} else {
  passenger = passengerPensioners;
  totalPrice = amountTicket * (price * 0.6);  
}

console.log(`Price for ${passenger} will be ${totalPrice} USD`);