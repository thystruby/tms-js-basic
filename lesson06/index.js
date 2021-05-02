'use strict';
/** 
 * Домашнее задание к занятию 6.
 * Код решения должен быть сразу же после описания задания.
 * Что бы у вас не выполнялся код всех заданий сразу перед тем, как приступить к следующему, предыдущее решение надо закомментировать.
*/

/**
 * Задание 1
 * Написать функцию, которая принимает произвольное количество параметров и возвращает сумму числовых элементов
 * Пример: sumNumbers(1, 2, 3, 4, 'string', false, undefined, 5) => 15
*/


// const sumNumbers =(...args) => {
//     let sum = 0;
//     args.forEach((element) => {
//         if (!Number.isNaN(Number(element))) {
//             sum += element;
//         }
//     })
//     return sum;
// }


// console.log (sumNumbers(1, 2, 3, 4, 'string', false, undefined, 5))

/**
 * Задание 2
 * Сделать функцию, которая вычисляет разность между двумя числами и вернет разность.
 * Выполнить используя замыкание + каррирование, результат должен выглядеть примерно так
 * Пример: substract(a)(b) // a - b

*/

// function subtract(a) {

//     return function(b) {
//       return a - b; 
//     };
//   }
//   console.log( subtract(1)(2) ); 
//   console.log( subtract(5)(-1) ); 


/**
 * Задание 3
 * Создайте замыкание: функция makePassword получает пароль в аргументе и возвращает
 * внутреннюю функцию, которая принимает введенную строку и возвращает булево значение true,
 * если введенная строка совпадает с паролем и false – если не совпадает.
 * Пример выполнения функции:
 * let checkPassword = makePassword('somePassword'); //задаем пороль
 *
 * checkPassword('password') // возвращает false
 * checkPassword('somePassword')
*/

// function makePassword(password) {

//     return function(enter) {
//       if (password === enter) {
//           return true;
//       }
//       else {
//           return false;
//       }
//     };
//   }
//   console.log( makePassword('pass')('pass')); 



/**

 * Задание 4
 * Написать функцию, которая из любой фразы сделает вернет ее абревиатуру.
 * 'Республика беларусь' -> 'РБ'
 * 'Минск' -> 'М'
*/
// const getAbbreviation = (args) => {
//     let abbreviation='';
//     let transformedArgs = args.split(' ');
//     transformedArgs.forEach(el =>{
//         abbreviation+= el[0].toUpperCase();
//     })
//     return abbreviation;
// }

// console.log(getAbbreviation('united states america'));
/**
 * Задание 5
 * Сделайте функцию-конструктор с 2-я методами и которая принимает в качестве аргумента объект {from: Number, to: Number} 
 * При вызове метода generate() каждый вызов будет генерировать случайное числа от 'from' до 'to' и класть в массив. Число округлять до 3-х знаков после запятой 
 * Добавьте внутренний метод get(), который будет возвращать массив уже сгенерированных уникальных чисел
 * Добавьте метод clear() для отчистки массива
 * Все данные должны храниться внутри функции-конструктора.
*/


// const range = {
//     from : 1,
//     to: 10,
//  }

// function CheckNumbers(range) {
//     this.range = range;
//     let arr = [];
  
//     this.generate = function() {
//       arr.push((Math.random() * (this.range.to - this.range.from) + this.range.from).toFixed(3))
//     };

//    this.get = function() {
//        return arr
//    }
    
//    this.clear = function() {
//         arr.splice(0, arr.length);
//    }
  
// };

//   let rangeTwo = new CheckNumbers(range);
  
  
//   rangeTwo.generate()
//   rangeTwo.generate()
//   console.log (rangeTwo.get())
//   rangeTwo.clear()
//   console.log (rangeTwo.get())



/**
 * Задание 6
 * Написать функцию сравнения двух массивов, которая возвращает true или false в зависимости от того, одинаковые у них элементы или нет.
*/

// const arrOne = [ 2, 4, 6, 7, 8];
// const arrTwo = [ 2, 4, 6, 7, 8];

// const compareArrs = () => {
//     if( arrOne.join() === arrTwo.join()) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }

// console.log (compareArrs())


/**
 * Задание 7
 * Написать функцию, которая будет возвращать количество вызовов этой функции в квадрате.
 * (Использовать замыкание)
*/

// function makeCounter() {
//     let currentCount = 1;
    
//     return function() { 
//       return Math.pow(currentCount++, 2);
//     };
//   }
  
//   const counter = makeCounter(); 
  
// counter ()
// counter ()
// console.log(counter())
