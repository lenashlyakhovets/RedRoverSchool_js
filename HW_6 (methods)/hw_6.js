"use strict";

//================= 1. Задача про Палиндром =================

// Палиндром — слово, предложение или последовательность символов, которая абсолютно одинаково читается как в привычном направлении, так и в обратном. К примеру, “Anna” — это палиндром, а “table” и “John” — нет.
// Дана строка; нужно написать функцию, которая позволяет вернуть значение true, если строка является палиндромом, и false — если нет. При этом нужно учитывать пробелы и знаки препинания.

// Variant 1

function checkPalindrom(word) {
  let newWord = word.split('', ' ', ',').reverse().join('');
  word = word.split('', ' ', ',').join('');
  if (word == newWord) {
    console.log('This is palindrome');
  } else {
    console.log('false');
  }
}
checkPalindrom('Anna');

// Variant 2

function isPalindrome(str) {
    // удаляем все символы, кроме букв и цифр, и приводим к нижнему регистру
    str = str.toLowerCase().replace(/[^a-z0-9]+/g, '');

    // разворачиваем строку и сравниваем с исходной
    return str === str.split('').reverse().join('');
}
  
console.log(isPalindrome('Anna')); // true
console.log(isPalindrome('table')); // false
console.log(isPalindrome('A man a plan a canal Panama')); // true
console.log(isPalindrome('Was it a car or a cat I saw?')); // true



//================= 2. Задача с интервью* =================

/* У вас есть массив с тремя видами скобок, предположим
[ ‘{‘, ‘)’, ‘(‘, ‘)’, ‘)’, ‘}, ‘[‘, ‘]’, ‘)’] . Количество элементов и последовательность может быть разной.
Нужно выяснить, все ли скобки являются парными  в правильной последовательности (открывающая и затем закрывающая). Также, скобки могут быть вложенными, но тем не менее, если последовательность соблюдена, то они считаются парными.

 Пример:
[ ‘)’, ‘{‘, ‘(’, ‘(‘, ‘)’, ‘)’, ‘}, ‘[‘, ‘]’, ‘(‘ ] - у двух нет пары (нарушена последовательность)
[ ‘{‘, ‘(’, ‘(‘, ‘)’, ‘)’, ‘}, ‘[‘, ‘]’ ] - у всех есть пара
[ ‘{‘, ‘(’, ‘(‘, ‘)’, ‘)’, ‘}, ‘[‘, ‘[’, ‘)’ ] - у трех нет пары*/

function areBracketsPaired(str) {
    const stack = [];
    const brackets = {
      "(": ")",
      "[": "]",
      "{": "}"
    };
    
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      if (brackets[char]) {
        stack.push(char);
      } else if (char === ")" || char === "]" || char === "}") {
        const lastBracket = stack.pop();
        if (brackets[lastBracket] !== char) {
          return false;
        }
      }
    }
    
    return stack.length === 0;
  }
  
  // Пример использования:
  console.log(areBracketsPaired("{ [ ] ( ) }")); // true
  console.log(areBracketsPaired("{ [ ( ] ) }")); // false





//================= 3. Кофе =================