"use strict";

//Svetlana Gusachenko:

//================= 1. No Loops 2 - You only need one (codewars) =================

// Variant 1

let arr = [80, 117, 115, 104, 45, 85, 112, 115];
//let arr = ['t', 'e', 's', 't'];
function check(a, x) {
    return a.indexOf(x) >= 0;
};
console.log(check(arr, 85));

// Variant 2

let arr = [80, 117, 115, 104, 45, 85, 112, 115];
//let arr = ['t', 'e', 's', 't'];
function check(a, x) {
    let b = a.indexOf(x);
    console.log(b)
    return b >= 0;
};
console.log(check(arr, 85));

// Variant 3

let arr = [80, 117, 115, 104, 45, 85, 112, 115];
//let arr = ['t', 'e', 's', 't'];
function check(a, x) {
    return a.includes(x);
};
console.log(check(arr, 85));



//================= 2. A wolf in sheep's clothing (codewars) =================

// Variant 1

//let arr = ["wolf", "sheep", "sheep", "sheep", "sheep", "sheep", "sheep"];
let arr = ["sheep", "wolf", "sheep", "sheep", "sheep", "sheep", "sheep"];
//let arr = ["wolf"];

function warnTheSheep(queue) {
    if (queue[queue.length - 1] == 'wolf') {
        return "Pls go away and stop eating my sheep"
    } else {
        let a = queue.length - (queue.indexOf('wolf') + 1);  // 8 - 6 = 2
        return `Oi! Sheep number ${a}! You are about to be eaten by a wolf!`
    }
}
console.log(warnTheSheep(arr));

// Variant 2. Начни искать овцу после индекса волка!!!

//let arr = ["wolf", "sheep", "sheep", "sheep", "sheep", "sheep", "sheep"];
let arr = ["sheep", "wolf", "sheep", "sheep", "sheep", "sheep", "sheep"];
//let arr = ["wolf"];

function warnTheSheep(queue) {
    if (queue.indexOf('wolf') == queue.length - 1)
        return "Pls go away and stop eating my sheep";
    let r = queue.indexOf('sheep', queue.lastIndexOf('wolf'))
    return `Oi! Sheep number ${queue.length - r}! You are about to be eaten by a wolf!`
}
console.log(warnTheSheep(arr));



//================= 3. My head is at the wrong end! =================

// Variant 1

let arr1 = ["tail", "body", "head"]
function fixTheMeerkat(arr) {
    return arr.reverse();
}
console.log(fixTheMeerkat(arr1));

// Variant 2

let arr1 = ["tail", "body", "head", "legs"]
function fixTheMeerkat(arr) {
    //let arrTemp = [];
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].split('').reverse().join('')
        //arrTemp.push(arr[i].split('').reverse().join(''));
    }
    return arr;
}
console.log(fixTheMeerkat(arr1));



//Tatiana Volk:







//Stan P.:
