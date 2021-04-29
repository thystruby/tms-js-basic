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


// const string = 'Hello world';
// const array = string.split('');
// const newArray = array.map((item) => {
//   if(item.toLowerCase() === item) {
//     return `${item.toUpperCase()}`;
//   }
//    return `${item.toLowerCase()}`;
// })
// console.log(newArray.join(''));


/**
 * Задание 2
 * Написать функцию, которая будет принимать 2 аргумента: строку и массив, а далее фильтровать строку и заменять запрещенные слова на конструкцию типа  '[первая буква слова]***'
 * Список запрещенных слов представляет из себя массив вида: ['fuck', 'criminal', 'drugs', 'gun', 'stupid']
 * Пример работы функции: textFilter('I have a gun', ['fuck', 'criminal', 'drugs', 'gun', 'stupid']) => 'I nav a g***'
 * Проверка на запрещенное слово должна быть регистронезависимой
 * P.S. используйте map()
 * P.S.S. Строку необходимо разбить по символу пробела ' ' что бы получить массив слов
*/


// const taboo = ['fuck', 'criminal', 'drugs', 'gun', 'stupid',];
// const phrase = 'Gun I have a fuck drugs Criminal';

// function textFilter(array, string) {
//    const stringArray = string.split(' ');
//    const stringArrayLetter = string.split('');
//    let result;
//    let stringArrayLower = stringArrayLetter.map((item) => {
//       if (item === item.toUpperCase()) {
//          return `${item.toLowerCase()}`;
//       } else {
//          return item;
//       }
//    });
//    stringArrayLower = stringArrayLower.join('').split(' ');
//    for (let i = 0; i < stringArrayLower.length; i++) {
//       if (array.includes(stringArrayLower[i])) {
//          let changed = stringArray[i].split('');
//          changed = `${changed[0]}***`;
//          stringArray[i] = changed;
//          result = stringArray.join(' ');
//       }
//    }
//    console.log(result);
// }
// textFilter(taboo, phrase);


/**
 * Задание 3
 * Необходимо создать массив из 10 элементов. В массиве обязательно должны быть одинаковые значения
 * Напишите код который вернет массив уникальных элементов. Т.е. массив, который не содержит повторных значений
 * Пример: getUniqueElements(["кришна", "кришна", "харе", "харе", 1]) => ["кришна", "харе", 1]
*/


// let set = ['кришна', 'кришна', 1, 'харе', 'кришна', 'кришна', 'харе', 'харе'];

// function result(array) {
//    let newArray = [];
//    let result = [];
//    array.forEach(element => {
//       if (array.filter(item => element === item).length > 1) {
//          newArray.push(element);
//       }
//    });
//    for (let i of newArray) {
//       if (!result.includes(i)) {
//          result.push(i);
//       }
//    }
//    console.log(result);
// }
// result(set);


/**
 * Задание 4
 * Напишите код, который проверит является строка палиндромом (слово, которое с обеих сторон читается одинаково) и вернет true либо false
 * Например 'репер', 'шалаш'
 * Пример: palindrome('репер') => true
*/


// const string = 'шалаш';

// function palindrome(str) {
//    let stringReverseS = str.split('').reverse();
//    let stringReverse = stringReverseS.join('');
//    if(string === stringReverse){
//       console.log('true');
//    } else {
//       console.log('false');
//    }
// }

// palindrome(string);


/**
 * Задание 5
 * Написать функцию которая отсортирует массив пользователей по возрасту сверху вниз
 * Пример: sortByAge([{name: 'Вася', age: 12}, {name: 'Маша', age: 27}, {name: 'Петя', age: 30}]) => [{name: 'Петя', age: 30}, {name: 'Маша', age: 27}, {name: 'Вася', age: 12}]
*/


// const array = [
// {name: 'Вася', age: 12}, 
// {name: 'Петя', age: 30},
// {name: 'Маша', age: 27},
// ]

// function sortByAge(params) {
//    let g = params.sort((a, b) => {return b.age - a.age})
//    console.log(g);
// }
// sortByAge(array);


/**
 * Задание 6
 * Написать функцию, которая будет искать пользователей, у которых возраст больше 18 лет.
 * Пример: getAdult([{name: 'Вася', age: 12}, {name: 'Маша', age: 18}, {name: 'Петя', age: 16}, {name: 'Виктор', age: 40}]) => [{name: 'Маша', age: 18}, {name: 'Виктор', age: 40}]
 * Использовать метод filter/find
*/


// const users = [
//    { name: 'Вася', age: 12 },
//    { name: 'Маша', age: 18 },
//    { name: 'Петя', age: 16 },
//    { name: 'Виктор', age: 40 },
// ]

// function search(user) {
//    let eighteen = user.filter(item => item.age >= 18);
//    console.log(eighteen);
// }
// search(users)


/**
 * Задание 7
 * Написать функцию, которая принимает первым аргументом массив, а вторым любое значение.
 * Функция должна вернуть индекс если такое значение есть в массиве и -1 если его нет.
 * (indexOf, findIndex не использовать)
*/


// const array = ['Hello', 'world', 3];
// const item = 'world';

// function name(arr, itm) {
//    for (let i = 0; i < arr.length; i++) {
//       if (arr[i] === itm) {
//          return i;
//       }
//    }
//    return -1;
// }
// console.log(name(array, item));



/**
 * Задание 8
 * Создать массив из 10 чисел. Необходимо высчитать сумму всех элементов
 * Используем reduce
*/

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let result = array.reduce((prewious, next) => prewious + next);
// console.log(result);

/**
 * Задание 9
 * Напишите код, который преобразовывает и объединяет все элементы массива в одно строковое значение.
 * Элементы массива будут разделены запятой.
 * Получите значения двумя разными способами: с помощью join и reduce
*/


// const array = ['o', 'n', 'l', 'y', 4, 'y', 'o', 'u'];
// let result = array.concat();
// console.log(result.join(''));


/**
 * Задание 10.
 * Написать функцию, которая будет принимать в качестве параметра объект вида {start: Number, end: Number, string: String} и обрезать строку из центра в соответствии со значениями start и end.
 * Например: cropString({start: 5, end: 5, string: 'r47qi8883jshdntkpy' }) => 'r47qi...ntkpy'
*/

// const Obj = {
//    start: 5,
//    end: 5,
//    string: 'r47qi8883jshdntkpy',
// }

// function short(params) {
//    let array = Object.values(params);
//    let [start, end, string] = array;
//    if ((start + end) < string.length) {
//       console.log(`${string.slice(0, start)}...${string.slice(-end)}`);
//    } else {
//       console.log(string);
//    }
// }

// short(Obj);