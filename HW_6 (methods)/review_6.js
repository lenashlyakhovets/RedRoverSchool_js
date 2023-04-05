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

//let arr = ["wolf", "sheep", "sheep", "sheep", "sheep", "sheep", "sheep"];       // <---- мы стоим здесь и считаем справа
let arr = ["sheep", "wolf", "sheep", "sheep", "sheep", "sheep", "sheep"];
//let arr = ["wolf"];

function warnTheSheep(queue) {
    if (queue[queue.length - 1] == 'wolf') {
        return "Pls go away and stop eating my sheep"
    } else {
        let a = queue.length - (queue.indexOf('wolf') + 1);  // 7 - (1 + 1) = 5
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



//================= 3. My head is at the wrong end! (codewars) =================

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



//Stan P.:

let count = 0;
function recursion() {
    //let count = 0;
    count++
    console.log(count)
}
recursion();
recursion();
recursion();

//================= Рекурсия =================

// Variant 1

let count = 0;
function recursion() {    
    count++;
    console.log(count);
    recursion();
}
recursion();

// Variant 2

let count = 0;
function recursion() {    
    count++;
    console.log(count);
    if (count > 50) {
        return;           // Чтобы рекурсия не зациклилась нужно условие!!
    } 
    recursion();
}
recursion();

//================= Факториал =================

// 1! = 1             
// 2! = 1 * 2
// 3! = 1 * 2 * 3 

// Variant 1

function factorial_1(n) {
    let p = 1;
    for (let i = 1; i <= n; i++) {
        p *= i;
    }
    console.log(p);
}

factorial_1(5);

// Variant 2

let result = 1;
function factorial_2(n) {
    if (n == 1) return;
    result *= n;
    factorial_2(n-1);
}

factorial_2(5);
console.log(result);

// Variant 3

function factorial_3(n) {
    return n == 1 ? 1 : n * factorial_3(n-1);
}

console.log(factorial_3(5));

// 3! = 1 * 2 * 3 
// n = 3 -> 3 * factorial(2) -> 3 * 2 -> 6
// n = 2 -> 2 * factorial(1) -> 2 * 1 -> 2
// n = 1 -> 1

// stack:
// factorial(1)
// factorial(2)
// factorial(3)



//================= Последовательность фибоначчи =================

// 0, 1, 1, 2, 3, 5, 8, 13, 21 ...
// 0  1  2  3  4  5  6   7   8

function fib(n) {
    if (n == 0) return 0;
    if (n == 1) return 1;
    return fib(n - 1) + fib(n - 2);
}

console.log(fib(3));

//================= Замыкание =================

(function hello() {
    console.log('Hello');
}) ();




