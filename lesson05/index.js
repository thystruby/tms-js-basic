'use strict';
/** 
 * Домашнее задание к занятию 5.
 * Код решения должен быть сразу же после описания задания.
 * Что бы у вас не выполнялся код всех заданий сразу перед тем, как приступить к следующему, предыдущее решение надо закомментировать.
 */


/**
 * Задание 1
 * Написать код, который заменит регистр каждого символа на противоположный
 * Например 'Hello world' -> 'hELLO WORLD'
 */
//готово 
/*
const str = 'Hello World';
const arr = str.split('');
const newArr = arr.map((item, index) => {
  if(item.toUpperCase() === item) {    
  return item.toLowerCase();
} else { 
    return item.toUpperCase()
}});
console.log(newArr.join(''));
*/

/**
 * Задание 2
 * Написать функцию, которая будет принимать 2 аргумента: строку и массив, а далее фильтровать строку и заменять запрещенные слова на конструкцию типа  '[первая буква слова]***'
 * Список запрещенных слов представляет из себя массив вида: ['fuck', 'criminal', 'drugs', 'gun', 'stupid']
 * Пример работы функции: textFilter('I have a gun', ['fuck', 'criminal', 'drugs', 'gun', 'stupid']) => 'I nav a g***'
 * Проверка на запрещенное слово должна быть регистронезависимой
 * P.S. используйте map()
 * P.S.S. Строку необходимо разбить по символу пробела ' ' что бы получить массив слов
 */

//готово
/*
function textFilter(str, wrongWords) {
  const strArray = str.split(' ');

  const newstring = strArray.map((item) => {
    if(wrongWords.includes(item)) {
      return `${item[0]}***`
    }
    return item;
  }).join(" ");
  return newstring;
}
console.log(textFilter("I LOVE drugs", ['fuck', 'criminal', 'drugs', 'gun', 'stupid']));
*/

/**
 * Задание 3
 * Необходимо создать массив из 10 элементов. В массиве обязательно должны быть одинаковые значения
 * Напишите код который вернет массив повторяющихся элементов. Т.е. элементов, которые встречаются в изначальном массиве более одного раза
 * Пример: getRepeatingElements(["кришна", "кришна", "харе", "харе", 1]) => ["кришна", "харе"]
 */


/*
let getRepeatingElements = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", 1];

 let RepeatingElements = [];

 const repeatingItem = getRepeatingElements.slice().sort();

    for (let i = 0; i < repeatingItem.length; i++) {
    if (repeatingItem[i] === repeatingItem[i + 1]) {
      RepeatingElements.push(repeatingItem[i]);
  };
    };

  console.log(RepeatingElements);
*/

/*Задание 3new
 * Необходимо создать массив из 10 элементов. В массиве обязательно должны быть одинаковые значения
 * Напишите код который вернет массив уникальных элементов. Т.е. массив, который не содержит повторных значений
 * Пример: getUniqueElements(["кришна", "кришна", "харе", "харе", 1]) => ["кришна", "харе", 1]
 */

//готово
/*
let getRepeatingElements = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", 1
];

let noRepeatingElements = [...new Set(getRepeatingElements)];

console.log(noRepeatingElements);
*/

/**
 * Задание 4
 * Напишите код, который проверит является строка палиндромом (слово, которое с обеих сторон читается одинаково) и вернет true либо false
 * Например 'репер', 'шалаш'
 * Пример: palindrome('репер') => true
 */

//готово 
/*
function isPalindrome(string) {
  let reverseString = string.split('').reverse().join('');
if (reverseString == string) {
    console.log(`"${reverseString}" is a palindrome"`); 
} else { 
  console.log("not");
};
};
isPalindrome('шалаш');
*/

/**
 * Задание 5
 * Написать функцию которая отсортирует массив пользователей по возрасту сверху вниз
 * Пример: sortByAge([{name: 'Вася', age: 12}, {name: 'Маша', age: 27}, {name: 'Петя', age: 30}]) => [{name: 'Петя', age: 30}, {name: 'Маша', age: 27}, {name: 'Вася', age: 12}]
 */
//готово
/*
let users = [{name: 'Вася', age: 12}, {name: 'Маша', age: 27}, {name: 'Петя', age: 30}];
function sort(users) {
   (a.age > b.age ? 1 : -1);
};
console.log(users[0].name); 
console.log(users[1].name); 
console.log(users[2].name);
*/

/**
 * Задание 6
 * Написать функцию, которая будет искать пользователей, у которых возраст больше 18 лет.
 * Пример: getAdult([{name: 'Вася', age: 12}, {name: 'Маша', age: 18}, {name: 'Петя', age: 16}, {name: 'Виктор', age: 40}]) => [{name: 'Маша', age: 18}, {name: 'Виктор', age: 40}]
 * Использовать метод filter/find
 */
//готово
//вариант 1
/*
let getAdult = [{name: 'Вася', age: 12}, {name: 'Маша', age: 28}, {name: 'Петя', age: 16}, {name: 'Виктор', age: 40}];
let getAdultChecked = getAdult.find(item => item.age > 18);
console.log(getAdultChecked);
*/
//вариант 2
/*
let getAdult = [{name: 'Вася', age: 12}, {name: 'Маша', age: 28}, {name: 'Петя', age: 16}, {name: 'Виктор', age: 40}];
let getAdultChecked = getAdult.filter(item => item.age > 18);
console.log(getAdultChecked);
*/

/**
 * Задание 7
 * Написать функцию, которая принимает первым аргументом массив, а вторым любое значение.
 * Функция должна вернуть индекс если такое значение есть в массиве и -1 если его нет.
 * (indexOf, findIndex не использовать)
 */
// готово
/*
function getNumber(line, number) {
  for(let i=0; i < line.length; i++)
if(line[i] == number) {
  console.log(line[i]);
} else {
  console.log(-1)
};
};
getNumber([10, 20, 30, 40, 50], 30);
*/

/**
 * Задание 8
 * Создать массив из 10 чисел. Необходимо высчитать сумму всех элементов
 * Используем reduce
 */
//готово 
/*
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = numbers.reduce(function(previousValue, item, index, array) {
    return item + previousValue;    
}); 0;
console.log(sum);
*/

/**
 * Задание 9
 * Напишите код, который преобразовывает и объединяет все элементы массива в одно строковое значение.
 * Элементы массива будут разделены запятой.
 * Получите значения двумя разными способами: с помощью join и reduce
 */
//готово
/*
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let str = numbers.join(',');
console.log(str);
*/
// 

/**
 * Задание 10.
 * Написать функцию, которая будет принимать в качестве параметра объект вида {start: Number, end: Number, string: String} и обрезать строку из центра в соответствии со значениями start и end.
 * Например: cropString({start: 5, end: 5, string: 'r47qi8883jshdntkpy' }) => 'r47qi...ntkpy'
 */
//готово 

const obj = {
  start: 3,
  end: 5,
  string: "r47qi8883jshdntkpy",
}
let newObj = function(objectToCrop) { 
  
const start = objectToCrop.string.slice(0, objectToCrop.start);
const end = objectToCrop.string.slice(-objectToCrop.end);
return start + "..." + end;
}
 
console.log(newObj(obj));