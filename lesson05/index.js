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


// const str = "Hello world"; 

// function changeRegister(str) {
//   let newStr= str.split('');
//   newStr = newStr.map((i, index) => {
//     if (i === str[index].toLowerCase()) {
//         i = str[index].toUpperCase();
//     } else {
//         i = str[index].toLowerCase();
//     }
  
//   return i;
//   });
//   return newStr.join('');
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
//     let strArr = str.split(' ').filter((item) => item !== '');
//     strArr = strArr.map((elementOfString, index) => {
//       if (array.includes(elementOfString.toLowerCase())) {
//         strArr[index] = `${elementOfString[0]}***`;
//       }
//       return strArr[index];
//     });

//     return strArr.join(' ');
//   };

//   console.log(
//     forbidenWords(
//       'I have a gun',
//       ['fuck', 'criminal', 'drugs', 'gun', 'stupid']
//     ),
//   );


/**
 * Задание 3
 * Необходимо создать массив из 10 элементов. В массиве обязательно должны быть одинаковые значения
 * Напишите код который вернет массив уникальных элементов. Т.е. массив, который не содержит повторных значений
 * Пример: getUniqueElements(["кришна", "кришна", "харе", "харе", 1]) => ["кришна", "харе", 1]
*/



// старая версия задания 
// const arr = ["кришна", "кришна", "харе", "харе", 1, 10, "шива" , "шива" , "шива" , "шамбо" ];

// const isDuplicated = (str) => {
//     let resultArr = [];
//     const uniq = str.reduce((a, b) => {
//       a[b] = (a[b] || 0) + 1;
//       return a;
//     }, {});
//     resultArr = Object.keys(uniq).filter((property) => uniq[property] > 1);
//     return resultArr;
//   };
//   console.log(isDuplicated(arr));


// * Задание 3
// * Необходимо создать массив из 10 элементов. В массиве обязательно должны быть одинаковые значения
// * Напишите код который вернет массив уникальных элементов. Т.е. массив, который не содержит повторных значений
// * Пример: getUniqueElements(["кришна", "кришна", "харе", "харе", 1]) => ["кришна", "харе", 1]
// */

// const words = ["кришна", "кришна", "харе", "харе", 1, 10, "шива" , "шива" , "шива" , "шамбо" ];

// const unique = (arr) => {
//   let result = [];
//   arr.forEach(element => {
//           if (arr.filter(item => element === item).length === 1) {
//              result.push(element);
//           }
//   })
//   return result;
// }

// console.log (unique(words))

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


  //   const arr = [
  //       {name: 'Вася', age: 12}, 
  //       {name: 'Маша', age: 27}, 
  //       {name: 'Петя', age: 30}
  //       ];


  //   const sortByAge = (arr) => {
  //       arr.sort((a, b) => a.age > b.age ? -1 : 1)
  //       return arr
  //   }

  // console.log (sortByAge(arr))

 

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

//     const getAdult = (arr) => {
//         let user = arr.filter(item => item.age > 18)
//         return user
//         }

// console.log (getAdult(arr))


/**
 * Задание 7
 * Написать функцию, которая принимает первым аргументом массив, а вторым любое значение.
 * Функция должна вернуть индекс если такое значение есть в массиве и -1 если его нет.
 * (indexOf, findIndex не использовать)
*/

// const arr = [1, 2, 3, 4 , "lesson" , "task"];


//     function getNumber(arr,a) {
//         for(let i=0; i < arr.length; i++) {
//           if(arr[i] === a) {
//             return i;
//           }
//         }
//         return -1
//     }
    
// console.log(getNumber(arr, 2))

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


// const obj = {
//     start: 2,
//     end: 7,
//     string: 'профессионал',
//   };

//   const cropString = (obj) => {
//     let str = obj.string.slice(obj.start, obj.end);
//     let result = obj.string.replace(str, '...');

//     if(obj.start + obj.end > obj.string.length){
//       return obj.string;
//     }
//     return result;
//   };

//   console.log(cropString(obj));