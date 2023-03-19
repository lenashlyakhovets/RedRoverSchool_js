"use strict";

//Tatiana Volk:


//================= Нарисовать ромб с помощью циклов =================

// Variant 1 =================

const lines = 4;
let result = '';

for (let i = 0; i <= lines; i++) {    
    for (let k = 0; k < lines - i; k++) {
        result += " ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
        result += "*";
    }    
    result += "\n";
}

for (let i = lines - 1; i >= 0; i--) {    
    for (let k = 0; k < lines - i; k++) {
        result += " ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
        result += "*";
    }
    result += "\n";
}
console.log(result);

// Variant 2 =================

const lines = 5;
let result = '';

for (let i = 1; i <= lines; i++) {    
    for (let k = 1; k < lines - i + 1; k++) {
        result += " ";
    }
    for (let j = 1; j < 2 * i ; j++) {
        result += "*";
    }    
    result += "\n";
}

for (let i = lines - 1; i > 0; i--) {    
    for (let k = 1; k < lines - i + 1; k++) {
        result += " ";
    }
    for (let j = 1; j < 2 * i; j++) {
        result += "*";
    }
    result += "\n";
}
console.log(result);