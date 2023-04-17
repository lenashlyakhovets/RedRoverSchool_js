"use strict";

//================= Заказ проекта:

//                      Requirements for Project
// When user first come he should see a welcome message;
// There are three types of project;
// User should be able to see prices for each project before an order;
// Show to a user the name and the composition of each type of project before an order;
// When a choice is made, calculate the price based on project. Show steps for the client and order price.

// declare all variables
let nameProject;
let redevelopment = 'Redevelopment of the apartment project';
let newHouse = 'New house project';
let entranceGroup = 'Entrance group project';
let part;
let partAS = 'architectural solutions';
let partCD = 'constructive decisions';
let partMP = 'master plan';
let partIP = 'internal plumbing and sewerage';
let partHV = 'heating, ventilation and airconditioning';
let partES = 'electricity supply';
let price;
let priceRedevelopment = 500;                  //may change
let priceNewHouse = 1500;                      //may change
let priceEntranceGroup = 1000;                 //may change

// welcome message
console.log('Welcome to our project department!\n');
console.log('We do different project. Please, choose one:\n');

// show name projects and their prices
nameProject = [redevelopment, newHouse, entranceGroup];
for (let i = 0; i < nameProject.length; i++) {    
    if (nameProject[i] == redevelopment) {
        price = priceRedevelopment;
        console.log(nameProject[i] + ' - ' + price + '$;');        
    } else if (nameProject[i] == newHouse) {
        price = priceNewHouse;
        console.log(nameProject[i] + ' - ' + price + '$;');        
    } else if (nameProject[i] == entranceGroup) {
        price = priceEntranceGroup;
        console.log(nameProject[i] + ' - ' + price + '$;');        
    } if (i == nameProject.length - 1) {
        console.log('');
    }
}

// show project composition
let redevelopmentPart = `${redevelopment}:\n - ${partAS};\n - ${partCD};\n`;
let newHousePart = `${newHouse}:\n - ${partMP};\n - ${partAS};\n - ${partCD};\n - ${partIP};\n - ${partHV};\n - ${partES};\n`;
let entranceGroupPart = `${entranceGroup}:\n - ${partMP};\n - ${partAS};\n - ${partCD};\n`;

console.log('What is included in each project:\n');
part = [redevelopmentPart, newHousePart, entranceGroupPart];

for (let i = 0; i < part.length; i++) {
    console.log(part[i]);
}

// make a choice
nameProject = newHouse;

if (nameProject == redevelopment) {
    price = priceRedevelopment;
} else if (nameProject == newHouse) {
    price = priceNewHouse;
} else if (nameProject == entranceGroup) {
    price = priceEntranceGroup;
}

// output for client
let order = `You choosed ${nameProject}.\n \nFolow the steps:`;
let step1 = '1. Bring all the original data to us.';
let step2 = '2. Conclude a contract with us.';
let step3 = `3. The order price for ${nameProject} is ${price}$.`;

console.log(order + '\n' + step1 + '\n' + step2 + '\n' + step3);