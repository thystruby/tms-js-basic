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
 
// function changeRegister(str) {
// let newStr = "";
// const strLength = str.length;
//   for (let i = 0; i < strLength; i++) {
//     if (str[i] === str[i].toLowerCase()) {
//         newStr += str[i].toUpperCase();
//     } else {
//         newStr += str[i].toLowerCase();
//     }
//   }
//   return newStr;
// }

// console.log (changeRegister(str))

/**
 * Задание 2
 * Написать функцию, которая будет принимать 2 аргумента: строку и массив, а далее фильтровать строку и заменять запрещенные слова на конструкцию типа  '[первая буква слова]***'
 * Список запрещенных слов представляет из себя массив вида: ['fuck', 'criminal', 'drugs', 'gun', 'stupid']
 * Пример работы функции: textFilter('I have a gun', ['fuck', 'criminal', 'drugs', 'gun', 'stupid']) => 'I nav a g***'
 * Проверка на запрещенное слово должна быть регистронезависимой
 * P.S. используйте map()
 * P.S.S. Строку необходимо разбить по символу пробела ' ' что бы получить массив слов
*/


// const forbidenWords = (str, array) => {
//     let str_arry = str.split(' ').filter((el) => el !== '');
//     str_arry = str_arry.map((elementOfString, index) => {
//       if (array.indexOf(elementOfString.toLowerCase()) !== -1) {
//         str_arry[index] = `${elementOfString[0]}***`;
//       }
//       return str_arry[index];
//     });

//     return str_arry.join(' ');
//   };

//   console.log(
//     forbidenWords(
//       'I have       a gun',
//       [
//         'fuck',
//         'criminal',
//         'drugs',
//         'gun',
//         'stupid',
//         'motherFucker',
//         'shit',
//         'nigga',
//       ],
//     ),
//   );


/**
 * Задание 3
 * Необходимо создать массив из 10 элементов. В массиве обязательно должны быть одинаковые значения
 * Напишите код который вернет массив повторяющихся элементов. Т.е. элементов, которые встречаются в изначальном массиве более одного раза
 * Пример: getRepeatingElements(["кришна", "кришна", "харе", "харе", 1]) => ["кришна", "харе"]
*/

const arr = ["кришна", "кришна", "харе", "харе", 1, 10, "шива" , "шива" , "шива" , "шамбо" ];

function unique() {
    let result = [];
  
    for (let str of arr) {
      if (!result.includes(str)) {
        result.push(str);
      }
    }
  
    return result;
  }

  console.log (unique())



/**
 * Задание 4
 * Напишите код, который проверит является строка палиндромом (слово, которое с обеих сторон читается одинаково) и вернет true либо false
 * Например 'репер', 'шалаш'
 * Пример: palindrome('репер') => true
*/

// const word = 'репер';
// function isPalindrome(str) {
//     let strLength = str.length;
//     for (let i = 0; i < strLength; i++) {
//       if (str[i] === str[strLength - 1 - i]) {
//         return true;
//       } else {
//         return false
//       }
//     }
// };

//   console.log(`palindrome "${word}" => ` + isPalindrome(word))

/**
 * Задание 5
 * Написать функцию которая отсортирует массив пользователей по возрасту сверху вниз
 * Пример: sortByAge([{name: 'Вася', age: 12}, {name: 'Маша', age: 27}, {name: 'Петя', age: 30}]) => [{name: 'Петя', age: 30}, {name: 'Маша', age: 27}, {name: 'Вася', age: 12}]
*/


//     const arr = [
//         {name: 'Вася', age: 12}, 
//         {name: 'Маша', age: 27}, 
//         {name: 'Петя', age: 30}
//         ];


//     const sortByAge = () => {
//         arr.sort((a, b) => a.age > b.age ? -1 : 1)
//         return arr
//     }

//   console.log (sortByAge())

 

/**
 * Задание 6
 * Написать функцию, которая будет искать пользователей, у которых возраст больше 18 лет.
 * Пример: getAdult([{name: 'Вася', age: 12}, {name: 'Маша', age: 18}, {name: 'Петя', age: 16}, {name: 'Виктор', age: 40}]) => [{name: 'Маша', age: 18}, {name: 'Виктор', age: 40}]
 * Использовать метод filter/find
*/


//     const arr = [
//         {name: 'Вася', age: 12}, 
//         {name: 'Маша', age: 18}, 
//         {name: 'Петя', age: 20},
//         {name: 'Виктор', age: 40}
//         ];

//     const getAdult = () => {
//         let user = arr.filter(item => item.age > 18)
//         return user
//         }

// console.log (getAdult())


/**
 * Задание 7
 * Написать функцию, которая принимает первым аргументом массив, а вторым любое значение.
 * Функция должна вернуть индекс если такое значение есть в массиве и -1 если его нет.
 * (indexOf, findIndex не использовать)
*/
// const arr = [1, 2, 3, 4 , "lesson" , "task"];

// const testIndex = (arr, a) => {




/**
 * Задание 8
 * Создать массив из 10 чисел. Необходимо высчитать сумму всех элементов
 * Используем reduce
*/

// const arr = [1, 2, 3, 4, 13, 15, 19, 134, 110, 333];
// let result = arr.reduce((a, b) => a + b, 0);

// console.log (result)


/**
 * Задание 9
 * Напишите код, который преобразовывает и объединяет все элементы массива в одно строковое значение.
 * Элементы массива будут разделены запятой.
 * Получите значения двумя разными способами: с помощью join и reduce
*/

// const arr = ["first", "second", 1, 2, 3, "third"];
// let str = arr.join(',');
// console.log (str)

// const arr = ["first", "second", 1, 2, 3, "third"];
// let str = arr.reduce((a,b) => ( a + ' , ' + b));
// console.log (str)


/**
 * Задание 10.
 * Написать функцию, которая будет принимать в качестве параметра объект вида {start: Number, end: Number, string: String} и обрезать строку из центра в соответствии со значениями start и end.
 * Например: cropString({start: 5, end: 5, string: 'r47qi8883jshdntkpy' }) => 'r47qi...ntkpy'
*/
