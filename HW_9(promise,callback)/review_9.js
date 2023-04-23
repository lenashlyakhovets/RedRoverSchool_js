"use strict";

//Svetlana Gusachenko:===============================================
 
//================= 1. Задача =================

// Variant 1
let array = [1, 3, 78, 45, 61, 100, 1, 0];
let sum = array.reduce((acc, currVal) => acc + currVal, 0);
console.log(sum);

// Variant 2
let array = [1, 3, 78, 45, 61, 100, 1, 9];
let sum = array.reduce((acc, currVal) => acc * currVal, 1);
console.log(sum);

// Variant 3
let array = [1, 3, 4];
let sum = array.reduce((acc, currVal, index, array) => acc * currVal + index, 1);
console.log(sum);

// Variant 4
let array = [1, 3, 4];
let sum = array.reduce((acc, currVal, index, array) => acc * currVal + array.indexOf(currVal), 1);
console.log(sum);

// Variant 5
let array = [1, 3, 4];
let sum = array.reduce((acc, currVal, index, array) => acc * currVal + index + array.length, 1);
console.log(sum);

// Variant 6
let array = [1, 4, 4];
let sum = array.reduce((acc, currVal, index, array) => acc + currVal, 0)  /array.length;
console.log(sum);

// Variant 7
let array = [-1, -4, -5, -100, -564, -43, -98];
let maximum1 = array.reduce((acc, currVal, index, array) => Math.max(acc, currVal), -Infinity);
let maximum2 = array.reduce((acc, el) => acc < el ? el : acc)

console.log(maximum1);
console.log(maximum2);



//================= 2. Задача =================

let array = ['spring', 'summer', 'autumn', 'winter'];
let max = array.reduce((acc, currVal, index, array) => acc + ' ' + currVal);
console.log(max);



//================= 3. Задача =================

let array = [[1, 3], [1, 2], [1, 2]];
let max = array.reduce((acc, currVal, index, array) => acc.concat(currVal), []);
console.log(max);


//================= 4. Задача =================

const logss = [
    { action: 'A', userId: 1 },
    { action: 'A', userId: 1 },
    { action: 'A', userId: 2 }, // if ABC return userId
    { action: 'A', userId: 3 },
    { action: 'A', userId: 1 },
    { action: 'B', userId: 1 },
    { action: 'B', userId: 1 },
    { action: 'B', userId: 2 },
    { action: 'B', userId: 3 },
    { action: 'A', userId: 3 },
    { action: 'C', userId: 3 },
    { action: 'C', userId: 2 },
    { action: 'C', userId: 1 },
    { action: 'B', userId: 1 },
    { action: 'C', userId: 1 }
]

//const abc = {1: 'ABC', 2: 'CBA', 3: 'BAC'};
let abc = {};
for (let i = 0; i < logss.length; i++) {
    let key = logss[i].userId;
    if (key in abc) {
        abc[key] += logss[i].action
    } else {
        abc[key] = logss[i].action
    }
}
for (let key in abc) {
    if (abc[key].includes('ABC')) {
        console.log(`User ID = ${key}`);
    }
}
//console.log(abc);





//Stan P.:===========================================================
