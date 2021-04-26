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

// const str = "Hello world";
// function changeCase(str) {
//     const a = str.length;
//     let str2 = "";
//     for (let i = 0; i < a; i++) {
//         if (str[i] === str[i].toLowerCase()) {
//             str2 += str[i].toUpperCase();
//         } else {
//             str2 += str[i].toLowerCase();
//         }
//     }
//     return str2;
// }

// console.log(changeCase(str))


/**
 * Задание 2
 * Написать функцию, которая будет принимать 2 аргумента: строку и массив, а далее фильтровать строку и заменять запрещенные слова на конструкцию типа  '[первая буква слова]***'
 * Список запрещенных слов представляет из себя массив вида: ['fuck', 'criminal', 'drugs', 'gun', 'stupid']
 * Пример работы функции: textFilter('I have a gun', ['fuck', 'criminal', 'drugs', 'gun', 'stupid']) => 'I nav a g***'
 * Проверка на запрещенное слово должна быть регистронезависимой
 * P.S. используйте map()
 * P.S.S. Строку необходимо разбить по символу пробела ' ' что бы получить массив слов
*/
// let arr = ['fuck', 'criminal', 'drugs', 'gun', 'stupid'];
// let str = 'i have a gun';
// let arr2 = str.split(' ');
// function textFilter(arr, str) {

// }
// Пока нет, буду пробовать еще.

/**
 * Задание 3
 * Необходимо создать массив из 10 элементов. В массиве обязательно должны быть одинаковые значения
 * Напишите код который вернет массив повторяющихся элементов. Т.е. элементов, которые встречаются в изначальном массиве более одного раза
 * Пример: getRepeatingElements(["кришна", "кришна", "харе", "харе", 1]) => ["кришна", "харе"]
*/

// const repItem = ['hello', 'apple', 'bird', 'apple', 'orange']
// let repItem2 = [];
// const repeatIrem = repItem.slice().sort()
// for (let i = 0; i < repeatIrem.length; i++) {
//     if (repeatIrem[i + 1] === repeatIrem[i]) {
//         repItem2.push(repeatIrem[i])
//     }
// }
// console.log(repItem2)


/**
 * Задание 4
 * Напишите код, который проверит является строка палиндромом (слово, которое с обеих сторон читается одинаково) и вернет true либо false
 * Например 'репер', 'шалаш'
 * Пример: palindrome('репер') => true
*/
// function palindrome(str) {
//     return str === str.split('').reverse().join('');
// }
// console.log(palindrome('шалаш'));

/**
 * Задание 5
 * Написать функцию которая отсортирует массив пользователей по возрасту сверху вниз
 * Пример: sortByAge([{name: 'Вася', age: 12}, {name: 'Маша', age: 27}, {name: 'Петя', age: 30}]) => [{name: 'Петя', age: 30}, {name: 'Маша', age: 27}, {name: 'Вася', age: 12}]
*/
// let sortByAge = [
//     { name: 'Вася', age: 12 },
//     { name: 'Маша', age: 27 },
//     { name: 'Петя', age: 30 },
// ]
// sortByAge.sort((prev, next) => next.age - prev.age);

// console.log(sortByAge);


/**
 * Задание 6
 * Написать функцию, которая будет искать пользователей, у которых возраст больше 18 лет.
 * Пример: getAdult([{name: 'Вася', age: 12}, {name: 'Маша', age: 18}, {name: 'Петя', age: 16}, {name: 'Виктор', age: 40}]) => [{name: 'Маша', age: 18}, {name: 'Виктор', age: 40}]
 * Использовать метод filter/find
*/
// let getAdult = [
//     { name: 'Вася', age: 20 },
//     { name: 'Маша', age: 18 },
//     { name: 'Петя', age: 16 },
//     { name: 'Виктор', age: 40 },
// ];
// let getAdultCheckAge = getAdult.filter(item => item.age > 18);
// console.log(getAdultCheckAge);


/**
 * Задание 7
 * Написать функцию, которая принимает первым аргументом массив, а вторым любое значение.
 * Функция должна вернуть индекс если такое значение есть в массиве и -1 если его нет.
 * (indexOf, findIndex не использовать)
*/
// const array = [1, 2, 3, 4, 5, 6]
// function indexOfItem(array, a = 1) {

// }
// console.log(indexOfItem());
// Пока нет, буду пробовать еще.
/**
 * Задание 8
 * Создать массив из 10 чисел. Необходимо высчитать сумму всех элементов
 * Используем reduce
*/
// const sum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let result = sum.reduce(function (x, y) { return x + y }, 0);
// console.log(result)


/**
 * Задание 9
 * Напишите код, который преобразовывает и объединяет все элементы массива в одно строковое значение.
 * Элементы массива будут разделены запятой.
 * Получите значения двумя разными способами: с помощью join и reduce
*/

// JOIN

// const numbers = [1, 2, 3, 'hello', 4, 5,];
// let str = numbers.join(',');
// console.log(str);


// REDUCE

// const arr = [1, 2, 3, 'hello', 4, 5,];
// const str = arr.reduce((total, current, index, array) => {
//     current = current + ',';
//     total += current;
//     return total;
// }, '')
// console.log(str);

/**
 * Задание 10.
 * Написать функцию, которая будет принимать в качестве параметра объект вида {start: Number, end: Number, string: String} и обрезать строку из центра в соответствии со значениями start и end.
 * Например: cropString({start: 5, end: 5, string: 'r47qi8883jshdntkpy' }) => 'r47qi...ntkpy'
*/
// Пока нет, буду пробовать еще.
